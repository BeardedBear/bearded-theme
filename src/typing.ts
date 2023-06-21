import { colors } from "../themes/ui-key-tester.json";

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
  /**
   * Color for the keywords
   */
  yellow: string;
  /**
   * Color for the constants
   */
  red: string;
  /**
   * Color for typings
   */
  purple: string;
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
   * Color for the storages of type of functions
   */
  turquoize: string;
  /**
   * Color for the variables
   */
  salmon: string;
  /**
   * Color for the accessors
   */
  orange: string;
  /**
   * Color for the functions arguments or decorators
   */
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

export type UIKey = Record<keyof typeof colors, string | false | undefined>;
