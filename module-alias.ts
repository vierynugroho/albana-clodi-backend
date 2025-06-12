import path from "node:path";
import moduleAlias from "module-alias";

// Log untuk melihat ke mana @ mengarah
console.log("__dirname:", __dirname);

try {
	if (process.env.NODE_ENV === "production") {
		const prodPath = path.join(__dirname, "dist/src");
		console.log("Production @ path:", prodPath);
		moduleAlias.addAliases({
			"@": prodPath,
		});
	} else {
		const devPath = path.join(__dirname, "src");
		console.log("Development @ path:", devPath);
		moduleAlias.addAliases({
			"@": devPath,
		});
	}
} catch (error) {
	console.error("Error saat mengatur module alias:", error);
	console.error("Tipe __dirname:", typeof __dirname);
	// Fallback jika terjadi error
	const basePath = typeof __dirname === "string" ? __dirname : process.cwd();
	console.log("Menggunakan fallback path:", basePath);
	moduleAlias.addAliases({
		"@": path.join(basePath, process.env.NODE_ENV === "production" ? "dist/src" : "src"),
	});
}
