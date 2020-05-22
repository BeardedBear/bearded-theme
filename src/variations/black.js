import { makeTheme } from "../mixins.js";

const blackAndGold = makeTheme(
  "black",
  Object.assign(
    {
      primary: "#c7910c",
      primaryalt: "#191d24",
      uiborder: "#181B21",
      uibackground: "#111418",
      uibackgroundalt: "#0B0E0F",
      default: "#AEB2B2",
      defaultalt: "#4A525E",
    },
    {
      blue: "#11B7D4",
      green: "#00a884",
      greenalt: "#AEB2B2",
      grey: "#555555",
      orange: "#AEB2B2",
      pink: "#BC62AD",
      purple: "#9563c6",
      red: "#E35535",
      salmon: "#c62f52",
      transparent: "#00000000",
      turquoize: "#AEB2B2",
      yellow: "#c7910c",
    },
    {
      danger: "#E35535",
      success: "#00a884",
      warning: "#FF955C",
      info: "#11B7D4",
    }
  )
);

export default { blackAndGold };
