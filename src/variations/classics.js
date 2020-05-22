import { makeTheme, colors, levelColors } from "../mixins.js";

const anthracite = makeTheme(
  "anthracite",
  Object.assign(
    {
      primary: "#798CA8",
      primaryalt: "#3B434F",
      uiborder: "#272c33",
      uibackground: "#1b1d22",
      uibackgroundalt: "#141519",
      default: "#bbbbbb",
      defaultalt: "#4c5767",
    },
    colors,
    levelColors
  )
);

const light = makeTheme(
  "light",
  Object.assign(
    {
      primary: "#4c5767",
      primaryalt: "#ffffff",
      uiborder: "#d1dadc",
      uibackground: "#ffffff",
      uibackgroundalt: "#f3f6f6",
      default: "#455059",
      defaultalt: "#a8b3bd",
    },
    colors,
    levelColors
  )
);

export default { anthracite, light };
