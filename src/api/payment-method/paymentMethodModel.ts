import { commonValidations } from "@/common/utils/commonValidation";
import { z } from "zod";

export const PaymentMethodSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	bankName: z.string(),
	bankBranch: z.string(),
	accountNumber: z.string(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export const CreatePaymentMethodSchema = PaymentMethodSchema.omit({ id: true, createdAt: true, updatedAt: true });
export const CreatePaymentMethodRequestSchema = z.object({
	body: CreatePaymentMethodSchema,
});
export type CreatePaymentMethodType = z.infer<typeof CreatePaymentMethodSchema>;

export const UpdatePaymentMethodSchema = CreatePaymentMethodSchema.partial();
export const UpdatePaymentMethodRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
	body: UpdatePaymentMethodSchema,
});
export type UpdatePaymentMethodType = z.infer<typeof UpdatePaymentMethodSchema>;

export const DeletePaymentMethodRequestShema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});

export const GetPaymentMethodRequestShema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
