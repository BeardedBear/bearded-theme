import syntax from "./syntax.js";
import ui from "./ui.js";
import fs from "fs";

const colors = {
  blue: "#3398DB",
  green: "#3DBF79",
  greenalt: "#7E9E2D",
  grey: "#808080",
  orange: "#D26D32",
  pink: "#CC71BC",
  purple: "#A15DEF",
  red: "#C13838",
  salmon: "#EC698A",
  transparent: "#00000000",
  turquoize: "#24B5A8",
  yellow: "#D39E17",
};

const levelColors = {
  danger: colors.red,
  success: colors.green,
  warning: colors.orange,
  info: colors.blue,
};

const vividColors = {
  blue: "#28A9FF",
  green: "#42DD76",
  greenalt: "#b7d175",
  grey: "#808080",
  orange: "#FF7135",
  pink: "#E66DFF",
  purple: "#A95EFF",
  red: "#D62C2C",
  salmon: "#FF478D",
  transparent: "#00000000",
  turquoize: "#14E5D4",
  yellow: "#FFB638",
};

const solarizedColors = {
  yellow: "#b58900",
  red: "#cb4b16",
  purple: "#6c71c4",
  blue: "#268bd2",
  green: "#859900",
  turquoize: "#2aa198",
  salmon: "#d33682",
};

function makeTheme(name, themeColors) {
  let theme = Object.assign(themeColors);
  let base = {
    $schema: "vscode://schemas/color-theme",
    name: "BeardedTheme " + name.charAt(0).toUpperCase() + name.slice(1),
    colors: ui(theme),
    tokenColors: syntax(theme),
  };

  fs.writeFile("themes/bearded-theme-" + name + ".json", JSON.stringify(base), (err) => {
    if (err) console.log("error", err);
  });
}

makeTheme(
  "anthracite",
  Object.assign(
    {
      primary: "#798CA8",
      primaryalt: "#3B434F",
      uiborder: "#272c33",
      uibackground: "#1b1d22",
      uibackgroundalt: "#141519",
      default: "#bbbbbb",
      defaultalt: "#4c5767",
    },
    colors,
    levelColors
  )
);
makeTheme(
  "vivid",
  Object.assign(
    {
      primary: "#8551FF",
      primaryalt: "#28225B",
      uiborder: "#241E43",
      uibackground: "#191130",
      uibackgroundalt: "#110A23",
      default: "#eeeeee",
      defaultalt: "#585785",
    },
    colors,
    vividColors,
    levelColors
  )
);

makeTheme(
  "arc",
  Object.assign(
    {
      primary: "#95b0de",
      primaryalt: "#364154",
      uiborder: "#303B4F",
      uibackground: "#222A38",
      uibackgroundalt: "#1D232F",
      default: "#bbbbbb",
      defaultalt: "#576375",
    },
    colors,
    levelColors
  )
);

makeTheme(
  "purple",
  Object.assign(
    {
      primary: "#9947EF",
      primaryalt: "#36224C",
      uiborder: "#2A1D38",
      uibackground: "#16101E",
      uibackgroundalt: "#100C16",
      default: "#bbbbbb",
      defaultalt: "#585785",
    },
    colors,
    levelColors
  )
);

makeTheme(
  "blue",
  Object.assign(
    {
      primary: "#3A7FFF",
      primaryalt: "#162C54",
      uiborder: "#18243A",
      uibackground: "#0D1321",
      uibackgroundalt: "#0A0D16",
      default: "#BBBBBB",
      defaultalt: "#5d7189",
    },
    colors,
    levelColors
  )
);

makeTheme(
  "light",
  Object.assign(
    {
      primary: "#4c5767",
      primaryalt: "#ffffff",
      uiborder: "#d1dadc",
      uibackground: "#ffffff",
      uibackgroundalt: "#f3f6f6",
      default: "#455059",
      defaultalt: "#a8b3bd",
    },
    colors,
    levelColors
  )
);
makeTheme(
  "solarized",
  Object.assign(
    {
      primary: "#1996bf",
      primaryalt: "#0E4456",
      uiborder: "#133E4C",
      uibackground: "#002b36",
      uibackgroundalt: "#00212B",
      default: "#cedbdb",
      defaultalt: "#547783",
    },
    colors,
    solarizedColors,
    {
      danger: solarizedColors.red,
      success: solarizedColors.green,
      warning: solarizedColors.orange,
      info: solarizedColors.blue,
    }
  )
);

makeTheme(
  "solarized-light",
  Object.assign(
    {
      primary: "#073642",
      primaryalt: "#fef9ec",
      uiborder: "#d8cfbb",
      uibackground: "#fdf6e3",
      uibackgroundalt: "#eee8d5",
      default: "#073642",
      defaultalt: "#a49f94",
    },
    colors,
    solarizedColors,
    {
      danger: solarizedColors.red,
      success: solarizedColors.green,
      warning: solarizedColors.orange,
      info: solarizedColors.blue,
    }
  )
);

makeTheme(
  "earth",
  Object.assign(
    {
      primary: "#cf3a76",
      primaryalt: "#56152F",
      // primary: "#8C574A",
      // primaryalt: "#382D2C",
      uiborder: "#332524",
      uibackground: "#1E1615",
      uibackgroundalt: "#16100F",
      default: "#C6BEAB",
      defaultalt: "#6a5553",
    },
    {
      blue: "#BA9D6F",
      green: "#639E29",
      greenalt: "#7E9E2D",
      grey: "#7F7070",
      orange: "#D1711D",
      pink: "#A8547A",
      purple: "#BAB13B",
      red: "#C13838",
      salmon: "#D65151",
      transparent: "#00000000",
      turquoize: "#4EAAA4",
      yellow: "#C48519",
    },
    levelColors
  )
);

makeTheme(
  "void",
  Object.assign(
    {
      primary: "#7A63ED",
      primaryalt: "#2A2156",
      uiborder: "#1A1430",
      uibackground: "#150F23",
      uibackgroundalt: "#0E0814",
      default: "#D7E2EF",
      defaultalt: "#585785",
    },
    {
      blue: "#7A63ED",
      green: "#6DBBFF",
      greenalt: "#2C729E",
      grey: "#7F7070",
      orange: "#3D8DE2",
      pink: "#A8547A",
      purple: "#2BD3E2",
      red: "#C13838",
      salmon: "#D65170",
      transparent: "#00000000",
      turquoize: "#89C4FF",
      yellow: "#585785",
    },
    levelColors
  )
);

makeTheme(
  "arc-eolstorm",
  Object.assign(
    {
      primary: "#95b0de",
      primaryalt: "#364154",
      uiborder: "#303B4F",
      uibackground: "#222A38",
      uibackgroundalt: "#1D232F",
      default: "#ffffff",
      defaultalt: "#576375",
    },
    {
      blue: "#69C3FF",
      green: "#3CEC85",
      greenalt: "#A4EF58",
      grey: "#808080",
      orange: "#FF955C",
      pink: "#F38CEC",
      purple: "#B78AFF",
      red: "#E35535",
      salmon: "#FF738A",
      transparent: "#00000000",
      turquoize: "#22ECDB",
      yellow: "#EACD61",
    },
    {
      danger: "#E35535",
      success: "#3CEC85",
      warning: "#FF955C",
      info: "#69C3FF",
    }
  )
);
