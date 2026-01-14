import { Theme, ThemeColors } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

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
  info: colors.blue,
  success: colors.green,
  warning: colors.yellow,
};

export const stainedPurple: Theme = {
  colors,
  levels: levelColors,
  ui: makeMainColorsDark({ base: "#20192b", primary: "#a948ef" }),
};

export const stainedBlue: Theme = {
  colors,
  levels: levelColors,
  ui: makeMainColorsDark({ base: "#121726", primary: "#3A7FFF" }),
};
