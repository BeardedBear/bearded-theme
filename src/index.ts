import { writeFile, writeFileSync } from "fs";
import bridge from "../bridge.json" assert { type: "json" };
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
  blackAndAmethystSoft,
  blackAndDiamond,
  blackAndDiamondSoft,
  blackAndEmerald,
  blackAndEmeraldSoft,
  blackAndGold,
  blackAndGoldSoft,
  blackAndRuby,
  blackAndRubySoft,
} from "./variations/black";
import { anthracite, light } from "./variations/classics";
import { colorBlind } from "./variations/colorblind";
import {
  altica,
  coffee,
  coffeeCream,
  coffeeReversed,
  earth,
  voided,
} from "./variations/exotic";
import {
  goldDRaynh,
  goldDRaynhLight,
  melleJulie,
  melleJulieLight,
  will,
} from "./variations/feat";
import {
  ChocolateEspresso,
  HCBrewingStorm,
  HCEbony,
  HCFlurry,
  HCMidnightVoid,
  HCWonderlandWood,
  Minuit,
} from "./variations/hc";
import {
  milkshakeBlueberry,
  milkshakeMango,
  milkshakeMint,
  milkshakeRaspberry,
  milkshakeVanilla,
} from "./variations/milkshake";
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
  untindedSelection?: boolean;
  desaturateInputs?: boolean;
}

interface BridgeItem {
  path: string;
  uiTheme: string;
  name: string;
}

const bfile: BridgeItem[] = JSON.parse(JSON.stringify(bridge));

async function makeTheme(
  name: string,
  theme: Theme,
  { hc, light, untindedSelection, desaturateInputs }: ThemeOptions = {
    hc: false,
    light: false,
    untindedSelection: false,
    desaturateInputs: false,
  },
): Promise<void> {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    colors: ui(theme, hc, light, untindedSelection, desaturateInputs),
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

  // Generate bridge.json
  bfile.push({
    path: `themes/bearded-theme-${name}.json`,
    uiTheme: "vs-dark",
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
  });

  if (bfile.length === [...new Set(bfile.map((item) => item.name))].length) {
    writeFileSync("bridge.json", JSON.stringify(bfile), { encoding: "utf8" });
  }
}

// Arc
makeTheme("arc", arc);
makeTheme("arc-eolstorm", arcEolstorm);
makeTheme("arc-blueberry", arcBlueBerry);
makeTheme("arc-eggplant", arcEggplant);

// Solarized
makeTheme("oceanic", oceanic);
makeTheme("oceanic-reversed", oceanicReverded);
makeTheme("solarized-dark", solarizedDark);
makeTheme("solarized-light", solarizedLight, {
  light: true,
  desaturateInputs: true,
});
makeTheme("solarized-reversed", solarizedReversed);

// Black
makeTheme("black-amethyst", blackAndAmethyst);
makeTheme("black-amethyst-soft", blackAndAmethystSoft);
makeTheme("black-diamond", blackAndDiamond);
makeTheme("black-diamond-soft", blackAndDiamondSoft);
makeTheme("black-emerald", blackAndEmerald);
makeTheme("black-emerald-soft", blackAndEmeraldSoft);
makeTheme("black-gold", blackAndGold);
makeTheme("black-gold-soft", blackAndGoldSoft);
makeTheme("black-ruby", blackAndRuby);
makeTheme("black-ruby-soft", blackAndRubySoft);

// Stained
makeTheme("stained-purple", stainedPurple);
makeTheme("stained-blue", stainedBlue);

// Vivid
makeTheme("vivid-purple", vividPurple);
makeTheme("vivid-black", vividBlack);
makeTheme("vivid-light", vividLight, { light: true });

// Monokai
makeTheme("monokai-terra", monokaiTerra);
makeTheme("monokai-metallian", monokaiMetallian);
makeTheme("monokai-stone", monokaiStone);
makeTheme("monokai-black", monokaiBlack);
makeTheme("monokai-reversed", monokaiReversed);

// Exotic
makeTheme("exotic-earth", earth);
makeTheme("coffee", coffee);
makeTheme("coffee-reversed", coffeeReversed);
makeTheme("coffee-cream", coffeeCream, { light: true });
makeTheme("exotic-void", voided);
makeTheme("exotic-altica", altica);
makeTheme("arc-reversed", arcReversed);

// Feat
makeTheme("will", will, { untindedSelection: true });
makeTheme("gold-d-raynh", goldDRaynh, { untindedSelection: true });
makeTheme("gold-d-raynh-light", goldDRaynhLight, { light: true });
makeTheme("mellejulie", melleJulie);
makeTheme("mellejulie-light", melleJulieLight, { light: true });

// Classics
makeTheme("classics-anthracite", anthracite);
makeTheme("classics-light", light, { light: true });

// Surprising
makeTheme("surprising-eggplant", surprisingEggplant);
makeTheme("surprising-blueberry", surprisingBlueberry);
makeTheme("surprising-watermelon", surprisingWatermelon);

// HC
makeTheme("hc-ebony", HCEbony, { hc: true });
makeTheme("hc-midnightvoid", HCMidnightVoid, { hc: true });
makeTheme("hc-flurry", HCFlurry, { hc: true, light: true });
makeTheme("hc-wonderland-wood", HCWonderlandWood, { hc: true });
makeTheme("hc-brewing-storm", HCBrewingStorm, { hc: true });
makeTheme("hc-minuit", Minuit, { hc: true });
makeTheme("hc-chocolateespresso", ChocolateEspresso, { hc: true });

// Milkshake
makeTheme("milkshake-raspberry", milkshakeRaspberry, {
  hc: true,
  light: true,
});
makeTheme("milkshake-blueberry", milkshakeBlueberry, {
  hc: true,
  light: true,
});
makeTheme("milkshake-mango", milkshakeMango, { hc: true, light: true });
makeTheme("milkshake-mint", milkshakeMint, { hc: true, light: true });
makeTheme("milkshake-vanilla", milkshakeVanilla, {
  hc: true,
  light: true,
});

// Colorblind
makeTheme("colorblind", colorBlind, { hc: true });
