import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { ProductWholesalerSchema } from "../prodcut-wholesaler/productWholesaleModel";
import { ProductPriceSchema } from "../product-price/productPriceModel";

extendZodWithOpenApi(z);

export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export const ProductVariantSchema = z.object({
	id: z.string(),
	productId: z.string(),
	sku: z.string(),
	stock: z.number(),
	size: z.string(),
	color: z.string(),
	imageUrl: z.string(),
	barcode: z.string().optional(),
	productPrices: ProductPriceSchema,
	productWholesaler: ProductWholesalerSchema,
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateProductVariantSchema = ProductVariantSchema.omit({
	id: true,
	productId: true,
	createdAt: true,
	updatedAt: true,
	productPrices: true,
	productWholesaler: true,
});

export const UpdateProductVariantSchema = ProductVariantSchema.omit({
	productId: true,
	createdAt: true,
	updatedAt: true,
	productPrices: true,
	productWholesaler: true,
});
