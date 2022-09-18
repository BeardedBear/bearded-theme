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
  ui: {
    primary: "#47cfc4",
    primaryalt: "#003947",
    uiborder: "#001b21",
    uibackground: "#002b36",
    uibackgroundmid: "#002730",
    uibackgroundalt: "#002229",
    default: "#cedbdb",
    defaultMain: "#B8C6C6",
    defaultalt: "#547783",
  },
  colors: solarizedColors,
  levels: solarizedLevels,
};

export const solarizedReversed: Theme = {
  ui: {
    primary: "#47cfc4",
    primaryalt: "#022f3a",
    uiborder: "#001418",
    uibackground: "#001a20",
    uibackgroundmid: "#001e25",
    uibackgroundalt: "#002229",
    default: "#cedbdb",
    defaultMain: "#B8C6C6",
    defaultalt: "#547783",
  },
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
  ui: {
    primary: "#97c892",
    primaryalt: "#254A52",
    uiborder: "#111C22",
    uibackground: "#1a2b34",
    uibackgroundmid: "#182830",
    uibackgroundalt: "#16242C",
    default: "#D3DFDB",
    defaultMain: "#A6BAB4",
    defaultalt: "#51727C",
  },
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
    info: oceanicColors.blue,
  },
};
export const oceanicReverded: Theme = {
  ui: {
    primary: "#97c892",
    primaryalt: "#192a34",
    uiborder: "#0d151a",
    uibackground: "#111c23",
    uibackgroundmid: "#142028",
    uibackgroundalt: "#16242C",
    default: "#D3DFDB",
    defaultMain: "#A6BAB4",
    defaultalt: "#51727C",
  },
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
    info: oceanicColors.blue,
  },
};
