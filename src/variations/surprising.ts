import { Theme, ThemeColors, ThemeLevels } from "../typing";

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
  warning: "#d1a456",
  info: "#00B3BD",
  danger: "#E35535",
  success: "#a9dc76",
};

const primarySurprisingEggplant = "#d24e4e";
export const surprisingEggplant: Theme = {
  ui: {
    primary: primarySurprisingEggplant,
    primaryalt: "#4e1d27",
    uiborder: "#0F0B14",
    uibackground: "#1d1426",
    uibackgroundalt: "#16111F",
    default: "#c3b6cc",
    defaultMain: "#c3b6cc",
    defaultalt: "#695091",
  },
  colors: surprisingColors(primarySurprisingEggplant),
  levels: surprisingLevels,
};

const primarySurprisingBlueberry = "#c93e71";
export const surprisingBlueberry: Theme = {
  ui: {
    primary: primarySurprisingBlueberry,
    primaryalt: "#4e1d37",
    uiborder: "#0F0B14",
    uibackground: "#101a29",
    uibackgroundalt: "#0e1421",
    default: "#bad1d9",
    defaultMain: "#bad1d9",
    defaultalt: "#3e668c",
  },
  colors: surprisingColors(primarySurprisingBlueberry),
  levels: surprisingLevels,
};

const primarySurprisingWatermelon = "#da6c62";
export const surprisingWatermelon: Theme = {
  ui: {
    primary: primarySurprisingWatermelon,
    primaryalt: "#6a2b2a",
    uiborder: "#0C1617",
    uibackground: "#142326",
    uibackgroundalt: "#111d1f",
    default: "#c0ccc4",
    defaultMain: "#c0ccc4",
    defaultalt: "#2f6a69",
  },
  colors: surprisingColors(primarySurprisingWatermelon),
  levels: surprisingLevels,
};
