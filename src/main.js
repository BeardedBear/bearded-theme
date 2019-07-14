const syntax = require("./syntax");
const ui = require("./ui");
const fs = require("fs");

const colors = {
  blue: "#318bc7",
  green: "#4bb46e",
  greenalt: "#99c24e",
  grey: "#808080",
  orange: "#ff7728",
  pink: "#cb55e2",
  purple: "#af6bfd",
  red: "#ff4949",
  salmon: "#e4567c",
  transparent: "#00000000",
  turquoize: "#4fb99a",
  yellow: "#e09914"
};

function makeTheme(name, themeColors) {
  let theme = Object.assign(themeColors, colors);
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
  primary: "#5B7287",
  primaryalt: "#26323D",
  uiborder: "#272c33",
  uibackground: "#17191d",
  uibackgroundalt: "#1b1d22",
  default: "#FFFFFF"
});

makeTheme("black", {
  primary: "#8C8C8C",
  primaryalt: "#3D3D3D",
  uiborder: "#191919",
  uibackgroundalt: "#0F0F0F",
  uibackground: "#0C0C0C",
  default: "#FFFFFF"
});

makeTheme("purple", {
  primary: "#8544ff",
  primaryalt: "#322250",
  uiborder: "#2A1D38",
  uibackgroundalt: "#16101E",
  uibackground: "#130E1A",
  default: "#FFFFFF"
});

makeTheme("blue", {
  primary: "#008cff",
  primaryalt: "#00447c",
  uiborder: "#141E30",
  uibackground: "#0B0F19",
  uibackgroundalt: "#0D121E",
  default: "#FFFFFF"
});

makeTheme("light", {
  primary: "#8544ff",
  primaryalt: "#c7a8ff",
  default: "#000000",
  uiborder: "#caced4",
  uibackground: "#ffffff",
  uibackgroundalt: "#ebecee"
});