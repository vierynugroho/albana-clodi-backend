import type { Request, RequestHandler, Response } from "express";
import { locationService } from "./service";

export class DeliveryPlaceController {
	public create: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await locationService.getProvinces();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getOne: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await locationService.getProvinces();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public update: RequestHandler = async (req: Request, res: Response) => {
		const { id } = req.params;
		const serviceResponse = await locationService.getCities(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public delete: RequestHandler = async (req: Request, res: Response) => {
		const { origin, destination, weight, courier } = req.body;

		if (!origin || !destination || !weight || !courier) {
			res.status(400).send({
				success: false,
				message: "Incomplete data. Please fill in all required fields: origin, destination, weight, and courier.",
				responseObject: null,
				statusCode: 400,
			});
			return;
		}

		const serviceResponse = await locationService.checkShippingCost(origin, destination, weight, courier);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
