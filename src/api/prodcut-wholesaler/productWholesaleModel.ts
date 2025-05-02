import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type ProductWholesaler = z.infer<typeof ProductWholesalerSchema>;
export const ProductWholesalerSchema = z.object({
	id: z.string(),
	productVariantId: z.string(),
	lowerLimitItem: z.number(),
	upperLimitItem: z.number(),
	unitPrice: z.number(),
	wholesalerPrice: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductWholesalerSchema = ProductWholesalerSchema.omit({
	id: true,
	productVariantId: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdateProductWholesalerSchema = ProductWholesalerSchema.omit({
	productVariantId: true,
	createdAt: true,
	updatedAt: true,
});
