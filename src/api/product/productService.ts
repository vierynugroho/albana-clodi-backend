import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import { type Prisma, PrismaClient, type ProductVariant } from "../../../generated/prisma";
import type { CreateProductType, UpdateProductType } from "./productModel";
import { ProductRepository } from "./productRepository";

class ProductService {
	private readonly productRepo: ProductRepository;

	constructor(productRepository = new ProductRepository(new PrismaClient())) {
		this.productRepo = productRepository;
	}

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
			return await this.productRepo.client.$transaction(async (tx) => {
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
			logger.error(errorMessage);
			return ServiceResponse.failure(
				"An error occurred while creating product.",
				null,
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
			return await this.productRepo.client.$transaction(async (tx) => {
				// Update main product information
				await tx.product.update({
					where: { id: productId },
					data: {
						...req.product,
						category: req.categoryId ? { connect: { id: req.categoryId } } : undefined,
					},
				});

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

				return ServiceResponse.success("Product updated successfully.", null, StatusCodes.OK);
			});
		} catch (ex) {
			logger.error(`Error updating product: ${(ex as Error).message}`);
			return ServiceResponse.failure(
				"An error occurred while updating the product.",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const productService = new ProductService();
