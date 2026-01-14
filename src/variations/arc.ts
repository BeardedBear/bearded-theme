import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

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
  info: arcColors.blue,
  success: arcColors.green,
  warning: arcColors.orange,
};

export const arc: Theme = {
  colors: arcColors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#1c2433", primary: "#8196b5" }),
};

export const arcEolstorm: Theme = {
  colors: arcColors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#222A38", primary: "#9DACC3" }),
};

export const arcBlueBerry: Theme = {
  colors: arcColors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#111422", primary: "#8eb0e6" }),
};

export const arcEggplant: Theme = {
  colors: arcColors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#181421", primary: "#9698d8" }),
};

export const arcReversed: Theme = {
  colors: arcColors,
  levels: arcLevels,
  ui: makeMainColorsDark({
    base: "#161c28",
    primary: "#8196b5",
    reversed: true,
  }),
};
