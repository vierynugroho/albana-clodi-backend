import type { Request, RequestHandler, Response } from "express";
import type { OrderQueryType } from "./model";
import { orderService } from "./service";

export class OrderController {
	public getAll: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await orderService.getAll(req.query as OrderQueryType["query"]);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getOne: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await orderService.getOne(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public create: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await orderService.create(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public update: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await orderService.update(id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public delete: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await orderService.delete(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
