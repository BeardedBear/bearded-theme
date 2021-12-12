import { Theme, ThemeColors, ThemeLevels } from "../typing";

const horizonColors: ThemeColors = {
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

const horizonLevels: ThemeLevels = {
  danger: "#E35535",
  success: "#3CEC85",
  warning: "#cf9e57",
  info: "#69C3FF",
};

export const horizon: Theme = {
  ui: {
    primary: "#8196b5",
    primaryalt: "#273145",
    uiborder: "#111721",
    uibackground: "#1c2433",
    uibackgroundalt: "#161d29",
    default: "#c3cfd9",
    defaultMain: "#c3cfd9",
    defaultalt: "#576375",
  },
  colors: horizonColors,
  levels: horizonLevels,
};
