import type { Request, RequestHandler, Response } from "express";
import { shippingCostService } from "./service";

export class ShippingCostController {
	public calculate: RequestHandler = async (req: Request, res: Response) => {
		const { shipper_destination_id, receiver_destination_id, weight, itemValue, cod } = req.params;
		const serviceResponse = await shippingCostService.checkShippingCost(
			Number(shipper_destination_id),
			Number(receiver_destination_id),
			Number(weight),
			Number(itemValue),
			Boolean(cod),
		);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
