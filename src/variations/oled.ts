import { colord as c } from "colord";

import { Theme, ThemeColors, ThemeLevels, ThemeUi } from "../generators/vscode/types";
import { makeMainColorsDark } from "../helper";

const pureBlack = "#000000";

const oledColors: ThemeColors = {
  blue: "#63BBE5",
  green: "#5CD4C3",
  greenAlt: "#6EA7E8",
  orange: "#E79E69",
  pink: "#E48CC5",
  purple: "#B69EDE",
  red: "#E87474",
  salmon: "#DE8199",
  turquoize: "#6AD3CD",
  yellow: "#E0CF77",
};

const oledLevels: ThemeLevels = {
  danger: oledColors.red,
  info: oledColors.blue,
  success: oledColors.green,
  warning: oledColors.orange,
};

/**
 * Creates a UI theme optimized for OLED screens with custom border colors
 * @param primary The primary accent color for the theme
 * @param borderBrightness The brightness level for borders (0-1)
 * @returns ThemeUi configuration with optimized OLED colors
 */
function makeOLEDThemeUI(
  primary: string,
  borderBrightness: number = 0.1,
): ThemeUi {
  const standardUI = makeMainColorsDark({ base: pureBlack, primary });

  return {
    ...standardUI,
    border: c(pureBlack).lighten(borderBrightness).toHex(),
    defaultalt: c("#2b2b2b").lighten(borderBrightness).toHex(),
    primaryalt: "#151515",
  };
}

export const oled: Theme = {
  colors: oledColors,
  levels: oledLevels,
  ui: makeOLEDThemeUI("#688eff", 0.15),
};
