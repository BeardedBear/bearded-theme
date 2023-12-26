import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const solarizedColors: ThemeColors = {
  blue: "#399fe8",
  green: "#94a522",
  greenAlt: "#A4EF58",
  orange: "#d8822c",
  pink: "#ce81c8",
  purple: "#767cde",
  red: "#eb4937",
  salmon: "#e54b95",
  turquoize: "#38bbb0",
  yellow: "#dfbe5a",
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
  colors: solarizedColors,
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
