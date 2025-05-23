import bwipjs from "bwip-js";

/**
 * Generate a barcode buffer from a given code
 * @param code Product code to encode
 * @returns PNG buffer of the generated barcode
 */
export const generateBarcode = async (code: string): Promise<Buffer> => {
	try {
		const buffer = await bwipjs.toBuffer({
			bcid: "code128", // Barcode type
			text: code, // Text to encode
			scale: 3,
			height: 10,
			includetext: true,
			textxalign: "center",
		});

		return buffer;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Failed to generate barcode: ${error.message}`);
		}
		throw new Error("Failed to generate barcode: Unknown error");
	}
};
