import {makeTheme} from "../mixins.js";

const blackUI = {
	primaryalt: "#191c21",
	uiborder: "#000000",
	uibackground: "#111418",
	uibackgroundalt: "#0D0F12",
	default: "#AEB2B2",
	defaultMain: "#AEB2B2",
	defaultalt: "#43474d",
};

const blackSyntax = {
	blue: "#11B7D4",
	green: "#00a884",
	greenalt: "#3585bb",
	grey: "#555555",
	orange: "#d4770c",
	pink: "#BC62AD",
	purple: "#a85ff1",
	red: "#E35535",
	salmon: "#c62f52",
	transparent: "#00000000",
	turquoize: "#38c7bd",
	yellow: "#c7910c",
};

const blackLevels = {
	danger: "#E35535",
	success: "#00a884",
	warning: "#FF955C",
	info: "#11B7D4",
};

const blackAndGold = makeTheme(
	"blackandgold",
	Object.assign(blackUI, blackSyntax, blackLevels, {primary: "#c7910c"}),
);
const blackAndRuby = makeTheme(
	"blackandruby",
	Object.assign(blackUI, blackSyntax, blackLevels, {primary: "#c62f52"}),
);
const blackAndEmerald = makeTheme(
	"blackandemerald",
	Object.assign(blackUI, blackSyntax, blackLevels, {primary: "#00a884"}),
);
const blackAndDiamond = makeTheme(
	"blackanddiamond",
	Object.assign(blackUI, blackSyntax, blackLevels, {primary: "#11B7D4"}),
);
const blackAndAmethyst = makeTheme(
	"blackandamethyst",
	Object.assign(blackUI, blackSyntax, blackLevels, {primary: "#a85ff1"}),
);

export default {
	blackAndGold,
	blackAndRuby,
	blackAndEmerald,
	blackAndDiamond,
	blackAndAmethyst,
};
