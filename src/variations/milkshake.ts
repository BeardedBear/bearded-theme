import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsLight } from "../helper";

const colors: ThemeColors = {
  blue: "#0076c5",
  green: "#008b17",
  greenAlt: "#668b07",
  orange: "#b96000",
  pink: "#c121a4",
  purple: "#7522d3",
  red: "#d12525",
  salmon: "#da2a5f",
  turquoize: "#008f8f",
  yellow: "#c08403",
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
