import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const DeliveryPlaceSchema = z.object({
	name: z.string().optional().describe("Nama tempat pengiriman"),
	address: z.string().optional().describe("Alamat tempat pengiriman"),
	subdistrict: z.string().optional().describe("Kecamatan tempat pengiriman"),
	phoneNumber: z.string().optional().describe("Nomor telepon"),
	email: z.string().optional().describe("Alamat email"),
});

export type DeliveryPlace = z.infer<typeof DeliveryPlaceSchema>;
