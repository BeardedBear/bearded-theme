import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeColors } from "../typing";

export const will: Theme = {
  ui: {
    primary: "#b498f5",
    primaryalt: "#231e36",
    uiborder: "#000000",
    uibackground: "#14111f",
    uibackgroundmid: "#100e1a",
    uibackgroundalt: "#0d0a14",
    default: "#bdb6d3",
    defaultMain: "#bfb9da",
    defaultalt: "#585775",
  },
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
    success: "#5fee9b",
    warning: "#ffae82",
    info: "#8ad0ff",
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
  ui: makeMainColorsDark({ base: "#0f1628", primary: "#e39000" }),
  colors: colorsGoldDRaynh,
  levels: {
    danger: colorsGoldDRaynh.red,
    success: colorsGoldDRaynh.green,
    warning: colorsGoldDRaynh.orange,
    info: colorsGoldDRaynh.blue,
  },
};

const colorsGoldDRaynhLight: ThemeColors = {
  blue: "#037ed1",
  green: "#03810d",
  greenAlt: "#A4EF58",
  orange: "#c0571f",
  pink: "#bb2f63",
  purple: "#7537d7",
  red: "#f7775a",
  salmon: "#1da90d",
  turquoize: "#009c8f",
  yellow: "#d0a00f",
};
export const goldDRaynhLight: Theme = {
  ui: makeMainColorsLight({
    base: "#e1f4f4",
    primary: "#00b2a6",
  }),
  colors: colorsGoldDRaynhLight,
  levels: {
    danger: colorsGoldDRaynhLight.red,
    success: colorsGoldDRaynhLight.green,
    warning: colorsGoldDRaynhLight.orange,
    info: colorsGoldDRaynhLight.blue,
  },
};
