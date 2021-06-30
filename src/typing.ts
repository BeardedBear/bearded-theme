export interface Theme {
  primary: string;
  primaryalt: string;
  uiborder: string;
  uibackground: string;
  uibackgroundalt: string;
  default: string;
  defaultMain: string;
  defaultalt: string;
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
  danger: string;
  success: string;
  warning: string;
  info: string;
}

export type FontStyle = "italic" | "normal" | "bold";

export interface Scope {
  scope: string[];
  settings: {
    foreground: string;
    fontStyle?: FontStyle;
  };
}
