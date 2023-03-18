import { makeMainColors } from "../helper";
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
  success: solarizedColors.green,
  warning: solarizedColors.yellow,
  info: solarizedColors.blue,
};

export const solarizedDark: Theme = {
  ui: makeMainColors({ base: "#132c34", primary: "#47cfc4" }),
  colors: solarizedColors,
  levels: solarizedLevels,
};

export const solarizedReversed: Theme = {
  ui: makeMainColors({ base: "#102128", primary: "#47cfc4", reversed: true }),
  colors: solarizedColors,
  levels: solarizedLevels,
};

export const solarizedLight: Theme = {
  ui: {
    primary: "#2aa198",
    primaryalt: "#fff9ea",
    uiborder: "#d8cfbb",
    uibackground: "#fdf6e3",
    uibackgroundmid: "#f6efdc",
    uibackgroundalt: "#eee8d5",
    default: "#073642",
    defaultMain: "#0B4A5A",
    defaultalt: "#657b83",
  },
  colors: solarizedColors,
  levels: solarizedLevels,
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
  ui: makeMainColors({
    base: "#1a2b34",
    primary: "#97c892",
    primaryAlt: "#284450",
  }),
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
    info: oceanicColors.blue,
  },
};
export const oceanicReverded: Theme = {
  ui: makeMainColors({ base: "#152229", primary: "#97c892", reversed: true }),
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
    info: oceanicColors.blue,
  },
};
