import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type ProductPrice = z.infer<typeof ProductPriceSchema>;
export const ProductPriceSchema = z.object({
	id: z.number(),
	normal: z.number(),
	buy: z.number(),
	reseller: z.number(),
	agent: z.number(),
	member: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductPriceSchema = ProductPriceSchema.omit({ id: true, createdAt: true, updatedAt: true });
