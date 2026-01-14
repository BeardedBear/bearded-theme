import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

const colors: ThemeColors = {
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
  danger: colors.red,
  info: colors.blue,
  success: colors.green,
  warning: colors.orange,
};

export const HCEbony: Theme = {
  colors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#181820", primary: "#dbdeea" }),
};

export const HCMidnightVoid: Theme = {
  colors,
  levels: arcLevels,
  ui: makeMainColorsDark({ base: "#151f27", primary: "#dbefff" }),
};

export const HCWonderlandWood: Theme = {
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
    info: "#92b4ff",
    success: "#91d6a7",
    warning: "#e4a792",
  },
  ui: makeMainColorsDark({
    base: "#1F1D36",
    primary: "#fbe7c3",
    primaryAlt: "#52426a",
  }),
};
export const HCBrewingStorm: Theme = {
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
    danger: "#ff5e4c",
    info: "#3391e3",
    success: "#84ffad",
    warning: "#ff9d7c",
  },
  ui: makeMainColorsDark({
    base: "#0c2a42",
    primary: "#9dffd9",
    primaryAlt: "#2a5a5c",
  }),
};

export const HCFlurry: Theme = {
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
    info: "#0aa3d6",
    success: "#41ad4e",
    warning: "#e3946a",
  },
  ui: {
    border: "#c2c8ce",
    default: "#272d34",
    defaultalt: "#898989",
    defaultMain: "#3f4750",
    primary: "#444c54",
    primaryalt: "#f9fbfe",
    uibackground: "#f5f8fc",
    uibackgroundalt: "#EAECEE",
    uibackgroundmid: "#f0f2f5",
  },
};

export const Minuit: Theme = {
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
    info: "#4fc1e8",
    success: "#74be7d",
    warning: "#eea67f",
  },
  ui: makeMainColorsDark({
    base: "#1C1827",
    primary: "#ecc48c",
    primaryAlt: "#635345",
  }),
};
export const ChocolateEspresso: Theme = {
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
    info: "#4fc1e8",
    success: "#74be7d",
    warning: "#eea67f",
  },
  ui: makeMainColorsDark({
    base: "#2e2424",
    fontTeinted: true,
    primary: "#f69c95",
    primaryAlt: "#5d423d",
  }),
};
