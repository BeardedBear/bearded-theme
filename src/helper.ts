import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { ThemeUi } from "./typing";

extend([mixPlugin]);

interface ThemeProps {
  primary: string;
  base: string;
  primaryAlt?: string;
  fontTeinted?: boolean;
  reversed?: boolean;
}

export function makeMainColors({ base, primary, primaryAlt, fontTeinted, reversed }: ThemeProps): ThemeUi {
  const darkenColor: string = c(base).darken(0.022).toHex();
  const sat = 0.15;

  return {
    // UI
    primary,
    uibackground: reversed ? darkenColor : base,
    uibackgroundmid: c(base).mix(darkenColor).toHex(),
    uibackgroundalt: reversed ? base : darkenColor,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.05).toHex(),
    uiborder: c(base).darken(0.06).toHex(),
    // Fonts
    default: fontTeinted ? c(base).lighten(0.65).saturate(0.15).toHex() : c(base).lighten(0.7).desaturate(sat).toHex(),
    defaultMain: fontTeinted
      ? c(base).lighten(0.55).saturate(0.07).toHex()
      : c(base).lighten(0.5).desaturate(0.15).toHex(),
    defaultalt: fontTeinted
      ? c(base).lighten(0.15).saturate(0.05).toHex()
      : c(base).lighten(0.2).desaturate(0.15).toHex(),
  };
}
