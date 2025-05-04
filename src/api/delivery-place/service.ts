import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";

class DeliveryPlaceService {
	public getAll = async () => {
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

	public getOne = async (provinceId: string) => {
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

	public create = async (provinceId: string) => {
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

	public update = async (provinceId: string) => {
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

	public delete = async (provinceId: string) => {
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
}

export const deliveryPlaceService = new DeliveryPlaceService();
