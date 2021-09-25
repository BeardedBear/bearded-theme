import { writeFile } from "fs";
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import { Theme } from "./typing";
import ui from "./ui";
import { arc, arcBlueBerry, arcEggplant, arcEolstorm } from "./variations/arc";
import { blackAndAmethyst, blackAndDiamond, blackAndEmerald, blackAndGold, blackAndRuby } from "./variations/black";
import { anthracite, light } from "./variations/classics";
import { altica, earth, voided } from "./variations/exotic";
import { monokaiBlack, monokaiMetallian, monokaiStone, monokaiTerra } from "./variations/monokai";
import { oceanic, solarizedDark, solarizedLight } from "./variations/solarized";
import { stainedBlue, stainedPurple } from "./variations/stained";
import { surprisingBlueberry, surprisingEggplant, surprisingWatermelon } from "./variations/surprising";
import { vividBlack, vividLight, vividPurple } from "./variations/vivid";

function makeTheme(name: string, theme: Theme): void {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    colors: ui(theme),
    tokenColors: syntax(theme),
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
  };

  writeFile(`themes/bearded-theme-${name}.json`, JSON.stringify(themeTemplate), (err) => {
    if (err) console.log("error", err);
  });
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
makeTheme("vivid-black", vividBlack);
makeTheme("vivid-light", vividLight);

// Monokai
makeTheme("monokai-terra", monokaiTerra);
makeTheme("monokai-metallian", monokaiMetallian);
makeTheme("monokai-stone", monokaiStone);
makeTheme("monokai-black", monokaiBlack);

// Exotic
makeTheme("exotic-earth", earth);
makeTheme("exotic-void", voided);
makeTheme("exotic-altica", altica);

// Classics
makeTheme("classics-anthracite", anthracite);
makeTheme("classics-light", light);

// Surprising
makeTheme("surprising-eggplant", surprisingEggplant);
makeTheme("surprising-blueberry", surprisingBlueberry);
makeTheme("surprising-watermelon", surprisingWatermelon);
