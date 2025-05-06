import { ServiceResponse } from "@/common/models/serviceResponse";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreateCustomerType } from "./customerModel";
import { CustomerRepository } from "./customerRepository";

export class CustomerService {
	private readonly customerRepo: CustomerRepository;

	constructor(customerRepository = new CustomerRepository(new PrismaClient())) {
		this.customerRepo = customerRepository;
	}
	public getAllCustomers = async () => {};

	public getDetailCustomer = async () => {};

	public createCustomer = async (req: CreateCustomerType) => {
		try {
			const foundCustomer = this.customerRepo.client.customer.findFirst({
				where: {
					OR: [{ email: req.email }, { name: req.name }, { phoneNumber: req.phoneNumber }],
				},
			});
			if (!foundCustomer) {
				return ServiceResponse.failure("Customer already exists", null, StatusCodes.BAD_REQUEST);
			}
		} catch (ex) {
			const errorMessage = `Error get all customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while get all customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public updateCustomer = async () => {};

	public deleteCustomer = async () => {};
}

export const customerService = new CustomerService();
