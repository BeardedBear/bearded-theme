import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

import { ThemeUi } from "./typing";

extend([mixPlugin]);

interface ThemePropsDark {
  base: string;
  fontTeinted?: boolean;
  primary: string;
  primaryAlt?: string;
  reversed?: boolean;
}

export function makeMainColorsDark({
  base,
  fontTeinted,
  primary,
  primaryAlt,
  reversed,
}: ThemePropsDark): ThemeUi {
  const darkenColor: string = c(base).darken(0.022).toHex();
  const sat = 0.1;
  const fontColor = c(base).lighten(0.6).saturate(0.1).toHex();
  const mainColor = c(base).lighten(0.55).saturate(0.07).toHex();

  return {
    // Fonts
    default: fontTeinted
      ? fontColor
      : c(base).lighten(0.7).desaturate(sat).toHex(),
    defaultMain: fontTeinted
      ? mainColor
      : c(base).lighten(0.6).desaturate(sat).toHex(),
    defaultalt: fontTeinted
      ? c(base).lighten(0.15).saturate(0.05).toHex()
      : mainColor,
    // UI
    primary,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.05).toHex(),
    uibackground: reversed ? darkenColor : base,
    uibackgroundalt: reversed ? base : darkenColor,
    uibackgroundmid: c(base).mix(darkenColor).toHex(),
    uiborder: c(base).darken(0.06).toHex(),
  };
}

interface ThemePropsLight {
  base: string;
  desaturated?: boolean;
  primary: string;
  primaryAlt?: string;
}

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
    // Fonts
    default: desaturated
      ? c(fontColor).darken(0.4).desaturate(0.3).toHex()
      : c(fontColor).darken(0.3).desaturate(0.3).toHex(),
    defaultMain: desaturated
      ? c(fontColor).darken(0.3).desaturate(0.3).toHex()
      : c(fontColor).darken(0.5).desaturate(0.3).toHex(),
    defaultalt: desaturated
      ? c(fontColor).lighten(0.3).desaturate(0.5).toHex()
      : c(fontColor).lighten(0.15).desaturate(0.4).toHex(),
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
    uiborder: desaturated
      ? c(borderColor).desaturate(0.5).toHex()
      : borderColor,
  };
}
