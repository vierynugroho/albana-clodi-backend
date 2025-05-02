export function toWIBShort(date: Date): Date {
	// Mengkonversi ke zona waktu WIB (Asia/Jakarta) tanpa mengubah jenis data
	const wibDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
	return wibDate;
}

export function toISOString(date: Date): string {
	return date.toISOString();
}

export function parseISODate(dateString: string): Date {
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) {
		throw new Error("Invalid date format. Expected ISO-8601 DateTime.");
	}
	return date;
}
