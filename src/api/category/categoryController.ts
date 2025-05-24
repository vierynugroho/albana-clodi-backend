import type { Request, RequestHandler, Response } from "express";
import { categoryService } from "./categoryService";

class CategoryController {
	public GetAll: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await categoryService.GetAll();
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public Detail = async (req: Request, res: Response) => {
		const serviceResponse = await categoryService.Detail(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public Create = async (req: Request, res: Response) => {
		const serviceResponse = await categoryService.Create(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public Update = async (req: Request, res: Response) => {
		const serviceResponse = await categoryService.Update(req.body, req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public Delete = async (req: Request, res: Response) => {
		const serviceResponse = await categoryService.Delete(req.params.id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const categoryController = new CategoryController();
