import { colord as c } from "colord";

import { ThemeOptions } from "../../shared/theme-registry";
import { Theme } from "../vscode/types";
import { ZedSyntaxStyle } from "./types";

/**
 * Map Bearded Theme colors to Zed syntax highlighting
 */
export function buildSyntax(
  theme: Theme,
  options: ThemeOptions,
): Record<string, ZedSyntaxStyle> {
  const { hc, light } = options;
  return {
    // Attributes (decorators)
    attribute: { color: theme.colors.pink },
    class: { color: theme.colors.greenAlt },

    // Comments
    comment: {
      color: mutedText(light, theme),
      font_style: "italic",
    },
    "comment.doc": {
      color: mutedText(light, theme),
      font_style: "italic",
    },
    // Constants
    constant: { color: theme.colors.red },
    "constant.builtin": { color: theme.colors.red },

    "constant.character": { color: theme.colors.red },
    "constant.numeric": { color: theme.colors.red },
    // Classes / Constructors
    constructor: { color: theme.colors.greenAlt },
    "diff.delta": { color: theme.colors.orange },

    "diff.minus": { color: theme.colors.red },
    // Diff
    "diff.plus": { color: theme.colors.green },
    // Embedded
    embedded: { color: theme.ui.defaultMain },
    emphasis: { color: theme.colors.orange, font_style: "italic" },
    "emphasis.strong": { color: theme.colors.salmon, font_weight: 700 },

    // Functions
    function: { color: theme.colors.blue },
    "function.builtin": { color: theme.colors.blue },
    "function.macro": { color: theme.colors.blue },
    "function.method": { color: theme.colors.blue },

    // Keywords
    keyword: { color: theme.colors.yellow },
    "keyword.control": { color: theme.colors.yellow },
    "keyword.function": { color: theme.colors.turquoize },
    "keyword.import": { color: theme.colors.yellow },

    "keyword.operator": { color: theme.colors.yellow },
    "keyword.storage": { color: theme.colors.turquoize },

    // Labels
    label: { color: theme.colors.yellow },
    link_text: { color: theme.colors.blue },
    link_uri: { color: theme.colors.blue },
    // Operators
    operator: { color: theme.colors.yellow },
    // Properties
    property: { color: theme.ui.default },
    // Punctuation
    punctuation: {
      color: hc ? theme.ui.default : c(theme.ui.default).alpha(0.4).toHex(),
    },

    "punctuation.bracket": {
      color: hc ? theme.ui.default : c(theme.ui.default).alpha(0.4).toHex(),
    },

    "punctuation.delimiter": {
      color: hc ? theme.ui.default : c(theme.ui.default).alpha(0.4).toHex(),
    },
    "punctuation.special": {
      color: hc ? theme.ui.default : c(theme.ui.default).alpha(0.4).toHex(),
    },
    // Strings
    string: { color: theme.colors.green },
    "string.escape": { color: theme.colors.orange },

    "string.regex": { color: theme.colors.orange },

    "string.special": {
      color: light
        ? c(theme.colors.greenAlt)
          .desaturate(0.1)
          .alpha(0.8)
          .darken(0.1)
          .toHex()
        : c(theme.colors.greenAlt).desaturate(0.1).alpha(0.8).toHex(),
    },

    // Tags (HTML/XML)
    tag: { color: theme.colors.blue },
    "tag.attribute": { color: theme.colors.yellow },

    // Markup (Markdown)
    text: { color: theme.ui.defaultMain },

    "text.literal": { color: theme.colors.purple },

    title: { color: theme.colors.yellow },
    // Types
    type: { color: theme.colors.purple },
    "type.builtin": { color: theme.colors.purple },
    "type.parameter": { color: theme.colors.purple },
    "type.qualifier": { color: theme.colors.purple },
    // Variables
    variable: { color: theme.colors.salmon },
    "variable.builtin": { color: theme.colors.salmon },

    "variable.member": { color: theme.ui.default },
    "variable.parameter": { color: theme.colors.pink },
    "variable.special": { color: theme.colors.orange },
  };
}

/**
 * Helper function to get muted text color
 */
function mutedText(light: boolean | undefined, theme: Theme): string {
  return theme.ui.defaultalt;
}
