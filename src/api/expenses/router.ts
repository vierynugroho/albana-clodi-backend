import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";

export const expensesRegistry = new OpenAPIRegistry();
export const expensesRouter: Router = express.Router();

expensesRegistry.register("Expense", ExpensesSchema);

expensesRegistry.registerPath({
	method: "get",
	path: "/expenses",
	tags: ["Expenses"],
	responses: createApiResponse(z.array(ExpensesSchema), "Success"),
});

expensesRegistry.registerPath({
	method: "get",
	path: "/expenses/{id}",
	tags: ["Expenses"],
	request: {
		params: z.object({
			id: z.string().uuid(),
		}),
	},
	responses: createApiResponse(ExpensesSchema, "Success"),
});

expensesRegistry.registerPath({
	method: "post",
	path: "/expenses",
	tags: ["Expenses"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: ExpensesSchema.omit({ id: true }),
				},
			},
		},
	},
	responses: createApiResponse(ExpensesSchema, "Success"),
});

expensesRegistry.registerPath({
	method: "put",
	path: "/expenses/{id}",
	tags: ["Expenses"],
	request: {
		params: z.object({
			id: z.string().uuid(),
		}),
		body: {
			content: {
				"application/json": {
					schema: ExpensesSchema.partial().omit({ id: true }),
				},
			},
		},
	},
	responses: createApiResponse(ExpensesSchema, "Success"),
});

expensesRegistry.registerPath({
	method: "delete",
	path: "/expenses/{id}",
	tags: ["Expenses"],
	request: {
		params: z.object({
			id: z.string().uuid(),
		}),
	},
	responses: createApiResponse(z.object({ message: z.string() }), "Success"),
});

import { ExpenseController } from "./controller";
import { ExpensesSchema } from "./model";

const expenseController = new ExpenseController();

expensesRouter.route("/").get(expenseController.getAllExpenses).post(expenseController.createExpense);
expensesRouter
	.route("/:id")
	.get(expenseController.getExpenseDetail)
	.put(expenseController.updateExpense)
	.delete(expenseController.deleteExpense);
