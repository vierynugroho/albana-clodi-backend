import type { Request, RequestHandler, Response } from "express";
import { deliveryPlaceService } from "./service";

export class DeliveryPlaceController {
	public getAll: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await deliveryPlaceService.getAll();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getOne: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await deliveryPlaceService.getOne(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public create: RequestHandler = async (req: Request, res: Response) => {
		const data = req.body;
		const serviceResponse = await deliveryPlaceService.create(data);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public update: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const data = req.body;
		const serviceResponse = await deliveryPlaceService.update(id, data);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public delete: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await deliveryPlaceService.delete(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
