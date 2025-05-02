import { randomUUID } from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import pino from "pino";
import pinoHttp from "pino-http";

import { env } from "@/common/utils/envConfig";

/**
 * Konfigurasi logger utama
 */
const logger = pino({
	level: env.isProduction ? "info" : "debug",
	transport: env.isProduction ? undefined : { target: "pino-pretty" },
});

/**
 * Menentukan level log berdasarkan status code response
 * @param status - HTTP status code
 * @returns Level log yang sesuai
 */
const getLogLevel = (status: number): "error" | "warn" | "info" => {
	if (status >= StatusCodes.INTERNAL_SERVER_ERROR) return "error";
	if (status >= StatusCodes.BAD_REQUEST) return "warn";
	return "info";
};

/**
 * Middleware untuk menambahkan ID unik pada setiap request
 */
const addRequestId = (req: Request, res: Response, next: NextFunction): void => {
	// Gunakan ID yang sudah ada atau buat yang baru
	const existingId = req.headers["x-request-id"] as string;
	const requestId = existingId || randomUUID();

	// Set ID untuk digunakan downstream
	req.headers["x-request-id"] = requestId;
	res.setHeader("X-Request-Id", requestId);

	next();
};

/**
 * Konfigurasi HTTP logger menggunakan pino-http
 */
const httpLogger = pinoHttp({
	logger,
	genReqId: (req) => req.headers["x-request-id"] as string,
	customLogLevel: (_req, res) => getLogLevel(res.statusCode),
	customSuccessMessage: (req, res) => {
		// Jika status code menunjukkan error, jangan tampilkan "completed"
		if (res.statusCode >= StatusCodes.BAD_REQUEST) {
			return `${req.method} ${req.url}`;
		}
		return `${req.method} ${req.url} completed`;
	},
	customErrorMessage: (_req, res: Response) => {
		console.log(res.err);
		const errorMessage = res.locals.err?.message || `Status code: ${res.statusCode}`;
		return `Request failed with error: ${errorMessage}`;
	},
	serializers: {
		req: (req) => ({
			method: req.method,
			url: req.url,
			id: req.id,
		}),
		err: (err) => ({
			type: err.type,
			message: err.message,
			stack: err.stack,
			code: err.code,
		}),
	},
});

/**
 * Middleware untuk menangkap body response (hanya di non-production)
 */
const captureResponseBody = (req: Request, res: Response, next: NextFunction): void => {
	if (!env.isProduction) {
		const originalSend = res.send;
		res.send = function (body) {
			res.locals.responseBody = body;
			return originalSend.call(this, body);
		};
	}
	next();
};

// Ekspor middleware dalam urutan yang tepat
export default [addRequestId, captureResponseBody, httpLogger];
