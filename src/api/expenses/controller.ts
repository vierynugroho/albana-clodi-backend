import { ServiceResponse } from "@/common/models/serviceResponse";
import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { expenseService } from "./service";

export class ExpenseController {
	public createExpense: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await expenseService.createExpense(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateExpense: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await expenseService.updateExpense(id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteExpense: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await expenseService.deleteExpense(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getExpenseDetail: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await expenseService.getExpenseDetail(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getAllExpenses: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week, keyword } = req.query;

		const serviceResponse = await expenseService.getAllExpenses({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
			keyword: keyword as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public exportExpenses: RequestHandler = async (req: Request, res: Response) => {
		const { startDate, endDate, month, year, week } = req.query;

		const serviceResponse = await expenseService.exportExpenses({
			startDate: startDate as string,
			endDate: endDate as string,
			month: month as string,
			year: year as string,
			week: week as string,
		});

		if (serviceResponse.success) {
			res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			res.setHeader("Content-Disposition", `attachment; filename=${serviceResponse.responseObject?.fileName}`);
			res.status(serviceResponse.statusCode).send(serviceResponse.responseObject?.buffer);
		} else {
			res.status(serviceResponse.statusCode).send(serviceResponse);
		}
	};

	public importExpenses: RequestHandler = async (req: Request, res: Response) => {
		const multerFile = req.file as Express.Multer.File;

		if (!multerFile) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.send(ServiceResponse.failure("File tidak ditemukan", null, StatusCodes.BAD_REQUEST));
			return;
		}

		const serviceResponse = await expenseService.importExpenses(multerFile.buffer);

		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
