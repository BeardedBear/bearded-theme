import { colord as c } from "colord";

import { ThemeOptions } from "../../shared/theme-registry";
import { Theme } from "../vscode/types";
import { buildSyntax } from "./syntax";
import { ZedThemeStyle } from "./types";

/**
 * Build the complete Zed theme style object
 */
export function buildZedThemeStyle(
  theme: Theme,
  options: ThemeOptions,
): Partial<ZedThemeStyle> {
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
    "elevated_surface.background": c(ui.uibackground).lighten(0.05).toHex(),

    // Status colors
    error: levels.danger,
    "error.background": alpha(levels.danger, 0.15),
    "error.border": alpha(levels.danger, 0.5),
    foreground: ui.default,

    // Ghost elements
    "ghost_element.active": theme.ui.defaultalt,
    "ghost_element.background": "transparent",
    "ghost_element.hover": alpha(ui.default, 0.08),
    "ghost_element.selected": alpha(ui.primary, 0.15),

    hidden: ui.defaultalt,
    hint: theme.ui.defaultalt,
    "hint.background": light
      ? c(ui.uibackground).lighten(0.05).toHex()
      : c(ui.uibackground).darken(0.1).toHex(),
    ignored: alpha(ui.defaultalt, 0.8),
    info: theme.ui.primary,
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

    // Success
    success: levels.success,
    "success.background": alpha(levels.success, 0.15),
    "success.border": alpha(levels.success, 0.5),

    // Surfaces
    "surface.background": ui.uibackgroundmid,

    // Syntax highlighting
    syntax: buildSyntax(theme, options),

    // Tabs
    "tab.active_background": ui.uibackground,
    "tab.inactive_background": ui.uibackgroundalt,
    "tab_bar.background": ui.uibackgroundalt,

    // Terminal
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
    "terminal.ansi.white": light ? ui.default : "#FFFFFF",
    "terminal.ansi.yellow": theme.colors.yellow,
    "terminal.background": ui.uibackground,
    "terminal.foreground": ui.default,

    // Text
    text: ui.default,
    "text.accent": ui.primary,
    "text.disabled": alpha(ui.default, 0.5),
    "text.muted": ui.defaultMain,
    "text.placeholder": light
      ? c(ui.border).darken(0.1).toHex()
      : ui.defaultalt,

    // Title bar
    "title_bar.background": ui.uibackgroundalt,
    "title_bar.inactive_background": ui.uibackgroundalt,

    // Toolbar
    "toolbar.background": ui.uibackground,

    // Version control
    "version_control.added": levels.success,
    "version_control.deleted": levels.danger,
    "version_control.modified": levels.info,
    "version_control.word_added": alpha(levels.success, 0.2),
    "version_control.word_deleted": alpha(levels.danger, 0.2),

    // Warning
    warning: levels.warning,
    "warning.background": alpha(levels.warning, 0.15),
    "warning.border": alpha(levels.warning, 0.5),
  };
}
