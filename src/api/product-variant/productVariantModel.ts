import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export const ProductVariantSchema = z.object({
	id: z.number(),
	sku: z.string(),
	stock: z.number(),
	size: z.string(),
	color: z.string(),
	imageUrl: z.string(),
	barcode: z.string().optional(),
	productId: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductVariantSchema = ProductVariantSchema.omit({ id: true, createdAt: true, updatedAt: true });
