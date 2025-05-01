import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { type Prisma, PrismaClient, type ProductVariant } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type {
	CreateProductType,
	DeleteProductManyType,
	Product,
	RequestQueryProductType,
	UpdateProductType,
} from "./productModel";
import { ProductRepository } from "./productRepository";

class ProductService {
	private readonly productRepo: ProductRepository;

	constructor(productRepository = new ProductRepository(new PrismaClient())) {
		this.productRepo = productRepository;
	}

	public getAllProducts = async (query: RequestQueryProductType) => {
		try {
			const { page = 1, limit = 10 } = query;
			const skip = (page - 1) * limit;

			const [products, total] = await Promise.all([
				this.productRepo.client.product.findMany({
					skip,
					take: limit,
					include: {
						category: true,
						productVariants: {
							include: {
								productPrices: true,
								ProductWholesaler: true,
							},
						},
					},
				}),
				this.productRepo.client.product.count(),
			]);

			const response: PaginatedResponse<Product> = {
				data: products as unknown as Product[],
				meta: {
					currentPage: page,
					totalPages: Math.ceil(total / limit),
					totalItems: total,
				},
			};

			return ServiceResponse.success("Products retrieved successfully.", response, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get all products: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all products.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public getDetailProduct = async (productId: string) => {
		try {
			const foundProduct = await this.productRepo.client.product.findUnique({
				where: { id: productId },
				include: {
					category: true,
					productVariants: {
						include: {
							productPrices: true,
							ProductWholesaler: true,
						},
					},
				},
			});
			if (!foundProduct) {
				return ServiceResponse.failure("Product is not exist.", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Product retrieved successfully.", foundProduct, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get all products: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all products.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public createProduct = async (req: CreateProductType) => {
		// Check if product with the same name already exists
		const foundProduct = await this.productRepo.client.product.findFirst({
			where: {
				name: req.product.name,
			},
		});
		// check if found product
		if (foundProduct) {
			return ServiceResponse.failure("Product already exists", null, StatusCodes.BAD_REQUEST);
		}

		// Validate pricing: purchase price must be less than normal and reseller prices
		const hasInvalidPrice = req.productVariants?.some(({ productPrices }) => {
			const buy = productPrices?.buy;
			const normal = productPrices?.normal;
			const reseller = productPrices?.reseller;
			return (buy && normal && buy >= normal) || (buy && reseller && buy > reseller);
		});

		if (hasInvalidPrice) {
			return ServiceResponse.failure(
				"The purchase price cannot be greater than the normal or reseller price.",
				null,
				StatusCodes.BAD_REQUEST,
			);
		}

		try {
			// Use transaction to ensure data consistency across related tables
			return await this.productRepo.client.$transaction(async (tx: Prisma.TransactionClient) => {
				// Prepare product data with category connection
				const createDataProduct: Prisma.ProductCreateInput = {
					...req.product,
					category: req.categoryId ? { connect: { id: req.categoryId } } : undefined,
				};

				// Create the main product record
				const newProduct = await tx.product.create({
					data: createDataProduct,
				});

				// Create all product variants in parallel for better performance
				await Promise.all(
					req.productVariants.map(async (variant) => {
						const { productWholesalers, productPrices, ...rest } = variant;
						return tx.productVariant.create({
							data: {
								...rest,
								product: {
									connect: {
										id: newProduct.id,
									},
								},
								// Create related pricing information
								productPrices: {
									create: productPrices ?? undefined,
								},
								// Create wholesaler pricing if provided
								ProductWholesaler: variant.productWholesalers?.length
									? {
											create: productWholesalers,
										}
									: undefined,
							},
						});
					}),
				);

				return ServiceResponse.success("Product created successfully.", null, StatusCodes.CREATED);
			});
		} catch (ex) {
			const errorMessage = `Error creating product: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while creating product.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public updateProduct = async (req: UpdateProductType, productId: string) => {
		try {
			// Verify product exists before attempting update
			const existingProduct = await this.productRepo.client.product.findUnique({
				where: { id: productId },
			});

			if (!existingProduct) {
				return ServiceResponse.failure("Product not found", null, StatusCodes.NOT_FOUND);
			}

			// Validate pricing rules for all variants
			const hasInvalidPrice = req.productVariants?.some(({ productPrices }) => {
				const buy = productPrices?.buy;
				const normal = productPrices?.normal;
				const reseller = productPrices?.reseller;
				return (buy && normal && buy >= normal) || (buy && reseller && buy > reseller);
			});
			if (hasInvalidPrice) {
				return ServiceResponse.failure(
					"The purchase price cannot be greater than the normal or reseller price.",
					null,
					StatusCodes.BAD_REQUEST,
				);
			}

			// Use transaction to ensure data consistency during update
			return await this.productRepo.client.$transaction(async (tx: Prisma.TransactionClient) => {
				// Update main product information
				await tx.product.update({
					where: { id: productId },
					data: {
						...req.product,
						category: req.categoryId ? { connect: { id: req.categoryId } } : undefined,
					},
				});

				if (req.productVariants?.length) {
					// Identify variants to be deleted (those in DB but not in request)
					const existingVariants = await tx.productVariant.findMany({
						where: { productId },
						select: { id: true },
					});
					const oldIds = existingVariants.map((v) => v.id);
					const newIds = (req.productVariants ?? []).map((v) => v.id).filter(Boolean);
					const toDeleteIds = oldIds.filter((id) => !newIds.includes(id));

					// Delete variants that are no longer needed
					if (toDeleteIds.length > 0) {
						await tx.productVariant.deleteMany({
							where: { id: { in: toDeleteIds } },
						});
					}

					// Update existing variants or create new ones
					await Promise.all(
						(req.productVariants ?? []).map(async (variant) => {
							const { id, productPrices, productWholesalers, ...rest } = variant;

							if (id) {
								// Update existing variant
								await tx.productVariant.update({
									where: { id },
									data: {
										...rest,
										// Update pricing information
										productPrices: productPrices
											? ({
													update: productPrices,
												} as unknown as Prisma.ProductPriceUncheckedUpdateManyWithoutProductVariantNestedInput)
											: undefined,
										// Update wholesaler pricing
										ProductWholesaler: productWholesalers?.length
											? ({
													update: productWholesalers.map(({ id, ...rest }) => ({
														where: { id },
														data: rest,
													})),
												} as unknown as Prisma.ProductWholesalerUpdateManyWithoutProductVariantNestedInput)
											: undefined,
									},
								});
							} else {
								// Create new variant
								await tx.productVariant.create({
									data: {
										...rest,
										productId: id,
										productPrices: productPrices ? { create: productPrices } : undefined,
										ProductWholesaler: productWholesalers?.length
											? {
													createMany: {
														data: productWholesalers,
													},
												}
											: undefined,
									},
								});
							}
						}),
					);
				}

				return ServiceResponse.success("Product updated successfully.", null, StatusCodes.OK);
			});
		} catch (ex) {
			const errorMessage = `Error updating product: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while updating product.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public deleteProduct = async (productId: string, req: DeleteProductManyType) => {
		try {
			if (req && Array.isArray(req.productIds) && req.productIds?.length > 0) {
				// Delete multiple products
				const foundProducts = await this.productRepo.client.product.findMany({
					where: { id: { in: req.productIds } },
				});

				if (!foundProducts.length) {
					return ServiceResponse.failure("Products not found.", null, StatusCodes.NOT_FOUND);
				}

				await this.productRepo.client.product.deleteMany({
					where: { id: { in: req.productIds } },
				});
			} else {
				// Delete single product
				const foundProduct = await this.productRepo.client.product.findFirst({
					where: { id: productId },
				});

				if (!foundProduct) {
					return ServiceResponse.failure("Product not found.", null, StatusCodes.NOT_FOUND);
				}

				await this.productRepo.client.product.delete({
					where: { id: productId },
				});
			}

			return ServiceResponse.success("Product deleted successfully.", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error deleting product: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while deleting product.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const productService = new ProductService();
