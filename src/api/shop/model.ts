import { z } from "zod";

export const CreateShopSettingSchema = z.object({
	body: z.object({
		name: z.string().min(1, "Nama toko tidak boleh kosong"),
		description: z.string().optional(),
		email: z.string().email("Email tidak valid").optional(),
		phoneNumber: z.string().regex(/^\d+$/, "Nomor telepon harus berupa angka").optional(),
		address: z.string().optional(),
		owner: z.string().optional(),
		logo: z.any().optional().describe("File logo toko"),
		banner: z.any().optional().describe("File banner toko"),
	}),
});

export const UpdateShopSettingSchema = z.object({
	body: z.object({
		name: z.string().min(1, "Nama toko tidak boleh kosong").optional(),
		description: z.string().optional(),
		email: z.string().email("Email tidak valid").optional(),
		phoneNumber: z.string().regex(/^\d+$/, "Nomor telepon harus berupa angka").optional(),
		address: z.string().optional(),
		owner: z.string().optional(),
		logo: z.any().optional().describe("File logo toko"),
		banner: z.any().optional().describe("File banner toko"),
	}),
});

export type CreateShopSettingType = z.infer<typeof CreateShopSettingSchema>;
export type UpdateShopSettingType = z.infer<typeof UpdateShopSettingSchema>;
