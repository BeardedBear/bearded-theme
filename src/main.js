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

//  LIGHT

const lightTheme = Object.assign(
  {
    primary: "#8544ff",
    primaryalt: "#c7a8ff",
    default: "#000000",
    uiborder: "#caced4",
    uibackground: "#ffffff",
    uibackgroundalt: "#ebecee"
  },
  colors
);

const base = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme Light",
  colors: ui.body(lightTheme),
  tokenColors: syntax.body(lightTheme)
};

fs.writeFile("themes/bearded-theme-light.json", JSON.stringify(base), function(
  err,
  result
) {
  if (err) console.log("error", err);
});

// DARK BLUE

const darkThemeBlue = Object.assign(
  {
    primary: "#008cff",
    primaryalt: "#00447c",
    uiborder: "#141E30",
    uibackground: "#0B0F19",
    uibackgroundalt: "#0D121E",
    default: "#FFFFFF"
  },
  colors
);

const basedarkblue = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme Blue",
  colors: ui.body(darkThemeBlue),
  tokenColors: syntax.body(darkThemeBlue)
};

fs.writeFile(
  "themes/bearded-theme-blue.json",
  JSON.stringify(basedarkblue),
  function(err, result) {
    if (err) console.log("error", err);
  }
);

// DARK

const darkTheme = Object.assign(
  {
    primary: "#8544ff",
    primaryalt: "#322250",
    uiborder: "#2A1D38",
    uibackgroundalt: "#16101E",
    uibackground: "#130E1A",
    default: "#FFFFFF"
  },
  colors
);

const basedark = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme",
  colors: ui.body(darkTheme),
  tokenColors: syntax.body(darkTheme)
};

fs.writeFile(
  "themes/bearded-theme-purple.json",
  JSON.stringify(basedark),
  function(err, result) {
    if (err) console.log("error", err);
  }
);

// DARK BLACK

const darkThemeBlack = Object.assign(
  {
    primary: "#8C8C8C",
    primaryalt: "#3D3D3D",
    uiborder: "#191919",
    uibackgroundalt: "#0F0F0F",
    uibackground: "#0C0C0C",
    default: "#FFFFFF"
  },
  colors
);

const basedarkBlack = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme Black",
  colors: ui.body(darkThemeBlack),
  tokenColors: syntax.body(darkThemeBlack)
};

fs.writeFile(
  "themes/bearded-theme-black.json",
  JSON.stringify(basedarkBlack),
  function(err, result) {
    if (err) console.log("error", err);
  }
);

// DARK ANTHRACITE

const darkThemeAnthracite = Object.assign(
  {
    primary: "#5B7287",
    primaryalt: "#26323D",
    uiborder: "#272c33",
    uibackground: "#17191d",
    uibackgroundalt: "#1b1d22",
    default: "#FFFFFF"
  },
  colors
);

const basedarkAnthracite = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme Black",
  colors: ui.body(darkThemeAnthracite),
  tokenColors: syntax.body(darkThemeAnthracite)
};

fs.writeFile(
  "themes/bearded-theme-anthracite.json",
  JSON.stringify(basedarkAnthracite),
  function(err, result) {
    if (err) console.log("error", err);
  }
);
