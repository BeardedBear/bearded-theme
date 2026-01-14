// Import all theme variations
import {
  aquarelleCymbidium,
  aquarelleHydrangea,
  aquarelleLilac,
} from "../variations/aquarelle";
import {
  arc,
  arcBlueBerry,
  arcEggplant,
  arcEolstorm,
  arcReversed,
} from "../variations/arc";
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
} from "../variations/black";
import { anthracite, light } from "../variations/classics";
import { colorBlind } from "../variations/colorblind";
import {
  altica,
  coffee,
  coffeeCream,
  coffeeReversed,
  earth,
  voided,
} from "../variations/exotic";
import {
  goldDRaynh,
  goldDRaynhLight,
  melleJulie,
  melleJulieLight,
  webDevCody,
  will,
} from "../variations/feat";
import {
  ChocolateEspresso,
  HCBrewingStorm,
  HCEbony,
  HCFlurry,
  HCMidnightVoid,
  HCWonderlandWood,
  Minuit,
} from "../variations/hc";
import {
  milkshakeBlueberry,
  milkshakeMango,
  milkshakeMint,
  milkshakeRaspberry,
  milkshakeVanilla,
} from "../variations/milkshake";
import {
  monokaiBlack,
  monokaiMetallian,
  monokaiReversed,
  monokaiStone,
  monokaiTerra,
} from "../variations/monokai";
import { oled } from "../variations/oled";
import {
  oceanic,
  oceanicReverded,
  solarizedDark,
  solarizedLight,
  solarizedReversed,
} from "../variations/solarized";
import { stainedBlue, stainedPurple } from "../variations/stained";
import {
  surprisingBlueberry,
  surprisingEggplant,
  surprisingWatermelon,
} from "../variations/surprising";
import { vividBlack, vividLight, vividPurple } from "../variations/vivid";
import { Theme } from "./types";

export interface ThemeOptions {
  desaturateInputs?: boolean;
  hc?: boolean;
  light?: boolean;
  untindedSelection?: boolean;
}

export interface ThemeRegistryEntry {
  name: string;
  options: ThemeOptions;
  slug: string;
  theme: Theme;
}

/**
 * Central registry of all Bearded Theme variations.
 * This is the single source of truth for both VSCode and Zed generators.
 */
