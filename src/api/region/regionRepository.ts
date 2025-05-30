import prismaClient from "@/config/prisma";
import type { PrismaClient, Province } from "@prisma/client";

export class RegionRepository {
	public readonly province: PrismaClient["province"];
	public readonly city: PrismaClient["city"];
	public readonly district: PrismaClient["district"];
	public readonly village: PrismaClient["village"];

	constructor() {
		this.province = prismaClient.province;
		this.city = prismaClient.city;
		this.district = prismaClient.district;
		this.village = prismaClient.village;
	}
}
