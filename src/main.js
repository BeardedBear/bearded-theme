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
const vividColors = {
    blue: "#7dcbff",
    green: "#6ade91",
    greenalt: "#b7d175",
    grey: "#808080",
    orange: "#ffa16b",
    pink: "#ed96ff",
    purple: "#cda1ff",
    red: "#fc5656",
    salmon: "#ff94af",
    transparent: "#00000000",
    turquoize: "#60e6da",
    yellow: "#ffc969"
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
    let theme = Object.assign(themeColors);
    let base = {
        $schema: "vscode://schemas/color-theme",
        name: "BeardedTheme " + name.charAt(0).toUpperCase() + name.slice(1),
        colors: ui.body(theme),
        tokenColors: syntax.body(theme)
    };

    fs.writeFile(
        "themes/bearded-theme-" + name + ".json",
        JSON.stringify(base),
        err => {
            if (err) console.log("error", err);
        }
    );
}

makeTheme(
    "anthracite",
    Object.assign(
        {
            primary: "#9dabbf",
            primaryalt: "#3B434F",
            uiborder: "#272c33",
            uibackground: "#17191d",
            uibackgroundalt: "#1b1d22",
            default: "#bbbbbb"
        },
        colors
    )
);
makeTheme(
    "vivid",
    Object.assign(
        {
            primary: "#b7a7db",
            primaryalt: "#3a365c",
            uiborder: "#24253b",
            uibackground: "#151524",
            uibackgroundalt: "#191829",
            default: "#eeeeee"
        },
        colors,
        vividColors
    )
);

makeTheme(
    "arc",
    Object.assign(
        {
            primary: "#95b0de",
            primaryalt: "#3C495E",
            uiborder: "#374154",
            uibackground: "#232C3A",
            uibackgroundalt: "#283242",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "purple",
    Object.assign(
        {
            primary: "#8546C9",
            primaryalt: "#36224C",
            uiborder: "#2A1D38",
            uibackground: "#130E1A",
            uibackgroundalt: "#16101E",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "blue",
    Object.assign(
        {
            primary: "#3370E0",
            primaryalt: "#162C54",
            uiborder: "#141E30",
            uibackground: "#0B0F19",
            uibackgroundalt: "#0D121E",
            default: "#bbbbbb"
        },
        colors
    )
);

makeTheme(
    "light",
    Object.assign(
        {
            primary: "#798999",
            primaryalt: "#c3d3e0",
            uiborder: "#cccccc",
            uibackground: "#ffffff",
            uibackgroundalt: "#f4f4f4",
            default: "#444444"
        },
        colors
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
            uibackgroundalt: "#0F313D",
            default: "#cedbdb"
        },
        colors,
        solarizedColors
    )
);

makeTheme(
    "solarized-light",
    Object.assign(
        {
            primary: "#857f71",
            primaryalt: "#D6CDB8",
            uiborder: "#E0D9C9",
            uibackground: "#fdf6e3",
            uibackgroundalt: "#eee8d5",
            default: "#073642"
        },
        colors,
        solarizedColors
    )
);
