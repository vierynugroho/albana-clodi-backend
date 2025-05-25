import { ProductDiscountTypeEnum } from "@/common/enums/product/productDiscountTypeEnum";
import { z } from "zod";

export const ProductDiscountSchema = z.object({
	id: z.string(),
	productId: z.string(),
	type: z.nativeEnum(ProductDiscountTypeEnum),
	value: z.coerce.number(),
	startDate: z.date().optional(),
	endDate: z.date().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductDiscountSchema = ProductDiscountSchema.omit({
	id: true,
	productId: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdateProductDiscountSchema = ProductDiscountSchema.omit({
	productId: true,
	createdAt: true,
	updatedAt: true,
});
