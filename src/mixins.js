import fs from "fs";
import syntax from "./syntax.js";
import ui from "./ui.js";

export const colors = {
	blue: "#3398DB",
	green: "#37ae6f",
	greenalt: "#7E9E2D",
	grey: "#808080",
	orange: "#D26D32",
	pink: "#CC71BC",
	purple: "#935cd1",
	red: "#C13838",
	salmon: "#de456b",
	transparent: "#00000000",
	turquoize: "#24B5A8",
	yellow: "#c9a022",
};

export const levelColors = {
	danger: colors.red,
	success: colors.green,
	warning: colors.orange,
	info: colors.blue,
};

export const vividColors = {
	blue: "#28A9FF",
	green: "#42DD76",
	greenalt: "#b7d175",
	grey: "#808080",
	orange: "#FF7135",
	pink: "#E66DFF",
	purple: "#A95EFF",
	red: "#D62C2C",
	salmon: "#FF478D",
	transparent: "#00000000",
	turquoize: "#14E5D4",
	yellow: "#FFB638",
};

export function makeTheme(name, themeColors) {
	let theme = Object.assign(themeColors);
	let base = {
		$schema: "vscode://schemas/color-theme",
		name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
		colors: ui(theme),
		tokenColors: syntax(theme),
	};

	fs.writeFile(
		`themes/bearded-theme-${name}.json`,
		JSON.stringify(base),
		(err) => {
			if (err) {
				console.log("error", err);
			}
		},
	);
}
