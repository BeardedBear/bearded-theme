const syntax = require("./syntax");
const ui = require("./ui");
const fs = require("fs");

const colors = {
  blue: "#3e9dde",
  green: "#4bb46e",
  greenalt: "#739c28",
  grey: "#808080",
  orange: "#de6721",
  pink: "#cb55e2",
  purple: "#af6bfd",
  red: "#cf3a3a",
  salmon: "#e85a7e",
  transparent: "#00000000",
  turquoize: "#2bada3",
  yellow: "#d1961f"
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
  primary: "#7E96AD",
  primaryalt: "#26323D",
  uiborder: "#272c33",
  uibackground: "#17191d",
  uibackgroundalt: "#1b1d22",
  default: "#E9E9E9"
});

makeTheme("black", {
  primary: "#8C8C8C",
  primaryalt: "#3D3D3D",
  uiborder: "#191919",
  uibackground: "#0C0C0C",
  uibackgroundalt: "#0F0F0F",
  default: "#E9E9E9"
});

makeTheme("purple", {
  primary: "#8544ff",
  primaryalt: "#322250",
  uiborder: "#2A1D38",
  uibackground: "#130E1A",
  uibackgroundalt: "#16101E",
  default: "#E9E9E9"
});

makeTheme("blue", {
  primary: "#008cff",
  primaryalt: "#00447c",
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
      primary: "#078BB7",
      primaryalt: "#034359",
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
