import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { ThemeUi } from "./typing";

extend([mixPlugin]);

interface ThemeProps {
  primaryColor: string;
  baseColor: string;
}

export function makeMainColors({ baseColor, primaryColor }: ThemeProps): ThemeUi {
  const darkenColor: string = colord(baseColor).darken(0.02).toHex();
  return {
    primary: primaryColor,
    uibackground: baseColor,
    uibackgroundmid: colord(baseColor).mix(darkenColor).toHex(),
    uibackgroundalt: darkenColor,
    primaryalt: colord(baseColor).lighten(0.03).toHex(),
    uiborder: colord(baseColor).darken(0.06).toHex(),
    default: colord(baseColor).lighten(0.6).desaturate(0.1).toHex(),
    defaultalt: colord(baseColor).lighten(0.25).desaturate(0.1).toHex(),
    defaultMain: colord(baseColor).lighten(0.5).desaturate(0.1).toHex(),
  };
}
