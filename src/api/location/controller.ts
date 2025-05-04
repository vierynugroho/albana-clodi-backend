import type { Request, RequestHandler, Response } from "express";
import { locationService } from "./service";

export class LocationController {
	public getProvinces: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await locationService.getProvinces();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getCities: RequestHandler = async (req: Request, res: Response) => {
		const { province_id } = req.params;
		const serviceResponse = await locationService.getCities(province_id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
