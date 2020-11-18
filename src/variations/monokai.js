import {colors, levelColors, makeTheme} from "../mixins.js";

const monokaiColors = {
	yellow: "#ffd866",
	salmon: "#ff6188",
	orange: "#fc9867",
	blue: "#78dce8",
	pink: "#e991e3",
	green: "#a9dc76",
	turquoize: "#78e8c6",
	purple: "#ab9df2",
	red: "#fc6a67",
	warning: "#fc6a67",
	info: "#00B3BD",
	success: "#52AB62",
	danger: "#E35535",
};

const primaryMonokai = "#9a90a3";
const monokai = makeTheme(
	"monokai-terra",
	Object.assign(
		{
			primary: primaryMonokai,
			primaryalt: "#3e3942",
			uiborder: "#131114",
			uibackground: "#262329",
			uibackgroundalt: "#1e1c21",
			default: "#FFFFFF" + "cc",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#5c535c",
		},
		colors,
		levelColors,
		monokaiColors,
	),
);
const primaryMonokaiMetallian = "#8991ab";
const monokaiMetallian = makeTheme(
	"monokai-metallian",
	Object.assign(
		{
			primary: primaryMonokaiMetallian,
			primaryalt: "#363a4a",
			uiborder: "#0e0e12",
			uibackground: "#1f222e",
			uibackgroundalt: "#191b24",
			default: "#FFFFFF" + "cc",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#505766",
		},
		colors,
		levelColors,
		monokaiColors,
	),
);

export default {monokai, monokaiMetallian};
