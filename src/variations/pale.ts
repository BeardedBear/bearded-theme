import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#b0e6ff",
  green: "#d3faad",
  greenAlt: "#ddf1a8",
  orange: "#ffcfb8",
  pink: "#f3d0f0",
  purple: "#bdb0ff",
  red: "#ffbfbe",
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
  ui: makeMainColorsDark({ base: "#363034", primary: "#ffcca0" }),
};
