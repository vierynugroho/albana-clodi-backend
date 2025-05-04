import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const ShippingCostParamsSchema = z.object({
	origin: z.string().describe("ID kota asal"),
	destination: z.string().describe("ID kota tujuan"),
	weight: z.number().describe("Berat dalam gram"),
	courier: z.string().describe("Kode kurir (jne, pos, tiki)"),
});

export const ShippingCostParams = ShippingCostParamsSchema;

export type Expenses = z.infer<typeof ShippingCostParamsSchema>;
