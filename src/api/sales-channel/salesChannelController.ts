import type { Request, RequestHandler, Response } from "express";
import { salesChannelService } from "./salesChannelService";

class SalesChannelController {
	public getAllSalesChannel: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await salesChannelService.getAllSalesChannel();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailSalesChannel: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await salesChannelService.getDetailSalesChannel(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createSalesChannel: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await salesChannelService.createSalesChannel(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateSalesChannel: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await salesChannelService.updateSalesChannel(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteSalesChannel: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await salesChannelService.deleteSalesChannel(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const salesChannelController = new SalesChannelController();
