import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const base = "#111418";
const blackColors: ThemeColors = {
  blue: "#4eb2d4",
  green: "#2fbe85",
  greenAlt: "#3585bb",
  orange: "#d17f2d",
  pink: "#cf7dbe",
  purple: "#ad7fdb",
  red: "#da4e2f",
  salmon: "#dc5574",
  turquoize: "#07b6ad",
  yellow: "#c4a046",
};

const blackLevels: ThemeLevels = {
  danger: blackColors.red,
  success: blackColors.green,
  warning: blackColors.orange,
  info: blackColors.blue,
};

export const blackAndGold: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.yellow }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndRuby: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.salmon }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndEmerald: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.turquoize }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndDiamond: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.blue }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndAmethyst: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.purple }),
  colors: blackColors,
  levels: blackLevels,
};
