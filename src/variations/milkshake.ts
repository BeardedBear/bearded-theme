import { makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
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
};

const levels: ThemeLevels = {
  danger: colors.red,
  success: colors.green,
  warning: colors.yellow,
  info: colors.blue,
};

export const milkshakeRaspberry: Theme = {
  ui: makeMainColorsLight({
    base: "#f3eae3",
    primary: "#d1175b",
  }),
  colors,
  levels,
};

export const milkshakeBlueberry: Theme = {
  ui: makeMainColorsLight({
    base: "#dfdeef",
    primary: "#462ac3",
  }),
  colors,
  levels,
};
export const paper: Theme = {
  ui: makeMainColorsLight({
    base: "#efe9da",
    primary: "#be7809",
  }),
  colors,
  levels,
};
