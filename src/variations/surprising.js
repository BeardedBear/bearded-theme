import {colors, levelColors, makeTheme} from "../mixins.js";

const primaryPurple = "#d24e4e";
const purple = makeTheme(
	"surprising-eggplant",
	Object.assign(
		{
			primary: primaryPurple,
			primaryalt: "#4e1d27",
			uiborder: "#0F0B14",
			uibackground: "#1a1424",
			uibackgroundalt: "#16111F",
			default: "#FFFFFF" + "90",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#695091",
		},
		colors,
		levelColors,
		{
			yellow: primaryPurple,
			salmon: "#D2CBD6",
			orange: "#775BA3",
			blue: "#00B3BD",
			green: "#52AB62",
			turquoize: primaryPurple,
			purple: "#CC9B52",
			red: "#C13838",
			warning: "#c96c20",
			info: "#00B3BD",
			success: "#52AB62",
			danger: "#E35535",
		},
	),
);

const primaryBlue = "#c93e71";
const blue = makeTheme(
	"surprising-blueberry",
	Object.assign(
		{
			primary: primaryBlue,
			primaryalt: "#4e1d37",
			uiborder: "#0F0B14",
			uibackground: "#121B2B",
			uibackgroundalt: "#0F1624",
			default: "#FFFFFF" + "90",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#3e668c",
		},
		colors,
		levelColors,
		{
			yellow: primaryBlue,
			salmon: "#CBCED6",
			orange: "#3e668c",
			blue: "#00B3BD",
			turquoize: primaryBlue,
			purple: "#CC9B52",
			red: "#C13838",
			warning: "#c96c20",
			info: "#00B3BD",
			danger: "#E35535",
		},
	),
);
const primaryWatermelon = "#da6c62";
const watermelon = makeTheme(
	"surprising-watermelon",
	Object.assign(
		{
			primary: primaryWatermelon,
			primaryalt: "#6a2b2a",
			uiborder: "#0C1617",
			uibackground: "#162729",
			uibackgroundalt: "#132224",
			default: "#FFFFFF" + "90",
			defaultMain: "#FFFFFF" + "80",
			defaultalt: "#2f636a",
		},
		colors,
		levelColors,
		{
			yellow: primaryWatermelon,
			salmon: "#CBCED6",
			orange: "#3F8891",
			blue: "#1ea8be",
			turquoize: primaryWatermelon,
			purple: "#ce64a0",
			green: "#5ca362",
			red: "#C25838",
			warning: "#c96c20",
			info: "#00B3BD",
			danger: "#E35535",
		},
	),
);

export default {purple, blue, watermelon};
