import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#bbe4f7",
  green: "#d0f4ac",
  greenAlt: "#ddf1a8",
  orange: "#fac6ae",
  pink: "#f3d0f0",
  purple: "#c4baf7",
  red: "#f4aca5",
  salmon: "#ffbacb",
  turquoize: "#bcf7e5",
  yellow: "#feeebe",
};

const levels: ThemeLevels = {
  danger: "#e96a5f",
  info: "#67b8e7",
  success: "#9dd462",
  warning: "#ee924c",
};

export const aquarelleCymbidium: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#2c252a", primary: "#d1605f" }),
};

export const aquarelleHydrangea: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#22273c", primary: "#4c86f1" }),
};

export const aquarelleLilac: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#252433", primary: "#9587ff" }),
};
