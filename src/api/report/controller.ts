import type { Request, RequestHandler, Response } from "express";
import { reportService } from "./service";

export class ReportController {
	public reportExpenses: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week } = req.query;

		const serviceResponse = await reportService.summaryExpenses({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
