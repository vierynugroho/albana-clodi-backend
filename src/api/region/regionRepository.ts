import type { PrismaClient, Province } from "@prisma/client";

export class RegionRepository {
	public readonly province: PrismaClient["province"];
	public readonly city: PrismaClient["city"];
	public readonly district: PrismaClient["district"];
	public readonly village: PrismaClient["village"];

	constructor(private readonly prismaInit: PrismaClient) {
		this.province = prismaInit.province;
		this.city = prismaInit.city;
		this.district = prismaInit.district;
		this.village = prismaInit.village;
	}
}
