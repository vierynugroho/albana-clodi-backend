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

	public reportOrders: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week } = req.query;

		const serviceResponse = await reportService.summaryOrders({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public reportProducts: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week } = req.query;

		const serviceResponse = await reportService.summaryProducts({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public reportTransaction: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week, payment_method_id } = req.query;

		const serviceResponse = await reportService.summaryTranasaction({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
			payment_method_id: payment_method_id as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
