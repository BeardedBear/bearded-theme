import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors } from "../typing";

const ui = makeMainColorsDark({ base: "#1b1e28", primary: "#9887eb" });

// https://davidmathlogic.com/colorblind/#%23FF5B82-%2338FFA1-%23FFAF86-%2332A7FF-%23F5DEC1-%23C9FFAE-%23FF97BF-%2300F0FD-%23FF91CC-%234AE0C0-%231B1E28-%23A592FF
const colorsColorBlind: ThemeColors = {
  blue: "#7c9cf8",
  green: "#f4e094",
  greenAlt: "#ffefba",
  orange: "#cfc08c",
  pink: "#b1b4cf",
  purple: "#4a7ade",
  red: "#95939c",
  salmon: "#b1b4cf",
  turquoize: "#cec8c4",
  yellow: "#ece0c1",
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
