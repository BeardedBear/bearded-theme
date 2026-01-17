/**
 * Zed Theme Type Definitions
 * These interfaces define the structure of Zed theme files
 * References:
 * - https://github.com/zed-industries/zed/blob/main/assets/themes/one/one.json
 * - https://github.com/zed-industries/zed/blob/main/assets/themes/ayu/ayu.json
 * - https://github.com/zed-industries/zed/blob/main/assets/themes/gruvbox/gruvbox.json
 *
 * All style properties are optional - themes can define only the properties they need.
 */

export interface ZedPlayerColors {
  background: string;
  cursor: string;
  selection: string;
}

export interface ZedSyntaxStyle {
  color?: string;
  font_style?: "italic" | "normal" | "oblique";
  font_weight?: number;
}

/**
 * Common syntax token names used in Zed themes
 * This is a reference for the most common syntax keys
 */
export type ZedSyntaxTokens =
  | "attribute"
  | "boolean"
  | "comment"
  | "comment.doc"
  | "constant"
  | "constructor"
  | "embedded"
  | "emphasis"
  | "emphasis.strong"
  | "enum"
  | "function"
  | "function.builtin"
  | "hint"
  | "keyword"
  | "label"
  | "link_text"
  | "link_uri"
  | "namespace"
  | "number"
  | "operator"
  | "predictive"
  | "preproc"
  | "primary"
  | "property"
  | "punctuation"
  | "punctuation.bracket"
  | "punctuation.delimiter"
  | "punctuation.list_marker"
  | "punctuation.markup"
  | "punctuation.special"
  | "selector"
  | "selector.pseudo"
  | "string"
  | "string.escape"
  | "string.regex"
  | "string.special"
  | "string.special.symbol"
  | "tag"
  | "text.literal"
  | "title"
  | "type"
  | "variable"
  | "variable.special"
  | "variant";

export interface ZedTheme {
  appearance: "dark" | "light";
  name: string;
  style: Partial<ZedThemeStyle>;
}

export interface ZedThemeFamily {
  $schema: string;
  author: string;
  name: string;
  themes: ZedTheme[];
}

/**
 * Complete Zed Theme Style Definition
 * All properties are optional - use Partial<ZedThemeStyle> to allow partial implementations
 */
export interface ZedThemeStyle {
  // Accent colors array (Gruvbox specific)
  accents: string[];

  // Base colors
  background: string;
  foreground: string;

  // Border colors
  border: string;
  "border.disabled": string;
  "border.focused": string;
  "border.selected": string;
  "border.transparent": string;
  "border.variant": string;

  // Git/Version control status
  conflict: string;
  "conflict.background": string;
  "conflict.border": string;
  created: string;
  "created.background": string;
  "created.border": string;
  deleted: string;
  "deleted.background": string;
  "deleted.border": string;
  modified: string;
  "modified.background": string;
  "modified.border": string;
  renamed: string;
  "renamed.background": string;
  "renamed.border": string;

  // Drop target
  "drop_target.background": string;

  // Editor colors
  "editor.active_line.background": string;
  "editor.active_line_number": string;
  "editor.active_wrap_guide": string;
  "editor.background": string;
  "editor.document_highlight.read_background": string;
  "editor.document_highlight.write_background": string;
  "editor.foreground": string;
  "editor.gutter.background": string;
  "editor.highlighted_line.background": string;
  "editor.hover_line_number": string;
  "editor.indent_guide": string;
  "editor.indent_guide_active": string;
  "editor.invisible": string;
  "editor.line_number": string;
  "editor.subheader.background": string;
  "editor.wrap_guide": string;

  // Element colors
  "element.active": string;
  "element.background": string;
  "element.disabled": string;
  "element.hover": string;
  "element.selected": string;

  // Elevated surface
  "elevated_surface.background": string;

  // Status colors
  error: string;
  "error.background": string;
  "error.border": string;
  hidden: string;
  "hidden.background": string;
  "hidden.border": string;
  hint: string;
  "hint.background": string;
  "hint.border": string;
  ignored: string;
  "ignored.background": string;
  "ignored.border": string;
  info: string;
  "info.background": string;
  "info.border": string;
  predictive: string;
  "predictive.background": string;
  "predictive.border": string;
  success: string;
  "success.background": string;
  "success.border": string;
  unreachable: string;
  "unreachable.background": string;
  "unreachable.border": string;
  warning: string;
  "warning.background": string;
  "warning.border": string;

  // Ghost elements
  "ghost_element.active": string;
  "ghost_element.background": string;
  "ghost_element.disabled": string;
  "ghost_element.hover": string;
  "ghost_element.selected": string;

  // Icon colors
  icon: string;
  "icon.accent": string;
  "icon.disabled": string;
  "icon.muted": string;
  "icon.placeholder": string;

  // Link colors
  "link_text.hover": string;

  // Pane colors
  "pane.focused_border": null | string;
  "pane_group.border": string;

  // Panel colors
  "panel.background": string;
  "panel.focused_border": null | string;

  // Players (for collaboration)
  players: ZedPlayerColors[];

  // Scrollbar colors
  "scrollbar.thumb.active_background": string;
  "scrollbar.thumb.background": string;
  "scrollbar.thumb.border": string;
  "scrollbar.thumb.hover_background": string;
  "scrollbar.track.background": string;
  "scrollbar.track.border": string;

  // Search colors
  "search.active_match_background": string;
  "search.match_background": string;

  // Status bar
  "status_bar.background": string;

  // Surface
  "surface.background": string;

  // Syntax highlighting (extensible record)
  syntax: Record<string, ZedSyntaxStyle>;

  // Tab colors
  "tab.active_background": string;
  "tab.inactive_background": string;
  "tab_bar.background": string;

  // Terminal ANSI colors
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
  "terminal.ansi.dim_black": string;
  "terminal.ansi.dim_blue": string;
  "terminal.ansi.dim_cyan": string;
  "terminal.ansi.dim_green": string;
  "terminal.ansi.dim_magenta": string;
  "terminal.ansi.dim_red": string;
  "terminal.ansi.dim_white": string;
  "terminal.ansi.dim_yellow": string;
  "terminal.ansi.green": string;
  "terminal.ansi.magenta": string;
  "terminal.ansi.red": string;
  "terminal.ansi.white": string;
  "terminal.ansi.yellow": string;

  // Terminal base colors
  "terminal.background": string;
  "terminal.bright_foreground": string;
  "terminal.dim_foreground": string;
  "terminal.foreground": string;

  // Text colors
  text: string;
  "text.accent": string;
  "text.disabled": string;
  "text.muted": string;
  "text.placeholder": string;

  // Title bar
  "title_bar.background": string;
  "title_bar.inactive_background": string;

  // Toolbar
  "toolbar.background": string;

  // Version control
  "version_control.added": string;
  "version_control.deleted": string;
  "version_control.modified": string;
  "version_control.word_added": string;
  "version_control.word_deleted": string;
  "version_control.conflict_marker.ours": string;
  "version_control.conflict_marker.theirs": string;
}
