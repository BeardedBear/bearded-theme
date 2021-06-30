import { Theme, ThemeColors, ThemeLevels } from "../typing";

const monokaiColors: ThemeColors = {
  blue: "#78dce8",
  green: "#a9dc76",
  greenAlt: "#b7d175",
  orange: "#fc9867",
  pink: "#e991e3",
  purple: "#ab9df2",
  red: "#fc6a67",
  salmon: "#ff6188",
  turquoize: "#78e8c6",
  yellow: "#ffd866",
};

const monokaiLevels: ThemeLevels = {
  danger: monokaiColors.red,
  info: monokaiColors.blue,
  success: monokaiColors.green,
  warning: monokaiColors.yellow,
};

export const monokaiTerra: Theme = {
  ui: {
    primary: "#b0a2a6",
    primaryalt: "#3e3942",
    uiborder: "#131114",
    uibackground: "#262329",
    uibackgroundalt: "#1e1c21",
    default: "#dbd8d5",
    defaultMain: "#dbd8d5",
    defaultalt: "#6e686a",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};

export const monokaiMetallian: Theme = {
  ui: {
    primary: "#98a2b5",
    primaryalt: "#363a4a",
    uiborder: "#13131a",
    uibackground: "#1e212b",
    uibackgroundalt: "#191b24",
    default: "#dadee6",
    defaultMain: "#dadee6",
    defaultalt: "#515a6b",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};

const monokaiColorsLight: ThemeColors = {
  yellow: "#e0a800",
  salmon: "#ff6188",
  orange: "#ed7940",
  blue: "#00b0d4",
  pink: "#e991e3",
  green: "#65b315",
  greenAlt: "#65b315",
  turquoize: "#00baa4",
  purple: "#9682fa",
  red: "#fc6a67",
};

export const monokaiLight: Theme = {
  ui: {
    primary: "#03ab97",
    primaryalt: "#f2f2f3",
    uiborder: "#d6d7db",
    uibackground: "#f0f1f4",
    uibackgroundalt: "#e8eaed",
    default: "#606270",
    defaultMain: "#606270" + "cc",
    defaultalt: "#868d9c",
  },
  colors: monokaiColorsLight,
  levels: {
    warning: monokaiColorsLight.yellow,
    info: monokaiColorsLight.blue,
    success: monokaiColorsLight.green,
    danger: monokaiColorsLight.red,
  },
};
