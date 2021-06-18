import { colors, levelColors, makeTheme } from "../mixins.js";

const primaryPurple = "#d24e4e";
const purple = makeTheme(
  "surprising-eggplant",
  Object.assign(
    {
      primary: primaryPurple,
      primaryalt: "#4e1d27",
      uiborder: "#0F0B14",
      uibackground: "#1d1426",
      uibackgroundalt: "#16111F",
      default: "#c3b6cc",
      defaultMain: "#c3b6cc",
      defaultalt: "#695091"
    },
    colors,
    levelColors,
    {
      yellow: primaryPurple,
      salmon: "#B85C40",
      orange: "#896ABD",
      blue: "#00B3BD",
      green: "#52AB62",
      turquoize: primaryPurple,
      purple: "#CC9B52",
      red: "#C13838",
      warning: "#c96c20",
      info: "#00B3BD",
      success: "#52AB62",
      danger: "#E35535"
    }
  )
);

const primaryBlue = "#c93e71";
const blue = makeTheme(
  "surprising-blueberry",
  Object.assign(
    {
      primary: primaryBlue,
      primaryalt: "#4e1d37",
      uiborder: "#0F0B14",
      uibackground: "#101a29",
      uibackgroundalt: "#0e1421",
      default: "#bad1d9",
      defaultMain: "#bad1d9",
      defaultalt: "#3e668c"
    },
    colors,
    levelColors,
    {
      yellow: primaryBlue,
      salmon: "#B85C40",
      orange: "#5288BA",
      blue: "#00B3BD",
      turquoize: primaryBlue,
      purple: "#CC9B52",
      red: "#C13838",
      warning: "#c96c20",
      info: "#00B3BD",
      danger: "#E35535"
    }
  )
);
const primaryWatermelon = "#da6c62";
const watermelon = makeTheme(
  "surprising-watermelon",
  Object.assign(
    {
      primary: primaryWatermelon,
      primaryalt: "#6a2b2a",
      uiborder: "#0C1617",
      uibackground: "#142326",
      uibackgroundalt: "#111d1f",
      default: "#c0ccc4",
      defaultMain: "#c0ccc4",
      defaultalt: "#2f6a69"
    },
    colors,
    levelColors,
    {
      yellow: primaryWatermelon,
      salmon: "#B85C40",
      orange: "#3DA198",
      blue: "#1ea8be",
      turquoize: primaryWatermelon,
      purple: "#ce64a0",
      green: "#5ca362",
      red: "#C25838",
      warning: "#c96c20",
      info: "#00B3BD",
      danger: "#E35535"
    }
  )
);

export default { purple, blue, watermelon };
