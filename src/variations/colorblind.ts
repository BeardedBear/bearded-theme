import { Theme, ThemeColors } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

const ui = makeMainColorsDark({ base: "#1b1e28", primary: "#9887eb" });

// https://davidmathlogic.com/colorblind/#%23FF5B82-%2338FFA1-%23FFAF86-%2332A7FF-%23F5DEC1-%23C9FFAE-%23FF97BF-%2300F0FD-%235F77DC-%234AE0D1
const colorsColorBlind: ThemeColors = {
  blue: "#32A7FF",
  green: "#38FFA1",
  greenAlt: "#C9FFAE",
  orange: "#FFAF86",
  pink: "#FF97BF",
  purple: "#5F77DC",
  red: "#FF5B82",
  salmon: "#00F0FD",
  turquoize: "#4AE0D1",
  yellow: "#F5DEC1",
};

export const colorBlind: Theme = {
  colors: colorsColorBlind,
  levels: {
    danger: colorsColorBlind.red,
    info: colorsColorBlind.blue,
    success: colorsColorBlind.green,
    warning: colorsColorBlind.orange,
  },
  ui,
};
