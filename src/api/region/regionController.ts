import { ServiceResponse } from "@/common/models/serviceResponse";
import type { Request, RequestHandler, Response } from "express";
import type { RequestQueryProvinceType } from "./regionModel";
import { regionService } from "./regionService";

class RegionController {
	public getAllProvince: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await regionService.getAllProvince(req.query as RequestQueryProvinceType);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getCityByProvinceId: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await regionService.getCityByProvinceId(BigInt(req.params.id), req.query);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDistrictByCityId: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await regionService.getDistrictByCityId(BigInt(req.params.id), req.query);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getVillageByDistrictId: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await regionService.getVillageByDistrictId(BigInt(req.params.id), req.query);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const regionController = new RegionController();
