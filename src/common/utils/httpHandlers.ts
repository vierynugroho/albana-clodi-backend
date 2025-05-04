import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { ZodError, ZodSchema } from "zod";

import { ServiceResponse } from "@/common/models/serviceResponse";

export const validateRequest = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.parseAsync({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		next();
	} catch (err) {
		const statusCode = StatusCodes.BAD_REQUEST;
		// Format error path agar lebih readable
		let responseObject: ZodError | unknown;
		if ((err as ZodError).errors) {
			const formattedErrors = (err as ZodError).errors.map((error) => {
				const pathString = error.path.join(".");
				return {
					...error,
					path: pathString,
				};
			});
			responseObject = formattedErrors;
		} else {
			responseObject = err;
		}
		const serviceResponse = ServiceResponse.failure("Validation Error", responseObject, statusCode);

		res.status(serviceResponse.statusCode).send(serviceResponse);
	}
};
