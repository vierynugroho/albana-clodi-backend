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
