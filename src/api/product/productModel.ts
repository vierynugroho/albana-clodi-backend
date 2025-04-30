import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { CreateProductVariantSchema, ProductVariantSchema } from "../product-variant/productVariantModel";

extendZodWithOpenApi(z);

export type Product = z.infer<typeof ProductSchema>;
export const ProductSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	price: z.number(),
	stock: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductSchema = z.object({
	product: ProductSchema.omit({ id: true, createdAt: true, updatedAt: true }),
	variants: z.array(CreateProductVariantSchema).min(1, { message: "Tambahkan minimal 1 variant product" }),
});

export type CreateProductsType = z.infer<typeof CreateProductSchema>;
