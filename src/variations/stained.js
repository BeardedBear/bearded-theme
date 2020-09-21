import {colors, levelColors, makeTheme, vividColors} from "../mixins.js";

const purple = makeTheme(
	"purple",
	Object.assign(
		{
			primary: "#BA505A",
			primaryalt: "#301e43",
			uiborder: "#140e1b",
			uibackground: "#1a1424",
			uibackgroundalt: "#1a1424",
			default: "#cbc4cf",
			defaultalt: "#4A3966",
		},
		colors,
		levelColors,
		{
			yellow: "#BA505A",
			default: "#A2A4D1",
			salmon: "#cbc4cf",
			orange: "#775BA3",
			blue: "#00B3BD",
			green: "#76AC76",
			turquoize: "#BA505A",
			purple: "#BD904C",
		},
	),
);

const blue = makeTheme(
	"blue",
	Object.assign(
		{
			primary: "#3A7FFF",
			primaryalt: "#122444",
			uiborder: "#06080e",
			uibackground: "#11192c",
			uibackgroundalt: "#0e1320",
			default: "#bfcbd4",
			defaultalt: "#5d7189",
		},
		colors,
		levelColors,
	),
);

const vivid = makeTheme(
	"vivid",
	Object.assign(
		{
			primary: "#A680FF",
			primaryalt: "#2c225d",
			uiborder: "#08060e",
			uibackground: "#171131",
			uibackgroundalt: "#130b28",
			default: "#eeeeee",
			defaultalt: "#6160a4",
		},
		colors,
		vividColors,
		levelColors,
	),
);

export default {blue, purple, vivid};
