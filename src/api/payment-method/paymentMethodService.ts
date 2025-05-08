import { ServiceResponse } from "@/common/models/serviceResponse";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreatePaymentMethodType, UpdatePaymentMethodType } from "./paymentMethodModel";
import { PaymentMethodRepository } from "./paymentMethodRepository";

class PaymentMethodService {
	public readonly paymentMethodRepo: PaymentMethodRepository["paymentMethodRepo"];

	constructor(paymentMethodRepository = new PaymentMethodRepository(new PrismaClient())) {
		this.paymentMethodRepo = paymentMethodRepository.paymentMethodRepo;
	}

	public getAllPayments = async () => {
		try {
			const payments = await this.paymentMethodRepo.findMany();

			return ServiceResponse.success("Payment methods retrieved successfully", payments, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get all payments: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all payments.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public getDetailPayment = async (paymentMethodId: string) => {
		try {
			const foundPayment = await this.paymentMethodRepo.findUnique({ where: { id: paymentMethodId } });
			if (!foundPayment) {
				return ServiceResponse.failure("Payment method not found", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Payment method retrieved successfully", foundPayment, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error get detail payments: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get detail payments.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public createPayment = async (req: CreatePaymentMethodType) => {
		try {
			const foundPaymentMethod = await this.paymentMethodRepo.findFirst({
				where: {
					OR: [
						{
							name: req.name,
						},
						{
							accountNumber: req.accountNumber,
						},
					],
				},
			});
			if (foundPaymentMethod) {
				return ServiceResponse.failure("Payment method already exist", null, StatusCodes.BAD_REQUEST);
			}

			await this.paymentMethodRepo.create({ data: req });

			return ServiceResponse.success("Payment method created successfully", null, StatusCodes.CREATED);
		} catch (ex) {
			const errorMessage = `Error create payments: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create payments.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public updatePayment = async (paymentMethodId: string, req: UpdatePaymentMethodType) => {
		try {
			const foundPayment = await this.paymentMethodRepo.findUnique({ where: { id: paymentMethodId } });
			if (!foundPayment) {
				return ServiceResponse.failure("Payment method not found", null, StatusCodes.NOT_FOUND);
			}

			await this.paymentMethodRepo.update({
				where: { id: paymentMethodId },
				data: req,
			});

			return ServiceResponse.success("Payment method updated successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error update payments: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while update payments.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public deletePayment = async (paymentMethodId: string) => {
		try {
			const foundPayment = await this.paymentMethodRepo.findUnique({ where: { id: paymentMethodId } });
			if (!foundPayment) {
				return ServiceResponse.failure("Payment method not found", null, StatusCodes.NOT_FOUND);
			}

			await this.paymentMethodRepo.delete({ where: { id: paymentMethodId } });

			return ServiceResponse.success("Payment method deleted successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error update payments: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while update payments.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const paymentMethodService = new PaymentMethodService();
