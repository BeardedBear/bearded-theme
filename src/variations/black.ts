import { Theme, ThemeColors, ThemeLevels, ThemeUi } from "../typing";

const blackUI = (primary: string): ThemeUi => {
  return {
    primary,
    primaryalt: "#191c21",
    uiborder: "#000000",
    uibackground: "#111418",
    uibackgroundmid: "#0F1215",
    uibackgroundalt: "#0D0F12",
    default: "#AEB2B2",
    defaultMain: "#999F9F",
    defaultalt: "#4d5258",
  };
};

const blackColors: ThemeColors = {
  blue: "#4eb2d4",
  green: "#2fbe85",
  greenAlt: "#3585bb",
  orange: "#d17f2d",
  pink: "#cf7dbe",
  purple: "#ad7fdb",
  red: "#da4e2f",
  salmon: "#dc5574",
  turquoize: "#07b6ad",
  yellow: "#c4a046",
};

const blackLevels: ThemeLevels = {
  danger: blackColors.red,
  success: blackColors.green,
  warning: blackColors.orange,
  info: blackColors.blue,
};

export const blackAndGold: Theme = {
  ui: blackUI(blackColors.yellow),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndRuby: Theme = {
  ui: blackUI(blackColors.salmon),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndEmerald: Theme = {
  ui: blackUI(blackColors.turquoize),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndDiamond: Theme = {
  ui: blackUI(blackColors.blue),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndAmethyst: Theme = {
  ui: blackUI(blackColors.purple),
  colors: blackColors,
  levels: blackLevels,
};
