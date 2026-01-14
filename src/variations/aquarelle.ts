import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../shared/types";

const colors: ThemeColors = {
  blue: "#afd9ec",
  green: "#c3e5a1",
  greenAlt: "#d1e796",
  orange: "#f0bba2",
  pink: "#edc1ea",
  purple: "#bcb1f1",
  red: "#eca099",
  salmon: "#f3aabc",
  turquoize: "#a9edd9",
  yellow: "#f3e1ac",
};

const levels: ThemeLevels = {
  danger: "#e87a70",
  info: "#73bee9",
  success: "#aada77",
  warning: "#eea064",
};

export const aquarelleCymbidium: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#2c252a", primary: "#da6e6c" }),
};

export const aquarelleHydrangea: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#22273c", primary: "#6394f1" }),
};

export const aquarelleLilac: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#252433", primary: "#9587ff" }),
};
