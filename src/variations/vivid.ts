import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

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
    blue: "#28A9FF",
    green: "#00d647",
    greenAlt: "#b7d175",
    orange: "#FF7135",
    pink: "#E66DFF",
    purple: "#A95EFF",
    red: "#D62C2C",
    salmon: "#FF478D",
    turquoize: "#00d6c4",
    yellow: "#ffaa18",
  },
  levels: vividLevels,
  ui: makeMainColorsLight({
    base: "#f4f4f4",
    primary: "#7e7e7e",
  }),
};
