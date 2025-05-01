import { ProductTypeEnum } from "@/common/enums/product/productTypeEnum";
import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { optional, z } from "zod";
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

// PRODUCT SCHEMA
export type Product = z.infer<typeof ProductSchema>;
export const ProductSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	description: z.string(),
	type: z.nativeEnum(ProductTypeEnum),
	isPublish: z.boolean().default(true),
	weight: z.number(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

//  CREATE SCHEMA WITH REQUEST AND TYPE SCHEMA
export const CreateProductSchema = z.object({
	product: ProductSchema,
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

//  UPDATE SCHEMA WITH REQUEST SCHEMA
export const UpdateProductSchema = z.object({
	product: ProductSchema.partial().optional(),
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

//  DELETE SCHEMA WITH REQUEST SCHEMA
export const DeleteManyProductSchema = z.object({
	productIds: z.array(z.string()).optional(),
});

export type DeleteProductManyType = z.infer<typeof DeleteManyProductSchema>;

export const DeleteProductRequestSchema = z.object({
	body: DeleteManyProductSchema.optional(),
	params: z.object({ id: commonValidations.uuid }),
});

// GET ALL REQUEST SCHEMA
export const RequestQueryProduct = z.object({
	page: z.number().min(1).optional(),
	limit: z.number().min(5).optional(),
});

export type RequestQueryProductType = z.infer<typeof RequestQueryProduct>;

export const GetAllProductsRequestSchema = z.object({
	query: RequestQueryProduct,
});

export const GetProductRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
