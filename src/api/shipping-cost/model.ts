import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const ShippingCostSchema = z.object({
	shipper_destination_id: z.number().int().describe("ID destinasi pengirim, hasil dari destination_id"),
	receiver_destination_id: z.number().int().describe("ID destinasi penerima, hasil dari destination_id"),
	origin_pin_point: z.string().describe("Geolokasi pengirim"),
	destination_pin_point: z.string().describe("Geolokasi penerima"),
	weight: z.number().describe("Berat dalam Kilogram, gunakan titik(.) untuk nilai desimal"),
	item_value: z.number().int().describe("Nilai paket dalam Rupiah"),
	cod: z
		.boolean()
		.describe(
			"Metode pengiriman COD (ya/tidak), jika cod=true sistem akan memberikan respons Coverage Area atau kemungkinan untuk COD atau tidak",
		),
});

export type ShippingCost = z.infer<typeof ShippingCostSchema>;

// Schema untuk params shipping cost
export const ShippingCostParamsSchema = z.object({
	params: ShippingCostSchema.partial(),
});
export type ShippingCostParamsType = z.infer<typeof ShippingCostParamsSchema>;
