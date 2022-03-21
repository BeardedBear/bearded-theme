import { Theme, ThemeColors, ThemeLevels } from "../typing";

const classicsColors: ThemeColors = {
  blue: "#3398DB",
  green: "#37ae6f",
  greenAlt: "#7E9E2D",
  orange: "#D26D32",
  pink: "#CC71BC",
  purple: "#935cd1",
  red: "#C13838",
  salmon: "#de456b",
  turquoize: "#24B5A8",
  yellow: "#c9a022",
};

const levelColors: ThemeLevels = {
  danger: classicsColors.red,
  success: classicsColors.green,
  warning: classicsColors.yellow,
  info: classicsColors.blue,
};

export const anthracite: Theme = {
  ui: {
    primary: "#76808c",
    primaryalt: "#26282e",
    uiborder: "#0b0c0e",
    uibackground: "#181a1f",
    uibackgroundalt: "#141519",
    default: "#bbbbbb",
    defaultMain: "#A4A4A4",
    defaultalt: "#464b52",
  },
  colors: classicsColors,
  levels: levelColors,
};

export const light: Theme = {
  ui: {
    primary: "#52C1DA",
    primaryalt: "#ffffff",
    uiborder: "#C5CCCE",
    uibackground: "#f4f4f4",
    uibackgroundalt: "#EBEBEB",
    default: "#455059",
    defaultMain: "#363E45",
    defaultalt: "#8b99a7",
  },
  colors: {
    blue: "#119AF5",
    green: "#14BB62",
    greenAlt: "#739816",
    orange: "#F08009",
    pink: "#E440C6",
    purple: "#9B4BF7",
    red: "#E94141",
    salmon: "#FF6557",
    turquoize: "#00C1C1",
    yellow: "#E69F06",
  },
  levels: levelColors,
};
