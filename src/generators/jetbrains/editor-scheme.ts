/**
 * JetBrains Editor Color Scheme Generator
 *
 * Generates .xml editor color scheme files for JetBrains IDEs.
 * These files define syntax highlighting colors for the editor.
 *
 * References:
 * - https://plugins.jetbrains.com/docs/intellij/themes-extras.html
 * - Editor color scheme XML format from IntelliJ Platform
 */

import { colord as c } from "colord";

import { ThemeRegistryEntry } from "../../shared/theme-registry";
import { Theme } from "../../shared/types";
import { toHex } from "./utils";

/**
 * Build an editor color scheme XML string
 *
 * @param entry - Theme registry entry
 * @returns XML string for the editor color scheme
 */
export function buildEditorScheme(entry: ThemeRegistryEntry): string {
  const { name, options, theme } = entry;
  const isDark = !options.light;
  const schemeName = escapeXmlAttribute(`Bearded Theme ${name}`);
  const parentScheme = isDark ? "Darcula" : "Default";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<scheme name="${schemeName}" version="142" parent_scheme="${parentScheme}">
  <metaInfo>
    <property name="created">Bearded Theme Generator</property>
    <property name="ide">JetBrains IDE</property>
    <property name="ideVersion">2024.1</property>
    <property name="originalScheme">${schemeName}</property>
  </metaInfo>
  <colors>
${buildColorOptions(theme, options.light, options.hc)}
  </colors>
  <attributes>
${buildAttributeOptions(theme, options.light, options.hc)}
  </attributes>
</scheme>`;

  return xml;
}

/**
 * Build attribute options for syntax highlighting
 *
 * @param theme - Theme object
 * @param isLight - Whether this is a light theme
 * @param isHc - Whether this is a high contrast theme
 * @returns XML string of attribute options
 */
function buildAttributeOptions(
  theme: Theme,
  isLight?: boolean,
  isHc?: boolean,
): string {
  const { colors, ui } = theme;

  // Helper to create an attribute option
  const attr = (
    name: string,
    opts: {
      background?: string;
      effectColor?: string;
      effectType?: number;
      fontType?: number;
      foreground?: string;
    },
  ): string => {
    const parts: string[] = [];

    if (opts.foreground) {
      parts.push(`<option name="FOREGROUND" value="${toHex(opts.foreground)}"/>`);
    }
    if (opts.background) {
      parts.push(`<option name="BACKGROUND" value="${toHex(opts.background)}"/>`);
    }
    if (opts.fontType !== undefined) {
      parts.push(`<option name="FONT_TYPE" value="${opts.fontType}"/>`);
    }
    if (opts.effectColor) {
      parts.push(`<option name="EFFECT_COLOR" value="${toHex(opts.effectColor)}"/>`);
    }
    if (opts.effectType !== undefined) {
      parts.push(`<option name="EFFECT_TYPE" value="${opts.effectType}"/>`);
    }

    if (parts.length === 0) {
      return `    <option name="${name}"/>`;
    }

    return `    <option name="${name}">
      <value>
        ${parts.join("\n        ")}
      </value>
    </option>`;
  };

  // Font types: 0=plain, 1=bold, 2=italic, 3=bold+italic
  // Effect types: 0=bordered, 1=line underscore, 2=wave underscore,
  //               3=strikeout, 4=bold line underscore, 5=dotted line

  const attributes: string[] = [
    // Default text - background is critical for editor background color
    attr("TEXT", { background: ui.uibackground, foreground: ui.default }),

    // Comments
    attr("DEFAULT_BLOCK_COMMENT", { fontType: 2, foreground: ui.defaultalt }),
    attr("DEFAULT_DOC_COMMENT", { fontType: 2, foreground: ui.defaultalt }),
    attr("DEFAULT_DOC_COMMENT_TAG", {
      fontType: 3,
      foreground: ui.defaultalt,
    }),
    attr("DEFAULT_DOC_COMMENT_TAG_VALUE", {
      fontType: 2,
      foreground: colors.salmon,
    }),
    attr("DEFAULT_DOC_MARKUP", { foreground: ui.defaultalt }),
    attr("DEFAULT_LINE_COMMENT", { fontType: 2, foreground: ui.defaultalt }),

    // Keywords
    attr("DEFAULT_KEYWORD", { foreground: colors.yellow }),

    // Identifiers
    attr("DEFAULT_IDENTIFIER", { foreground: ui.default }),

    // Strings
    attr("DEFAULT_STRING", { foreground: colors.green }),
    attr("DEFAULT_VALID_STRING_ESCAPE", { foreground: colors.orange }),
    attr("DEFAULT_INVALID_STRING_ESCAPE", {
      effectColor: colors.red,
      effectType: 2,
      foreground: colors.red,
    }),

    // Numbers
    attr("DEFAULT_NUMBER", { foreground: colors.red }),

    // Operators and punctuation
    attr("DEFAULT_OPERATION_SIGN", { foreground: colors.yellow }),
    attr("DEFAULT_PARENTHS", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),
    attr("DEFAULT_BRACKETS", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),
    attr("DEFAULT_BRACES", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),
    attr("DEFAULT_COMMA", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),
    attr("DEFAULT_DOT", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),
    attr("DEFAULT_SEMICOLON", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),

    // Constants
    attr("DEFAULT_CONSTANT", { foreground: colors.red }),

    // Classes and Types
    attr("DEFAULT_CLASS_NAME", { foreground: colors.greenAlt }),
    attr("DEFAULT_CLASS_REFERENCE", { foreground: colors.greenAlt }),
    attr("DEFAULT_INTERFACE_NAME", { foreground: colors.greenAlt }),

    // Functions and Methods
    attr("DEFAULT_FUNCTION_CALL", { foreground: colors.blue }),
    attr("DEFAULT_FUNCTION_DECLARATION", { foreground: colors.blue }),
    attr("DEFAULT_INSTANCE_METHOD", { foreground: colors.blue }),
    attr("DEFAULT_STATIC_METHOD", { fontType: 2, foreground: colors.blue }),

    // Fields and Properties
    attr("DEFAULT_INSTANCE_FIELD", { foreground: ui.default }),
    attr("DEFAULT_STATIC_FIELD", { fontType: 2, foreground: ui.default }),

    // Parameters
    attr("DEFAULT_PARAMETER", { foreground: colors.pink }),

    // Local variables
    attr("DEFAULT_LOCAL_VARIABLE", { foreground: colors.salmon }),
    attr("DEFAULT_REASSIGNED_LOCAL_VARIABLE", {
      effectColor: colors.salmon,
      effectType: 1,
      foreground: colors.salmon,
    }),
    attr("DEFAULT_REASSIGNED_PARAMETER", {
      effectColor: colors.pink,
      effectType: 1,
      foreground: colors.pink,
    }),

    // Metadata / Annotations / Decorators
    attr("DEFAULT_METADATA", { foreground: colors.pink }),

    // Labels
    attr("DEFAULT_LABEL", { foreground: colors.yellow }),

    // Predefined symbols
    attr("DEFAULT_PREDEFINED_SYMBOL", { foreground: colors.turquoize }),

    // Template language
    attr("DEFAULT_TEMPLATE_LANGUAGE_COLOR", {
      background: c(ui.uibackground).lighten(0.02).toHex(),
    }),

    // Markup languages
    attr("DEFAULT_TAG", { foreground: colors.blue }),
    attr("DEFAULT_ATTRIBUTE", { foreground: colors.yellow }),
    attr("DEFAULT_ENTITY", { foreground: colors.orange }),

    // HTML specific
    attr("HTML_TAG_NAME", { foreground: colors.blue }),
    attr("HTML_ATTRIBUTE_NAME", { foreground: colors.yellow }),
    attr("HTML_ATTRIBUTE_VALUE", { foreground: colors.green }),
    attr("HTML_ENTITY_REFERENCE", { foreground: colors.orange }),

    // XML specific
    attr("XML_TAG_NAME", { foreground: colors.blue }),
    attr("XML_ATTRIBUTE_NAME", { foreground: colors.yellow }),
    attr("XML_ATTRIBUTE_VALUE", { foreground: colors.green }),
    attr("XML_ENTITY_REFERENCE", { foreground: colors.orange }),
    attr("XML_TAG", { foreground: colors.blue }),
    attr("XML_TAG_DATA", { foreground: ui.default }),
    attr("XML_PROLOGUE", { foreground: ui.defaultalt }),
    attr("XML_NS_PREFIX", { foreground: colors.turquoize }),

    // CSS specific
    attr("CSS.COLOR", { foreground: colors.orange }),
    attr("CSS.FUNCTION", { foreground: colors.blue }),
    attr("CSS.IDENT", { foreground: ui.default }),
    attr("CSS.IMPORTANT", { fontType: 1, foreground: colors.red }),
    attr("CSS.KEYWORD", { foreground: colors.yellow }),
    attr("CSS.NUMBER", { foreground: colors.red }),
    attr("CSS.PROPERTY_NAME", { foreground: colors.turquoize }),
    attr("CSS.PROPERTY_VALUE", { foreground: ui.default }),
    attr("CSS.PSEUDO", { foreground: colors.pink }),
    attr("CSS.STRING", { foreground: colors.green }),
    attr("CSS.TAG_NAME", { foreground: colors.blue }),
    attr("CSS.URL", { foreground: colors.green }),

    // SCSS/SASS specific
    attr("SCSS_VARIABLE", { foreground: colors.salmon }),
    attr("SASS_MIXIN", { foreground: colors.purple }),

    // JavaScript/TypeScript specific
    attr("JS.GLOBAL_FUNCTION", { foreground: colors.blue }),
    attr("JS.GLOBAL_VARIABLE", { foreground: colors.salmon }),
    attr("JS.INSTANCE_MEMBER_FUNCTION", { foreground: colors.blue }),
    attr("JS.LOCAL_VARIABLE", { foreground: colors.salmon }),
    attr("JS.PARAMETER", { foreground: colors.pink }),
    attr("JS.REGEXP", { foreground: colors.orange }),

    attr("TS.MODULE_NAME", { foreground: colors.greenAlt }),
    attr("TS.TYPE_PARAMETER", { foreground: colors.purple }),

    // JSON specific
    attr("JSON.KEYWORD", { foreground: colors.turquoize }),
    attr("JSON.PROPERTY_KEY", { foreground: colors.salmon }),
    attr("JSON.STRING", { foreground: colors.green }),

    // YAML specific
    attr("YAML_ANCHOR", { foreground: colors.purple }),
    attr("YAML_SCALAR_KEY", { foreground: colors.turquoize }),
    attr("YAML_SCALAR_VALUE", { foreground: ui.default }),
    attr("YAML_SIGN", {
      foreground: isHc ? ui.default : c(ui.default).alpha(0.6).toHex(),
    }),

    // Markdown specific
    attr("MARKDOWN_BOLD", { fontType: 1, foreground: colors.salmon }),
    attr("MARKDOWN_CODE_SPAN", { foreground: colors.purple }),
    attr("MARKDOWN_HEADER", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_1", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_2", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_3", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_4", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_5", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_HEADER_LEVEL_6", { fontType: 1, foreground: colors.yellow }),
    attr("MARKDOWN_ITALIC", { fontType: 2, foreground: colors.orange }),
    attr("MARKDOWN_LINK_DESTINATION", { foreground: colors.blue }),
    attr("MARKDOWN_LINK_TEXT", { foreground: colors.green }),

    // Python specific
    attr("PY.BUILTIN_NAME", { foreground: colors.turquoize }),
    attr("PY.DECORATOR", { foreground: colors.pink }),
    attr("PY.FUNC_DEFINITION", { foreground: colors.blue }),
    attr("PY.KEYWORD_ARGUMENT", { foreground: colors.pink }),
    attr("PY.PREDEFINED_DEFINITION", { foreground: colors.turquoize }),
    attr("PY.PREDEFINED_USAGE", { foreground: colors.turquoize }),
    attr("PY.SELF_PARAMETER", { fontType: 2, foreground: colors.red }),
    attr("PY.STRING.B", { foreground: colors.green }),
    attr("PY.STRING.U", { foreground: colors.green }),

    // Rust specific
    attr("RUST_ATTRIBUTE", { foreground: colors.pink }),
    attr("RUST_LIFETIME", { foreground: colors.purple }),
    attr("RUST_MACRO", { foreground: colors.turquoize }),

    // Go specific
    attr("GO_BUILTIN_CONSTANT", { foreground: colors.red }),
    attr("GO_BUILTIN_FUNCTION_CALL", { foreground: colors.turquoize }),
    attr("GO_BUILTIN_TYPE_REFERENCE", { foreground: colors.purple }),
    attr("GO_BUILTIN_VARIABLE", { foreground: colors.red }),
    attr("GO_EXPORTED_FUNCTION", { foreground: colors.blue }),
    attr("GO_PACKAGE", { foreground: colors.greenAlt }),
    attr("GO_STRUCT_EXPORTED_MEMBER", { foreground: ui.default }),
    attr("GO_TYPE_REFERENCE", { foreground: colors.greenAlt }),

    // Kotlin specific
    attr("KOTLIN_LABEL", { foreground: colors.yellow }),
    attr("KOTLIN_MUTABLE_VARIABLE", {
      effectColor: colors.salmon,
      effectType: 1,
      foreground: colors.salmon,
    }),
    attr("KOTLIN_NAMED_ARGUMENT", { foreground: colors.pink }),
    attr("KOTLIN_PACKAGE_FUNCTION_CALL", { foreground: colors.blue }),

    // Java specific
    attr("ANNOTATION_ATTRIBUTE_NAME_ATTRIBUTES", { foreground: colors.pink }),
    attr("ANNOTATION_NAME_ATTRIBUTES", { foreground: colors.pink }),
    attr("ENUM_CONST", { foreground: colors.red }),
    attr("IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES", {
      foreground: colors.pink,
    }),
    attr("STATIC_FINAL_FIELD_ATTRIBUTES", { fontType: 2, foreground: colors.red }),
    attr("TYPE_PARAMETER_NAME_ATTRIBUTES", { foreground: colors.purple }),

    // SQL specific
    attr("SQL_DATABASE_OBJECT", { foreground: colors.greenAlt }),
    attr("SQL_KEYWORD", { foreground: colors.yellow }),
    attr("SQL_PROCEDURE", { foreground: colors.blue }),
    attr("SQL_STRING", { foreground: colors.green }),
    attr("SQL_TABLE", { foreground: colors.greenAlt }),
    attr("SQL_COLUMN", { foreground: colors.salmon }),

    // Shell specific
    attr("BASH.EXTERNAL_COMMAND", { foreground: colors.blue }),
    attr("BASH.FUNCTION_DEF_NAME", { foreground: colors.blue }),
    attr("BASH.SHEBANG", { fontType: 2, foreground: ui.defaultalt }),
    attr("BASH.VAR_DEF", { foreground: colors.salmon }),
    attr("BASH.VAR_USE", { foreground: colors.salmon }),

    // Error and warning markers
    attr("BAD_CHARACTER", { effectColor: colors.red, effectType: 2 }),
    attr("DEPRECATED_ATTRIBUTES", { effectColor: ui.defaultalt, effectType: 3 }),
    attr("ERRORS_ATTRIBUTES", {
      effectColor: colors.red,
      effectType: 2,
    }),
    attr("INFO_ATTRIBUTES", {
      effectColor: colors.blue,
      effectType: 1,
    }),
    attr("MARKED_FOR_REMOVAL_ATTRIBUTES", {
      effectColor: colors.red,
      effectType: 3,
    }),
    attr("NOT_USED_ELEMENT_ATTRIBUTES", { foreground: ui.defaultalt }),
    attr("RUNTIME_ERROR", { effectColor: colors.red, effectType: 2 }),
    attr("TYPO", { effectColor: colors.green, effectType: 2 }),
    attr("WARNING_ATTRIBUTES", { effectColor: colors.orange, effectType: 2 }),
    attr("WEAK_WARNING_ATTRIBUTES", {
      effectColor: colors.yellow,
      effectType: 1,
    }),
    attr("WRONG_REFERENCES_ATTRIBUTES", {
      effectColor: colors.red,
      effectType: 2,
      foreground: colors.red,
    }),

    // Injected language
    attr("INJECTED_LANGUAGE_FRAGMENT", {
      background: c(ui.uibackground).lighten(0.03).toHex(),
    }),

    // Todo / Fixme
    attr("TODO_DEFAULT_ATTRIBUTES", { fontType: 2, foreground: colors.yellow }),

    // Diff and merge
    attr("DIFF_CONFLICT", {
      background: c(colors.orange).mix(ui.uibackground, 0.85).toHex(),
    }),
    attr("DIFF_DELETED", {
      background: c(colors.red).mix(ui.uibackground, 0.85).toHex(),
    }),
    attr("DIFF_INSERTED", {
      background: c(colors.green).mix(ui.uibackground, 0.85).toHex(),
    }),
    attr("DIFF_MODIFIED", {
      background: c(colors.blue).mix(ui.uibackground, 0.85).toHex(),
    }),

    // Inline hints
    attr("INLINE_PARAMETER_HINT", {
      background: c(ui.uibackground).lighten(0.08).toHex(),
      foreground: ui.defaultalt,
    }),
    attr("INLINE_PARAMETER_HINT_CURRENT", {
      background: c(ui.primary).mix(ui.uibackground, 0.8).toHex(),
      foreground: ui.default,
    }),
    attr("INLINE_PARAMETER_HINT_HIGHLIGHTED", {
      background: c(ui.primary).mix(ui.uibackground, 0.7).toHex(),
      foreground: ui.default,
    }),

    // Hyperlinks
    attr("HYPERLINK_ATTRIBUTES", {
      effectColor: colors.blue,
      effectType: 1,
      foreground: colors.blue,
    }),
    attr("FOLLOWED_HYPERLINK_ATTRIBUTES", {
      effectColor: colors.purple,
      effectType: 1,
      foreground: colors.purple,
    }),

    // Breadcrumbs
    attr("BREADCRUMBS_CURRENT", { foreground: ui.default }),
    attr("BREADCRUMBS_DEFAULT", { foreground: ui.defaultalt }),
    attr("BREADCRUMBS_HOVERED", { foreground: ui.primary }),
    attr("BREADCRUMBS_INACTIVE", { foreground: ui.defaultalt }),

    // Console colors
    attr("CONSOLE_BLACK_OUTPUT", { foreground: isLight ? "#000000" : "#1E1E1E" }),
    attr("CONSOLE_BLUE_BRIGHT_OUTPUT", {
      foreground: c(colors.blue).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_BLUE_OUTPUT", { foreground: colors.blue }),
    attr("CONSOLE_CYAN_BRIGHT_OUTPUT", {
      foreground: c(colors.turquoize).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_CYAN_OUTPUT", { foreground: colors.turquoize }),
    attr("CONSOLE_DARKGRAY_OUTPUT", { foreground: ui.defaultalt }),
    attr("CONSOLE_ERROR_OUTPUT", { foreground: colors.red }),
    attr("CONSOLE_GRAY_OUTPUT", { foreground: ui.defaultalt }),
    attr("CONSOLE_GREEN_BRIGHT_OUTPUT", {
      foreground: c(colors.green).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_GREEN_OUTPUT", { foreground: colors.green }),
    attr("CONSOLE_MAGENTA_BRIGHT_OUTPUT", {
      foreground: c(colors.pink).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_MAGENTA_OUTPUT", { foreground: colors.pink }),
    attr("CONSOLE_NORMAL_OUTPUT", { foreground: ui.default }),
    attr("CONSOLE_RED_BRIGHT_OUTPUT", {
      foreground: c(colors.red).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_RED_OUTPUT", { foreground: colors.red }),
    attr("CONSOLE_SYSTEM_OUTPUT", { foreground: ui.defaultalt }),
    attr("CONSOLE_USER_INPUT", { foreground: colors.green }),
    attr("CONSOLE_WHITE_OUTPUT", { foreground: ui.default }),
    attr("CONSOLE_YELLOW_BRIGHT_OUTPUT", {
      foreground: c(colors.yellow).lighten(0.1).toHex(),
    }),
    attr("CONSOLE_YELLOW_OUTPUT", { foreground: colors.yellow }),

    // Log console
    attr("LOG_DEBUG_OUTPUT", { foreground: ui.defaultalt }),
    attr("LOG_ERROR_OUTPUT", { foreground: colors.red }),
    attr("LOG_EXPIRED_ENTRY", { foreground: ui.defaultalt }),
    attr("LOG_INFO_OUTPUT", { foreground: colors.blue }),
    attr("LOG_WARNING_OUTPUT", { foreground: colors.orange }),

    // Debugger
    attr("BREAKPOINT_ATTRIBUTES", {
      background: c(colors.red).mix(ui.uibackground, 0.7).toHex(),
    }),
    attr("EXECUTIONPOINT_ATTRIBUTES", {
      background: c(colors.yellow).mix(ui.uibackground, 0.7).toHex(),
    }),
  ];

  return attributes.join("\n");
}

/**
 * Build color options for the scheme
 *
 * @param theme - Theme object
 * @param isLight - Whether this is a light theme
 * @param isHc - Whether this is a high contrast theme
 * @returns XML string of color options
 */
function buildColorOptions(
  theme: Theme,
  isLight?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isHc?: boolean,
): string {
  const { colors, levels, ui } = theme;

  // Helper to mix color with background for transparent effect
  const mixWithBg = (color: string, alpha: number): string => {
    return toHex(c(color).mix(ui.uibackground, 1 - alpha).toHex());
  };

  const colorMap: Record<string, string> = {
    // VCS / Diff colors
    ADDED_LINES_COLOR: toHex(colors.green),
    // Bookmarks
    Bookmark_mnemonic_assigned: toHex(ui.primary),
    Bookmark_mnemonic_current: toHex(colors.yellow),
    Bookmark_mnemonic_not_assigned: toHex(ui.defaultalt),
    // Editor background and foreground
    CARET_COLOR: toHex(ui.primary),
    CARET_ROW_COLOR: mixWithBg(
      isLight
        ? c(ui.uibackground).darken(0.05).toHex()
        : c(ui.uibackground).lighten(0.03).toHex(),
      1,
    ),
    CONSOLE_BACKGROUND_KEY: toHex(ui.uibackground),
    DELETED_LINES_COLOR: toHex(levels.danger),
    DIFF_SEPARATORS_BACKGROUND: toHex(ui.uibackgroundalt),
    // Error / Warning / Info
    ERRORS_ATTRIBUTES: toHex(levels.danger),
    FILESTATUS_ADDED: toHex(colors.green),
    FILESTATUS_COPIED: toHex(colors.green),
    FILESTATUS_DELETED: toHex(levels.danger),
    FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM: toHex(
      c(levels.danger).desaturate(0.3).toHex(),
    ),
    FILESTATUS_IDEA_FILESTATUS_IGNORED: toHex(ui.defaultalt),
    FILESTATUS_MERGED: toHex(colors.purple),

    FILESTATUS_MODIFIED: toHex(colors.blue),
    FILESTATUS_NOT_CHANGED_IMMEDIATE: toHex(colors.blue),
    FILESTATUS_NOT_CHANGED_RECURSIVE: toHex(colors.blue),
    FILESTATUS_SWITCHED: toHex(colors.purple),
    FILESTATUS_UNKNOWN: toHex(colors.orange),
    GUTTER_BACKGROUND: toHex(ui.uibackground),
    // Search
    IDENTIFIER_UNDER_CARET_ATTRIBUTES: mixWithBg(ui.primary, 0.2),
    INDENT_GUIDE: mixWithBg(ui.default, 0.1),
    INFO_ATTRIBUTES: toHex(levels.info),
    LINE_NUMBER_ON_CARET_ROW_COLOR: mixWithBg(ui.default, 0.6),
    LINE_NUMBERS_COLOR: mixWithBg(ui.default, 0.3),
    METHOD_SEPARATORS_COLOR: toHex(ui.border),
    MODIFIED_LINES_COLOR: toHex(colors.blue),
    RIGHT_MARGIN_COLOR: toHex(ui.border),
    "ScrollBar.Mac.hoverThumbBorderColor": mixWithBg(ui.default, 0.25),

    "ScrollBar.Mac.hoverThumbColor": mixWithBg(ui.default, 0.25),
    "ScrollBar.Mac.thumbBorderColor": mixWithBg(ui.default, 0.15),
    // ScrollBar (editor specific)
    "ScrollBar.Mac.thumbColor": mixWithBg(ui.default, 0.15),

    SEARCH_RESULT_ATTRIBUTES: mixWithBg(colors.yellow, 0.3),
    SELECTED_INDENT_GUIDE: mixWithBg(ui.default, 0.2),
    SELECTION_BACKGROUND: mixWithBg(ui.primary, 0.25),
    SELECTION_FOREGROUND: "",
    SOFT_WRAP_SIGN_COLOR: toHex(ui.defaultalt),

    TEARLINE_COLOR: toHex(ui.border),
    TEXT_SEARCH_RESULT_ATTRIBUTES: mixWithBg(colors.yellow, 0.3),
    VISUAL_INDENT_GUIDE: mixWithBg(ui.default, 0.1),

    WARNING_ATTRIBUTES: toHex(levels.warning),
    WHITESPACES: mixWithBg(ui.default, 0.15),
    WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES: mixWithBg(ui.primary, 0.3),
    WRITE_SEARCH_RESULT_ATTRIBUTES: mixWithBg(colors.yellow, 0.4),
  };

  return Object.entries(colorMap)
    .filter(([, value]) => value !== "")
    .map(([name, value]) => `    <option name="${name}" value="${value}"/>`)
    .join("\n");
}

/**
 * Escape special XML characters for use in attributes
 *
 * @param str - String to escape
 * @returns XML-safe string
 */
function escapeXmlAttribute(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
