import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

const colors: ThemeColors = {
  blue: "#78dce8",
  green: "#a9dc76",
  greenAlt: "#b7d175",
  orange: "#fc9867",
  pink: "#e991e3",
  purple: "#ab9df2",
  red: "#fc6a67",
  salmon: "#ff6188",
  turquoize: "#78e8c6",
  yellow: "#ffd866",
};

const levels: ThemeLevels = {
  danger: colors.red,
  info: colors.blue,
  success: colors.green,
  warning: colors.yellow,
};

export const monokaiTerra: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#262329", primary: "#b0a2a6" }),
};

export const monokaiMetallian: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#1e212b", primary: "#98a2b5" }),
};

export const monokaiStone: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#2A2D33", primary: "#9AA2A6" }),
};

export const monokaiBlack: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#141414", primary: "#8f8f8f" }),
};

export const monokaiReversed: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({
    base: "#171921",
    primary: "#98a2b5",
    reversed: true,
  }),
};
