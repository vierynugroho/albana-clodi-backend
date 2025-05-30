import prismaClient from "@/config/prisma";
import type { PrismaClient } from "@prisma/client";

export class SalesChannelRepository {
	public readonly salesChannel: PrismaClient["salesChannel"];
	constructor() {
		this.salesChannel = prismaClient.salesChannel;
	}
}
