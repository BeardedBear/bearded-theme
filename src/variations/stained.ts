import { Theme, ThemeColors } from "../typing";

const colors: ThemeColors = {
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

const levelColors = {
  danger: colors.red,
  success: colors.green,
  warning: colors.yellow,
  info: colors.blue,
};

export const stainedPurple: Theme = {
  ui: {
    primary: "#a948ef",
    primaryalt: "#301e43",
    uiborder: "#140e1b",
    uibackground: "#20192b",
    uibackgroundmid: "#1d1628",
    uibackgroundalt: "#1a1424",
    default: "#cbc4cf",
    defaultMain: "#A89FAC",
    defaultalt: "#655785",
  },
  colors: colors,
  levels: levelColors,
};

export const stainedBlue: Theme = {
  ui: {
    primary: "#3A7FFF",
    primaryalt: "#122444",
    uiborder: "#06080e",
    uibackground: "#121726",
    uibackgroundmid: "#101523",
    uibackgroundalt: "#0e1320",
    default: "#bfcbd4",
    defaultMain: "#A1ACB5",
    defaultalt: "#5d7189",
  },
  colors: colors,
  levels: levelColors,
};
