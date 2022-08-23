import { Theme, ThemeColors, ThemeLevels } from "../typing";

const arcColors: ThemeColors = {
  blue: "#7fd7f5",
  green: "#AFEA7B",
  greenAlt: "#A4EF58",
  orange: "#ffaa7d",
  pink: "#e4a3df",
  purple: "#bc98ff",
  red: "#fd604f",
  salmon: "#EC7886",
  turquoize: "#22D3B1",
  yellow: "#F5DF76",
};

const arcLevels: ThemeLevels = {
  danger: arcColors.red,
  success: arcColors.green,
  warning: arcColors.orange,
  info: arcColors.blue,
};

export const HCEbony: Theme = {
  ui: {
    primary: "#dbdeea",
    primaryalt: "#313140",
    uiborder: "#0c0c0f",
    uibackground: "#181820",
    uibackgroundalt: "#121218",
    default: "#c0c9d3",
    defaultMain: "#d1d3dc",
    defaultalt: "#6e7481",
  },
  colors: arcColors,
  levels: arcLevels,
};

export const HCMidnightVoid: Theme = {
  ui: {
    primary: "#dbefff",
    primaryalt: "#1c323e",
    uiborder: "#0b1116",
    uibackground: "#151f27",
    uibackgroundalt: "#10181f",
    default: "#dbefff",
    defaultMain: "#b6d0d9",
    defaultalt: "#657d87",
  },
  colors: arcColors,
  levels: arcLevels,
};

export const HCWonderlandWood: Theme = {
  ui: {
    primary: "#fbe7c3",
    primaryalt: "#52426a",
    uiborder: "#0b1116",
    uibackground: "#1F1D36",
    uibackgroundalt: "#19172b",
    default: "#dadaf1",
    defaultMain: "#bdbed8",
    defaultalt: "#6c6c8c",
  },
  colors: {
    blue: "#92b4ff",
    green: "#91d6a7",
    greenAlt: "#A4EF58",
    orange: "#e4a792",
    pink: "#de98ae",
    purple: "#9a94e9",
    red: "#ff7e70",
    salmon: "#ed98cb",
    turquoize: "#7ddcbf",
    yellow: "#fbe7c3",
  },
  levels: {
    danger: "#ff7e70",
    success: "#91d6a7",
    warning: "#e4a792",
    info: "#92b4ff",
  },
};
export const HCBrewingStorm: Theme = {
  ui: {
    primary: "#9dffd9",
    primaryalt: "#2a5a5c",
    uiborder: "#061928",
    uibackground: "#0c2a42",
    uibackgroundalt: "#0a2439",
    default: "#dae8f1",
    defaultMain: "#b6cbd9",
    defaultalt: "#657d87",
  },
  colors: {
    blue: "#82c4ff",
    green: "#9dffbd",
    greenAlt: "#A4EF58",
    orange: "#ffaf94",
    pink: "#f1c6ee",
    purple: "#b8b3ff",
    red: "#ff7e70",
    salmon: "#f994bf",
    turquoize: "#22D3B1",
    yellow: "#fff0a6",
  },
  levels: {
    danger: "#ff7e70",
    success: "#9dffbd",
    warning: "#ffaf94",
    info: "#82c4ff",
  },
};

export const HCFlurry: Theme = {
  ui: {
    primary: "#444c54",
    primaryalt: "#f9fbfe",
    uiborder: "#c2c8ce",
    uibackground: "#f5f8fc",
    uibackgroundalt: "#EAECEE",
    default: "#272d34",
    defaultMain: "#3f4750",
    defaultalt: "#898989",
  },
  colors: {
    blue: "#0aa3d6",
    green: "#41ad4e",
    greenAlt: "#589f11",
    orange: "#e3946a",
    pink: "#f08ad9",
    purple: "#b377e3",
    red: "#ee5f50",
    salmon: "#ed7b89",
    turquoize: "#00b696",
    yellow: "#e39c03",
  },
  levels: {
    danger: "#ee5f50",
    success: "#41ad4e",
    warning: "#e3946a",
    info: "#0aa3d6",
  },
};

export const Minuit: Theme = {
  ui: {
    primary: "#e5c2a4",
    primaryalt: "#2E253D",
    uiborder: "#0a0910",
    uibackground: "#1C1827",
    uibackgroundalt: "#171420",
    default: "#bcc1dd",
    defaultMain: "#9da2c0",
    defaultalt: "#7d7d96",
  },
  colors: {
    blue: "#4fc1e8",
    green: "#69d2ab",
    greenAlt: "#77b03e",
    orange: "#eea67f",
    pink: "#d995c9",
    purple: "#ad92ff",
    red: "#fb7a6c",
    salmon: "#e38d97",
    turquoize: "#17d7b4",
    yellow: "#dbc2a3",
  },
  levels: {
    danger: "#fb7a6c",
    success: "#74be7d",
    warning: "#eea67f",
    info: "#4fc1e8",
  },
};
export const ChocolateEspresso: Theme = {
  ui: {
    primary: "#f69c95",
    primaryalt: "#563c3c",
    uiborder: "#13100e",
    uibackground: "#322626",
    uibackgroundalt: "#2a2020",
    default: "#ddc2bc",
    defaultMain: "#c0a69d",
    defaultalt: "#96807d",
  },
  colors: {
    blue: "#17d7d7",
    green: "#69d293",
    greenAlt: "#77b03e",
    orange: "#f69662",
    pink: "#d995c9",
    purple: "#ad92ff",
    red: "#fb7a6c",
    salmon: "#f08390",
    turquoize: "#17d7c4",
    yellow: "#edbc7f",
  },
  levels: {
    danger: "#fb7a6c",
    success: "#74be7d",
    warning: "#eea67f",
    info: "#4fc1e8",
  },
};
