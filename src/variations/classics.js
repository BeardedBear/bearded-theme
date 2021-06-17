import {colors, levelColors, makeTheme} from "../mixins.js";

const anthracite = makeTheme(
	"anthracite",
	Object.assign(
		{
			primary: "#76808c",
			primaryalt: "#26282e",
			uiborder: "#0b0c0e",
			uibackground: "#181a1f",
			uibackgroundalt: "#141519",
			default: "#bbbbbb",
			defaultMain: "#bbbbbb",
			defaultalt: "#464b52",
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
			defaultMain: "#455059",
			defaultalt: "#8b99a7",
		},
		colors,
		levelColors,
	),
);

export default {anthracite, light};
