import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import type { CreateProductsType, Expenses } from "./model";
import { type ExpenseRepository, expenseRepository } from "./repository";

class ExpenseService {
	private readonly expenseRepo: ExpenseRepository;

	constructor() {
		this.expenseRepo = expenseRepository;
	}

	public createExpense = async (req: CreateProductsType) => {
		try {
			const result = await this.expenseRepo.client.expense.create({
				data: {
					itemName: req.itemName,
					itemPrice: req.itemPrice,
					itemTotal: req.itemTotal,
					totalPrice: req.totalPrice,
					personResponsible: req.personResponsible,
					note: req.note,
				},
			});

			return ServiceResponse.success("Berhasil menambahkan data pengeluaran", result, StatusCodes.CREATED);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal menambahkan data pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public updateExpense = async (id: string, data: Partial<Expenses>) => {
		try {
			const updatedExpense = await this.expenseRepo.client.expense.update({
				where: { id },
				data,
			});

			return ServiceResponse.success("Berhasil mengubah data pengeluaran", updatedExpense, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengubah data pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public deleteExpense = async (id: string) => {
		try {
			await this.expenseRepo.client.expense.delete({
				where: { id },
			});

			return ServiceResponse.success("Berhasil menghapus data pengeluaran", null, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal menghapus data pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public getExpenseDetail = async (id: string) => {
		try {
			const expense = await this.expenseRepo.client.expense.findUnique({
				where: { id },
			});

			if (!expense) {
				return ServiceResponse.failure("Data pengeluaran tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Berhasil mendapatkan detail pengeluaran", expense, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan detail pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public getAllExpenses = async () => {
		try {
			const expenses = await this.expenseRepo.client.expense.findMany();
			return ServiceResponse.success("Berhasil mendapatkan semua data pengeluaran", expenses, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan data pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const expenseService = new ExpenseService();
