/**
 * JetBrains Theme Builder
 *
 * Generates .theme.json files for JetBrains IDEs
 * Based on official documentation:
 * - https://plugins.jetbrains.com/docs/intellij/themes-customize.html
 * - https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html
 */

import { ThemeOptions, ThemeRegistryEntry } from "../../shared/theme-registry";
import { JetBrainsTheme } from "./types";
import { buildJetBrainsUiColors } from "./ui";

/**
 * Build a complete JetBrains theme object
 *
 * @param entry - Theme registry entry
 * @returns JetBrains theme object ready for JSON serialization
 */
export function buildJetBrainsTheme(entry: ThemeRegistryEntry): JetBrainsTheme {
  const { name, options, slug, theme } = entry;
  const isDark = !options.light;

  // Build the theme object
  const jetbrainsTheme: JetBrainsTheme = {
    author: "BeardedBear",
    // Named colors for reuse in the theme
    colors: buildNamedColors(entry),
    dark: isDark,

    // Reference to editor color scheme - path is relative to JAR root
    editorScheme: `/bearded-theme-${slug}.xml`,

    name: `Bearded Theme ${name}`,

    // Use Islands theme as parent for modern JetBrains UI
    parentTheme: isDark ? "Islands Dark" : "Islands Light",

    // UI component colors
    ui: buildJetBrainsUiColors(theme, options),
  };

  return jetbrainsTheme;
}

/**
 * Get the parent theme based on options
 *
 * @param options - Theme options
 * @returns Parent theme name
 */
export function getParentTheme(options: ThemeOptions): string {
  return options.light ? "Islands Light" : "Islands Dark";
}

/**
 * Determine if a theme should be marked as dark
 *
 * @param options - Theme options
 * @returns true if dark theme
 */
export function isDarkTheme(options: ThemeOptions): boolean {
  return !options.light;
}

/**
 * Build named colors that can be referenced in the UI section
 * This makes the theme more maintainable
 *
 * @param entry - Theme registry entry
 * @returns Record of named colors
 */
function buildNamedColors(entry: ThemeRegistryEntry): Record<string, string> {
  const { theme } = entry;
  const { colors, levels, ui } = theme;

  return {
    // UI colors
    background: ui.uibackground,
    backgroundAlt: ui.uibackgroundalt,
    backgroundMid: ui.uibackgroundmid,
    // Syntax colors
    blue: colors.blue,
    border: ui.border,
    // Level colors
    danger: levels.danger,
    foreground: ui.default,
    foregroundAlt: ui.defaultalt,
    foregroundMain: ui.defaultMain,
    green: colors.green,

    greenAlt: colors.greenAlt,
    info: levels.info,
    orange: colors.orange,
    pink: colors.pink,
    primary: ui.primary,
    primaryAlt: ui.primaryalt,
    purple: colors.purple,
    red: colors.red,
    salmon: colors.salmon,

    success: levels.success,
    turquoize: colors.turquoize,
    warning: levels.warning,
    yellow: colors.yellow,
  };
}
