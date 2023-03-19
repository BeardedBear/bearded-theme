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
  success: classicsColors.green,
  warning: classicsColors.yellow,
  info: classicsColors.blue,
};

export const anthracite: Theme = {
  ui: makeMainColorsDark({ base: "#181a1f", primary: "#a2abb6" }),
  colors: classicsColors,
  levels,
};

export const light: Theme = {
  ui: makeMainColorsLight({
    base: "#f3f4f5",
    primary: "#52C1DA",
  }),
  colors: {
    blue: "#0f8fe4",
    green: "#18ac31",
    greenAlt: "#6b8d16",
    orange: "#dd7404",
    pink: "#dd39bf",
    purple: "#9244ec",
    red: "#df3c3c",
    salmon: "#ec4476",
    turquoize: "#00aaaa",
    yellow: "#d49408",
  },
  levels,
};
