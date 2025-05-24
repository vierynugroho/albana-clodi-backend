import { z } from "zod";

export const RegisterSchema = z.object({
	body: z.object({
		email: z.string().email("Email tidak valid"),
		password: z.string().min(6, "Password minimal 6 karakter"),
		name: z.string().min(1, "Nama tidak boleh kosong"),
		role: z.enum(["SUPERADMIN", "ADMIN"], {
			errorMap: () => ({ message: "Role harus SUPERADMIN atau ADMIN" }),
		}),
	}),
});

export const LoginSchema = z.object({
	body: z.object({
		email: z.string().email("Email tidak valid"),
		password: z.string().min(6, "Password minimal 6 karakter"),
	}),
});

export const UpdateProfileSchema = z.object({
	body: z.object({
		fullname: z.string().min(1, "Nama tidak boleh kosong").optional(),
		email: z.string().email("Email tidak valid").optional(),
		password: z.string().min(6, "Password minimal 6 karakter").optional(),
		confirmPassword: z.string().min(6, "Konfirmasi password minimal 6 karakter").optional(),
		phoneNumber: z.string().regex(/^\d+$/, "Nomor telepon harus berupa angka").optional(),
	}),
});

export type UpdateProfileType = z.infer<typeof UpdateProfileSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
