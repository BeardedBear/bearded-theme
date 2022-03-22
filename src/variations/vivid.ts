import { Theme, ThemeColors, ThemeLevels } from "../typing";

const vividColors: ThemeColors = {
  blue: "#28A9FF",
  green: "#42DD76",
  greenAlt: "#b7d175",
  orange: "#FF7135",
  pink: "#E66DFF",
  purple: "#A95EFF",
  red: "#D62C2C",
  salmon: "#FF478D",
  turquoize: "#14E5D4",
  yellow: "#FFB638",
};

const vividLevels: ThemeLevels = {
  danger: vividColors.red,
  info: vividColors.blue,
  success: vividColors.green,
  warning: vividColors.yellow,
};

export const vividPurple: Theme = {
  ui: {
    primary: "#A680FF",
    primaryalt: "#2c225d",
    uiborder: "#08060e",
    uibackground: "#171131",
    uibackgroundalt: "#130b28",
    default: "#eeeeee",
    defaultMain: "#CBCBCB",
    defaultalt: "#6160a4",
  },
  colors: vividColors,
  levels: vividLevels,
};

export const vividBlack: Theme = {
  ui: {
    primary: "#AAAAAA",
    primaryalt: "#1f1f24",
    uiborder: "#000000",
    uibackground: "#141417",
    uibackgroundalt: "#101012",
    default: "#eeeeee",
    defaultMain: "#CBCBCB",
    defaultalt: "#555555",
  },
  colors: vividColors,
  levels: vividLevels,
};

export const vividLight: Theme = {
  ui: {
    primary: "#7e7e7e",
    primaryalt: "#ffffff",
    uiborder: "#cccccc",
    uibackground: "#f4f4f4",
    uibackgroundalt: "#EBEBEB",
    default: "#000000",
    defaultMain: "#363636",
    defaultalt: "#aaaaaa",
  },
  colors: {
    blue: "#28A9FF",
    green: "#00d647",
    greenAlt: "#b7d175",
    orange: "#FF7135",
    pink: "#E66DFF",
    purple: "#A95EFF",
    red: "#D62C2C",
    salmon: "#FF478D",
    turquoize: "#00d6c4",
    yellow: "#ffaa18",
  },
  levels: vividLevels,
};
