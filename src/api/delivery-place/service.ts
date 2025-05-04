import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";

interface GetAllExpensesParams {
	startDate?: string;
	endDate?: string;
	month?: string;
	year?: string;
	week?: string;
}

class LocationService {
	public getProvinces = async () => {
		try {
			const API_KEY = process.env.RAJAONGKIR_SHIPPING_COST_API_KEY;
			const BASE_URL = process.env.RAJAONGKIR_BASE_URL;
			console.log(API_KEY);
			const response = await fetch(`${BASE_URL}/province`, {
				headers: { key: API_KEY as string },
			});
			const data = await response.json();

			if (data.rajaongkir.status.code === 400) {
				return ServiceResponse.failure(data.rajaongkir.status.description, null, StatusCodes.BAD_REQUEST);
			}

			return ServiceResponse.success("Berhasil mengambil data provinsi", data.rajaongkir.results, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data provinsi", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public getCities = async (provinceId: string) => {
		try {
			const API_KEY = process.env.RAJAONGKIR_SHIPPING_COST_API_KEY;
			const BASE_URL = process.env.RAJAONGKIR_BASE_URL;

			const response = await fetch(`${BASE_URL}/city`, {
				headers: { key: API_KEY as string },
				method: "GET",
			});
			const data = await response.json();

			if (data.rajaongkir.status.code === 400) {
				return ServiceResponse.failure(data.rajaongkir.status.description, null, StatusCodes.BAD_REQUEST);
			}

			const filteredCities = data.rajaongkir.results.filter(
				(city: { province_id: string }) => city.province_id === provinceId,
			);

			return ServiceResponse.success("Berhasil mengambil data kota", filteredCities, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data kota", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public checkShippingCost = async (
		originCityId: string,
		destinationCityId: string,
		weight: number,
		courier: string,
	) => {
		try {
			const API_KEY = process.env.RAJAONGKIR_SHIPPING_COST_API_KEY;
			const BASE_URL = process.env.RAJAONGKIR_BASE_URL;

			const formData = new URLSearchParams();
			formData.append("origin", originCityId);
			formData.append("destination", destinationCityId);
			formData.append("weight", weight.toString());
			formData.append("courier", courier);

			const response = await fetch(`${BASE_URL}/cost`, {
				method: "POST",
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

export const locationService = new LocationService();
