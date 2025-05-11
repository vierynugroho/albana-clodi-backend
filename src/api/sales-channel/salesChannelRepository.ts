import type { PrismaClient } from "@prisma/client";

export class SalesChannelRepository {
	public readonly salesChannel: PrismaClient["salesChannel"];
	constructor(public readonly prismaInit: PrismaClient) {
		this.salesChannel = prismaInit.salesChannel;
	}
}
