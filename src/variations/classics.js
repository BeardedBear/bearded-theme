import {colors, levelColors, makeTheme} from "../mixins.js";

const anthracite = makeTheme(
	"anthracite",
	Object.assign(
		{
			primary: "#9AA1AC",
			primaryalt: "#282c33",
			uiborder: "#0b0c0e",
			uibackground: "#1b1d22",
			uibackgroundalt: "#141519",
			default: "#bbbbbb",
			defaultalt: "#4c5767",
		},
		colors,
		levelColors,
	),
);

const light = makeTheme(
	"light",
	Object.assign(
		{
			primary: colors.blue,
			primaryalt: "#ffffff",
			uiborder: "#d1dadc",
			uibackground: "#ffffff",
			uibackgroundalt: "#f3f6f6",
			default: "#455059",
			defaultalt: "#8b99a7",
		},
		colors,
		levelColors,
	),
);

export default {anthracite, light};
