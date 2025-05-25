import { OrderPaginationEnum } from "@/common/enums/orderPaginationEnum";
import { ProductPriceEnum } from "@/common/enums/product/productPriceEnum";
import { ProductTypeEnum } from "@/common/enums/product/productTypeEnum";
import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { optional, z } from "zod";
import { CreateCategorySchema } from "../category/categoryModel";
import { CreateProductDiscountSchema, ProductDiscountSchema } from "../product-discount/productDiscountModel";
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
	isPublish: z.coerce.boolean(),
	weight: z.coerce.number(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

//  CREATE SCHEMA WITH REQUEST AND TYPE SCHEMA
export const CreateProductSchema = z.object({
	product: ProductSchema.extend({
		categoryId: z.string().uuid().optional(),
	}),
	productDiscount: CreateProductDiscountSchema.optional(),
	productVariants: z
		.array(
			CreateProductVariantSchema.extend({
				productPrices: CreateProductPriceSchema.optional(),
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
	productDiscount: UpdateProductPriceSchema.optional(),
	productVariants: z
		.array(
			UpdateProductVariantSchema.extend({
				productPrices: UpdateProductPriceSchema.partial().optional(),
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

const ProductPriceLevelEnum = z.nativeEnum(ProductPriceEnum);

// GET ALL REQUEST SCHEMA
export const RequestQueryProduct = z.object({
	page: z.number().min(1).optional(),
	limit: z.number().min(5).optional(),
	type: z.nativeEnum(ProductTypeEnum).optional(),
	search: z.string().optional(),
	categoryId: z.string().uuid().optional(),
	productDiscountId: z.string().uuid().optional(),
	sort: z.string().optional(),
	order: z.nativeEnum(OrderPaginationEnum).optional(),
	productPrice: z
		.record(
			ProductPriceLevelEnum,
			z.object({
				min: z.number().optional(),
				max: z.number().optional(),
			}),
		)
		.optional(),
	startDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
	month: z.coerce
		.string()
		.regex(/^\d{1,2}$/)
		.optional(),
	year: z.coerce
		.string()
		.regex(/^\d{4}$/)
		.optional(),
	week: z.coerce
		.string()
		.regex(/^\d{1,2}$/)
		.optional(),
});

export type RequestQueryProductType = z.infer<typeof RequestQueryProduct>;

export const GetAllProductsRequestSchema = z.object({
	query: RequestQueryProduct,
});

export const GetProductRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
