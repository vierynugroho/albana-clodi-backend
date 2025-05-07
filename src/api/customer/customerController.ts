import type { Request, RequestHandler, Response } from "express";
import { customerService } from "./customerService";

export class CustomerController {
	public getAllCustomers: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.getAllCustomers(req.query);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.getDetailCustomer(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.createCustomer(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.updateCustomer(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.deleteCustomer(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const customerController = new CustomerController();
