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
  yellow: "#c9a022"
};

const levelColors = {
  danger: colors.red,
  success: colors.green,
  warning: colors.yellow,
  info: colors.blue
};

export const stainedPurple: Theme = {
  ui: {
    primary: "#a948ef",
    primaryalt: "#301e43",
    uiborder: "#140e1b",
    uibackground: "#20192b",
    uibackgroundalt: "#1a1424",
    default: "#cbc4cf",
    defaultMain: "#cbc4cf",
    defaultalt: "#655785"
  },
  colors: colors,
  levels: levelColors
};

export const stainedBlue: Theme = {
  ui: {
    primary: "#3A7FFF",
    primaryalt: "#122444",
    uiborder: "#06080e",
    uibackground: "#121726",
    uibackgroundalt: "#0e1320",
    default: "#bfcbd4",
    defaultMain: "#bfcbd4",
    defaultalt: "#5d7189"
  },
  colors: colors,
  levels: levelColors
};

export const vivid: Theme = {
  ui: {
    primary: "#A680FF",
    primaryalt: "#2c225d",
    uiborder: "#08060e",
    uibackground: "#171131",
    uibackgroundalt: "#130b28",
    default: "#eeeeee",
    defaultMain: "#eeeeee",
    defaultalt: "#6160a4"
  },
  colors: {
    blue: "#28A9FF",
    green: "#42DD76",
    greenAlt: "#b7d175",
    orange: "#FF7135",
    pink: "#E66DFF",
    purple: "#A95EFF",
    red: "#D62C2C",
    salmon: "#FF478D",
    turquoize: "#14E5D4",
    yellow: "#FFB638"
  },
  levels: levelColors
};
