import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import type { CreateDeliveryPlaceType, UpdateDeliveryPlaceType } from "./model";
import { type DeliveryPlaceRepository, deliveryPlaceRepository } from "./repository";

class DeliveryPlaceService {
	private readonly deliveryPlaceRepo: DeliveryPlaceRepository;

	constructor() {
		this.deliveryPlaceRepo = deliveryPlaceRepository;
	}

	public getAll = async () => {
		try {
			const result = await this.deliveryPlaceRepo.client.deliveryPlace.findMany();
			return ServiceResponse.success("Berhasil mengambil data asal pengiriman", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data asal pengiriman", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public getOne = async (id: string) => {
		try {
			const result = await this.deliveryPlaceRepo.client.deliveryPlace.findUnique({
				where: { id },
			});

			if (!result) {
				return ServiceResponse.failure("Data asal pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Berhasil mengambil data asal pengiriman", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data asal pengiriman", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public create = async (data: CreateDeliveryPlaceType) => {
		try {
			const result = await this.deliveryPlaceRepo.client.deliveryPlace.create({
				data,
			});

			return ServiceResponse.success("Berhasil membuat data asal pengiriman", result, StatusCodes.CREATED);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal membuat data asal pengiriman", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public update = async (id: string, data: Partial<UpdateDeliveryPlaceType>) => {
		try {
			const existingDeliveryPlace = await this.deliveryPlaceRepo.client.deliveryPlace.findUnique({
				where: { id },
			});

			if (!existingDeliveryPlace) {
				return ServiceResponse.failure("Data asal pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			const result = await this.deliveryPlaceRepo.client.deliveryPlace.update({
				where: { id },
				data: {
					...data,
					updatedAt: new Date(),
				},
			});

			return ServiceResponse.success("Berhasil memperbarui data asal pengiriman", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal memperbarui data asal pengiriman", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public delete = async (id: string) => {
		try {
			const existingDeliveryPlace = await this.deliveryPlaceRepo.client.deliveryPlace.findUnique({
				where: { id },
			});

			if (!existingDeliveryPlace) {
				return ServiceResponse.failure("Data asal pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			const result = await this.deliveryPlaceRepo.client.deliveryPlace.delete({
				where: { id },
			});

			return ServiceResponse.success("Berhasil menghapus data asal pengiriman", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal menghapus data asal pengiriman", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const deliveryPlaceService = new DeliveryPlaceService();
