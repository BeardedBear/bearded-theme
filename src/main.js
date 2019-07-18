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
  red: "#cf3a3a",
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
  primary: "#7E96AD",
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
  uibackground: "#0C0C0C",
  uibackgroundalt: "#0F0F0F",
  default: "#FFFFFF"
});

makeTheme("purple", {
  primary: "#8544ff",
  primaryalt: "#322250",
  uiborder: "#2A1D38",
  uibackground: "#130E1A",
  uibackgroundalt: "#16101E",
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
  primary: "#758ba1",
  primaryalt: "#c3d3e0",
  uiborder: "#cccccc",
  uibackground: "#ffffff",
  uibackgroundalt: "#f4f4f4",
  default: "#444444"
});
