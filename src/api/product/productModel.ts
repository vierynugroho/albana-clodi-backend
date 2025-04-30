import { ProductTypeEnum } from "@/common/enums/product/productTypeEnum";
import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { CreateCategorySchema } from "../category/categoryModel";
import {
	CreateProductWholesalerSchema,
	UpdateProductWholesalerSchema,
} from "../prodcut-wholesaler/productWholesaleModel";
import { CreateProductPriceSchema, UpdateProductPriceSchema } from "../product-price/productPriceModel";
import {
	CreateProductVariantSchema,
	ProductVariantSchema,
	UpdateProductVariantSchema,
} from "../product-variant/productVariantModel";

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
	categoryId: z.string().uuid().optional(),
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
});

export type CreateProductType = z.infer<typeof CreateProductSchema>;

export const UpdateProductSchema = z.object({
	product: ProductSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial().optional(),
	categoryId: z.string().uuid().optional(),
	productVariants: z
		.array(
			UpdateProductVariantSchema.extend({
				productPrices: UpdateProductPriceSchema.partial().optional(),
				productWholesalers: z.array(UpdateProductWholesalerSchema.partial()).optional(),
			}),
		)
		.optional(),
});

export type UpdateProductType = z.infer<typeof UpdateProductSchema>;

export const UpdateProductRequestSchema = z.object({
	body: UpdateProductSchema,
	params: z.object({ id: commonValidations.uuid }),
});
