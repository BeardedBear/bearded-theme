export interface ThemeUi {
  primary: string;
  primaryalt: string;
  uiborder: string;
  uibackground: string;
  uibackgroundmid: string;
  uibackgroundalt: string;
  default: string;
  defaultMain: string;
  defaultalt: string;
}

export interface ThemeColors {
  yellow: string;
  red: string;
  purple: string;
  blue: string;
  green: string;
  greenAlt: string;
  turquoize: string;
  salmon: string;
  orange: string;
  pink: string;
}

export interface ThemeLevels {
  danger: string;
  success: string;
  warning: string;
  info: string;
}

export interface Theme {
  ui: ThemeUi;
  colors: ThemeColors;
  levels: ThemeLevels;
}

export type FontStyle = "italic" | "normal" | "bold";

export interface Scope {
  scope: string[];
  settings: {
    foreground: string;
    fontStyle?: FontStyle;
  };
}
