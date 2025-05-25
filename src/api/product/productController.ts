import { ServiceResponse } from "@/common/models/serviceResponse";
import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UpdateCategoryRequestSchema } from "../category/categoryModel";
import { CreateProductRequestSchema, type RequestQueryProductType, UpdateProductRequestSchema } from "./productModel";
import { productService } from "./productService";

class ProductController {
	public getAllProducts: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await productService.getAllProducts(req.query as unknown as RequestQueryProductType);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.getDetailProduct(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createProduct: RequestHandler = async (req: Request, res: Response) => {
		const multerFile = req.files as Express.Multer.File[];
		const parsedBody = CreateProductRequestSchema.shape.body.parse(req.body);
		const serviceResponse = await productService.createProduct(parsedBody, multerFile);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const multerFile = req.files as Express.Multer.File[];
		const parsedBody = UpdateProductRequestSchema.shape.body.parse(req.body);
		const serviceResponse = await productService.updateProduct(parsedBody, id, multerFile);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.deleteProduct(id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public exportProducts: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await productService.exportProducts(req.query);

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

	public importProducts: RequestHandler = async (req: Request, res: Response) => {
		const multerFile = req.file;

		if (!multerFile) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.send(ServiceResponse.failure("File tidak ditemukan", null, StatusCodes.BAD_REQUEST));
			return;
		}

		const serviceResponse = await productService.importProducts(multerFile.buffer);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const productController = new ProductController();
