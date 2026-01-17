import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

const surprisingColors = (primary: string): ThemeColors => {
  return {
    blue: "#00B3BD",
    green: "#a9dc76",
    greenAlt: "#b7d175",
    orange: "#5288BA",
    pink: "#c47cbf",
    purple: "#CC9B52",
    red: "#C13838",
    salmon: "#B85C40",
    turquoize: primary,
    yellow: primary,
  };
};

const surprisingLevels: ThemeLevels = {
  danger: "#E35535",
  info: "#00B3BD",
  success: "#a9dc76",
  warning: "#d1a456",
};

const primarySurprisingEggplant = "#d24e4e";
export const surprisingEggplant: Theme = {
  colors: surprisingColors(primarySurprisingEggplant),
  levels: surprisingLevels,
  ui: makeMainColorsDark({
    base: "#1d1426",
    primary: primarySurprisingEggplant,
    primaryAlt: "#441f30",
  }),
};

const primarySurprisingBlueberry = "#c93e71";
export const surprisingBlueberry: Theme = {
  colors: surprisingColors(primarySurprisingBlueberry),
  levels: surprisingLevels,
  ui: makeMainColorsDark({
    base: "#101a29",
    primary: primarySurprisingBlueberry,
    primaryAlt: "#441f30",
  }),
};

const primarySurprisingWatermelon = "#da6c62";
export const surprisingWatermelon: Theme = {
  colors: surprisingColors(primarySurprisingWatermelon),
  levels: surprisingLevels,
  ui: makeMainColorsDark({
    base: "#142326",
    primary: primarySurprisingWatermelon,
    primaryAlt: "#5f3333",
  }),
};
