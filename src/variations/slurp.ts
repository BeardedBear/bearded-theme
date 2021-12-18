import { Theme, ThemeColors, ThemeLevels } from "../typing";

const slurpColors: ThemeColors = {
  blue: "#57C7FF",
  green: "#5AF78E",
  greenAlt: "#41F58E",
  orange: "#F47651",
  pink: "#FF6188",
  purple: "#E991E3",
  red: "#ED7379",
  salmon: "#FF6188",
  turquoize: "#45BEC3",
  yellow: "#FCD665",
};

const slurpLevels: ThemeLevels = {
  danger: slurpColors.red,
  success: slurpColors.green,
  warning: slurpColors.yellow,
  info: slurpColors.blue,
};

export const slurp: Theme = {
  ui: {
    primary: "#FCD665",
    primaryalt: "#29272C",
    uiborder: "#161417",
    uibackground: "#2B282E",
    uibackgroundalt: "#29272C",
    default: "#FAFAFA",
    defaultMain: "#222222",
    defaultalt: "#BD4642",
  },
  colors: slurpColors,
  levels: slurpLevels,
};
