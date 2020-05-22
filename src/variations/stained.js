import { makeTheme, colors, levelColors, vividColors } from "../mixins.js";

const purple = makeTheme(
  "purple",
  Object.assign(
    {
      primary: "#a948ef",
      primaryalt: "#36224C",
      uiborder: "#2A1D38",
      uibackground: "#16101E",
      uibackgroundalt: "#100C16",
      default: "#bbbbbb",
      defaultalt: "#655785",
    },
    colors,
    levelColors
  )
);

const blue = makeTheme(
  "blue",
  Object.assign(
    {
      primary: "#3A7FFF",
      primaryalt: "#162C54",
      uiborder: "#18243A",
      uibackground: "#0D1321",
      uibackgroundalt: "#0A0D16",
      default: "#BBBBBB",
      defaultalt: "#5d7189",
    },
    colors,
    levelColors
  )
);

const vivid = makeTheme(
  "vivid",
  Object.assign(
    {
      primary: "#8551FF",
      primaryalt: "#28225B",
      uiborder: "#241E43",
      uibackground: "#191130",
      uibackgroundalt: "#110A23",
      default: "#eeeeee",
      defaultalt: "#585785",
    },
    colors,
    vividColors,
    levelColors
  )
);

export default { blue, purple, vivid };
