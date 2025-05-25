import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type ProductPrice = z.infer<typeof ProductPriceSchema>;
export const ProductPriceSchema = z.object({
	id: z.string(),
	productVariantId: z.string(),
	normal: z.coerce.number(),
	buy: z.coerce.number(),
	reseller: z.coerce.number(),
	agent: z.coerce.number(),
	member: z.coerce.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductPriceSchema = ProductPriceSchema.omit({
	id: true,
	productVariantId: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdateProductPriceSchema = ProductPriceSchema.omit({
	productVariantId: true,
	createdAt: true,
	updatedAt: true,
});
