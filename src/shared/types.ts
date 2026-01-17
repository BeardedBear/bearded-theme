/**
 * Shared types used across all theme generators (VS Code, Zed, etc.)
 */

/**
 * Font style for syntax highlighting
 */
export type FontStyle = "bold" | "italic" | "underline";

/**
 * Scope definition for syntax highlighting
 */
export interface Scope {
  scope: string | string[];
  settings: {
    fontStyle?: FontStyle | string;
    foreground?: string;
  };
}

/**
 * Main theme interface combining colors, levels, and UI
 */
export interface Theme {
  colors: ThemeColors;
  levels: ThemeLevels;
  ui: ThemeUi;
}

/**
 * Core color palette for syntax highlighting
 */
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

/**
 * Semantic color levels for UI elements
 */
export interface ThemeLevels {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

/**
 * Base UI colors used across all generators
 */
export interface ThemeUi {
  border: string;
  default: string;
  defaultalt: string;
  defaultMain: string;
  primary: string;
  primaryalt: string;
  uibackground: string;
  uibackgroundalt: string;
  uibackgroundmid: string;
}
