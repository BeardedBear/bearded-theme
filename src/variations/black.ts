import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

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
  info: blackColors.blue,
  success: blackColors.green,
  warning: blackColors.orange,
};

// Gold
export const blackAndGold: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base, primary: blackColors.yellow }),
};

export const blackAndGoldSoft: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base: "#221f1d", primary: blackColors.yellow }),
};

// Ruby
export const blackAndRuby: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base, primary: blackColors.salmon }),
};

export const blackAndRubySoft: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base: "#281a21", primary: blackColors.salmon }),
};

// Emerald
export const blackAndEmerald: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base, primary: blackColors.turquoize }),
};

export const blackAndEmeraldSoft: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base: "#162226", primary: blackColors.turquoize }),
};

// Diamond
export const blackAndDiamond: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base, primary: blackColors.blue }),
};

export const blackAndDiamondSoft: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base: "#161d26", primary: blackColors.blue }),
};

// Amethyst
export const blackAndAmethyst: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base, primary: blackColors.purple }),
};

export const blackAndAmethystSoft: Theme = {
  colors: blackColors,
  levels: blackLevels,
  ui: makeMainColorsDark({ base: "#171626", primary: blackColors.purple }),
};
