import { makeMainColorsDark, makeMainColorsLight } from "../helper";
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

const levels: ThemeLevels = {
  danger: classicsColors.red,
  info: classicsColors.blue,
  success: classicsColors.green,
  warning: classicsColors.yellow,
};

export const anthracite: Theme = {
  colors: classicsColors,
  levels,
  ui: makeMainColorsDark({ base: "#181a1f", primary: "#a2abb6" }),
};

export const light: Theme = {
  colors: {
    blue: "#0983d5",
    green: "#0a9621",
    greenAlt: "#6b8d16",
    orange: "#e06900",
    pink: "#d42bb5",
    purple: "#9244ec",
    red: "#df3c3c",
    salmon: "#ec4476",
    turquoize: "#009696",
    yellow: "#c39c00",
  },
  levels,
  ui: makeMainColorsLight({
    base: "#f3f4f5",
    primary: "#52C1DA",
  }),
};
