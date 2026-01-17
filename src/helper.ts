import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

import { ThemeUi } from "./shared/types";

extend([mixPlugin]);

interface ThemePropsDark {
  base: string;
  fontTeinted?: boolean;
  primary: string;
  primaryAlt?: string;
  reversed?: boolean;
}

interface ThemePropsLight {
  base: string;
  desaturated?: boolean;
  primary: string;
  primaryAlt?: string;
}

export function isTooNeutral(hex: string, threshold = 0.3): boolean {
  const { s } = c(hex).toHsl();
  return s < threshold * 100;
}

export function isTooVibrant(hex: string, threshold = 0.3): boolean {
  const { s } = c(hex).toHsl();
  return s >= threshold * 100;
}

/**
 * Calculates and returns an object with color values based on the input properties.
 *
 * @param {ThemePropsDark} themeProps - The input object with color properties.
 * @returns {ThemeUi} - An object with color values based on the input properties.
 */
export function makeMainColorsDark({
  base,
  fontTeinted,
  primary,
  primaryAlt,
  reversed,
}: ThemePropsDark): ThemeUi {
  const darkenColor: string = c(base).darken(0.022).toHex();
  const sat = 0.01;

  return {
    border: c(base).darken(0.06).toHex(),
    // Fonts
    default: fontTeinted
      ? c(base).lighten(0.6).saturate(0.15).toHex()
      : c(base).lighten(0.7).desaturate(sat).toHex(),
    defaultalt: fontTeinted
      ? c(base).lighten(0.15).saturate(0.05).toHex()
      : c(base).lighten(0.25).desaturate(sat).toHex(),
    defaultMain: fontTeinted
      ? c(base).lighten(0.55).saturate(0.07).toHex()
      : c(base).lighten(0.6).desaturate(sat).toHex(),
    // UI
    primary,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.05).toHex(),
    uibackground: reversed ? darkenColor : base,
    uibackgroundalt: reversed ? base : darkenColor,
    uibackgroundmid: c(base).mix(darkenColor).toHex(),
  };
}

/**
 * Generates color values for various elements of a UI theme based on the provided theme properties.
 * @param themeProps - The theme properties.
 * @returns An object containing color values for various elements of a UI theme.
 */
export function makeMainColorsLight({
  base,
  desaturated,
  primary,
  primaryAlt,
}: ThemePropsLight): ThemeUi {
  const darkenColor: string = c(base).darken(0.035).toHex();
  const mixedColor: string = c(base).mix(darkenColor).toHex();
  const borderColor: string = c(base).darken(0.15).toHex();
  const fontColor: string = c(primary).darken(0.1).toHex();

  return {
    border: desaturated ? c(borderColor).desaturate(0.5).toHex() : borderColor,
    // Fonts
    default: desaturated
      ? c(fontColor).darken(0.4).desaturate(0.3).toHex()
      : c(fontColor).darken(0.3).desaturate(0.3).toHex(),
    defaultalt: desaturated
      ? c(fontColor).lighten(0.3).desaturate(0.5).toHex()
      : c(fontColor).lighten(0.15).desaturate(0.5).toHex(),
    defaultMain: desaturated
      ? c(fontColor).darken(0.3).desaturate(0.3).toHex()
      : c(fontColor).darken(0.5).desaturate(0.3).toHex(),
    // UI
    primary,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.02).toHex(),
    uibackground: base,
    uibackgroundalt: desaturated
      ? c(darkenColor).desaturate(0.35).toHex()
      : darkenColor,
    uibackgroundmid: desaturated
      ? c(mixedColor).desaturate(0.25).toHex()
      : mixedColor,
  };
}
