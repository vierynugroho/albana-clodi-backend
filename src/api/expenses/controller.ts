import type { Request, RequestHandler, Response } from "express";
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
		const serviceResponse = await expenseService.getAllExpenses();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
