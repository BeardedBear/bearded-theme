import { Theme, ThemeColors, ThemeLevels, ThemeUi } from "../typing";

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
  yellow: "#EACD61"
};

const arcLevels: ThemeLevels = {
  danger: "#E35535",
  success: "#3CEC85",
  warning: "#cf9e57",
  info: "#69C3FF"
};

export const arc: Theme = {
  ui: {
    primary: "#8196b5",
    primaryalt: "#273145",
    uiborder: "#111721",
    uibackground: "#1c2433",
    uibackgroundalt: "#161d29",
    default: "#c3cfd9",
    defaultMain: "#c3cfd9",
    defaultalt: "#576375"
  },
  colors: arcColors,
  levels: arcLevels
};

export const arcEolstorm: Theme = {
  ui: {
    primary: "#9DACC3",
    primaryalt: "#364154",
    uiborder: "#171d29",
    uibackground: "#222A38",
    uibackgroundalt: "#1D232F",
    default: "#ffffff",
    defaultMain: "#ffffff",
    defaultalt: "#576375"
  },
  colors: arcColors,
  levels: arcLevels
};

export const arcBlueBerry: Theme = {
  ui: {
    primary: "#a4b9db",
    primaryalt: "#222d47",
    uiborder: "#090c17",
    uibackground: "#121624",
    uibackgroundalt: "#0e121f",
    default: "#ffffff",
    defaultMain: "#ffffff",
    defaultalt: "#576275"
  },
  colors: arcColors,
  levels: arcLevels
};

export const arcEggplant: Theme = {
  ui: {
    primary: "#a3a5d6",
    primaryalt: "#231e36",
    uiborder: "#0b0812",
    uibackground: "#181424",
    uibackgroundalt: "#14101f",
    default: "#ffffff",
    defaultMain: "#ffffff",
    defaultalt: "#585775"
  },
  colors: arcColors,
  levels: arcLevels
};
