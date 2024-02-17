import { writeFile, writeFileSync } from "fs";

import bridge from "../bridge.json" assert { type: "json" };
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import { Theme } from "./typing";
import ui from "./ui";
import {
  aquarelleCymbidium,
  aquarelleHydrangea,
  aquarelleLilac,
} from "./variations/aquarelle";
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
  desaturateInputs?: boolean;
  hc?: boolean;
  light?: boolean;
  untindedSelection?: boolean;
}

interface BridgeItem {
  name: string;
  slug: string;
  theme: Theme;
  uiTheme: string;
}

const bfile: BridgeItem[] = JSON.parse(JSON.stringify(bridge));

/**
 * Generates a theme template and writes it to a JSON file.
 * @param name - The name of the theme.
 * @param theme - The theme object containing color definitions.
 * @param options - Optional configuration for the theme generation.
 * @param options.desaturateInputs - Whether to desaturate input colors. Default is false.
 * @param options.hc - Whether to generate a high contrast theme. Default is false.
 * @param options.light - Whether to generate a light theme. Default is false.
 * @param options.untindedSelection - Whether to generate an untinted selection color. Default is false.
 * @returns A Promise that resolves when the theme file is written successfully.
 */
async function makeTheme(
  name: string,
  theme: Theme,
  { desaturateInputs, hc, light, untindedSelection }: ThemeOptions = {
    desaturateInputs: false,
    hc: false,
    light: false,
    untindedSelection: false,
  },
): Promise<void> {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    colors: ui(theme, hc, light, untindedSelection, desaturateInputs),
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
    tokenColors: syntax(theme, hc),
  };

  writeFile(
    `themes/bearded-theme-${name}.json`,
    JSON.stringify(themeTemplate),
    (err) => {
      if (err) console.log("error", err);
    },
  );

  // Generate bridge.json
  const themeName = name
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  bfile.push({
    name: `Bearded Theme ${themeName}`,
    slug: name.split(" ").join("-").toLowerCase(),
    theme,
    uiTheme: "vs-dark",
  });

  if (bfile.length === new Set(bfile.map((item) => item.name)).size) {
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
  desaturateInputs: true,
  light: true,
});
makeTheme("solarized-reversed", solarizedReversed);

// Black
makeTheme("black-&-amethyst", blackAndAmethyst);
makeTheme("black-&-amethyst-soft", blackAndAmethystSoft);
makeTheme("black-&-diamond", blackAndDiamond);
makeTheme("black-&-diamond-soft", blackAndDiamondSoft);
makeTheme("black-&-emerald", blackAndEmerald);
makeTheme("black-&-emerald-soft", blackAndEmeraldSoft);
makeTheme("black-&-gold", blackAndGold);
makeTheme("black-&-gold-soft", blackAndGoldSoft);
makeTheme("black-&-ruby", blackAndRuby);
makeTheme("black-&-ruby-soft", blackAndRubySoft);

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
makeTheme("earth", earth);
makeTheme("coffee", coffee);
makeTheme("coffee-reversed", coffeeReversed);
makeTheme("coffee-cream", coffeeCream, { light: true });
makeTheme("void", voided);
makeTheme("altica", altica);
makeTheme("arc-reversed", arcReversed);

// Feat
makeTheme("feat-will", will, { untindedSelection: true });
makeTheme("feat-gold-d-raynh", goldDRaynh, { untindedSelection: true });
makeTheme("feat-gold-d-raynh-light", goldDRaynhLight, { light: true });
makeTheme("feat-mellejulie", melleJulie);
makeTheme("feat-mellejulie-light", melleJulieLight, { light: true });

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
makeTheme("hc-chocolate-espresso", ChocolateEspresso, { hc: true });

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
makeTheme("Themanopia", colorBlind, { hc: true });

// Pale
makeTheme("aquarelle-cymbidium", aquarelleCymbidium);
makeTheme("aquarelle-hydrangea", aquarelleHydrangea);
makeTheme("aquarelle-lilac", aquarelleLilac);
