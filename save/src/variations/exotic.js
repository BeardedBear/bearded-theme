import {levelColors, makeTheme} from "../mixins.js";

const earth = makeTheme(
	"earth",
	Object.assign(
		{
			primary: "#cf3a76",
			primaryalt: "#56152F",
			uiborder: "#120d0d",
			uibackground: "#1E1615",
			uibackgroundalt: "#181211",
			default: "#C6BEAB",
			defaultMain: "#C6BEAB",
			defaultalt: "#6a5553",
		},
		{
			blue: "#BA9D6F",
			green: "#639E29",
			greenalt: "#7E9E2D",
			grey: "#7F7070",
			orange: "#D1711D",
			pink: "#A8547A",
			purple: "#BAB13B",
			red: "#C13838",
			salmon: "#D65151",
			transparent: "#00000000",
			turquoize: "#4EAAA4",
			yellow: "#C48519",
		},
		levelColors,
	),
);

const voided = makeTheme(
	"void",
	Object.assign(
		{
			primary: "#7A63ED",
			primaryalt: "#2A2156",
			uiborder: "#000000",
			uibackground: "#150F23",
			uibackgroundalt: "#120a1a",
			default: "#D7E2EF",
			defaultMain: "#D7E2EF",
			defaultalt: "#585785",
		},
		{
			blue: "#7A63ED",
			green: "#6DBBFF",
			greenalt: "#2C729E",
			grey: "#7F7070",
			orange: "#3D8DE2",
			pink: "#A8547A",
			purple: "#2BD3E2",
			red: "#C13838",
			salmon: "#D65170",
			transparent: "#00000000",
			turquoize: "#89C4FF",
			yellow: "#585785",
		},
		levelColors,
	),
);
const altica = makeTheme(
	"altica",
	Object.assign(
		{
			primary: "#0187a6",
			primaryalt: "#15262e",
			uiborder: "#0a1217",
			uibackground: "#0f1c21",
			uibackgroundalt: "#0e171c",
			default: "#c2ced1",
			defaultMain: "#c2ced1",
			defaultalt: "#45565c",
		},
		{
			blue: "#10bdc9",
			green: "#6bc793",
			greenalt: "#2C729E",
			grey: "#7F7070",
			orange: "#0187a6",
			pink: "#A8547A",
			purple: "#9c8acf",
			red: "#C13838",
			salmon: "#d6724d",
			transparent: "#00000000",
			turquoize: "#0187a6",
			yellow: "#d6ac63",
		},
		{
			danger: "#C13838",
			success: "#14b871",
			warning: "#cc8c39",
			info: "#04c4d9",
		},
	),
);

export default {earth, altica, voided};
