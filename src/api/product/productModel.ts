import { ProductTypeEnum } from "@/common/enums/product/productTypeEnum";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { CreateCategorySchema } from "../category/categoryModel";
import { CreateProductWholesalerSchema } from "../prodcut-wholesaler/productWholesaleModel";
import { CreateProductPriceSchema } from "../product-price/productPriceModel";
import { CreateProductVariantSchema, ProductVariantSchema } from "../product-variant/productVariantModel";

extendZodWithOpenApi(z);

export type Product = z.infer<typeof ProductSchema>;
export const ProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	type: z.nativeEnum(ProductTypeEnum),
	isPublish: z.boolean().default(true),
	weight: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductSchema = z.object({
	product: ProductSchema.omit({ id: true, createdAt: true, updatedAt: true }),
	categories: z.array(z.string()).optional(),
	productVariants: z
		.array(
			CreateProductVariantSchema.extend({
				productPrices: CreateProductPriceSchema.optional(),
				productWholesalers: z.array(CreateProductWholesalerSchema).optional(),
			}),
		)
		.min(1, { message: "Minimum 1 data product variant with array of object." }),
});

export const CreateProductRequestSchema = z.object({
	body: CreateProductSchema,
	query: z.object({}),
	params: z.object({}),
});

export type CreateProductType = z.infer<typeof CreateProductSchema>;
