import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import { type Prisma, PrismaClient } from "../../../generated/prisma";
import type { CreateProductType } from "./productModel";
import { ProductRepository } from "./productRepository";

class ProductService {
	private readonly productRepo: ProductRepository;

	constructor(productRepository = new ProductRepository(new PrismaClient())) {
		this.productRepo = productRepository;
	}

	public createProduct = async (req: CreateProductType) => {
		const foundProduct = await this.productRepo.client.product.findFirst({
			where: {
				name: req.product.name,
			},
		});

		if (foundProduct) {
			return ServiceResponse.failure("Product already exists", null, StatusCodes.BAD_REQUEST);
		}

		// check if invalid product per variant price
		const hasInvalidPrice = req.productVariants?.some(
			(variant) =>
				(variant.productPrices !== undefined && variant.productPrices.buy >= variant.productPrices.normal) ||
				(variant.productPrices !== undefined && variant.productPrices.buy > variant.productPrices.reseller),
		);
		if (hasInvalidPrice) {
			return ServiceResponse.failure(
				"The purchase price cannot be greater than the normal or reseller price.",
				null,
				StatusCodes.BAD_REQUEST,
			);
		}

		try {
			// start db transaction
			return await this.productRepo.client.$transaction(async (tx) => {
				// initiate prodyct data
				const createDataProduct: Prisma.ProductCreateInput = {
					...req.product,
					category:
						req.categories && req.categories.length > 0
							? ({
									connect: req.categories.map((id) => ({ id })),
								} as unknown as Prisma.CategoryCreateNestedOneWithoutProductsInput)
							: undefined,
				};

				const newProduct = await tx.product.create({
					data: createDataProduct,
				});

				// run parralel create product variants with instance
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
								productPrices: {
									create: productPrices ?? undefined,
								},
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

	public updateProduct = async (req) => {};
}

export const productService = new ProductService();
