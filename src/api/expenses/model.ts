import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const ExpensesSchema = z.object({
	id: z.string().uuid(),
	itemName: z.string().optional(),
	itemPrice: z.string().optional(),
	itemTotal: z.number().int().optional(),
	totalPrice: z.number().optional(),
	personResponsible: z.string().optional(),
	note: z.string().optional(),
	created_at: z.date().optional(),
	updated_at: z.date().optional(),
});

export type Expenses = z.infer<typeof ExpensesSchema>;

export const CreateExpensesSchema = ExpensesSchema.omit({ id: true });

export type CreateProductsType = z.infer<typeof CreateExpensesSchema>;
