import { Theme, ThemeColors, ThemeLevels } from "../typing";

const arcColors: ThemeColors = {
  blue: "#7fd7f5",
  green: "#AFEA7B",
  greenAlt: "#A4EF58",
  orange: "#ffaa7d",
  pink: "#e4a3df",
  purple: "#bc98ff",
  red: "#fd604f",
  salmon: "#EC7886",
  turquoize: "#22D3B1",
  yellow: "#F5DF76",
};

const arcLevels: ThemeLevels = {
  danger: "#fd604f",
  success: "#61f49e",
  warning: "#ffaa7d",
  info: "#7eccff",
};

export const HCEbony: Theme = {
  ui: {
    primary: "#ece7fd",
    primaryalt: "#313140",
    uiborder: "#0c0c0f",
    uibackground: "#181820",
    uibackgroundalt: "#121218",
    default: "#c0c9d3",
    defaultMain: "#d1d3dc",
    defaultalt: "#6e7481",
  },
  colors: arcColors,
  levels: arcLevels,
};

export const HCMidnightVoid: Theme = {
  ui: {
    primary: "#d8f8ff",
    primaryalt: "#1c323e",
    uiborder: "#0b1116",
    uibackground: "#151f27",
    uibackgroundalt: "#10181f",
    default: "#e6fffd",
    defaultMain: "#b6d0d9",
    defaultalt: "#657d87",
  },
  colors: arcColors,
  levels: arcLevels,
};