import { Theme, ThemeColors, ThemeLevels } from "../typing";

const testerColors: ThemeColors = {
  blue: "#0000FF",
  green: "#5AF78E",
  greenAlt: "#A4EF58",
  orange: "#F75C00",
  pink: "#FF6188",
  purple: "#FF00FF",
  red: "#FF0000",
  salmon: "#d33682",
  turquoize: "#45BEC3",
  yellow: "#FFFF00",
};

const testerLevels: ThemeLevels = {
  danger: testerColors.red,
  success: testerColors.green,
  warning: testerColors.yellow,
  info: testerColors.blue,
};

export const tester: Theme = {
  ui: {
    primary: "#FCD665",
    primaryalt: "#FC4277",
    uiborder: "#444444",
    uibackground: "#666666",
    uibackgroundalt: "#888888",
    default: "#FAFAFA",
    defaultMain: "#222222",
    defaultalt: "#57C7FF",
  },
  colors: testerColors,
  levels: testerLevels,
};
