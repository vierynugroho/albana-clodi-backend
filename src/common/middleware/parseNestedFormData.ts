import type { NextFunction, Request, Response } from "express";

type NestedData = Record<string, unknown> | unknown[];

export const parseNestedBody = (req: Request, res: Response, next: NextFunction) => {
	const data: Record<string, unknown> = {};

	for (const key in req.body) {
		if (Object.prototype.hasOwnProperty.call(req.body, key)) {
			const value = req.body[key];

			if (/\[\d+\]/.test(key)) {
				const keys = key.replace(/\]/g, "").split(/\.|\[/);

				keys.reduce<NestedData>((acc, k, idx): NestedData => {
					const isArrayIndex = /^\d+$/.test(k);

					if (idx === keys.length - 1) {
						if (isArrayIndex) {
							let currentAcc = acc as unknown[];
							if (!Array.isArray(currentAcc)) {
								currentAcc = [];
							}
							currentAcc[Number.parseInt(k, 10)] = value;
							return currentAcc;
						}
						(acc as Record<string, unknown>)[k] = value;
						return acc;
					}

					if (isArrayIndex) {
						let currentAcc = acc as unknown[];
						if (!Array.isArray(currentAcc)) {
							currentAcc = [];
						}
						if (!currentAcc[Number.parseInt(k, 10)]) {
							const nextKey = keys[idx + 1];
							currentAcc[Number.parseInt(k, 10)] = /^\d+$/.test(nextKey) ? [] : {};
						}
						return currentAcc[Number.parseInt(k, 10)] as NestedData;
					}

					if (!(acc as Record<string, unknown>)[k]) {
						const nextKey = keys[idx + 1];
						(acc as Record<string, unknown>)[k] = /^\d+$/.test(nextKey) ? [] : {};
					}
					return (acc as Record<string, unknown>)[k] as NestedData;
				}, data);
			} else {
				const objectPath = require("object-path");
				objectPath.set(data, key, value);
			}
		}
	}

	console.log("Parsed body:", data);
	req.body = data;
	next();
};
