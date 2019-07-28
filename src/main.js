const syntax = require("./syntax");
const ui = require("./ui");
const fs = require("fs");

const colors = {
  blue: "#4b9cd2",
  green: "#4db36f",
  greenalt: "#839f3c",
  grey: "#808080",
  orange: "#d2692d",
  pink: "#c360d7",
  purple: "#b17af0",
  red: "#c24747",
  salmon: "#e86687",
  transparent: "#00000000",
  turquoize: "#30a69c",
  yellow: "#c49137"
};

const solarizedColors = {
  yellow: "#b58900",
  red: "#cb4b16",
  purple: "#6c71c4",
  blue: "#268bd2",
  green: "#859900",
  turquoize: "#2aa198",
  salmon: "#d33682"
};

function makeTheme(name, themeColors) {
  let theme = Object.assign(colors, themeColors);
  let base = {
    $schema: "vscode://schemas/color-theme",
    name: "BeardedTheme " + name.charAt(0).toUpperCase() + name.slice(1),
    colors: ui.body(theme),
    tokenColors: syntax.body(theme)
  };

  fs.writeFile(
    "themes/bearded-theme-" + name + ".json",
    JSON.stringify(base),
    (err, result) => {
      if (err) console.log("error", err);
    }
  );
}

makeTheme("anthracite", {
  primary: "#879AB5",
  primaryalt: "#3B434F",
  uiborder: "#272c33",
  uibackground: "#17191d",
  uibackgroundalt: "#1b1d22",
  default: "#E9E9E9"
});

makeTheme("arc", {
  primary: "#7F9AC6",
  primaryalt: "#3C495E",
  uiborder: "#374154",
  uibackground: "#232C3A",
  uibackgroundalt: "#283242",
  default: "#E9E9E9"
});

makeTheme("purple", {
  primary: "#8546C9",
  primaryalt: "#36224C",
  uiborder: "#2A1D38",
  uibackground: "#130E1A",
  uibackgroundalt: "#16101E",
  default: "#E9E9E9"
});

makeTheme("blue", {
  primary: "#3370E0",
  primaryalt: "#162C54",
  uiborder: "#141E30",
  uibackground: "#0B0F19",
  uibackgroundalt: "#0D121E",
  default: "#E9E9E9"
});

makeTheme("light", {
  primary: "#758ba1",
  primaryalt: "#c3d3e0",
  uiborder: "#cccccc",
  uibackground: "#ffffff",
  uibackgroundalt: "#f4f4f4",
  default: "#444444"
});

makeTheme(
  "solarized",
  Object.assign(
    {
      primary: "#1C7FA0",
      primaryalt: "#0E4456",
      uiborder: "#133E4C",
      uibackground: "#002b36",
      uibackgroundalt: "#0F313D",
      default: "#cedbdb"
    },
    solarizedColors
  )
);

makeTheme(
  "solarized-light",
  Object.assign(
    {
      primary: "#A8A190",
      primaryalt: "#D6CDB8",
      uiborder: "#E0D9C9",
      uibackground: "#fdf6e3",
      uibackgroundalt: "#eee8d5",
      default: "#073642"
    },
    solarizedColors
  )
);
