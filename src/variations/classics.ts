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
    defaultMain: "#bbbbbb",
    defaultalt: "#464b52",
  },
  colors: classicsColors,
  levels: levelColors,
};

export const light: Theme = {
  ui: {
    primary: "#3398DB",
    primaryalt: "#ffffff",
    uiborder: "#d1dadc",
    uibackground: "#ffffff",
    uibackgroundalt: "#f3f6f6",
    default: "#455059",
    defaultMain: "#455059",
    defaultalt: "#8b99a7",
  },
  colors: classicsColors,
  levels: levelColors,
};
