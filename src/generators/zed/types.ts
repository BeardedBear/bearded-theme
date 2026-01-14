/**
 * Zed Theme Type Definitions
 * These interfaces define the structure of Zed theme files
 * Reference: https://github.com/zed-industries/zed/blob/main/assets/themes/one/one.json
 */

export interface ZedSyntaxStyle {
  color?: string;
  font_style?: "italic" | "normal" | "oblique";
  font_weight?: number;
}

export interface ZedTheme {
  appearance: "dark" | "light";
  name: string;
  style: ZedThemeStyle;
}

export interface ZedThemeFamily {
  $schema: string;
  author: string;
  name: string;
  themes: ZedTheme[];
}

export interface ZedThemeStyle {
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
