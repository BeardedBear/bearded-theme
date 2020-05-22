import { makeTheme, levelColors } from "../mixins.js";

const earth = makeTheme(
  "earth",
  Object.assign(
    {
      primary: "#cf3a76",
      primaryalt: "#56152F",
      uiborder: "#332524",
      uibackground: "#1E1615",
      uibackgroundalt: "#16100F",
      default: "#C6BEAB",
      defaultalt: "#6a5553",
    },
    {
      blue: "#BA9D6F",
      green: "#639E29",
      greenalt: "#7E9E2D",
      grey: "#7F7070",
      orange: "#D1711D",
      pink: "#A8547A",
      purple: "#BAB13B",
      red: "#C13838",
      salmon: "#D65151",
      transparent: "#00000000",
      turquoize: "#4EAAA4",
      yellow: "#C48519",
    },
    levelColors
  )
);

const voided = makeTheme(
  "void",
  Object.assign(
    {
      primary: "#7A63ED",
      primaryalt: "#2A2156",
      uiborder: "#1A1430",
      uibackground: "#150F23",
      uibackgroundalt: "#0E0814",
      default: "#D7E2EF",
      defaultalt: "#585785",
    },
    {
      blue: "#7A63ED",
      green: "#6DBBFF",
      greenalt: "#2C729E",
      grey: "#7F7070",
      orange: "#3D8DE2",
      pink: "#A8547A",
      purple: "#2BD3E2",
      red: "#C13838",
      salmon: "#D65170",
      transparent: "#00000000",
      turquoize: "#89C4FF",
      yellow: "#585785",
    },
    levelColors
  )
);

export default { earth, voided };
