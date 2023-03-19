import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

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
  ui: makeMainColorsDark({ base: "#262329", primary: "#b0a2a6" }),
  colors,
  levels,
};

export const monokaiMetallian: Theme = {
  ui: makeMainColorsDark({ base: "#1e212b", primary: "#98a2b5" }),
  colors,
  levels,
};

export const monokaiStone: Theme = {
  ui: makeMainColorsDark({ base: "#2A2D33", primary: "#9AA2A6" }),
  colors,
  levels,
};

export const monokaiBlack: Theme = {
  ui: makeMainColorsDark({ base: "#141414", primary: "#8f8f8f" }),
  colors,
  levels,
};

export const monokaiReversed: Theme = {
  ui: makeMainColorsDark({
    base: "#171921",
    primary: "#98a2b5",
    reversed: true,
  }),
  colors,
  levels,
};
