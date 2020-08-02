import { makeTheme, colors } from "../mixins.js";

const solarizedColors = {
  yellow: "#b58900",
  red: "#cb4b16",
  purple: "#6c71c4",
  blue: "#268bd2",
  green: "#859900",
  turquoize: "#2aa198",
  salmon: "#d33682",
  orange: "#ca7016",
};

const solarizedDark = makeTheme(
  "solarized",
  Object.assign(
    {
      primary: "#199FBE",
      primaryalt: "#003947",
      uiborder: "#061418",
      uibackground: "#002b36",
      uibackgroundalt: "#002229",
      default: "#cedbdb",
      defaultalt: "#547783",
    },
    colors,
    solarizedColors,
    {
      danger: solarizedColors.red,
      success: solarizedColors.green,
      warning: solarizedColors.orange,
      info: solarizedColors.blue,
    }
  )
);

const solarizedLight = makeTheme(
  "solarized-light",
  Object.assign(
    {
      primary: "#2aa198",
      primaryalt: "#fef9ec",
      uiborder: "#d8cfbb",
      uibackground: "#fdf6e3",
      uibackgroundalt: "#eee8d5",
      default: "#073642",
      defaultalt: "#657b83",
    },
    colors,
    solarizedColors,
    {
      danger: solarizedColors.red,
      success: solarizedColors.green,
      warning: solarizedColors.orange,
      info: solarizedColors.blue,
    }
  )
);

const oceanic = makeTheme(
  "oceanic",
  Object.assign(
    {
      primary: "#97c892",
      primaryalt: "#254A52",
      uiborder: "#111C22",
      uibackground: "#1a2b34",
      uibackgroundalt: "#16242C",
      default: "#D3DFDB",
      defaultalt: "#51727C",
    },
    colors,
    {
      yellow: "#fbc95a",
      red: "#B4552D",
      purple: "#c692c6",
      blue: "#6498ce",
      green: "#97c892",
      turquoize: "#5bb3b4",
      salmon: "#ee5d64",
      orange: "#DC8255",
    },
    {
      danger: "#ee5d64",
      success: "#97c892",
      warning: "#DC8255",
      info: "#6498ce",
    }
  )
);

export default { solarizedDark, solarizedLight, oceanic };
