import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export const ProductVariantSchema = z.object({
	id: z.string(),
	productId: z.string(),
	sku: z.string(),
	stock: z.coerce.number(),
	size: z.string(),
	color: z.string(),
	images: z.string().optional(),
	barcode: z.string().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductVariantSchema = ProductVariantSchema.omit({
	id: true,
	productId: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdateProductVariantSchema = ProductVariantSchema.omit({
	productId: true,
	createdAt: true,
	updatedAt: true,
});
