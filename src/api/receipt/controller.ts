import type { Request, RequestHandler, Response } from "express";
import { reportService } from "./service";

export class ReceiptController {
	public getReceipt: RequestHandler = async (req: Request, res: Response) => {
		const { orderId } = req.params;

		const serviceResponse = await reportService.getReceipt({
			order_id: orderId as string,
		});
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
