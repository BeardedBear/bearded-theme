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
    defaultMain: "#C1BCB6",
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
    default: "#d0d3da",
    defaultMain: "#B9BCC4",
    defaultalt: "#515a6b",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};

export const monokaiStone: Theme = {
  ui: {
    primary: "#9AA2A6",
    primaryalt: "#383c42",
    uiborder: "#1C1E21",
    uibackground: "#2A2D33",
    uibackgroundalt: "#26282C",
    default: "#dddddd",
    defaultMain: "#D6D6D6",
    defaultalt: "#73737F",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};

export const monokaiBlack: Theme = {
  ui: {
    primary: "#8f8f8f",
    primaryalt: "#1a1a1a",
    uiborder: "#000000",
    uibackground: "#141414",
    uibackgroundalt: "#0d0d0d",
    default: "#e3e3e3",
    defaultMain: "#D6D6D6",
    defaultalt: "#707070",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};

export const monokaiReversed: Theme = {
  ui: {
    primary: "#98a2b5",
    primaryalt: "#222531",
    uiborder: "#0c0d12",
    uibackground: "#13141c",
    uibackgroundalt: "#191b24",
    default: "#d0d3da",
    defaultMain: "#B9BCC4",
    defaultalt: "#515a6b",
  },
  colors: monokaiColors,
  levels: monokaiLevels,
};
