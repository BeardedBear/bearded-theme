import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#9bdaf7",
  green: "#c3f493",
  greenAlt: "#ddf1a8",
  orange: "#f9bb9f",
  pink: "#f3d0f0",
  purple: "#bdb0ff",
  red: "#ffa6a5",
  salmon: "#ffbacb",
  turquoize: "#aef6e0",
  yellow: "#feeebe",
};

const levels: ThemeLevels = {
  danger: colors.red,
  info: colors.blue,
  success: colors.green,
  warning: colors.yellow,
};

export const paleGlacier: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#272e3c", primary: "#a0d4ff" }),
};

export const paleNight: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#27283c", primary: "#b6a0ff" }),
};

export const paleCoffee: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#22212e", primary: "#ab93f3" }),
};
