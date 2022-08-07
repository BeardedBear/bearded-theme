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
  danger: arcColors.red,
  success: arcColors.green,
  warning: arcColors.orange,
  info: arcColors.blue,
};

export const HCEbony: Theme = {
  ui: {
    primary: "#dbdeea",
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
    primary: "#dbefff",
    primaryalt: "#1c323e",
    uiborder: "#0b1116",
    uibackground: "#151f27",
    uibackgroundalt: "#10181f",
    default: "#dbefff",
    defaultMain: "#b6d0d9",
    defaultalt: "#657d87",
  },
  colors: arcColors,
  levels: arcLevels,
};
export const HCFlurry: Theme = {
  ui: {
    primary: "#444c54",
    primaryalt: "#f9fbfe",
    uiborder: "#c2c8ce",
    uibackground: "#f5f8fc",
    uibackgroundalt: "#EAECEE",
    default: "#272d34",
    defaultMain: "#3f4750",
    defaultalt: "#898989",
  },
  colors: {
    blue: "#0090c0",
    green: "#38bc48",
    greenAlt: "#589f11",
    orange: "#ff8c4e",
    pink: "#f08ad9",
    purple: "#a635ff",
    red: "#eb321e",
    salmon: "#dc4c5d",
    turquoize: "#00b696",
    yellow: "#e39c03",
  },
  levels: {
    danger: "#eb321e",
    success: "#38bc48",
    warning: "#ff8c4e",
    info: "#0090c0",
  },
};
