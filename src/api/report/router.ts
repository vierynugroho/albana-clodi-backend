import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import multer from "multer";
import { z } from "zod";
import { ExpensesSchema } from "../expenses/model";
import { ReportController } from "./controller";

export const reportRegistry = new OpenAPIRegistry();
export const reportRouter: Router = express.Router();

reportRegistry.register("Report", ExpensesSchema);

reportRegistry.registerPath({
	method: "get",
	path: "/reports/expenses",
	tags: ["Report"],
	request: {
		query: z.object({
			startDate: z.string().optional().describe("Format: YYYY-MM-DD (e.g. 2025-01-01)"),
			endDate: z.string().optional().describe("Format: YYYY-MM-DD (e.g. 2025-12-31)"),
			month: z.string().optional().describe("Month number 1-12 (e.g. 1 for January)"),
			year: z.string().optional().describe("Year in YYYY format (e.g. 2025)"),
			week: z.string().optional().describe("Week number 1-52 (e.g. 1)"),
		}),
	},
	responses: createApiResponse(z.array(ExpensesSchema), "Success"),
});

const reportController = new ReportController();

reportRouter.route("/expenses").get(reportController.reportExpenses);
