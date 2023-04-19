import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeLevels } from "../typing";

const levels: ThemeLevels = {
  danger: "#C13838",
  success: "#14b871",
  warning: "#cc8c39",
  info: "#04c4d9",
};

export const earth: Theme = {
  ui: makeMainColorsDark({
    base: "#221b1b",
    primary: "#d35386",
    primaryAlt: "#40222e",
    fontTeinted: true,
  }),
  colors: {
    blue: "#BA9D6F",
    green: "#639E29",
    greenAlt: "#7E9E2D",
    orange: "#D1711D",
    pink: "#A8547A",
    purple: "#BAB13B",
    red: "#C13838",
    salmon: "#D65151",
    turquoize: "#4EAAA4",
    yellow: "#C48519",
  },
  levels,
};

export const coffee: Theme = {
  ui: makeMainColorsDark({
    base: "#292423",
    primary: "#F09177",
    primaryAlt: "#51403b",
    fontTeinted: true,
  }),
  colors: {
    blue: "#6EDDD6",
    green: "#9DCC57",
    greenAlt: "#7E9E2D",
    orange: "#ffa777",
    pink: "#E480AD",
    purple: "#9991F1",
    red: "#f24343",
    salmon: "#f77a6a",
    turquoize: "#3ceaa8",
    yellow: "#f7d979",
  },
  levels: {
    danger: "#f24343",
    success: "#94D652",
    warning: "#ffa777",
    info: "#6EDDD6",
  },
};

export const coffeeReversed: Theme = {
  ui: makeMainColorsDark({
    base: "#201c1b",
    primary: "#F09177",
    primaryAlt: "#51403b",
    fontTeinted: true,
    reversed: true,
  }),
  colors: {
    blue: "#6EDDD6",
    green: "#9DCC57",
    greenAlt: "#7E9E2D",
    orange: "#ffa777",
    pink: "#E480AD",
    purple: "#9991F1",
    red: "#f24343",
    salmon: "#f77a6a",
    turquoize: "#3ceaa8",
    yellow: "#f7d979",
  },
  levels: {
    danger: "#f24343",
    success: "#94D652",
    warning: "#ffa777",
    info: "#6EDDD6",
  },
};

export const coffeeCream: Theme = {
  ui: makeMainColorsLight({
    base: "#EAE4E1",
    primary: "#D3694C",
  }),
  colors: {
    blue: "#009DB5",
    green: "#51A200",
    greenAlt: "#7E9E2D",
    orange: "#ce6700",
    pink: "#CE4985",
    purple: "#7056c4",
    red: "#dc2e2e",
    salmon: "#D8573E",
    turquoize: "#00A47B",
    yellow: "#ad8200",
  },
  levels: {
    danger: "#FF3A3A",
    success: "#51A200",
    warning: "#ce6700",
    info: "#009DB5",
  },
};

export const voided: Theme = {
  ui: makeMainColorsDark({ base: "#171322", primary: "#7A63ED" }),
  colors: {
    blue: "#7A63ED",
    green: "#6DBBFF",
    greenAlt: "#2C729E",
    orange: "#3D8DE2",
    pink: "#A8547A",
    purple: "#2BD3E2",
    red: "#C13838",
    salmon: "#D65170",
    turquoize: "#89C4FF",
    yellow: "#585785",
  },
  levels,
};

export const altica: Theme = {
  ui: {
    primary: "#0187a6",
    primaryalt: "#15262e",
    uiborder: "#0a1217",
    uibackground: "#0f1c21",
    uibackgroundmid: "#0f1a1f",
    uibackgroundalt: "#0e171c",
    default: "#c2ced1",
    defaultMain: "#9FADB1",
    defaultalt: "#45565c",
  },
  colors: {
    blue: "#10bdc9",
    green: "#6bc793",
    greenAlt: "#2C729E",
    orange: "#0187a6",
    pink: "#A8547A",
    purple: "#9c8acf",
    red: "#C13838",
    salmon: "#d6724d",
    turquoize: "#0187a6",
    yellow: "#d6ac63",
  },
  levels,
};
