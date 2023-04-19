import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const base = "#111418";
const blackColors: ThemeColors = {
  blue: "#11B7D4",
  green: "#00a884",
  greenAlt: "#3585bb",
  orange: "#d4770c",
  pink: "#d46ec0",
  purple: "#a85ff1",
  red: "#E35535",
  salmon: "#c62f52",
  turquoize: "#38c7bd",
  yellow: "#c7910c",
};

const blackLevels: ThemeLevels = {
  danger: blackColors.red,
  success: blackColors.green,
  warning: blackColors.orange,
  info: blackColors.blue,
};

// Gold
export const blackAndGold: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.yellow }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndGoldSoft: Theme = {
  ui: makeMainColorsDark({ base: "#221f1d", primary: blackColors.yellow }),
  colors: blackColors,
  levels: blackLevels,
};

// Ruby
export const blackAndRuby: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.salmon }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndRubySoft: Theme = {
  ui: makeMainColorsDark({ base: "#281a21", primary: blackColors.salmon }),
  colors: blackColors,
  levels: blackLevels,
};

// Emerald
export const blackAndEmerald: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.turquoize }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndEmeraldSoft: Theme = {
  ui: makeMainColorsDark({ base: "#162226", primary: blackColors.turquoize }),
  colors: blackColors,
  levels: blackLevels,
};

// Diamond
export const blackAndDiamond: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.blue }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndDiamondSoft: Theme = {
  ui: makeMainColorsDark({ base: "#161d26", primary: blackColors.blue }),
  colors: blackColors,
  levels: blackLevels,
};

// Amethyst
export const blackAndAmethyst: Theme = {
  ui: makeMainColorsDark({ base, primary: blackColors.purple }),
  colors: blackColors,
  levels: blackLevels,
};

export const blackAndAmethystSoft: Theme = {
  ui: makeMainColorsDark({ base: "#171626", primary: blackColors.purple }),
  colors: blackColors,
  levels: blackLevels,
};
