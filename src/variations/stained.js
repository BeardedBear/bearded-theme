import { colors, levelColors, makeTheme, vividColors } from "../mixins.js";

const purple = makeTheme(
  "purple",
  Object.assign(
    {
      primary: "#a948ef",
      primaryalt: "#301e43",
      uiborder: "#140e1b",
      uibackground: "#20192b",
      uibackgroundalt: "#1a1424",
      default: "#cbc4cf",
      defaultMain: "#cbc4cf",
      defaultalt: "#655785"
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
      primaryalt: "#122444",
      uiborder: "#06080e",
      uibackground: "#121726",
      uibackgroundalt: "#0e1320",
      default: "#bfcbd4",
      defaultMain: "#bfcbd4",
      defaultalt: "#5d7189"
    },
    colors,
    levelColors
  )
);

const vivid = makeTheme(
  "vivid",
  Object.assign(
    {
      primary: "#A680FF",
      primaryalt: "#2c225d",
      uiborder: "#08060e",
      uibackground: "#171131",
      uibackgroundalt: "#130b28",
      default: "#eeeeee",
      defaultMain: "#eeeeee",
      defaultalt: "#6160a4"
    },
    colors,
    vividColors,
    levelColors
  )
);

export default { blue, purple, vivid };
