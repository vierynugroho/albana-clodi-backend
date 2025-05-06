import type { Request, RequestHandler, Response } from "express";
import { customerService } from "./customerService";

export class CustomerController {
	public getAllCustomers: RequestHandler = async () => {};

	public getDetailCustomer: RequestHandler = async () => {};

	public createCustomer: RequestHandler = async (req: Request, res: Response) => {
		await customerService.createCustomer(req.body);
	};

	public updateCustomer: RequestHandler = async () => {};

	public deleteCustomer: RequestHandler = async () => {};
}
