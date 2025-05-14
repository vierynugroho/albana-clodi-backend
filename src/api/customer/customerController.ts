import { ServiceResponse } from "@/common/models/serviceResponse";
import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { customerService } from "./customerService";

export class CustomerController {
	public getAllCustomers: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.getAllCustomers(req.query);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.getDetailCustomer(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.createCustomer(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.updateCustomer(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteCustomer: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.deleteCustomer(req.params.id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public exportCustomers: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await customerService.exportCustomers(req.query);

		if (
			serviceResponse.success &&
			serviceResponse.responseObject &&
			typeof serviceResponse.responseObject === "object" &&
			"buffer" in serviceResponse.responseObject
		) {
			res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			res.setHeader("Content-Disposition", `attachment; filename=${serviceResponse.responseObject.fileName}`);
			res.status(serviceResponse.statusCode).send(serviceResponse.responseObject.buffer);
		} else {
			res.status(serviceResponse.statusCode).send(serviceResponse);
		}
	};

	public importCustomers: RequestHandler = async (req: Request, res: Response) => {
		const multerFile = req.file as Express.Multer.File;

		if (!multerFile) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.send(ServiceResponse.failure("File tidak ditemukan", null, StatusCodes.BAD_REQUEST));
			return;
		}

		const serviceResponse = await customerService.importCustomers(multerFile.buffer);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const customerController = new CustomerController();
