import { ServiceResponse } from "@/common/models/serviceResponse";
import type { Roles } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreateShopSettingType, UpdateShopSettingType } from "./model";
import { shopRepository } from "./repository";

class ShopService {
	public async createShopSetting(data: CreateShopSettingType["body"]) {
		try {
			const existingSettings = await shopRepository.client.shopSetting.findFirst();

			if (existingSettings) {
				return ServiceResponse.failure("Pengaturan toko sudah ada", null, StatusCodes.BAD_REQUEST);
			}

			const shopSetting = await shopRepository.client.shopSetting.create({
				data: {
					name: data.name,
					description: data.description,
					email: data.email,
					phoneNumber: data.phoneNumber,
					address: data.address,
					owner: data.owner,
					logo: data.logo,
					banner: data.banner,
				},
			});

			return ServiceResponse.success("Berhasil membuat pengaturan toko", shopSetting, StatusCodes.CREATED);
		} catch (error) {
			return ServiceResponse.failure(
				"Terjadi kesalahan saat membuat pengaturan toko",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	}

	public async getShopSetting() {
		try {
			const shopSetting = await shopRepository.client.shopSetting.findFirst();

			if (!shopSetting) {
				return ServiceResponse.failure("Pengaturan toko belum dibuat", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Berhasil mendapatkan pengaturan toko", shopSetting, StatusCodes.OK);
		} catch (error) {
			return ServiceResponse.failure(
				"Terjadi kesalahan saat mengambil pengaturan toko",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	}

	public async updateShopSetting(updateData: UpdateShopSettingType["body"]) {
		try {
			const existingSettings = await shopRepository.client.shopSetting.findFirst();

			if (!existingSettings) {
				return ServiceResponse.failure("Pengaturan toko belum dibuat", null, StatusCodes.NOT_FOUND);
			}

			const updatedShopSetting = await shopRepository.client.shopSetting.update({
				where: { id: existingSettings.id },
				data: updateData,
			});

			return ServiceResponse.success("Berhasil mengupdate pengaturan toko", updatedShopSetting, StatusCodes.OK);
		} catch (error) {
			return ServiceResponse.failure(
				"Terjadi kesalahan saat mengupdate pengaturan toko",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	}
}

export const shopService = new ShopService();
