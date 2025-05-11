import type { UUID } from "node:crypto";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { type Customer, type Prisma, PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type {
	CreateCustomerType,
	DeleteCustomerSchema,
	RequestQueryCustomerType,
	UpdateCustomerType,
} from "./customerModel";
import { CustomerRepository } from "./customerRepository";

export class CustomerService {
	private readonly customerRepo: CustomerRepository["customer"];

	constructor(customerRepository = new CustomerRepository(new PrismaClient())) {
		this.customerRepo = customerRepository.customer;
	}

	public getAllCustomers = async (reqQuery: RequestQueryCustomerType) => {
		try {
			const { page = 1, limit = 10, category, sort, status, order } = reqQuery;
			const skip = (page - 1) * limit;
			const query: Prisma.CustomerFindManyArgs = {};
			const sortableFields = ["createdAt", "name", "email"];

			if (category) {
				query.where = {
					...query.where,
					category: category,
				};
			}

			if (status) {
				query.where = {
					...query.where,
					status: status,
				};
			}

			if (sort && sortableFields.includes(sort)) {
				query.orderBy = {
					[sort]: order,
				};
			} else {
				query.orderBy = {
					createdAt: "asc",
				};
			}

			const [customers, total] = await Promise.all([
				this.customerRepo.findMany({ ...query, skip, take: limit }),
				this.customerRepo.count(),
			]);

			const response: PaginatedResponse<Customer> = {
				data: customers as unknown as Customer[],
				meta: {
					currentPage: page,
					totalPages: Math.ceil(total / limit),
					totalItems: total,
				},
			};
			return ServiceResponse.success("Customers retrieved successfully", response, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error create customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public getDetailCustomer = async (customerId: string) => {
		try {
			const foundCustomer = await this.customerRepo.findFirst({ where: { id: customerId } });
			if (!foundCustomer) {
				return ServiceResponse.failure("Customer not found", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Customer retrieved successfully", foundCustomer, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error detail customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while detail customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public createCustomer = async (req: CreateCustomerType) => {
		try {
			const foundCustomer = await this.customerRepo.findFirst({
				where: {
					OR: [{ email: req.email }, { name: req.name }, { phoneNumber: req.phoneNumber }],
				},
			});
			if (foundCustomer) {
				return ServiceResponse.failure("Customer already exists", null, StatusCodes.BAD_REQUEST);
			}

			await this.customerRepo.create({ data: req });

			return ServiceResponse.success("Customer created successfully", null, StatusCodes.CREATED);
		} catch (ex) {
			const errorMessage = `Error create customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while create customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public updateCustomer = async (customerId: string, req: UpdateCustomerType) => {
		try {
			const foundCustomer = await this.customerRepo.findFirst({
				where: {
					id: customerId,
				},
			});
			if (!foundCustomer) {
				return ServiceResponse.failure("Customer not found", null, StatusCodes.BAD_REQUEST);
			}

			await this.customerRepo.update({ where: { id: customerId }, data: req as Prisma.CustomerUpdateInput });

			return ServiceResponse.success("Customer updated successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error update customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while update customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public deleteCustomer = async (customerId: string, req: DeleteCustomerSchema) => {
		try {
			if (req && Array.isArray(req.customerIds) && req.customerIds?.length > 0) {
				const foundCustomers = await this.customerRepo.findMany({
					where: {
						id: {
							in: req.customerIds,
						},
					},
				});
				if (!foundCustomers.length) {
					return ServiceResponse.failure("Customers not found", null, StatusCodes.NOT_FOUND);
				}

				await this.customerRepo.deleteMany({ where: { id: { in: req.customerIds } } });
			} else {
				const foundCustomer = await this.customerRepo.findUnique({ where: { id: customerId } });
				if (!foundCustomer) {
					return ServiceResponse.failure("Customer not found", null, StatusCodes.NOT_FOUND);
				}

				await this.customerRepo.delete({ where: { id: customerId } });
			}

			return ServiceResponse.failure("Customer deleted successfully", null, StatusCodes.OK);
		} catch (ex) {
			const errorMessage = `Error delete customer: ${(ex as Error).message}`;
			return ServiceResponse.failure(
				"An error occurred while delete customer.",
				errorMessage,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const customerService = new CustomerService();
