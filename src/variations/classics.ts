import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark, makeMainColorsLight } from "../helper";

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
    blue: "#0073d1",
    green: "#189433",
    greenAlt: "#5e8516",
    orange: "#d06200",
    pink: "#e022b4",
    purple: "#8737e6",
    red: "#d03333",
    salmon: "#e8386a",
    turquoize: "#009999",
    yellow: "#bb9600",
  },
  levels: {
    danger: "#ac2121",
    info: "#0468bf",
    success: "#14852a",
    warning: "#bc7400",
  },
  ui: makeMainColorsLight({
    base: "#f3f4f5",
    primary: "#22a5c9",
  }),
};
