import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const DeliveryPlaceSchema = z.object({
	id: z.string().uuid().optional(),
	name: z.string().optional().describe("Nama tempat pengiriman"),
	address: z.string().optional().describe("Alamat tempat pengiriman"),
	subdistrict: z.string().optional().describe("Kecamatan tempat pengiriman"),
	phoneNumber: z.string().optional().describe("Nomor telepon"),
	destinationId: z.number().optional().describe("ID destinasi"),
	email: z.string().optional().describe("Alamat email"),
	description: z.string().optional().describe("Deskripsi tempat pengiriman"),
});

export type DeliveryPlace = z.infer<typeof DeliveryPlaceSchema>;

// Schema untuk create delivery place
export const CreateDeliveryPlaceSchema = z.object({
	body: DeliveryPlaceSchema.omit({ id: true }),
});
export type CreateDeliveryPlaceType = z.infer<typeof CreateDeliveryPlaceSchema>;

// Schema untuk update delivery place
export const UpdateDeliveryPlaceSchema = z.object({
	params: z.object({
		id: z.string().uuid(),
	}),
	body: DeliveryPlaceSchema.omit({ id: true }).partial(),
});
export type UpdateDeliveryPlaceType = z.infer<typeof UpdateDeliveryPlaceSchema>;

// Schema untuk params id
export const DeliveryPlaceParamsSchema = z.object({
	params: z.object({
		id: z.string().uuid(),
	}),
});
export type DeliveryPlaceParamsType = z.infer<typeof DeliveryPlaceParamsSchema>;
