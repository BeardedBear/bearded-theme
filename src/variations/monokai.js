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

const monokai = makeTheme(
	"monokai-terra",
	Object.assign(
		{
			primary: "#a59cad",
			primaryalt: "#3e3942",
			uiborder: "#131114",
			uibackground: "#262329",
			uibackgroundalt: "#1e1c21",
			default: "#FFFFFF" + "cc",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#8a7f8a",
		},
		colors,
		levelColors,
		monokaiColors,
	),
);
const monokaiMetallian = makeTheme(
	"monokai-metallian",
	Object.assign(
		{
			primary: "#989eb3",
			primaryalt: "#363a4a",
			uiborder: "#0e0e12",
			uibackground: "#1f222e",
			uibackgroundalt: "#191b24",
			default: "#FFFFFF" + "cc",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#868d9c",
		},
		colors,
		levelColors,
		monokaiColors,
	),
);
const monokaiLight = makeTheme(
	"monokai-light",
	Object.assign(
		{
			primary: "#03ab97",
			primaryalt: "#f2f2f3",
			uiborder: "#d6d7db",
			uibackground: "#f0f1f4",
			uibackgroundalt: "#e8eaed",
			default: "#606270",
			defaultMain: "#606270" + "cc",
			defaultalt: "#868d9c",
		},
		colors,
		levelColors,
		{
			yellow: "#e0a800",
			salmon: "#ff6188",
			orange: "#ed7940",
			blue: "#00b0d4",
			pink: "#e991e3",
			green: "#65b315",
			turquoize: "#00baa4",
			purple: "#9682fa",
			red: "#fc6a67",
			warning: "#ed7940",
			info: "#00b0d4",
			success: "#65b315",
			danger: "#fc6a67",
		},
	),
);

export default {monokai, monokaiMetallian, monokaiLight};
