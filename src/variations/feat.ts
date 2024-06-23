import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeColors } from "../typing";

export const will: Theme = {
  colors: {
    blue: "#8ad0ff",
    green: "#5fee9b",
    greenAlt: "#A4EF58",
    orange: "#ffae82",
    pink: "#fda7f7",
    purple: "#c39eff",
    red: "#f7775a",
    salmon: "#ff8ea0",
    turquoize: "#44f8e9",
    yellow: "#fce38a",
  },
  levels: {
    danger: "#f7775a",
    info: "#8ad0ff",
    success: "#5fee9b",
    warning: "#ffae82",
  },
  ui: {
    border: "#000000",
    default: "#bdb6d3",
    defaultMain: "#bfb9da",
    defaultalt: "#585775",
    primary: "#b498f5",
    primaryalt: "#231e36",
    uibackground: "#14111f",
    uibackgroundalt: "#0d0a14",
    uibackgroundmid: "#100e1a",
  },
};

const colorsGoldDRaynh: ThemeColors = {
  blue: "#3eb2ff",
  green: "#21ff7d",
  greenAlt: "#A4EF58",
  orange: "#ff823f",
  pink: "#e4ac73",
  purple: "#a167ff",
  red: "#f7775a",
  salmon: "#ff3d3d",
  turquoize: "#44f8e9",
  yellow: "#ffd000",
};

export const goldDRaynh: Theme = {
  colors: colorsGoldDRaynh,
  levels: {
    danger: colorsGoldDRaynh.red,
    info: colorsGoldDRaynh.blue,
    success: colorsGoldDRaynh.green,
    warning: colorsGoldDRaynh.orange,
  },
  ui: makeMainColorsDark({ base: "#0f1628", primary: "#e39000" }),
};

const colorsGoldDRaynhLight: ThemeColors = {
  blue: "#037ed1",
  green: "#03810d",
  greenAlt: "#A4EF58",
  orange: "#c0571f",
  pink: "#002e74",
  purple: "#7537d7",
  red: "#f7775a",
  salmon: "#1da90d",
  turquoize: "#009c8f",
  yellow: "#d0a00f",
};
export const goldDRaynhLight: Theme = {
  colors: colorsGoldDRaynhLight,
  levels: {
    danger: colorsGoldDRaynhLight.red,
    info: colorsGoldDRaynhLight.blue,
    success: colorsGoldDRaynhLight.green,
    warning: colorsGoldDRaynhLight.orange,
  },
  ui: makeMainColorsLight({
    base: "#f5f5f5",
    primary: "#2397e5",
  }),
};

const melleJulieColors: ThemeColors = {
  blue: "#63c0ff",
  green: "#71e893",
  greenAlt: "#a4c947",
  orange: "#edb492",
  pink: "#c3a1e5",
  purple: "#968ffb",
  red: "#e55454",
  salmon: "#9dcace",
  turquoize: "#50dbd4",
  yellow: "#ecd282",
};

export const melleJulie: Theme = {
  colors: melleJulieColors,
  levels: {
    danger: melleJulieColors.red,
    info: melleJulieColors.blue,
    success: melleJulieColors.green,
    warning: melleJulieColors.orange,
  },
  ui: makeMainColorsDark({ base: "#1c1f24", primary: "#63edef" }),
};

const melleJulieColorsLight: ThemeColors = {
  blue: "#1f89cf",
  green: "#2aa54d",
  greenAlt: "#81a622",
  orange: "#c97a2a",
  pink: "#ae6cbe",
  purple: "#7c68ef",
  red: "#d24545",
  salmon: "#39a9b4",
  turquoize: "#23716d",
  yellow: "#b48806",
};

export const melleJulieLight: Theme = {
  colors: melleJulieColorsLight,
  levels: {
    danger: melleJulieColorsLight.red,
    info: melleJulieColorsLight.blue,
    success: melleJulieColorsLight.green,
    warning: melleJulieColorsLight.orange,
  },
  ui: makeMainColorsLight({ base: "#edeeee", primary: "#218d8f" }),
};

export const webDevCody: Theme = {
  colors: {
    blue: "#63ddec",
    green: "#77eb84",
    greenAlt: "#589f11",
    orange: "#f8925b",
    pink: "#f3a9e2",
    purple: "#d39ffe",
    red: "#ec5342",
    salmon: "#f75f94",
    turquoize: "#0bcfab",
    yellow: "#f1d868",
  },
  levels: {
    danger: "#ee5f50",
    info: "#0aa3d6",
    success: "#41ad4e",
    warning: "#e3946a",
  },
  // ui: makeMainColorsDark({ base: "#1a212f", primary: "#63ddec" }),
  ui: makeMainColorsDark({ base: "#1a252f", primary: "#63ddec" }),
};
