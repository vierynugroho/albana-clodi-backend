import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export type Category = z.infer<typeof CategorySchema>;
export const CategorySchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const CreateCategorySchema = CategorySchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});
export const CreateCategoryRequestSchema = z.object({
	body: CreateCategorySchema,
});
export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.partial();
export const UpdateCategoryRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
	body: UpdateCategorySchema,
});
export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>;

export const GetCategoryRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});

export const DeleteCategoryRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
