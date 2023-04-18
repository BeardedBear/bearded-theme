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
    base: "#f1e8eb",
    primary: "#d1174f",
    primaryAlt: "#f6eff1",
  }),
  colors,
  levels,
};

export const milkshakeBlueberry: Theme = {
  ui: makeMainColorsLight({
    base: "#dad9eb",
    primary: "#5b53ba",
  }),
  colors,
  levels,
};

export const milkshakeMango: Theme = {
  ui: makeMainColorsLight({
    base: "#f3eae3",
    primary: "#d8673d",
  }),
  colors,
  levels,
};

export const milkshakeMint: Theme = {
  ui: makeMainColorsLight({
    base: "#edf3ee",
    primary: "#2a9b7d",
  }),
  colors,
  levels,
};

export const milkshakeVanilla: Theme = {
  ui: makeMainColorsLight({
    base: "#ece7da",
    primary: "#b68c18",
  }),
  colors,
  levels,
};
