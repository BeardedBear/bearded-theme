import { Theme, ThemeColors, ThemeLevels } from "../generators/vscode/types";
import { makeMainColorsDark, makeMainColorsLight } from "../helper";

const vividColors: ThemeColors = {
  blue: "#28A9FF",
  green: "#42DD76",
  greenAlt: "#b7d175",
  orange: "#FF7135",
  pink: "#E66DFF",
  purple: "#A95EFF",
  red: "#D62C2C",
  salmon: "#FF478D",
  turquoize: "#14E5D4",
  yellow: "#FFB638",
};

const vividLevels: ThemeLevels = {
  danger: vividColors.red,
  info: vividColors.blue,
  success: vividColors.green,
  warning: vividColors.yellow,
};

export const vividPurple: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#171131",
    primary: "#A680FF",
  }),
};

export const vividBlack: Theme = {
  colors: vividColors,
  levels: vividLevels,
  ui: makeMainColorsDark({
    base: "#141417",
    primary: "#AAAAAA",
  }),
};

export const vividLight: Theme = {
  colors: {
    blue: "#0099ff",
    green: "#00ac39",
    greenAlt: "#6f9b00",
    orange: "#df6800",
    pink: "#E66DFF",
    purple: "#9c45ff",
    red: "#D62C2C",
    salmon: "#ff0062",
    turquoize: "#00b8a9",
    yellow: "#d48700",
  },
  levels: vividLevels,
  ui: makeMainColorsLight({
    base: "#f4f4f4",
    primary: "#7e7e7e",
  }),
};
