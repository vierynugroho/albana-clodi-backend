import prismaClient from "@/config/prisma";

export class AuthRepository {
	public get client() {
		return prismaClient;
	}
}

export const authRepository = new AuthRepository();
