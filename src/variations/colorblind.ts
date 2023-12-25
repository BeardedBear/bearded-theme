import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors } from "../typing";

const ui = makeMainColorsDark({ base: "#1b1e28", primary: "#9887eb" });

const colorsColorBlind: ThemeColors = {
  blue: "#6b93f8",
  green: "#f4e094",
  greenAlt: "#ffefba",
  orange: "#cfc08c",
  pink: "#b1b4cf",
  purple: "#6e79a4",
  red: "#95939c",
  salmon: "#8597d5",
  turquoize: "#d1c7b3",
  yellow: "#ece0c1",
};

export const colorBlind: Theme = {
  ui,
  colors: colorsColorBlind,
  levels: {
    danger: colorsColorBlind.red,
    success: colorsColorBlind.green,
    warning: colorsColorBlind.orange,
    info: colorsColorBlind.blue,
  },
};
