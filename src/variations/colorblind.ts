import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors } from "../typing";

const colorsColorBlind: ThemeColors = {
  blue: "#66ddef",
  green: "#92e8ae",
  greenAlt: "#46bfab",
  orange: "#ec9f69",
  pink: "#f5b1e7",
  purple: "#b3a3ff",
  red: "#e06075",
  salmon: "#dc7da9",
  turquoize: "#91e6e4",
  yellow: "#f9e580",
};

export const colorBlind: Theme = {
  ui: makeMainColorsDark({ base: "#1b1e28", primary: "#b3a3ff" }),
  colors: colorsColorBlind,
  levels: {
    danger: colorsColorBlind.red,
    success: colorsColorBlind.green,
    warning: colorsColorBlind.orange,
    info: colorsColorBlind.blue,
  },
};
