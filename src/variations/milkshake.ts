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
  info: colors.blue,
  success: colors.green,
  warning: colors.yellow,
};

export const milkshakeRaspberry: Theme = {
  colors,
  levels,
  ui: makeMainColorsLight({
    base: "#f1e8eb",
    primary: "#d1174f",
    primaryAlt: "#f6eff1",
  }),
};

export const milkshakeBlueberry: Theme = {
  colors,
  levels,
  ui: makeMainColorsLight({
    base: "#dad9eb",
    primary: "#422eb0",
  }),
};

export const milkshakeMango: Theme = {
  colors,
  levels,
  ui: makeMainColorsLight({
    base: "#f3eae3",
    primary: "#bd4f27",
  }),
};

export const milkshakeMint: Theme = {
  colors,
  levels,
  ui: makeMainColorsLight({
    base: "#edf3ee",
    primary: "#2a9b7d",
  }),
};

export const milkshakeVanilla: Theme = {
  colors,
  levels,
  ui: makeMainColorsLight({
    base: "#ece7da",
    primary: "#937416",
  }),
};
