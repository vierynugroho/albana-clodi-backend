import type { AuthRequest } from "@/common/types/auth";
import type { RequestHandler, Response } from "express";
import type { CreateShopSettingType, UpdateShopSettingType } from "./model";
import { shopService } from "./service";

export class ShopController {
	public createShopSetting: RequestHandler = async (req: AuthRequest, res: Response) => {
		const shopSettingData = req.body as CreateShopSettingType["body"];

		// Menangani file dari multer
		const files = req.files as { [fieldname: string]: Express.Multer.File[] };

		if (files?.logo?.length > 0) {
			shopSettingData.logo = files.logo[0].buffer.toString("base64");
		}

		if (files?.banner?.length > 0) {
			shopSettingData.banner = files.banner[0].buffer.toString("base64");
		}

		const serviceResponse = await shopService.createShopSetting(shopSettingData);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getShopSetting: RequestHandler = async (req: AuthRequest, res: Response) => {
		const serviceResponse = await shopService.getShopSetting();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateShopSetting: RequestHandler = async (req: AuthRequest, res: Response): Promise<void> => {
		const updateData = req.body as UpdateShopSettingType["body"];

		// Menangani file dari multer
		const files = req.files as { [fieldname: string]: Express.Multer.File[] };

		if (files?.logo?.length > 0) {
			updateData.logo = files.logo[0].buffer.toString("base64");
		}

		if (files?.banner?.length > 0) {
			updateData.banner = files.banner[0].buffer.toString("base64");
		}

		const serviceResponse = await shopService.updateShopSetting(updateData);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}
