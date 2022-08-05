import { Theme, ThemeColors, ThemeLevels } from "../typing";

const arcColors: ThemeColors = {
  blue: "#84ceff",
  green: "#78ffa2",
  greenAlt: "#A4EF58",
  orange: "#ffaa7d",
  pink: "#ffabe9",
  purple: "#c39eff",
  red: "#fd604f",
  salmon: "#ff6f93",
  turquoize: "#6ae7d0",
  yellow: "#ffe586",
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
    primary: "#d8fffc",
    primaryalt: "#1c323e",
    uiborder: "#0b1116",
    uibackground: "#151f27",
    uibackgroundalt: "#10181f",
    default: "#e6fffd",
    defaultMain: "#b6d9d5",
    defaultalt: "#658787",
  },
  colors: arcColors,
  levels: arcLevels,
};
