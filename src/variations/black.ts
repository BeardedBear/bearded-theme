import { Theme, ThemeColors, ThemeLevels, ThemeUi } from "../typing";

const blackUI = (primary: string): ThemeUi => {
  return {
    primary,
    primaryalt: "#191c21",
    uiborder: "#000000",
    uibackground: "#111418",
    uibackgroundalt: "#0D0F12",
    default: "#AEB2B2",
    defaultMain: "#999F9F",
    defaultalt: "#43474d",
  };
};

const blackColors: ThemeColors = {
  blue: "#11B7D4",
  green: "#00a884",
  greenAlt: "#3585bb",
  orange: "#d4770c",
  pink: "#d46ec0",
  purple: "#a85ff1",
  red: "#E35535",
  salmon: "#c62f52",
  turquoize: "#38c7bd",
  yellow: "#c7910c",
};

const blackLevels: ThemeLevels = {
  danger: "#E35535",
  success: "#00a884",
  warning: "#eba050",
  info: "#11B7D4",
};

export const blackAndGold: Theme = {
  ui: blackUI("#c7910c"),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndRuby: Theme = {
  ui: blackUI("#c62f52"),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndEmerald: Theme = {
  ui: blackUI("#00a884"),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndDiamond: Theme = {
  ui: blackUI("#11B7D4"),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndAmethyst: Theme = {
  ui: blackUI("#a85ff1"),
  colors: blackColors,
  levels: blackLevels,
};
