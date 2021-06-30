import { Theme, ThemeColors, ThemeLevels, ThemeUi } from "../typing";

const solarizedColors: ThemeColors = {
  blue: "#268bd2",
  green: "#859900",
  greenAlt: "#A4EF58",
  orange: "#ca7016",
  pink: "#F38CEC",
  purple: "#6c71c4",
  red: "#cb4b16",
  salmon: "#d33682",
  turquoize: "#2aa198",
  yellow: "#b58900"
};

export const solarized: Theme = {
  ui: {
    primary: "#199FBE",
    primaryalt: "#003947",
    uiborder: "#061418",
    uibackground: "#002b36",
    uibackgroundalt: "#002229",
    default: "#cedbdb",
    defaultMain: "#cedbdb",
    defaultalt: "#547783"
  },
  colors: solarizedColors,
  levels: {
    danger: solarizedColors.red,
    success: solarizedColors.green,
    warning: "#d69b54",
    info: solarizedColors.blue
  }
};

export const oceanic: Theme = {
  ui: {
    primary: "#97c892",
    primaryalt: "#254A52",
    uiborder: "#111C22",
    uibackground: "#1a2b34",
    uibackgroundalt: "#16242C",
    default: "#D3DFDB",
    defaultMain: "#D3DFDB",
    defaultalt: "#51727C"
  },
  colors: {
    blue: "#6498ce",
    green: "#97c892",
    greenAlt: "#A4EF58",
    orange: "#DC8255",
    pink: "#F38CEC",
    purple: "#c692c6",
    red: "#B4552D",
    salmon: "#ee5d64",
    turquoize: "#5bb3b4",
    yellow: "#fbc95a"
  },
  levels: {
    danger: "#ee5d64",
    success: "#97c892",
    warning: "#d69b54",
    info: "#6498ce"
  }
};
