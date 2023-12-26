import { colors } from "../themes/ui-key-tester.json";

export interface ThemeUi {
  default: string;
  defaultMain: string;
  defaultalt: string;
  primary: string;
  primaryalt: string;
  uibackground: string;
  uibackgroundalt: string;
  uibackgroundmid: string;
  uiborder: string;
}

export interface ThemeColors {
  /**
   * Color for the functions
   */
  blue: string;
  /**
   * Color for the strings
   */
  green: string;
  /**
   * Color for the classes
   */
  greenAlt: string;
  /**
   * Color for the accessors
   */
  orange: string;
  /**
   * Color for the functions arguments or decorators
   */
  pink: string;
  /**
   * Color for typings
   */
  purple: string;
  /**
   * Color for the constants
   */
  red: string;
  /**
   * Color for the variables
   */
  salmon: string;
  /**
   * Color for the storages of type of functions
   */
  turquoize: string;
  /**
   * Color for the keywords
   */
  yellow: string;
}

export interface ThemeLevels {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface Theme {
  colors: ThemeColors;
  levels: ThemeLevels;
  ui: ThemeUi;
}

export type FontStyle = "bold" | "italic" | "normal";

export interface Scope {
  scope: string[];
  settings: {
    fontStyle?: FontStyle;
    foreground: string;
  };
}

export type UIKey = Record<keyof typeof colors, false | string | undefined>;
