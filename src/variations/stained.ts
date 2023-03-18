import { makeMainColors } from "../helper";
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
  ui: makeMainColors({ base: "#20192b", primary: "#a948ef" }),
  colors,
  levels: levelColors,
};

export const stainedBlue: Theme = {
  ui: makeMainColors({ base: "#121726", primary: "#3A7FFF" }),
  colors,
  levels: levelColors,
};
