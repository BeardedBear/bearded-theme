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

const arcUi: ThemeUi = {
  primary: "#97c892",
  primaryalt: "#254A52",
  uiborder: "#111C22",
  uibackground: "#1a2b34",
  uibackgroundalt: "#16242C",
  default: "#D3DFDB",
  defaultMain: "#D3DFDB",
  defaultalt: "#51727C"
};

const arcLevels: ThemeLevels = {
  danger: "#ee5d64",
  success: "#97c892",
  warning: "#d69b54",
  info: "#6498ce"
};

export const test: Theme = {
  ui: arcUi,
  colors: arcColors,
  levels: arcLevels
};
