import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { ThemeUi } from "./typing";

extend([mixPlugin]);

interface ThemePropsDark {
  primary: string;
  base: string;
  primaryAlt?: string;
  fontTeinted?: boolean;
  reversed?: boolean;
}

export function makeMainColorsDark({
  base,
  primary,
  primaryAlt,
  fontTeinted,
  reversed,
}: ThemePropsDark): ThemeUi {
  const darkenColor: string = c(base).darken(0.022).toHex();
  const sat = 0.1;

  return {
    // UI
    primary,
    uibackground: reversed ? darkenColor : base,
    uibackgroundmid: c(base).mix(darkenColor).toHex(),
    uibackgroundalt: reversed ? base : darkenColor,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.05).toHex(),
    uiborder: c(base).darken(0.06).toHex(),
    // Fonts
    default: fontTeinted
      ? c(base).lighten(0.6).saturate(0.1).toHex()
      : c(base).lighten(0.7).desaturate(sat).toHex(),
    defaultMain: fontTeinted
      ? c(base).lighten(0.55).saturate(0.07).toHex()
      : c(base).lighten(0.6).desaturate(sat).toHex(),
    defaultalt: fontTeinted
      ? c(base).lighten(0.15).saturate(0.05).toHex()
      : c(base).lighten(0.25).desaturate(sat).toHex(),
  };
}

interface ThemePropsLight {
  primary: string;
  base: string;
  primaryAlt?: string;
  desaturated?: boolean;
}

export function makeMainColorsLight({
  base,
  primary,
  primaryAlt,
  desaturated,
}: ThemePropsLight): ThemeUi {
  const darkenColor: string = c(base).darken(0.035).toHex();
  const mixedColor: string = c(base).mix(darkenColor).toHex();
  const borderColor: string = c(base).darken(0.15).toHex();
  const fontColor: string = c(primary).darken(0.1).toHex();

  return {
    // UI
    primary,
    uibackground: base,
    uibackgroundmid: desaturated
      ? c(mixedColor).desaturate(0.25).toHex()
      : mixedColor,
    uibackgroundalt: desaturated
      ? c(darkenColor).desaturate(0.35).toHex()
      : darkenColor,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.02).toHex(),
    uiborder: desaturated
      ? c(borderColor).desaturate(0.5).toHex()
      : borderColor,
    // Fonts
    default: desaturated
      ? c(fontColor).darken(0.4).desaturate(0.3).toHex()
      : c(fontColor).darken(0.3).desaturate(0.3).toHex(),
    defaultMain: desaturated
      ? c(fontColor).darken(0.3).desaturate(0.3).toHex()
      : c(fontColor).darken(0.5).desaturate(0.3).toHex(),
    defaultalt: desaturated
      ? c(fontColor).lighten(0.3).desaturate(0.5).toHex()
      : c(fontColor).lighten(0.15).desaturate(0.5).toHex(),
  };
}
