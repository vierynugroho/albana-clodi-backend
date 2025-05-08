import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const SalesChannelSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	isActive: z.boolean().default(true),
	createdAt: z.string().optional(),
	updatedAt: z.string().optional(),
});
export type SalesChannel = z.infer<typeof SalesChannelSchema>;

export const CreateSalesChannelSchema = SalesChannelSchema.omit({ id: true, createdAt: true, updatedAt: true });
export const CreateSalesChannelRequestSchema = z.object({
	body: CreateSalesChannelSchema,
});
export type CreateSalesChannelType = z.infer<typeof CreateSalesChannelSchema>;

export const UpdateSalesChannelSchema = CreateSalesChannelSchema.partial();
export const UpdateSalesChannelRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
	body: UpdateSalesChannelSchema,
});
export type UpdateSalesChannelType = z.infer<typeof UpdateSalesChannelSchema>;

export const DeleteSalesChannelRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});

export const GetSalesChannelRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
