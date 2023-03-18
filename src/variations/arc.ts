import { makeMainColors } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const arcColors: ThemeColors = {
  blue: "#69C3FF",
  green: "#3CEC85",
  greenAlt: "#A4EF58",
  orange: "#FF955C",
  pink: "#F38CEC",
  purple: "#B78AFF",
  red: "#E35535",
  salmon: "#FF738A",
  turquoize: "#22ECDB",
  yellow: "#EACD61",
};

const arcLevels: ThemeLevels = {
  danger: arcColors.red,
  success: arcColors.green,
  warning: arcColors.orange,
  info: arcColors.blue,
};

export const arc: Theme = {
  ui: makeMainColors({ base: "#1c2433", primary: "#8196b5" }),
  colors: arcColors,
  levels: arcLevels,
};

export const arcEolstorm: Theme = {
  ui: makeMainColors({ base: "#222A38", primary: "#9DACC3" }),
  colors: arcColors,
  levels: arcLevels,
};

export const arcBlueBerry: Theme = {
  ui: makeMainColors({ base: "#111422", primary: "#8eb0e6" }),
  colors: arcColors,
  levels: arcLevels,
};

export const arcEggplant: Theme = {
  ui: makeMainColors({ base: "#181421", primary: "#9698d8" }),
  colors: arcColors,
  levels: arcLevels,
};

export const arcReversed: Theme = {
  ui: makeMainColors({ base: "#161c28", primary: "#8196b5", reversed: true }),
  colors: arcColors,
  levels: arcLevels,
};
