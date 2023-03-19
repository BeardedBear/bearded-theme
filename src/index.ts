import { writeFile } from "fs";
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import { Theme } from "./typing";
import ui from "./ui";
import {
  arc,
  arcBlueBerry,
  arcEggplant,
  arcEolstorm,
  arcReversed,
} from "./variations/arc";
import {
  blackAndAmethyst,
  blackAndDiamond,
  blackAndEmerald,
  blackAndGold,
  blackAndRuby,
} from "./variations/black";
import { anthracite, light } from "./variations/classics";
import {
  ChocolateEspresso,
  HCBrewingStorm,
  HCEbony,
  HCFlurry,
  HCMidnightVoid,
  HCWonderlandWood,
  Minuit,
} from "./variations/contrast";
import {
  altica,
  coffee,
  coffeeCream,
  coffeeReversed,
  earth,
  voided,
  will,
} from "./variations/exotic";
import {
  monokaiBlack,
  monokaiMetallian,
  monokaiReversed,
  monokaiStone,
  monokaiTerra,
} from "./variations/monokai";
import {
  oceanic,
  oceanicReverded,
  solarizedDark,
  solarizedLight,
  solarizedReversed,
} from "./variations/solarized";
import { stainedBlue, stainedPurple } from "./variations/stained";
import {
  surprisingBlueberry,
  surprisingEggplant,
  surprisingWatermelon,
} from "./variations/surprising";
import { vividBlack, vividLight, vividPurple } from "./variations/vivid";

interface ThemeOptions {
  hc?: boolean;
  light?: boolean;
}

function makeTheme(
  name: string,
  theme: Theme,
  { hc = false, light = false }: ThemeOptions,
): void {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    colors: ui(theme, hc, light),
    tokenColors: syntax(theme, hc),
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
  };

  writeFile(
    `themes/bearded-theme-${name}.json`,
    JSON.stringify(themeTemplate),
    (err) => {
      if (err) console.log("error", err);
    },
  );
}

// Arc
makeTheme("arc", arc, {});
makeTheme("arc-eolstorm", arcEolstorm, {});
makeTheme("arc-blueberry", arcBlueBerry, {});
makeTheme("arc-eggplant", arcEggplant, {});

// Solarized
makeTheme("oceanic", oceanic, {});
makeTheme("oceanic-reversed", oceanicReverded, {});
makeTheme("solarized-dark", solarizedDark, {});
makeTheme("solarized-light", solarizedLight, { light: true });
makeTheme("solarized-reversed", solarizedReversed, {});

// Black
makeTheme("black-amethyst", blackAndAmethyst, {});
makeTheme("black-diamond", blackAndDiamond, {});
makeTheme("black-emerald", blackAndEmerald, {});
makeTheme("black-gold", blackAndGold, {});
makeTheme("black-ruby", blackAndRuby, {});

// Stained
makeTheme("stained-purple", stainedPurple, {});
makeTheme("stained-blue", stainedBlue, {});

// Vivid
makeTheme("vivid-purple", vividPurple, {});
makeTheme("vivid-black", vividBlack, {});
makeTheme("vivid-light", vividLight, { light: true });

// Monokai
makeTheme("monokai-terra", monokaiTerra, {});
makeTheme("monokai-metallian", monokaiMetallian, {});
makeTheme("monokai-stone", monokaiStone, {});
makeTheme("monokai-black", monokaiBlack, {});
makeTheme("monokai-reversed", monokaiReversed, {});

// Exotic
makeTheme("exotic-earth", earth, {});
makeTheme("coffee", coffee, {});
makeTheme("coffee-reversed", coffeeReversed, {});
makeTheme("coffee-cream", coffeeCream, { light: true });
makeTheme("exotic-void", voided, {});
makeTheme("exotic-altica", altica, {});
makeTheme("will", will, {});
makeTheme("arc-reversed", arcReversed, {});

// Classics
makeTheme("classics-anthracite", anthracite, {});
makeTheme("classics-light", light, { light: true });

// Surprising
makeTheme("surprising-eggplant", surprisingEggplant, {});
makeTheme("surprising-blueberry", surprisingBlueberry, {});
makeTheme("surprising-watermelon", surprisingWatermelon, {});

// Contrast
makeTheme("hc-ebony", HCEbony, { hc: true });
makeTheme("hc-midnightvoid", HCMidnightVoid, { hc: true });
makeTheme("hc-flurry", HCFlurry, { hc: true, light: true });
makeTheme("hc-wonderland-wood", HCWonderlandWood, { hc: true });
makeTheme("hc-brewing-storm", HCBrewingStorm, { hc: true });
makeTheme("hc-minuit", Minuit, { hc: true });
makeTheme("hc-chocolateespresso", ChocolateEspresso, { hc: true });
