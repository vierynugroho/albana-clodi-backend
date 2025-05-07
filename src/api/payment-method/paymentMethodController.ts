import type { Request, RequestHandler, Response } from "express";
import { paymentMethodService } from "./paymentMethodService";

class PaymentMethodController {
	public getAllPayments: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await paymentMethodService.getAllPayments();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailPayment: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await paymentMethodService.getDetailPayment(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createPayment: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await paymentMethodService.createPayment(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updatePayment: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await paymentMethodService.updatePayment(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deletePayment: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await paymentMethodService.deletePayment(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const paymentMethodController = new PaymentMethodController();
