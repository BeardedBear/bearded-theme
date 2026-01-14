import { colord as c } from "colord";
import { copyFileSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import {
  getZedAppearance,
  ThemeOptions,
  themeRegistry,
  ThemeRegistryEntry,
} from "../../shared/theme-registry";
import { Theme } from "../../typing";
import { getZedVersion } from "../../version-manager";

// example of available themes properties
// https://github.com/zed-industries/zed/blob/main/assets/themes/one/one.json

const OUTPUT_DIR = "dist/zed/themes";
const ZED_DIR = "dist/zed";

interface ZedSyntaxStyle {
  color?: string;
  font_style?: "italic" | "normal" | "oblique";
  font_weight?: number;
}

interface ZedTheme {
  appearance: "dark" | "light";
  name: string;
  style: ZedThemeStyle;
}

interface ZedThemeFamily {
  $schema: string;
  author: string;
  name: string;
  themes: ZedTheme[];
}

interface ZedThemeStyle {
  // Base colors
  background: string;
  // Borders
  border: string;
  "border.disabled": string;
  "border.focused": string;
  "border.selected": string;
  "border.variant": string;
  conflict: string;

  // Git status
  created: string;
  deleted: string;
  // Drop target
  "drop_target.background": string;
  "editor.active_line.background": string;
  "editor.active_line_number": string;

  "editor.active_wrap_guide": string;
  // Editor
  "editor.background": string;
  "editor.document_highlight.read_background": string;
  "editor.document_highlight.write_background": string;
  "editor.foreground": string;

  "editor.gutter.background": string;
  "editor.highlighted_line.background": string;
  "editor.indent_guide": string;
  "editor.indent_guide_active": string;

  "editor.invisible": string;
  "editor.line_number": string;

  "editor.subheader.background": string;
  "editor.wrap_guide": string;

  "element.active": string;
  // Elements
  "element.background": string;
  "element.disabled": string;
  "element.hover": string;
  "element.selected": string;
  "elevated_surface.background": string;
  // Status colors
  error: string;
  "error.background": string;
  foreground?: string;
  "ghost_element.active": string;

  // Ghost elements
  "ghost_element.background": string;
  "ghost_element.hover": string;
  "ghost_element.selected": string;
  hidden: string;
  hint: string;
  "hint.background": string;
  ignored: string;

  info: string;
  "info.background": string;
  "info.border": string;
  modified: string;
  // Pane
  "pane.focused_border": string;
  "pane_group.border"?: string;
  // Panel
  "panel.background": string;
  "panel.focused_border": string;
  // Players (for collaboration)
  players: Array<{
    background: string;
    cursor: string;
    selection: string;
  }>;
  renamed: string;
  // Scrollbar
  "scrollbar.thumb.background": string;
  "scrollbar.thumb.hover_background": string;
  "scrollbar.track.background": string;
  "scrollbar.track.border": string;

  // Search
  "search.match_background": string;

  // Status bar
  "status_bar.background": string;

  success: string;
  "success.background": string;

  // Surfaces
  "surface.background": string;
  // Syntax highlighting
  syntax: Record<string, ZedSyntaxStyle>;

  // Tabs
  "tab.active_background": string;
  "tab.inactive_background": string;
  "tab_bar.background": string;
  "terminal.ansi.black": string;

  "terminal.ansi.blue": string;
  "terminal.ansi.bright_black": string;
  "terminal.ansi.bright_blue": string;

  "terminal.ansi.bright_cyan": string;
  "terminal.ansi.bright_green": string;

  "terminal.ansi.bright_magenta": string;

  "terminal.ansi.bright_red": string;

  "terminal.ansi.bright_white": string;
  "terminal.ansi.bright_yellow": string;
  "terminal.ansi.cyan": string;
  "terminal.ansi.green": string;
  "terminal.ansi.magenta": string;
  "terminal.ansi.red": string;
  "terminal.ansi.white": string;
  "terminal.ansi.yellow": string;
  // Terminal colors
  "terminal.background": string;
  "terminal.foreground": string;
  text: string;
  "text.accent": string;
  "text.disabled": string;
  "text.muted": string;
  "text.placeholder": string;
  // Title bar
  "title_bar.background": string;
  "title_bar.inactive_background"?: string;
  // Toolbar
  "toolbar.background": string;

  warning: string;

  "warning.background": string;
}

/**
 * Map Bearded Theme colors to Zed syntax highlighting
 */
function buildSyntax(
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
 * Build all Zed themes and output to dist/zed
 */
async function buildZedThemes(): Promise<void> {
  console.log("🎨 Building Zed themes...");

  // Get version from versions.json (Zed-specific version)
  const version = getZedVersion();
  console.log(`📦 Using Zed version: ${version}`);

  // Ensure output directories exist
  mkdirSync(OUTPUT_DIR, { recursive: true });
  mkdirSync(ZED_DIR, { recursive: true });

  // Create the theme family with all themes
  const themeFamily: ZedThemeFamily = {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    author: "BeardedBear",
    name: "Bearded Theme",
    themes: themeRegistry.map(createZedTheme),
  };

  // Write the combined theme family file
  writeFileSync(
    `${OUTPUT_DIR}/bearded-theme.json`,
    JSON.stringify(themeFamily, null, 2),
    { encoding: "utf8" },
  );

  // Generate extension.toml with synced version
  const extensionToml = `id = "bearded-theme"
name = "Bearded Theme"
description = "The theme with a long beard."
version = "${version}"
schema_version = 1
authors = ["BeardedBear <beardedbearbear@gmail.com>"]
repository = "https://github.com/BeardedBear/bearded-theme"
`;

  writeFileSync(`${ZED_DIR}/extension.toml`, extensionToml, {
    encoding: "utf8",
  });

  // Copy LICENSE file (required by Zed as of October 2025)
  try {
    const licenseSrc = join(process.cwd(), "LICENSE");
    const licenseDest = join(ZED_DIR, "LICENSE");
    copyFileSync(licenseSrc, licenseDest);
    console.log("📄 Copied LICENSE file to dist/zed/");
  } catch {
    console.warn(
      "⚠️ Could not copy LICENSE file. Make sure LICENSE exists at project root.",
    );
  }

  // Generate README for Zed extension
  const readmeContent = `# Bearded Theme for Zed

The theme with a long beard.

## Installation

1. Open Zed
2. Open the Extensions panel (\`cmd+shift+x\` or \`ctrl+shift+x\`)
3. Search for "Bearded Theme"
4. Click Install

## Available Themes

${themeRegistry.map((entry) => `- Bearded Theme ${entry.name}`).join("\n")}

## Links

- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedtheme)
- [GitHub Repository](https://github.com/BeardedBear/bearded-theme)
- [Report Issues](https://github.com/BeardedBear/bearded-theme/issues)

## License

GNU General Public License v3.0

## Author

Made with ❤️ by [BeardedBear](https://github.com/BeardedBear)
`;

  writeFileSync(`${ZED_DIR}/README.md`, readmeContent, { encoding: "utf8" });

  console.log(
    `✅ Generated Zed theme family with ${themeRegistry.length} themes in ${OUTPUT_DIR}`,
  );
  console.log(`✅ Generated extension.toml (version ${version})`);
  console.log(`✅ Generated README.md`);
  console.log(`\n📁 Zed extension ready in: ${ZED_DIR}/`);
}

/**
 * Build the complete Zed theme style object
 */
function buildZedThemeStyle(
  theme: Theme,
  options: ThemeOptions,
): ZedThemeStyle {
  const { light } = options;
  const levels = theme.levels;
  const ui = theme.ui;

  // Alpha helper
  const alpha = (color: string, a: number): string => c(color).alpha(a).toHex();
  const lightenOrDarken = (color: string, amount: number): string =>
    light ? c(color).darken(amount).toHex() : c(color).lighten(amount).toHex();

  return {
    // Base colors
    background: ui.uibackground,
    // Borders
    border: ui.border,
    "border.disabled": alpha(ui.border, 0.3),
    "border.focused": ui.primary,
    "border.selected": ui.primary,
    "border.variant": alpha(ui.border, 0.7),
    conflict: theme.colors.orange,

    // Git status
    created: theme.colors.green,
    deleted: theme.colors.red,
    // Drop target
    "drop_target.background": alpha(ui.primary, 0.2),
    "editor.active_line.background": light
      ? alpha(c(ui.uibackground).darken(0.06).toHex(), 0.5)
      : alpha(c(ui.uibackground).lighten(0.05).toHex(), 0.3),
    "editor.active_line_number": light
      ? c(ui.border).darken(0.4).toHex()
      : c(ui.uibackground).lighten(0.45).toHex(),

    "editor.active_wrap_guide": alpha(ui.default, 0.2),
    // Editor
    "editor.background": ui.uibackground,
    "editor.document_highlight.read_background": alpha(ui.primary, 0.15),
    "editor.document_highlight.write_background": alpha(ui.primary, 0.25),
    "editor.foreground": ui.default,

    "editor.gutter.background": ui.uibackground,
    "editor.highlighted_line.background": alpha(ui.primary, 0.1),
    "editor.indent_guide": alpha(ui.default, 0.1),
    "editor.indent_guide_active": alpha(ui.default, 0.2),

    "editor.invisible": alpha(ui.default, 0.15),
    "editor.line_number": light
      ? c(ui.border).darken(0.05).toHex()
      : alpha(c(ui.uibackground).lighten(0.3).toHex(), 0.5),

    "editor.subheader.background": lightenOrDarken(ui.uibackgroundalt, 0.08),
    "editor.wrap_guide": alpha(ui.default, 0.1),

    // Elements
    "element.active": lightenOrDarken(ui.uibackgroundalt, 0.1),
    "element.background": lightenOrDarken(ui.uibackgroundalt, 0.05),
    "element.disabled": alpha(ui.uibackgroundalt, 0.5),
    "element.hover": lightenOrDarken(ui.uibackgroundalt, 0.1),
    "element.selected": alpha(ui.primary, 0.2),
    "elevated_surface.background": light ?
      c(ui.uibackground).lighten(0.05).toHex() :
      c(ui.uibackground).darken(0.1).toHex(),

    // Status colors
    error: levels.danger,
    "error.background": alpha(levels.danger, 0.15),
    foreground: ui.default,

    // Ghost elements
    "ghost_element.active": mutedText(light, theme),
    "ghost_element.background": "transparent",
    "ghost_element.hover": alpha(ui.default, 0.08),
    "ghost_element.selected": alpha(ui.primary, 0.15),

    hidden: ui.defaultalt,
    hint: mutedText(light, theme),
    "hint.background": mutedText(light, theme),
    ignored: alpha(ui.defaultalt, 0.6),
    "info": theme.ui.primary,
    "info.background": c(ui.primaryalt).toHex(),
    "info.border": c(ui.primaryalt).lighten(0.5).toHex(),
    modified: theme.colors.blue,
    // Pane
    "pane.focused_border": ui.primary,
    "pane_group.border": ui.border,
    // Panel
    "panel.background": ui.uibackgroundalt,
    "panel.focused_border": ui.primary,
    // Players (for collaboration) - generate a few player colors
    players: [
      {
        background: alpha(ui.primary, 0.2),
        cursor: ui.primary,
        selection: alpha(ui.primary, 0.15),
      },
      {
        background: alpha(theme.colors.blue, 0.2),
        cursor: theme.colors.blue,
        selection: alpha(theme.colors.blue, 0.15),
      },
      {
        background: alpha(theme.colors.green, 0.2),
        cursor: theme.colors.green,
        selection: alpha(theme.colors.green, 0.15),
      },
      {
        background: alpha(theme.colors.pink, 0.2),
        cursor: theme.colors.pink,
        selection: alpha(theme.colors.pink, 0.15),
      },
      {
        background: alpha(theme.colors.orange, 0.2),
        cursor: theme.colors.orange,
        selection: alpha(theme.colors.orange, 0.15),
      },
      {
        background: alpha(theme.colors.purple, 0.2),
        cursor: theme.colors.purple,
        selection: alpha(theme.colors.purple, 0.15),
      },
      {
        background: alpha(theme.colors.yellow, 0.2),
        cursor: theme.colors.yellow,
        selection: alpha(theme.colors.yellow, 0.15),
      },
      {
        background: alpha(theme.colors.turquoize, 0.2),
        cursor: theme.colors.turquoize,
        selection: alpha(theme.colors.turquoize, 0.15),
      },
    ],
    renamed: theme.colors.purple,
    // Scrollbar
    "scrollbar.thumb.background": alpha(ui.default, 0.15),
    "scrollbar.thumb.hover_background": alpha(ui.default, 0.25),
     "scrollbar.track.background": "transparent",

    "scrollbar.track.border": "transparent",

    // Search
    "search.match_background": alpha(theme.colors.yellow, 0.3),
    // Status bar
    "status_bar.background": ui.uibackgroundalt,

    success: levels.success,
    "success.background": alpha(levels.success, 0.15),

    // Surfaces
    "surface.background": ui.uibackgroundmid,
    // Syntax highlighting
    syntax: buildSyntax(theme, options),
    // Tabs
    "tab.active_background": ui.uibackground,
    "tab.inactive_background": ui.uibackgroundalt,

    "tab_bar.background": ui.uibackgroundalt,
    "terminal.ansi.black": light
      ? "#000000"
      : c(ui.uibackground).darken(0.1).toHex(),
    "terminal.ansi.blue": theme.colors.blue,

    "terminal.ansi.bright_black": c(ui.uibackground).lighten(0.25).toHex(),
    "terminal.ansi.bright_blue": c(theme.colors.blue).lighten(0.1).toHex(),

    "terminal.ansi.bright_cyan": c(theme.colors.turquoize).lighten(0.1).toHex(),

    "terminal.ansi.bright_green": c(theme.colors.green).lighten(0.1).toHex(),

    "terminal.ansi.bright_magenta": c(theme.colors.pink).lighten(0.1).toHex(),
    "terminal.ansi.bright_red": c(theme.colors.red).lighten(0.1).toHex(),
    "terminal.ansi.bright_white": c(ui.default).lighten(0.1).toHex(),
    "terminal.ansi.bright_yellow": c(theme.colors.yellow).lighten(0.1).toHex(),
    "terminal.ansi.cyan": theme.colors.turquoize,
    "terminal.ansi.green": theme.colors.green,
    "terminal.ansi.magenta": theme.colors.pink,
    "terminal.ansi.red": theme.colors.red,
    "terminal.ansi.white": ui.default,
    "terminal.ansi.yellow": theme.colors.yellow,
    // Terminal colors
    "terminal.background": ui.uibackground,
    "terminal.foreground": ui.default,
    text: ui.default,
    "text.accent": ui.primary,
    "text.disabled": alpha(ui.default, 0.5),
    "text.muted": ui.defaultMain,
    "text.placeholder": light ?
      c(ui.border).darken(0.1).toHex()
      : ui.defaultalt,
    // Title bar
    "title_bar.background": ui.uibackgroundalt,

    "title_bar.inactive_background": ui.uibackgroundalt,

    // Toolbar
    "toolbar.background": ui.uibackground,
    warning: levels.warning,
    "warning.background": alpha(levels.warning, 0.15),

  };
}

/**
 * Creates a single Zed theme object
 */
function createZedTheme(entry: ThemeRegistryEntry): ZedTheme {
  return {
    appearance: getZedAppearance(entry.options),
    name: `Bearded Theme ${entry.name}`,
    style: buildZedThemeStyle(entry.theme, entry.options),
  };
}

function mutedText(light: boolean | undefined, theme: Theme): string {
  return theme.ui.defaultalt;
}



// Run the build
buildZedThemes();

export { buildZedThemes, createZedTheme };
