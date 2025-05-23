import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

export const receiptRegistry = new OpenAPIRegistry();

export const ReceiptParamsSchema = z.object({
	startDate: z.string().optional().describe("Format: YYYY-MM-DD (e.g. 2025-01-01)"),
	endDate: z.string().optional().describe("Format: YYYY-MM-DD (e.g. 2025-12-31)"),
	month: z.string().optional().describe("Bulan dalam angka 1-12 (e.g. 1 untuk Januari)"),
	year: z.string().optional().describe("Tahun dalam format YYYY (e.g. 2025)"),
	week: z.string().optional().describe("Minggu dalam angka 1-52 (e.g. 1)"),
});

export type IReceiptParams = z.infer<typeof ReceiptParamsSchema>;
