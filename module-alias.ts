import path from "node:path";
import moduleAlias from "module-alias";

console.log();
// Log untuk menunjukkan ke mana alias @ mengarah
if (process.env.NODE_ENV === "production") {
	const aliasPath = path.join(__dirname, "dist/src");
	console.log(`Alias @ mengarah ke: ${aliasPath}`);
	moduleAlias.addAliases({
		"@": aliasPath,
	});
} else {
	const aliasPath = path.join(__dirname, "src");
	console.log(`Alias @ mengarah ke: ${aliasPath}`);
	moduleAlias.addAliases({
		"@": aliasPath,
	});
}
