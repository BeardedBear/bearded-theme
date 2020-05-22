import { makeTheme, colors } from "../mixins.js";

const solarizedColors = {
  yellow: "#b58900",
  red: "#cb4b16",
  purple: "#6c71c4",
  blue: "#268bd2",
  green: "#859900",
  turquoize: "#2aa198",
  salmon: "#d33682",
};

const solarizedDark = makeTheme(
  "solarized",
  Object.assign(
    {
      primary: "#199FBE",
      primaryalt: "#0E4758",
      uiborder: "#133E4C",
      uibackground: "#002b36",
      uibackgroundalt: "#002329",
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
      primary: "#073642",
      primaryalt: "#fef9ec",
      uiborder: "#d8cfbb",
      uibackground: "#fdf6e3",
      uibackgroundalt: "#eee8d5",
      default: "#073642",
      defaultalt: "#a49f94",
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

export default { solarizedDark, solarizedLight };
