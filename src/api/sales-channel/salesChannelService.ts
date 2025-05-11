import { ServiceResponse } from "@/common/models/serviceResponse";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreateSalesChannelType, UpdateSalesChannelType } from "./salesChannelModel";
import { SalesChannelRepository } from "./salesChannelRepository";

class SalesChannelService {
	public readonly salesChannelRepo: SalesChannelRepository["salesChannel"];
	constructor(public readonly salesChannelRepository = new SalesChannelRepository(new PrismaClient())) {
		this.salesChannelRepo = salesChannelRepository.salesChannel;
	}

	public getAllSalesChannel = async () => {
		try {
			const foundSalesChannels = await this.salesChannelRepo.findMany();

			return ServiceResponse.success("Sales channels retrieved successfully", foundSalesChannels, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get all sales channel: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all sales channel.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public getDetailSalesChannel = async (salesChannelId: string) => {
		try {
			const foundSalesChannel = await this.salesChannelRepo.findFirst({
				where: {
					id: salesChannelId,
				},
			});
			if (!foundSalesChannel) {
				return ServiceResponse.failure("Sales channel not found", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Sales channel retrieved successfully", foundSalesChannel, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get all sales channel: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all sales channel.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public createSalesChannel = async (req: CreateSalesChannelType) => {
		try {
			const foundSalesChannel = await this.salesChannelRepo.findFirst({
				where: {
					name: req.name,
				},
			});
			if (foundSalesChannel) {
				return ServiceResponse.failure("Sales channel already exist", null, StatusCodes.BAD_REQUEST);
			}

			await this.salesChannelRepo.create({ data: req });

			return ServiceResponse.success("Sales channel created successfully", null, StatusCodes.CREATED);
		} catch (ex) {
			const errorMessage = `Error create SalesChannel: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create SalesChannel.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public updateSalesChannel = async (salesChannelId: string, req: UpdateSalesChannelType) => {
		try {
			const foundSalesChannel = await this.salesChannelRepo.findFirst({
				where: {
					id: salesChannelId,
				},
			});
			if (!foundSalesChannel) {
				return ServiceResponse.failure("Sales channel not found", null, StatusCodes.NOT_FOUND);
			}

			await this.salesChannelRepo.update({ where: { id: salesChannelId }, data: req });

			return ServiceResponse.success("Sales channel updated successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error create SalesChannel: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create SalesChannel.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public deleteSalesChannel = async (salesChannelId: string) => {
		try {
			const foundSalesChannel = await this.salesChannelRepo.findFirst({
				where: {
					id: salesChannelId,
				},
			});
			if (!foundSalesChannel) {
				return ServiceResponse.failure("Sales channel not found", null, StatusCodes.NOT_FOUND);
			}

			await this.salesChannelRepo.delete({ where: { id: salesChannelId } });

			return ServiceResponse.success("Sales channel deleted successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error create SalesChannel: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create SalesChannel.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const salesChannelService = new SalesChannelService();
