import { writeFile } from "fs";
import syntax from "./scopes/scopes";
import { Theme } from "./typing";
import ui from "./ui";
import { arc, arcBlueBerry, arcEggplant, arcEolstorm } from "./variations/arc";
import {
  blackAndAmethyst,
  blackAndDiamond,
  blackAndEmerald,
  blackAndGold,
  blackAndRuby
} from "./variations/black";
import { oceanic, solarizedDark, solarizedLight } from "./variations/solarized";
import { stainedBlue, stainedPurple } from "./variations/stained";
import { vividPurple } from "./variations/vivid";

function makeTheme(name: string, theme: Theme): void {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BT${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    colors: ui(theme),
    tokenColors: syntax(theme)
  };

  writeFile(
    `themes/bearded-theme-${name}.json`,
    JSON.stringify(themeTemplate),
    (err) => {
      if (err) console.log("error", err);
    }
  );
}

// Arc
makeTheme("arc", arc);
makeTheme("arc-eolstorm", arcEolstorm);
makeTheme("arc-blueberry", arcBlueBerry);
makeTheme("arc-eggplant", arcEggplant);

// Solarized
makeTheme("oceanic", oceanic);
makeTheme("solarized-dark", solarizedDark);
makeTheme("solarized-light", solarizedLight);

// Black
makeTheme("black-amethyst", blackAndAmethyst);
makeTheme("black-diamond", blackAndDiamond);
makeTheme("black-emerald", blackAndEmerald);
makeTheme("black-gold", blackAndGold);
makeTheme("black-ruby", blackAndRuby);

// Stained
makeTheme("stained-purple", stainedPurple);
makeTheme("stained-blue", stainedBlue);

// Vivid
makeTheme("vivid-purple", vividPurple);
