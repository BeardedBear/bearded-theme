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

const anthraciteCandy = makeTheme(
	"anthracite-candy",
	Object.assign(
		{
			primary: "#9AA2A6",
			primaryalt: "#27292E",
			uiborder: "#1C1E21",
			uibackground: "#2A2D33",
			uibackgroundalt: "#26282C",
			default: "#FFFFFF",
			defaultMain: "#FFFFFF",
			defaultalt: "#73737F",
		},
		{
			blue: "#62c4f5",
			green: "#72e8ab",
			greenalt: "#7E9E2D",
			grey: "#808080",
			orange: "#fa9d66",
			pink: "#e88bd8",
			purple: "#ca9cff",
			red: "#ff5757",
			salmon: "#ff6982",
			transparent: "#00000000",
			turquoize: "#42edde",
			yellow: "#fad76e",
		},
		{
			danger: "#ff5757",
			success: "#63c793",
			warning: "#e69a6e",
			info: "#62c4f5",
		},
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

export default {anthracite, anthraciteCandy, light};
