/**
 * JetBrains Theme Utility Functions
 *
 * Helper functions for color manipulation and formatting
 * specific to JetBrains theme requirements.
 */

import { colord as c } from "colord";

/**
 * Darken a color and return JetBrains-compatible hex
 *
 * @param hex - Input color
 * @param amount - Amount to darken (0-1)
 * @returns 6-digit hex string without #
 */
export function darken(hex: string, amount: number): string {
  return toHex(c(hex).darken(amount).toHex());
}

/**
 * Get a contrasting foreground color (black or white)
 *
 * @param background - Background color
 * @returns "000000" or "FFFFFF"
 */
export function getContrastForeground(background: string): string {
  return isLight(background) ? "000000" : "FFFFFF";
}

/**
 * Generate plugin-compatible theme ID
 *
 * @param slug - Theme slug
 * @returns Theme ID for plugin.xml
 */
export function getThemeId(slug: string): string {
  return `bearded-theme-${slug}`;
}

/**
 * Generate theme file path for plugin references
 *
 * @param slug - Theme slug
 * @returns Path relative to resources folder
 */
export function getThemePath(slug: string): string {
  return `/themes/bearded-theme-${slug}.theme.json`;
}

/**
 * Determine if a color is considered "light"
 * Useful for deciding contrast colors
 *
 * @param hex - Color to check
 * @returns true if the color is light
 */
export function isLight(hex: string): boolean {
  return c(hex).isLight();
}

/**
 * Lighten a color and return JetBrains-compatible hex
 *
 * @param hex - Input color
 * @param amount - Amount to lighten (0-1)
 * @returns 6-digit hex string without #
 */
export function lighten(hex: string, amount: number): string {
  return toHex(c(hex).lighten(amount).toHex());
}

/**
 * Mix two colors and return JetBrains-compatible hex
 *
 * @param color1 - First color
 * @param color2 - Second color
 * @param ratio - Mix ratio (0 = color1, 1 = color2)
 * @returns 6-digit hex string without #
 */
export function mixColors(
  color1: string,
  color2: string,
  ratio: number = 0.5,
): string {
  return toHex(c(color1).mix(color2, ratio).toHex());
}

/**
 * Adjust color saturation and return JetBrains-compatible hex
 *
 * @param hex - Input color
 * @param amount - Positive to saturate, negative to desaturate
 * @returns 6-digit hex string without #
 */
export function saturate(hex: string, amount: number): string {
  if (amount >= 0) {
    return toHex(c(hex).saturate(amount).toHex());
  }
  return toHex(c(hex).desaturate(Math.abs(amount)).toHex());
}

/**
 * Escape a theme name to create a valid file slug
 *
 * @param name - Theme display name
 * @returns Sanitized slug for filename
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Convert a hex color to JetBrains format (6-digit RGB without #)
 * JetBrains uses RRGGBB format for colors in theme.json
 *
 * @param hex - Hex color string (e.g., "#FF5370" or "#FF537080")
 * @returns 6-digit hex string without # (e.g., "FF5370")
 */
export function toHex(hex: string): string {
  const color = c(hex);
  // Get RGB hex without alpha
  return color.toHex().replace("#", "").substring(0, 6).toUpperCase();
}

/**
 * Convert a hex color with alpha to JetBrains 8-digit RRGGBBAA format
 *
 * @param hex - Hex color string
 * @param alpha - Alpha value (0-1)
 * @returns 8-digit hex string without # (e.g., "FF537080")
 */
export function toHexAlpha(hex: string, alpha: number): string {
  const color = c(hex).alpha(alpha);
  const rgbHex = color.toHex().replace("#", "").toUpperCase();

  // Ensure we have 8 characters (RRGGBBAA)
  if (rgbHex.length === 6) {
    const alphaHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
    return rgbHex + alphaHex;
  }

  return rgbHex;
}

/**
 * Generate a fully transparent color (for hiding elements)
 *
 * @param hex - Base color (only RGB will be used)
 * @returns 8-digit hex with # prefix and 00 alpha (e.g., "#1C243300")
 */
export function transparent(hex: string): string {
  return "#" + toHex(hex) + "00";
}

/**
 * Create a transparent version of a color for JetBrains
 * Returns full 8-digit RRGGBBAA format
 *
 * @param hex - Input color
 * @param alpha - Alpha value (0-1)
 * @returns 8-digit hex string without # (e.g., "FF537080")
 */
export function withAlpha(hex: string, alpha: number): string {
  return toHexAlpha(hex, alpha);
}
