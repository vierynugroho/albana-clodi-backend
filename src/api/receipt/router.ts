import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { ExpensesSchema } from "../expenses/model";
import { ReceiptController } from "./controller";

export const receiptRegistry = new OpenAPIRegistry();
export const receiptRouter: Router = express.Router();

receiptRegistry.register("receipt", ExpensesSchema);

receiptRegistry.registerPath({
	method: "get",
	path: "/receipts/{orderId}",
	tags: ["receipt"],
	security: [{ bearerAuth: [] }],
	request: {
		params: z.object({
			orderId: z.string().describe("ID pesanan untuk mendapatkan receipt"),
		}),
	},
	responses: createApiResponse(z.object({}), "Success"),
});

const receiptController = new ReceiptController();

receiptRouter.route("/:orderId").get(receiptController.getReceipt);
