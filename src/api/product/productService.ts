import type { ProductTypeEnum } from "@/common/enums/product/productTypeEnum";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { exportData } from "@/common/utils/dataExporter";
import { logger } from "@/server";
import { type Prisma, PrismaClient } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";
import { StatusCodes } from "http-status-codes";
import type {
	CreateProductType,
	DeleteProductManyType,
	Product,
	RequestQueryProductType,
	UpdateProductType,
} from "./productModel";
import { ProductRepository } from "./productRepository";

type VariantFieldType = {
	size: string[];
	color: string[];
	sku: string[];
	imageUrl: string[];
	stock: number[];
	buy: number[];
	member: number[];
	normal: number[];
	reseller: number[];
	agent: number[];
};

class ProductService {
	private readonly productRepo: ProductRepository["productRepo"];

	constructor(productRepository = new ProductRepository(new PrismaClient())) {
		this.productRepo = productRepository.productRepo;
	}

	public getAllProducts = async (query: RequestQueryProductType) => {
		try {
			const {
				page = 1,
				limit = 10,
				type,
				categoryId,
				productDiscountId,
				sort,
				order,
				productPrice,
				startDate,
				endDate,
				month,
				week,
				year,
			} = query;
			const skip = (page - 1) * limit;
			const queryArgs: Prisma.ProductFindManyArgs = {};
			const sortableFields = ["createdAt", "name", "email"];

			if (sort && sortableFields.includes(sort)) {
				queryArgs.orderBy = {
					[sort]: order,
				};
			} else {
				queryArgs.orderBy = {
					createdAt: "asc",
				};
			}

			const createdAt: { gte?: Date; lte?: Date; lt?: Date } = {};

			if (startDate && endDate) {
				createdAt.gte = new Date(`${startDate}T00:00:00`);
				createdAt.lte = new Date(`${endDate}T23:59:59`);
			}

			if (month) {
				const monthNumber = Number.parseInt(month, 10);
				const yearNumber = year ? Number.parseInt(year, 10) : new Date().getFullYear();

				createdAt.gte = new Date(yearNumber, monthNumber - 1, 1);
				createdAt.lte = new Date(yearNumber, monthNumber, 0, 23, 59, 59);
			}

			if (year && !month && !week) {
				const yearNumber = Number.parseInt(year, 10);

				createdAt.gte = new Date(yearNumber, 0, 1);
				createdAt.lt = new Date(yearNumber + 1, 0, 1);
			}

			if (week) {
				const weekNumber = Number.parseInt(week, 10);
				const yearNumber = year ? Number.parseInt(year, 10) : new Date().getFullYear();

				const janFirst = new Date(yearNumber, 0, 1);
				const daysToAdd = (weekNumber - 1) * 7;

				const weekStart = new Date(janFirst);
				weekStart.setDate(janFirst.getDate() + daysToAdd);

				const weekEnd = new Date(weekStart);
				weekEnd.setDate(weekStart.getDate() + 6);

				createdAt.gte = weekStart;
				createdAt.lte = new Date(weekEnd.setHours(23, 59, 59));
			}

			if (type) {
				queryArgs.where = {
					...queryArgs.where,
					type,
				};
			}

			if (categoryId) {
				queryArgs.where = {
					...queryArgs.where,
					categoryId,
				};
			}

			if (productDiscountId) {
				queryArgs.where = {
					...queryArgs.where,
					ProductDiscount: {
						some: {
							id: productDiscountId,
						},
					},
				};
			}

			if (productPrice) {
				queryArgs.where = {
					...queryArgs.where,
					productVariants: {
						some: {
							productPrices: {
								some: {
									...(productPrice.normal && {
										normal: {
											...(productPrice.normal.min && { gte: productPrice.normal.min }),
											...(productPrice.normal.max && { lte: productPrice.normal.max }),
										},
									}),
									...(productPrice.buy && {
										buy: {
											...(productPrice.buy.min && { gte: productPrice.buy.min }),
											...(productPrice.buy.max && { lte: productPrice.buy.max }),
										},
									}),
									...(productPrice.reseller && {
										reseller: {
											...(productPrice.reseller.min && { gte: productPrice.reseller.min }),
											...(productPrice.reseller.max && { lte: productPrice.reseller.max }),
										},
									}),
									...(productPrice.agent && {
										agent: {
											...(productPrice.agent.min && { gte: productPrice.agent.min }),
											...(productPrice.agent.max && { lte: productPrice.agent.max }),
										},
									}),
									...(productPrice.member && {
										member: {
											...(productPrice.member.min && { gte: productPrice.member.min }),
											...(productPrice.member.max && { lte: productPrice.member.max }),
										},
									}),
								},
							},
						},
					},
				};
			}

			const [products, total] = await Promise.all([
				this.productRepo.findMany({
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
				this.productRepo.count(),
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
			const foundProduct = await this.productRepo.findUnique({
				where: { id: productId },
				include: {
					category: true,
					ProductDiscount: true,
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
		const foundProduct = await this.productRepo.findFirst({
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
			const newProduct: Partial<Product> = {};
			// Use transaction to ensure data consistency across related tables
			await prisma?.$transaction(async (tx: Prisma.TransactionClient) => {
				// Prepare product data with category connection
				const createDataProduct: Prisma.ProductCreateInput = {
					...req.product,
					category: req.product.categoryId ? { connect: { id: req.product.categoryId } } : undefined,
				};

				// Create the main product record
				const newProduct = await tx.product.create({
					data: { ...createDataProduct, ProductDiscount: { create: req.productDiscount ?? undefined } },
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
			});

			return ServiceResponse.success("Product created successfully.", newProduct, StatusCodes.CREATED);
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
			const existingProduct = await this.productRepo.findUnique({
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
			await prisma?.$transaction(async (tx: Prisma.TransactionClient) => {
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
			});

			return ServiceResponse.success("Product updated successfully.", existingProduct, StatusCodes.OK);
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
			let foundProducts: Partial<Product>[];

			if (req && Array.isArray(req.productIds) && req.productIds?.length > 0) {
				// Delete multiple products
				foundProducts = (await this.productRepo.findMany({
					where: { id: { in: req.productIds } },
				})) as unknown as Product[];

				if (!foundProducts.length) {
					return ServiceResponse.failure("Products not found.", null, StatusCodes.NOT_FOUND);
				}

				await this.productRepo.deleteMany({
					where: { id: { in: req.productIds } },
				});
			} else {
				// Delete single product
				foundProducts = (await this.productRepo.findFirst({
					where: { id: productId },
				})) as unknown as Product[];

				if (!foundProducts[0]) {
					return ServiceResponse.failure("Product not found.", null, StatusCodes.NOT_FOUND);
				}

				await this.productRepo.delete({
					where: { id: productId },
				});
			}

			return ServiceResponse.success("Product deleted successfully.", foundProducts, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error deleting product: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while deleting product.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public exportProducts = async (query: RequestQueryProductType) => {
		try {
			const formatter = new Intl.DateTimeFormat("id-ID", {
				timeZone: "Asia/Jakarta",
				dateStyle: "short",
			});

			const exportParams = {
				...query,
				startDate: query.startDate?.toISOString().split("T")[0],
				endDate: query.endDate?.toISOString().split("T")[0],
			};

			return exportData<
				Prisma.ProductGetPayload<{
					include: {
						productVariants: {
							include: {
								productPrices: true;
								ProductWholesaler: true;
							};
						};
						category: true;
						ProductDiscount: true;
					};
				}>
			>(
				exportParams,
				async (where) => {
					const products = await this.productRepo.findMany({
						where: where as Prisma.ProductWhereInput,
						orderBy: { createdAt: "desc" },
						include: {
							productVariants: {
								include: {
									productPrices: true,
									ProductWholesaler: true,
								},
							},
							category: true,
							ProductDiscount: true,
						},
					});

					return products.map((product) => ({
						...product,
						name: product.name || "",
						description: product.description || "",
						type: product.type as unknown as ProductTypeEnum,
						isPublish: product.isPublish || false,
						weight: product.weight || 0,
					}));
				},
				(product, index) => {
					const variantFields = product.productVariants.reduce(
						(acc, v) => {
							acc.size.push(v.size as string);
							acc.color.push(v.color as string);
							acc.sku.push(v.sku as string);
							acc.imageUrl.push(v.imageUrl as string);
							acc.stock.push(v.stock as number);
							const buys = v.productPrices?.map((p) => p.buy).filter((b): b is number => b !== null) ?? [];
							acc.buy.push(...buys);
							const members = v.productPrices?.map((p) => p.member).filter((b): b is number => b !== null) ?? [];
							acc.member.push(...members);
							const agents = v.productPrices?.map((p) => p.agent).filter((b): b is number => b !== null) ?? [];
							acc.agent.push(...agents);
							const normals = v.productPrices?.map((p) => p.normal).filter((b): b is number => b !== null) ?? [];
							acc.normal.push(...normals);
							const resellers = v.productPrices?.map((p) => p.reseller).filter((b): b is number => b !== null) ?? [];
							acc.reseller.push(...resellers);
							return acc;
						},
						{
							size: [],
							color: [],
							sku: [],
							imageUrl: [],
							stock: [],
							buy: [],
							member: [],
							agent: [],
							normal: [],
							reseller: [],
						} as VariantFieldType,
					);

					return {
						No: index + 1,
						"Nama Produk": product.name ?? null,
						Kategori: product.category?.name ?? null,
						Size: variantFields.size.join(", ") ?? null,
						Warna: variantFields.color.join(", ") ?? null,
						Deskripsi: product.description ?? null,
						SKU: variantFields.sku.join(", ") ?? null,
						Gambar: variantFields.imageUrl ?? null,
						"Harga Beli (Harga Modal)": variantFields.buy.join(", ") ?? null,
						"Harga Jual": variantFields.normal.join(", ") ?? null,
						"Harga Member": variantFields.member.join(", ") ?? null,
						"Harga Agent": variantFields.agent.join(", ") ?? null,
						"Harga Reseller": variantFields.reseller.join(", ") ?? null,
						"Jumlah Stok": variantFields.stock ?? null,
						"Berat (gram)": product.weight ?? null,
					};
				},
				"Produk",
				"Tidak ada data produk untuk di ekspor.",
			);
		} catch (ex) {
			const errorMessage = `Error exporting product: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while exporting product.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public importProducts = async () => {};
}

export const productService = new ProductService();
