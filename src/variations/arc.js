import { makeTheme, colors, levelColors } from "../mixins.js";

const arc = makeTheme(
  "arc",
  Object.assign(
    {
      primary: "#9DACC3",
      primaryalt: "#364154",
      uiborder: "#131720",
      uibackground: "#222A38",
      uibackgroundalt: "#1D232F",
      default: "#b8c6d1",
      defaultalt: "#576375",
    },
    colors,
    levelColors
  )
);

const arcEolstorm = makeTheme(
  "arc-eolstorm",
  Object.assign(
    {
      primary: "#9DACC3",
      primaryalt: "#364154",
      uiborder: "#131720",
      uibackground: "#222A38",
      uibackgroundalt: "#1D232F",
      default: "#ffffff",
      defaultalt: "#576375",
    },
    {
      blue: "#69C3FF",
      green: "#3CEC85",
      greenalt: "#A4EF58",
      grey: "#808080",
      orange: "#FF955C",
      pink: "#F38CEC",
      purple: "#B78AFF",
      red: "#E35535",
      salmon: "#FF738A",
      transparent: "#00000000",
      turquoize: "#22ECDB",
      yellow: "#EACD61",
    },
    {
      danger: "#E35535",
      success: "#3CEC85",
      warning: "#FF955C",
      info: "#69C3FF",
    }
  )
);

export default { arc, arcEolstorm };