export const themeRegistry: ThemeRegistryEntry[] = [
  // Arc
  { name: "Arc", options: {}, slug: "arc", theme: arc },
  {
    name: "Arc EolStorm",
    options: {},
    slug: "arc-eolstorm",
    theme: arcEolstorm,
  },
  {
    name: "Arc Blueberry",
    options: {},
    slug: "arc-blueberry",
    theme: arcBlueBerry,
  },
  {
    name: "Arc Eggplant",
    options: {},
    slug: "arc-eggplant",
    theme: arcEggplant,
  },
  {
    name: "Arc Reversed",
    options: {},
    slug: "arc-reversed",
    theme: arcReversed,
  },

  // Solarized / Oceanic
  { name: "Oceanic", options: {}, slug: "oceanic", theme: oceanic },
  {
    name: "Oceanic Reversed",
    options: {},
    slug: "oceanic-reversed",
    theme: oceanicReverded,
  },
  {
    name: "Solarized",
    options: {},
    slug: "solarized-dark",
    theme: solarizedDark,
  },
  {
    name: "Solarized Light",
    options: { desaturateInputs: true, light: true },
    slug: "solarized-light",
    theme: solarizedLight,
  },
  {
    name: "Solarized Reversed",
    options: {},
    slug: "solarized-reversed",
    theme: solarizedReversed,
  },

  // Black & Gems
  {
    name: "Black & Amethyst",
    options: {},
    slug: "black-&-amethyst",
    theme: blackAndAmethyst,
  },
  {
    name: "Black & Amethyst Soft",
    options: {},
    slug: "black-&-amethyst-soft",
    theme: blackAndAmethystSoft,
  },
  {
    name: "Black & Diamond",
    options: {},
    slug: "black-&-diamond",
    theme: blackAndDiamond,
  },
  {
    name: "Black & Diamond Soft",
    options: {},
    slug: "black-&-diamond-soft",
    theme: blackAndDiamondSoft,
  },
  {
    name: "Black & Emerald",
    options: {},
    slug: "black-&-emerald",
    theme: blackAndEmerald,
  },
  {
    name: "Black & Emerald Soft",
    options: {},
    slug: "black-&-emerald-soft",
    theme: blackAndEmeraldSoft,
  },
  {
    name: "Black & Gold",
    options: {},
    slug: "black-&-gold",
    theme: blackAndGold,
  },
  {
    name: "Black & Gold Soft",
    options: {},
    slug: "black-&-gold-soft",
    theme: blackAndGoldSoft,
  },
  {
    name: "Black & Ruby",
    options: {},
    slug: "black-&-ruby",
    theme: blackAndRuby,
  },
  {
    name: "Black & Ruby Soft",
    options: {},
    slug: "black-&-ruby-soft",
    theme: blackAndRubySoft,
  },

  // Stained
  {
    name: "Stained Purple",
    options: {},
    slug: "stained-purple",
    theme: stainedPurple,
  },
  {
    name: "Stained Blue",
    options: {},
    slug: "stained-blue",
    theme: stainedBlue,
  },

  // Vivid
  {
    name: "Vivid Purple",
    options: {},
    slug: "vivid-purple",
    theme: vividPurple,
  },
  { name: "Vivid Black", options: {}, slug: "vivid-black", theme: vividBlack },
  {
    name: "Vivid Light",
    options: { light: true },
    slug: "vivid-light",
    theme: vividLight,
  },

  // Monokai
  {
    name: "Monokai Terra",
    options: {},
    slug: "monokai-terra",
    theme: monokaiTerra,
  },
  {
    name: "Monokai Metallian",
    options: {},
    slug: "monokai-metallian",
    theme: monokaiMetallian,
  },
  {
    name: "Monokai Stone",
    options: {},
    slug: "monokai-stone",
    theme: monokaiStone,
  },
  {
    name: "Monokai Black",
    options: {},
    slug: "monokai-black",
    theme: monokaiBlack,
  },
  {
    name: "Monokai Reversed",
    options: {},
    slug: "monokai-reversed",
    theme: monokaiReversed,
  },

  // Exotic
  { name: "Earth", options: {}, slug: "earth", theme: earth },
  { name: "Coffee", options: {}, slug: "coffee", theme: coffee },
  {
    name: "Coffee Reversed",
    options: {},
    slug: "coffee-reversed",
    theme: coffeeReversed,
  },
  {
    name: "Coffee Cream",
    options: { light: true },
    slug: "coffee-cream",
    theme: coffeeCream,
  },
  { name: "Void", options: {}, slug: "void", theme: voided },
  { name: "Altica", options: {}, slug: "altica", theme: altica },

  // Feat (Collaborations)
  {
    name: "feat. Will",
    options: { untindedSelection: true },
    slug: "feat-will",
    theme: will,
  },
  {
    name: "feat. Gold D Raynh",
    options: { untindedSelection: true },
    slug: "feat-gold-d-raynh",
    theme: goldDRaynh,
  },
  {
    name: "feat. Mintshake D Raynh",
    options: { light: true },
    slug: "feat-gold-d-raynh-light",
    theme: goldDRaynhLight,
  },
  {
    name: "feat. Melle Julie",
    options: {},
    slug: "feat-mellejulie",
    theme: melleJulie,
  },
  {
    name: "feat. Melle Julie Light",
    options: { light: true },
    slug: "feat-mellejulie-light",
    theme: melleJulieLight,
  },
  {
    name: "feat. WebDevCody",
    options: { hc: true, untindedSelection: true },
    slug: "feat-webDevCody",
    theme: webDevCody,
  },

  // Classics
  {
    name: "Anthracite",
    options: {},
    slug: "classics-anthracite",
    theme: anthracite,
  },
  {
    name: "Light",
    options: { light: true },
    slug: "classics-light",
    theme: light,
  },

  // Surprising
  {
    name: "Surprising Eggplant",
    options: {},
    slug: "surprising-eggplant",
    theme: surprisingEggplant,
  },
  {
    name: "Surprising Blueberry",
    options: {},
    slug: "surprising-blueberry",
    theme: surprisingBlueberry,
  },
  {
    name: "Surprising Watermelon",
    options: {},
    slug: "surprising-watermelon",
    theme: surprisingWatermelon,
  },

  // High Contrast
  { name: "HC Ebony", options: { hc: true }, slug: "hc-ebony", theme: HCEbony },
  {
    name: "HC Midnight Void",
    options: { hc: true },
    slug: "hc-midnightvoid",
    theme: HCMidnightVoid,
  },
  {
    name: "HC Flurry",
    options: { hc: true, light: true },
    slug: "hc-flurry",
    theme: HCFlurry,
  },
  {
    name: "HC Wonderland Wood",
    options: { hc: true },
    slug: "hc-wonderland-wood",
    theme: HCWonderlandWood,
  },
  {
    name: "HC Brewing Storm",
    options: { hc: true },
    slug: "hc-brewing-storm",
    theme: HCBrewingStorm,
  },
  {
    name: "HC Minuit",
    options: { hc: true },
    slug: "hc-minuit",
    theme: Minuit,
  },
  {
    name: "HC Chocolate Espresso",
    options: { hc: true },
    slug: "hc-chocolate-espresso",
    theme: ChocolateEspresso,
  },

  // Milkshake
  {
    name: "Milkshake Raspberry",
    options: { hc: true, light: true },
    slug: "milkshake-raspberry",
    theme: milkshakeRaspberry,
  },
  {
    name: "Milkshake Blueberry",
    options: { hc: true, light: true },
    slug: "milkshake-blueberry",
    theme: milkshakeBlueberry,
  },
  {
    name: "Milkshake Mango",
    options: { hc: true, light: true },
    slug: "milkshake-mango",
    theme: milkshakeMango,
  },
  {
    name: "Milkshake Mint",
    options: { hc: true, light: true },
    slug: "milkshake-mint",
    theme: milkshakeMint,
  },
  {
    name: "Milkshake Vanilla Banana",
    options: { hc: true, light: true },
    slug: "milkshake-vanilla",
    theme: milkshakeVanilla,
  },

  // Accessibility
  {
    name: "Themanopia (Experimental)",
    options: { hc: true },
    slug: "Themanopia",
    theme: colorBlind,
  },

  // Aquarelle
  {
    name: "Aquarelle Cymbidium",
    options: {},
    slug: "aquarelle-cymbidium",
    theme: aquarelleCymbidium,
  },
  {
    name: "Aquarelle Hydrangea",
    options: {},
    slug: "aquarelle-hydrangea",
    theme: aquarelleHydrangea,
  },
  {
    name: "Aquarelle Lilac",
    options: {},
    slug: "aquarelle-lilac",
    theme: aquarelleLilac,
  },

  // OLED
  { name: "OLED (Experimental)", options: {}, slug: "oled", theme: oled },
];

/**
 * Get the VSCode uiTheme based on theme options
 */
export function getVscodeUiTheme(options: ThemeOptions): string {
  if (options.hc) return "hc-black";
  if (options.light) return "vs";
  return "vs-dark";
}

/**
 * Get the Zed appearance based on theme options
 */
export function getZedAppearance(options: ThemeOptions): "dark" | "light" {
  return options.light ? "light" : "dark";
}
