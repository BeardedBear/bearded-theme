import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark, makeMainColorsLight } from "../helper";

const solarizedColors: ThemeColors = {
  blue: "#4db0f7",
  green: "#a5b82e",
  greenAlt: "#97e24c",
  orange: "#e8913b",
  pink: "#df96d9",
  purple: "#858bf7",
  red: "#f45645",
  salmon: "#f154a0",
  turquoize: "#26bbae",
  yellow: "#e2ae10",
};

const solarizedLevels: ThemeLevels = {
  danger: solarizedColors.red,
  info: solarizedColors.blue,
  success: solarizedColors.green,
  warning: solarizedColors.yellow,
};

export const solarizedDark: Theme = {
  colors: solarizedColors,
  levels: solarizedLevels,
  ui: makeMainColorsDark({ base: "#132c34", primary: "#47cfc4" }),
};

export const solarizedReversed: Theme = {
  colors: solarizedColors,
  levels: solarizedLevels,
  ui: makeMainColorsDark({
    base: "#102128",
    primary: "#47cfc4",
    reversed: true,
  }),
};

export const solarizedLight: Theme = {
  colors: {
    blue: "#2c97e3",
    green: "#819501",
    greenAlt: "#56a506",
    orange: "#ca6f13",
    pink: "#c64fbc",
    purple: "#666bd6",
    red: "#eb4937",
    salmon: "#e74492",
    turquoize: "#1aaca0",
    yellow: "#cf9c01",
  },
  levels: solarizedLevels,
  ui: makeMainColorsLight({
    base: "#fdf6e3",
    desaturated: true,
    primary: "#2aa198",
  }),
};

// Oceanic

const oceanicColors: ThemeColors = {
  blue: "#5fb2df",
  green: "#97c892",
  greenAlt: "#A4EF58",
  orange: "#DC8255",
  pink: "#d194cd",
  purple: "#978dd6",
  red: "#B4552D",
  salmon: "#ee5d75",
  turquoize: "#59c6c8",
  yellow: "#f6cc73",
};

export const oceanic: Theme = {
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    info: oceanicColors.blue,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
  },
  ui: makeMainColorsDark({
    base: "#1a2b34",
    primary: "#97c892",
    primaryAlt: "#284450",
  }),
};
export const oceanicReverded: Theme = {
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    info: oceanicColors.blue,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
  },
  ui: makeMainColorsDark({
    base: "#152229",
    primary: "#97c892",
    reversed: true,
  }),
};
