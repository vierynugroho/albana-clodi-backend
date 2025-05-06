import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";

class ShippingCostService {
	public checkShippingCost = async (
		shipper_destination_id: number,
		receiver_destination_id: number,
		weight: number,
		item_value: number,
		cod: boolean,
	) => {
		try {
			const API_KEY = process.env.RAJAONGKIR_SHIPPING_DELIVERY_API_KEY;
			const BASE_URL = process.env.RAJAONGKIR_BASE_URL;

			const formData = new URLSearchParams();
			formData.append("shipper_destination_id", shipper_destination_id.toString());
			formData.append("receiver_destination_id", receiver_destination_id.toString());
			formData.append("weight", weight.toString());
			formData.append("item_value", item_value.toString());
			formData.append("cod", cod.toString());

			const response = await fetch(`${BASE_URL}/calculate`, {
				method: "GET",
				headers: {
					key: API_KEY as string,
					"content-type": "application/x-www-form-urlencoded",
				},
				body: formData,
			});
			const data = await response.json();

			if (data.rajaongkir.status.code === 400) {
				return ServiceResponse.failure(data.rajaongkir.status.description, null, StatusCodes.BAD_REQUEST);
			}

			return ServiceResponse.success("Successfully calculated shipping cost", data.rajaongkir.results, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Failed to calculate shipping cost", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const shippingCostService = new ShippingCostService();
