import { colord as c } from "colord";

import type {
  ActivityBarColors,
  BadgeColors,
  BreadcrumbColors,
  ButtonColors,
  ChartColors,
  CheckboxColors,
  CommandCenterColors,
  DebugColors,
  DiffEditorColors,
  DropdownColors,
  EditorColors,
  ErrorColors,
  ExtensionColors,
  GitColors,
  InlineChatAndEditColors,
  InputColors,
  InputOptionColors,
  InputValidationColors,
  KeyBindingColors,
  ListColors,
  MenuColors,
  MergeColors,
  MinimapColors,
  MultiDiffEditorColors,
  NotificationsColors,
  PanelColors,
  PeekViewColors,
  PickerGroupColors,
  ProfileColors,
  ProgressBarColors,
  QuickInputColors,
  SashColors,
  SCMGraphColors,
  ScrollBarColors,
  SettingsColors,
  SideBarColors,
  StatusBarColors,
  TabColors,
  TerminalColors,
  TextColors,
  Theme,
  TitleBarColors,
  ToolbarColors,
  TreeColors,
  VSCodeThemeColors,
  WalkThroughColors,
  WelcomePageColors,
  WidgetColors,
} from "./types";

import { isTooNeutral } from "../../helper";

const transparent = "#00000000";

/**
 * Creates a UI configuration object based on the provided theme and optional parameters.
 *
 * @param theme - The theme object.
 * @param hc - Optional. Specifies whether the UI should be in high contrast mode.
 * @param light - Optional. Specifies whether the UI should be in light mode.
 * @param untindedSelection - Optional. Specifies whether the selection color should be untinted.
 * @param desaturateInputs - Optional. Specifies whether the input colors should be desaturated.
 * @returns A partial VSCodeThemeColors object representing the UI configuration.
 */
export default function ui(
  theme: Theme,
  hc?: boolean,
  light?: boolean,
  untindedSelection?: boolean,
  desaturateInputs?: boolean,
): VSCodeThemeColors {
  // Helper functions
  function createSelectionColor(delta: number): string {
    return untindedSelection
      ? c(theme.ui.uibackground)
        .lighten(0.3 * delta)
        .alpha(0.5)
        .toHex()
      : c(theme.ui.primary)
        .alpha(0.3 * delta)
        .toHex();
  }

  function inputBackground(): string {
    return light
      ? desaturateInputs
        ? c(theme.ui.uibackground).lighten(0.01).toHex()
        : c(theme.ui.uibackground).lighten(0.02).toHex()
      : c(theme.ui.uibackground).lighten(0.025).toHex();
  }

  function inputBorder(): string {
    return light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.5).darken(0.25).toHex()
        : c(theme.ui.uibackground).darken(0.2).toHex()
      : c(theme.ui.uibackground).desaturate(0.05).lighten(0.15).toHex();
  }

  const getPrimaryOrInfo = (hex: string): string =>
    isTooNeutral(hex) ? theme.levels.info : theme.ui.primary;

  // Common values
  const shadow = light
    ? c("#000000").alpha(0.2).toHex()
    : c("#000000").alpha(0.4).toHex();
  const widgetShadow = light
    ? c("#000000").alpha(0.05).toHex()
    : c("#000000").alpha(0.2).toHex();

  const baseColors: Partial<VSCodeThemeColors> = {
    contrastActiveBorder: transparent,
    contrastBorder: transparent,
    descriptionForeground: light
      ? c(theme.ui.default).alpha(0.8).toHex()
      : c(theme.ui.default).alpha(0.5).toHex(),
    disabledForeground: c(theme.ui.default).alpha(0.3).toHex(),
    errorForeground: theme.levels.danger,
    focusBorder: light
      ? c(theme.ui.uibackground).darken(0.2).toHex()
      : c(theme.ui.uibackground).lighten(0.2).toHex(),
    foreground: theme.ui.defaultMain,
    "icon.foreground": c(theme.ui.defaultMain).alpha(0.67).toHex(),
    "selection.background": c(theme.ui.primary).alpha(0.38).toHex(),
  };

  const activityBarColors: ActivityBarColors = {
    "activityBar.activeBackground": hc
      ? c(theme.ui.primary).alpha(0.2).toHex()
      : c(theme.ui.primary).alpha(0.15).toHex(),
    "activityBar.activeBorder": theme.ui.primary,
    "activityBar.background": theme.ui.uibackgroundalt,
    "activityBar.border": theme.ui.border,
    "activityBar.dropBorder": c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "activityBar.foreground": theme.ui.primary,
    "activityBar.inactiveForeground": c(theme.ui.default)
      .mix(theme.ui.uibackground, 0.65)
      .saturate(0.05)
      .toHex(),
    "activityBarBadge.background": theme.ui.primary,
    "activityBarBadge.foreground": theme.ui.uibackgroundalt,
    "activityBarTop.activeBorder": theme.ui.primary,
    "activityBarTop.dropBorder": c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "activityBarTop.foreground": theme.ui.primary,
    "activityBarTop.inactiveForeground": hc
      ? c(theme.ui.default).mix(theme.ui.uibackground, 0.6).toHex()
      : c(theme.ui.default).mix(theme.ui.uibackground, 0.7).toHex(),
  };

  const badgeColors: BadgeColors = {
    "badge.background": theme.ui.primary,
    "badge.foreground": theme.ui.uibackgroundalt,
  };

  const breadcrumbColors: BreadcrumbColors = {
    "breadcrumb.background": theme.ui.uibackground,
    "breadcrumbPicker.background": c(theme.ui.uibackground)
      .lighten(0.05)
      .toHex(),
  };

  const buttonColors: ButtonColors = {
    "button.background": c(theme.ui.primary).alpha(0.5).toHex(),
    "button.border": light
      ? c("#000000").alpha(0.15).toHex()
      : c("#FFFFFF").alpha(0.15).toHex(),
    "button.foreground": light
      ? c(theme.ui.primary).darken(0.5).toHex()
      : c(theme.ui.primary).lighten(0.22).toHex(),
    "button.hoverBackground": c(theme.ui.primary).alpha(0.6).toHex(),
    "button.secondaryBackground": light
      ? c(theme.ui.uibackground).darken(0.07).toHex()
      : c(theme.ui.uibackground).lighten(0.07).toHex(),
    "button.secondaryForeground": light
      ? theme.ui.default
      : c(theme.ui.default).alpha(0.8).toHex(),
    "button.secondaryHoverBackground": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "button.separator": light
      ? c("#000000").alpha(0.3).toHex()
      : c("#FFFFFF").alpha(0.3).toHex(),
  };

  const chartColors: ChartColors = {
    "charts.blue": theme.colors.blue,
    "charts.foreground": theme.ui.default,
    "charts.green": theme.colors.green,
    "charts.lines": theme.ui.default,
    "charts.orange": theme.colors.orange,
    "charts.purple": theme.colors.pink,
    "charts.red": theme.colors.red,
    "charts.yellow": theme.colors.yellow,
  };

  const checkboxColors: CheckboxColors = {
    "checkbox.foreground": theme.ui.default,
  };

  const commandCenterColors: CommandCenterColors = {
    "commandCenter.activeBackground": c(theme.ui.primaryalt)
      .alpha(0.38)
      .toHex(),
    "commandCenter.activeForeground": c(theme.ui.defaultMain)
      .alpha(0.56)
      .toHex(),
    "commandCenter.background": theme.ui.uibackground,
    "commandCenter.border": theme.ui.border,
    "commandCenter.foreground": theme.ui.defaultalt,
  };

  const debugColors: DebugColors = {
    "debugConsole.errorForeground": theme.levels.danger,
    "debugConsole.infoForeground": theme.levels.info,
    "debugConsole.warningForeground": theme.levels.warning,
    "debugExceptionWidget.background": theme.ui.primaryalt,
    "debugExceptionWidget.border": theme.ui.border,
    "debugIcon.breakpointCurrentStackframeForeground": theme.levels.danger,
    "debugIcon.breakpointDisabledForeground": c(theme.levels.danger)
      .alpha(0.5)
      .toHex(),
    "debugIcon.breakpointForeground": theme.levels.danger,
    "debugIcon.continueForeground": theme.levels.info,
    "debugIcon.disconnectForeground": theme.levels.danger,
    "debugIcon.pauseForeground": theme.levels.danger,
    "debugIcon.restartForeground": theme.levels.success,
    "debugIcon.startForeground": theme.levels.success,
    "debugIcon.stepBackForeground": theme.levels.info,
    "debugIcon.stepIntoForeground": theme.levels.info,
    "debugIcon.stepOutForeground": theme.levels.info,
    "debugIcon.stepOverForeground": theme.levels.info,
    "debugIcon.stopForeground": theme.levels.danger,
    "debugToolBar.background": c(theme.ui.primary)
      .mix(theme.ui.uibackground, 0.9)
      .toHex(),
  };

  // diffEditor colors
  const diffBackgroundSaturationRatio = 0.15;
  const diffBackgroundOpacity = 0.1;
  const inserted = c(theme.levels.success)
    .alpha(diffBackgroundOpacity)
    .saturate(diffBackgroundSaturationRatio)
    .toHex();
  const removed = c(theme.levels.danger)
    .alpha(diffBackgroundOpacity)
    .saturate(diffBackgroundSaturationRatio)
    .toHex();
  const unchanged = c(theme.ui.uibackgroundalt).darken(0.01).toHex();
  const diffEditorColors: DiffEditorColors = {
    "diffEditor.border": theme.ui.border,
    "diffEditor.diagonalFill": c(theme.ui.uibackground).lighten(0.05).toHex(),
    "diffEditor.insertedLineBackground": inserted,
    "diffEditor.insertedTextBackground": inserted,
    "diffEditor.insertedTextBorder": transparent,
    "diffEditor.move.border": c(theme.colors.yellow).alpha(0.3).toHex(),
    "diffEditor.moveActive.border": c(theme.colors.yellow).alpha(0.7).toHex(),
    "diffEditor.removedLineBackground": removed,
    "diffEditor.removedTextBackground": removed,
    "diffEditor.removedTextBorder": transparent,
    "diffEditor.unchangedCodeBackground": unchanged,
    "diffEditor.unchangedRegionBackground": unchanged,
    "diffEditor.unchangedRegionShadow": shadow,
    "diffEditorGutter.insertedLineBackground": transparent,
    "diffEditorGutter.removedLineBackground": transparent,
    "diffEditorOverview.insertedForeground": c(theme.levels.success)
      .alpha(0.15)
      .toHex(),
    "diffEditorOverview.removedForeground": c(theme.levels.danger)
      .alpha(0.19)
      .toHex(),
  };

  const dropdownColors: DropdownColors = {
    "dropdown.background": inputBackground(),
    "dropdown.border": inputBorder(),
    "dropdown.foreground": theme.ui.default,
    "dropdown.listBackground": inputBackground(),
  };

  const editorColors: EditorColors = {
    "editor.background": theme.ui.uibackground,
    "editor.findMatchBackground": c(theme.ui.primary).alpha(0.19).toHex(),
    "editor.findMatchBorder": c(theme.ui.primary).alpha(0.38).toHex(),
    "editor.findMatchHighlightBackground": createSelectionColor(0.8),
    "editor.findMatchHighlightBorder": createSelectionColor(1.2),
    "editor.foldBackground": light
      ? c("#000000").alpha(0.05).toHex()
      : c("#000000").alpha(0.2).toHex(),
    "editor.foldPlaceholderForeground": theme.ui.defaultalt,
    "editor.foreground": theme.ui.default,
    "editor.hoverHighlightBackground": createSelectionColor(1),
    "editor.inactiveSelectionBackground": createSelectionColor(1),
    "editor.lineHighlightBackground": createSelectionColor(0.2),
    "editor.lineHighlightBorder": createSelectionColor(0.5),
    "editor.linkedEditingBackground": c(theme.colors.blue)
      .alpha(0.2)
      .saturate(0.2)
      .toHex(),
    "editor.rangeHighlightBackground": createSelectionColor(0.8),
    "editor.selectionBackground": createSelectionColor(1),
    "editor.selectionForeground": theme.ui.default,
    "editor.selectionHighlightBackground": c(theme.ui.primary)
      .alpha(0.08)
      .toHex(),
    "editor.selectionHighlightBorder": createSelectionColor(1),
    "editor.wordHighlightBackground": light
      ? createSelectionColor(0.4)
      : createSelectionColor(1.5),
    "editor.wordHighlightBorder": light
      ? createSelectionColor(0.8)
      : createSelectionColor(1.8),
    "editor.wordHighlightStrongBackground": light
      ? createSelectionColor(0.8)
      : createSelectionColor(1),
    "editorBracketHighlight.foreground1": theme.colors.yellow,
    "editorBracketHighlight.foreground2": theme.colors.pink,
    "editorBracketHighlight.foreground3": theme.colors.blue,
    "editorBracketHighlight.foreground4": theme.colors.purple,
    "editorBracketHighlight.foreground5": theme.colors.turquoize,
    "editorBracketHighlight.foreground6": theme.colors.salmon,
    "editorBracketHighlight.unexpectedBracket.foreground": theme.levels.danger,
    "editorBracketMatch.background": createSelectionColor(1),
    "editorBracketMatch.border": createSelectionColor(1.5),
    "editorCodeLens.foreground": c(theme.ui.defaultMain).alpha(0.5).toHex(),
    "editorCursor.background": theme.ui.primary,
    "editorCursor.foreground": theme.colors.yellow,
    "editorError.border": transparent,
    "editorError.foreground": theme.levels.danger,
    "editorGhostText.border": transparent,
    "editorGhostText.foreground": c(theme.ui.default).alpha(0.44).toHex(),
    "editorGroup.border": theme.ui.border,
    "editorGroup.dropBackground": c(theme.ui.primary).alpha(0.08).toHex(),
    "editorGroupHeader.border": transparent,
    "editorGroupHeader.noTabsBackground": theme.ui.uibackground,
    "editorGroupHeader.tabsBackground": theme.ui.uibackgroundalt,
    "editorGroupHeader.tabsBorder": theme.ui.border,
    "editorGutter.addedBackground": c(theme.levels.success).alpha(0.8).toHex(),
    "editorGutter.background": theme.ui.uibackground,
    "editorGutter.commentRangeForeground": theme.ui.primaryalt,
    "editorGutter.deletedBackground": c(theme.levels.danger).alpha(0.8).toHex(),
    "editorGutter.modifiedBackground": c(theme.levels.info).alpha(0.8).toHex(),
    "editorHoverWidget.background": theme.ui.primaryalt,
    "editorHoverWidget.border": theme.ui.border,
    "editorIndentGuide.activeBackground1": hc
      ? c(theme.ui.defaultalt).alpha(0.9).toHex()
      : c(theme.ui.defaultalt).alpha(0.8).toHex(),
    "editorIndentGuide.background1": hc
      ? c(theme.ui.defaultalt).alpha(0.4).toHex()
      : c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "editorInfo.border": transparent,
    "editorInlayHint.background": c(theme.ui.defaultMain).alpha(0.1).toHex(),
    "editorInlayHint.foreground": c(theme.ui.defaultMain).alpha(0.7).toHex(),
    "editorInlayHint.parameterBackground": c(theme.ui.defaultMain)
      .alpha(0.1)
      .toHex(),
    "editorInlayHint.parameterForeground": c(theme.ui.defaultMain)
      .alpha(0.7)
      .toHex(),
    "editorInlayHint.typeBackground": c(theme.ui.defaultMain)
      .alpha(0.1)
      .toHex(),
    "editorInlayHint.typeForeground": c(theme.ui.defaultMain)
      .alpha(0.7)
      .toHex(),
    "editorLineNumber.activeForeground": light
      ? c(theme.ui.uibackground).darken(0.7).toHex()
      : c(theme.ui.uibackgroundmid).lighten(0.5).desaturate(0.05).toHex(),
    "editorLineNumber.foreground": c(theme.ui.default)
      .mix(theme.ui.uibackground, 0.75)
      .saturate(0.05)
      .toHex(),
    "editorLink.activeForeground": theme.ui.default,
    "editorMarkerNavigation.background": theme.ui.uibackgroundalt,
    "editorMarkerNavigationError.background": c(theme.levels.danger)
      .alpha(0.56)
      .toHex(),
    "editorMarkerNavigationInfo.background": c(theme.levels.info)
      .alpha(0.56)
      .toHex(),
    "editorMarkerNavigationWarning.background": c(theme.levels.warning)
      .alpha(0.56)
      .toHex(),
    "editorOverviewRuler.addedForeground": c(theme.levels.success)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.border": theme.ui.border,
    "editorOverviewRuler.deletedForeground": c(theme.levels.danger)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.errorForeground": theme.levels.danger,
    "editorOverviewRuler.incomingContentForeground": c(theme.levels.success)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.infoForeground": c(theme.levels.info)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.modifiedForeground": c(theme.levels.info)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.selectionHighlightForeground": c(theme.ui.primary)
      .alpha(0.5)
      .toHex(),
    "editorOverviewRuler.warningForeground": theme.levels.warning,
    "editorRuler.foreground": c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "editorStickyScroll.shadow": shadow,
    "editorStickyScrollHover.background": c(theme.ui.uibackground)
      .lighten(0.03)
      .toHex(),
    "editorSuggestWidget.background": c(theme.ui.uibackground)
      .lighten(0.02)
      .toHex(),
    "editorSuggestWidget.border": theme.ui.border,
    "editorSuggestWidget.foreground": theme.ui.defaultMain,
    "editorSuggestWidget.highlightForeground": theme.colors.yellow,
    "editorSuggestWidget.selectedBackground": light
      ? c(theme.ui.uibackground).darken(0.05).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "editorSuggestWidget.selectedIconForeground": theme.ui.default,
    "editorUnnecessaryCode.border": hc
      ? c(theme.ui.defaultMain).alpha(0.6).toHex()
      : transparent,
    "editorUnnecessaryCode.opacity": "#000000aa",
    "editorWarning.border": transparent,
    "editorWarning.foreground": theme.colors.yellow,
    "editorWhitespace.foreground": c(theme.ui.defaultalt).alpha(0.376).toHex(),
    "editorWidget.background": theme.ui.primaryalt,
    "editorWidget.border": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "editorWidget.resizeBorder": c(theme.ui.primary).alpha(0.314).toHex(),
  };

  const errorLensColors: ErrorColors = {
    "errorLens.errorForeground": c(theme.levels.danger).alpha(0.99).toHex(),
    "errorLens.hintForeground": c(theme.levels.info).alpha(0.99).toHex(),
    "errorLens.infoForeground": c(theme.levels.info).alpha(0.99).toHex(),
    "errorLens.warningForeground": c(theme.levels.warning).alpha(0.99).toHex(),
  };

  const extensionButtonColors: ExtensionColors = {
    "extensionButton.background": c(theme.ui.primary).alpha(0.5).toHex(),
    "extensionButton.foreground": light
      ? c(theme.ui.primary).darken(0.5).toHex()
      : c(theme.ui.primary).lighten(0.22).toHex(),
    "extensionButton.hoverBackground": c(theme.ui.primary).alpha(0.6).toHex(),
    "extensionButton.prominentBackground": c(theme.ui.primary)
      .alpha(0.616)
      .toHex(),
    "extensionButton.prominentForeground": theme.ui.default,
    "extensionButton.prominentHoverBackground": theme.ui.primary,
  };

  const gitDecorationColors: GitColors = {
    "gitDecoration.conflictingResourceForeground": theme.ui.primary,
    "gitDecoration.deletedResourceForeground": theme.levels.danger,
    "gitDecoration.ignoredResourceForeground": theme.ui.defaultalt,
    "gitDecoration.modifiedResourceForeground": theme.levels.info,
    "gitDecoration.untrackedResourceForeground": theme.levels.success,
  };

  const multiDiffEditorColors: MultiDiffEditorColors = {
    "multiDiffEditor.border": theme.ui.border,
    "multiDiffEditor.headerBackground": light
      ? c(theme.ui.uibackground).darken(0.05).toHex()
      : c(theme.ui.uibackground).lighten(0.05).toHex(),
  };

  const scmGraphColors: SCMGraphColors = {
    "scmGraph.foreground1": theme.colors.blue,
    "scmGraph.foreground2": theme.colors.pink,
    "scmGraph.foreground3": theme.colors.greenAlt,
    "scmGraph.foreground4": theme.colors.turquoize,
    "scmGraph.foreground5": theme.colors.salmon,
    "scmGraph.historyItemBaseRefColor": theme.colors.purple,
    "scmGraph.historyItemHoverAdditionsForeground": theme.levels.success,
    "scmGraph.historyItemHoverDefaultLabelBackground": theme.ui.defaultMain,
    "scmGraph.historyItemHoverDefaultLabelForeground": c(theme.ui.defaultalt)
      .darken(0.4)
      .toHex(),
    "scmGraph.historyItemHoverDeletionsForeground": theme.levels.danger,
    "scmGraph.historyItemHoverLabelForeground": c(theme.ui.defaultalt)
      .darken(0.4)
      .toHex(),
    "scmGraph.historyItemRefColor": theme.colors.yellow,
    "scmGraph.historyItemRemoteRefColor": theme.colors.blue,
  };

  const inlineChatColors: InlineChatAndEditColors = {
    "inlineChat.background": c(theme.ui.uibackground).lighten(0.05).toHex(),
    "inlineChat.border": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "inlineChatInput.background": c(theme.ui.uibackground)
      .lighten(0.02)
      .toHex(),
    "inlineChatInput.border": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "inlineChatInput.focusBorder": light
      ? c(theme.ui.uibackground).darken(0.2).toHex()
      : c(theme.ui.uibackground).lighten(0.2).toHex(),
  };

  /**
   * Creates a gutter background/border color for inline edit indicators
   *
   * @param color - The base color to adjust
   * @param withAlpha - Whether to apply alpha transparency (defaults to true)
   * @returns A color string suitable for gutter indicators
   */
  function inlineEditGutter(color: string, withAlpha: boolean = true): string {
    if (light) {
      return c(color)
        .lighten(0.2)
        .alpha(withAlpha ? 0.7 : 0)
        .toHex();
    }
    return c(color)
      .darken(0.2)
      .alpha(withAlpha ? 0.7 : 1)
      .toHex();
  }
  const inlineEditColors: InlineChatAndEditColors = {
    // gutter
    // primary
    "inlineEdit.gutterIndicator.background": c(theme.ui.defaultMain)
      .alpha(0.5)
      .toHex(),
    "inlineEdit.gutterIndicator.primaryBackground": inlineEditGutter(
      theme.colors.yellow,
    ),
    "inlineEdit.gutterIndicator.primaryBorder": inlineEditGutter(
      theme.colors.yellow,
      false,
    ),
    "inlineEdit.gutterIndicator.primaryForeground": c(theme.ui.default)
      .darken(0.8)
      .toHex(),
    // secondary
    "inlineEdit.gutterIndicator.secondaryBackground": inlineEditGutter(
      theme.ui.primary,
    ),
    "inlineEdit.gutterIndicator.secondaryBorder": inlineEditGutter(
      theme.ui.primary,
      false,
    ),
    "inlineEdit.gutterIndicator.secondaryForeground": c(theme.ui.primary)
      .darken(0.8)
      .toHex(),
    // success
    "inlineEdit.gutterIndicator.successfulBackground": inlineEditGutter(
      theme.levels.success,
    ),
    "inlineEdit.gutterIndicator.successfulBorder": inlineEditGutter(
      theme.levels.success,
      false,
    ),
    "inlineEdit.gutterIndicator.successfulForeground": c(theme.levels.success)
      .darken(0.8)
      .toHex(),

    // editor
    "inlineEdit.modifiedBackground": c(theme.levels.success)
      .alpha(0.15)
      .toHex(),
    "inlineEdit.modifiedBorder": c(theme.levels.success).alpha(0.8).toHex(),
    "inlineEdit.modifiedChangedLineBackground": c(theme.levels.success)
      .alpha(0.08)
      .toHex(),
    "inlineEdit.modifiedChangedTextBackground": transparent,
    "inlineEdit.originalBackground": c(theme.colors.red).alpha(0.15).toHex(),
    "inlineEdit.originalBorder": c(theme.colors.red).alpha(0.8).toHex(),
    "inlineEdit.originalChangedLineBackground": c(theme.colors.red)
      .alpha(0.8)
      .toHex(),
    "inlineEdit.originalChangedTextBackground": transparent,
    "inlineEdit.tabWillAcceptModifiedBorder": theme.levels.success,
    "inlineEdit.tabWillAcceptOriginalBorder": theme.colors.red,
  };

  const inputColors: InputColors & InputOptionColors & InputValidationColors = {
    "input.background": inputBackground(),
    "input.border": inputBorder(),
    "input.foreground": theme.ui.default,
    "input.placeholderForeground": light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.8).darken(0.2).toHex()
        : c(theme.ui.uibackground).darken(0.3).toHex()
      : c(theme.ui.uibackground).desaturate(0.05).lighten(0.3).toHex(),
    "inputOption.activeBackground": light
      ? c(theme.ui.uibackground).darken(0.3).toHex()
      : c(theme.ui.uibackground).lighten(0.3).toHex(),
    "inputOption.activeBorder": transparent,
    "inputOption.activeForeground": theme.ui.default,
    "inputOption.hoverBackground": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "inputValidation.errorBackground": theme.ui.primaryalt,
    "inputValidation.errorBorder": theme.colors.yellow,
    "inputValidation.infoBackground": theme.ui.primaryalt,
    "inputValidation.infoBorder": theme.ui.primary,
    "inputValidation.warningBackground": theme.ui.primaryalt,
    "inputValidation.warningBorder": theme.colors.yellow,
  };

  const keybindingLabelColors: KeyBindingColors = {
    "keybindingLabel.background": theme.ui.primaryalt,
    "keybindingLabel.border": light
      ? theme.ui.defaultalt
      : c(theme.ui.primaryalt).lighten(0.2).desaturate(0.1).toHex(),
    "keybindingLabel.bottomBorder": light
      ? theme.ui.defaultalt
      : c(theme.ui.primaryalt).lighten(0.2).desaturate(0.1).toHex(),
    "keybindingLabel.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.4).desaturate(0.1).toHex(),
  };

  const listColors: ListColors = {
    "list.activeSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.45).toHex(),
    "list.activeSelectionForeground": theme.ui.default,
    "list.dropBackground": c(theme.ui.primary).alpha(0.082).toHex(),
    "list.errorForeground": theme.levels.danger,
    "list.focusBackground": c(theme.ui.primary).alpha(0.25).toHex(),
    "list.focusForeground": theme.ui.defaultMain,
    "list.highlightForeground": theme.colors.yellow,
    "list.hoverBackground": light
      ? c(theme.ui.defaultalt).alpha(0.1).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.3).toHex(),
    "list.hoverForeground": light
      ? c(theme.ui.defaultalt).darken(0.8).toHex()
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "list.inactiveSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.12).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.25).toHex(),
    "list.inactiveSelectionForeground": theme.ui.default,
    "list.warningForeground": theme.levels.warning,
  };

  const menuColors: MenuColors = {
    "menu.background": theme.ui.primaryalt,
    "menu.border": theme.ui.border,
    "menu.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.5).desaturate(0.1).toHex(),
    "menu.selectionForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "menu.separatorBackground": c(theme.ui.border).alpha(0.396).toHex(),
    "menubar.selectionBackground": theme.ui.primaryalt,
    "menubar.selectionForeground": theme.ui.defaultMain,
  };
  const mergeColors: MergeColors = {
    "merge.border": theme.ui.border,
    "merge.commonContentBackground": c(theme.colors.yellow)
      .alpha(0.188)
      .toHex(),
    "merge.commonHeaderBackground": c(theme.colors.yellow).alpha(0.5).toHex(),
    "merge.currentContentBackground": c(theme.levels.success)
      .alpha(0.188)
      .toHex(),
    "merge.currentHeaderBackground": c(theme.levels.success).alpha(0.5).toHex(),
    "merge.incomingContentBackground": c(theme.levels.info)
      .alpha(0.188)
      .toHex(),
    "merge.incomingHeaderBackground": c(theme.levels.info).alpha(0.5).toHex(),
  };

  const minimapColors: MinimapColors = {
    "minimap.background": theme.ui.uibackground,
    "minimap.errorHighlight": theme.levels.danger,
    "minimap.findMatchHighlight": theme.ui.primary,
    "minimap.selectionHighlight": theme.ui.primary,
    "minimap.selectionOccurrenceHighlight": theme.ui.primary,
    "minimap.warningHighlight": theme.levels.warning,
    "minimapGutter.addedBackground": theme.levels.success,
    "minimapGutter.deletedBackground": theme.levels.danger,
    "minimapGutter.modifiedBackground": theme.levels.info,
  };

  const notificationColors: NotificationsColors = {
    "notificationCenterHeader.background": theme.ui.primaryalt,
    "notificationCenterHeader.foreground": theme.ui.default,
    "notificationLink.foreground": theme.colors.yellow,
    "notifications.background": theme.ui.primaryalt,
    "notifications.border": theme.ui.border,
    "notifications.foreground": theme.ui.defaultMain,
    "notificationsErrorIcon.foreground": theme.colors.red,
    "notificationsInfoIcon.foreground": theme.colors.blue,
    "notificationsWarningIcon.foreground": theme.colors.orange,
  };

  const panelColors: PanelColors = {
    "panel.background": theme.ui.uibackgroundmid,
    "panel.border": theme.ui.border,
    "panel.dropBorder": c(theme.ui.defaultalt).alpha(0.5).toHex(),
    "panelInput.border": light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.5).darken(0.1).toHex()
        : c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "panelSection.border": theme.ui.border,
    "panelSectionHeader.background": light
      ? c(theme.ui.uibackgroundmid).darken(0.05).toHex()
      : c(theme.ui.uibackgroundmid).lighten(0.03).toHex(),
    "panelSectionHeader.border": theme.ui.border,
    "panelSectionHeader.foreground": theme.ui.default,
    "panelTitle.activeBorder": theme.ui.primary,
    "panelTitle.activeForeground": theme.ui.primary,
    "panelTitle.inactiveForeground": theme.ui.defaultalt,
  };

  const peekViewColors: PeekViewColors = {
    "peekView.border": theme.ui.border,
    "peekViewEditor.background": c(theme.ui.uibackground).lighten(0.04).toHex(),
    "peekViewEditor.matchHighlightBackground": c(theme.ui.primaryalt)
      .alpha(0.25)
      .toHex(),
    "peekViewEditor.matchHighlightBorder": transparent,
    "peekViewEditorGutter.background": c(theme.ui.uibackground)
      .lighten(0.04)
      .toHex(),
    "peekViewEditorStickyScroll.background": c(theme.ui.uibackground)
      .lighten(0.03)
      .toHex(),
    "peekViewResult.background": c(theme.ui.uibackground)
      .lighten(0.025)
      .toHex(),
    "peekViewResult.fileForeground": theme.ui.default,
    "peekViewResult.lineForeground": theme.ui.defaultMain,
    "peekViewResult.matchHighlightBackground": c(theme.ui.primary)
      .alpha(0.5)
      .toHex(),
    "peekViewResult.selectionBackground": c(theme.ui.primary)
      .alpha(0.2)
      .toHex(),
    "peekViewResult.selectionForeground": theme.ui.default,
    "peekViewTitle.background": c(theme.ui.uibackground).lighten(0.05).toHex(),
    "peekViewTitleDescription.foreground": theme.ui.default,
    "peekViewTitleLabel.foreground": theme.ui.default,
  };

  const pickerGroupColors: PickerGroupColors = {
    "pickerGroup.border": theme.ui.border,
    "pickerGroup.foreground": theme.ui.default,
  };

  const profileBadgeColors: ProfileColors = {
    "profileBadge.background": theme.ui.primary,
    "profileBadge.foreground": theme.ui.uibackground,
  };

  const progressBarColors: ProgressBarColors = {
    "progressBar.background": theme.colors.yellow,
  };

  const quickInputColors: QuickInputColors = {
    "quickInput.background": c(theme.ui.uibackground).lighten(0.03).toHex(),
    "quickInput.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.default).alpha(0.7).toHex(),
    "quickInputList.focusBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.2).alpha(0.45).toHex(),
    "quickInputList.focusForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "quickInputList.focusIconForeground": theme.ui.default,
    "quickInputTitle.background": theme.ui.uibackgroundalt,
  };

  const sashColors: SashColors = {
    "sash.hoverBorder": c(theme.ui.primary).alpha(0.314).toHex(),
  };

  const scrollbarColors: ScrollBarColors = {
    "scrollbar.shadow": shadow,
    "scrollbarSlider.activeBackground": c(theme.ui.default).alpha(0.3).toHex(),
    "scrollbarSlider.background": c(theme.ui.default).alpha(0.15).toHex(),
    "scrollbarSlider.hoverBackground": c(theme.ui.default).alpha(0.2).toHex(),
  };

  const settingsColors: SettingsColors = {
    "settings.headerForeground": theme.ui.default,
    "settings.modifiedItemIndicator": theme.ui.primary,
    "settings.settingsHeaderHoverForeground": theme.ui.default,
  };

  const sideBarColors: SideBarColors = {
    "sideBar.background": theme.ui.uibackgroundalt,
    "sideBar.border": theme.ui.border,
    "sideBar.foreground": c(theme.ui.defaultMain).alpha(0.8).toHex(),
    "sideBarSectionHeader.background": theme.ui.uibackgroundalt,
    "sideBarSectionHeader.border": theme.ui.border,
    "sideBarSectionHeader.foreground": theme.ui.default,
    "sideBarStickyScroll.background": c(theme.ui.uibackgroundalt)
      .darken(0.02)
      .toHex(),
    "sideBarStickyScroll.shadow": shadow,
    "sideBarTitle.foreground": theme.ui.defaultalt,
  };

  const statusBarColors: StatusBarColors = {
    "statusBar.background": theme.ui.uibackground,
    "statusBar.border": theme.ui.border,
    "statusBar.debuggingBackground": c(theme.ui.primary)
      .mix(theme.ui.uibackground, 0.8)
      .toHex(),
    "statusBar.debuggingForeground": c(theme.ui.default)
      .mix(c(theme.ui.primary).darken(0.2), 0.4)
      .toHex(),
    "statusBar.foreground": c(theme.ui.defaultMain).alpha(0.5).toHex(),
    "statusBar.noFolderBackground": theme.ui.uibackgroundalt,
    "statusBar.noFolderBorder": theme.ui.border,
    "statusBar.noFolderForeground": c(theme.ui.defaultMain).alpha(0.8).toHex(),
  };
  /**
   * Creates status bar item colors for a specific type (error, warning, etc.)
   *
   * @param baseColor - The base color for the status bar item
   * @returns An object with status bar item colors
   */
  function createStatusBarItemColors(
    prefix: string,
    baseColor: string,
  ): Partial<StatusBarColors> {
    const foreground = light
      ? c(theme.ui.uibackground).toHex()
      : c(baseColor).darken(0.5).toHex();
    const hoverBackground = c(baseColor).lighten(0.1).toHex();
    const hoverForeground = c(theme.ui.uibackground).toHex();

    return {
      [`statusBarItem.${prefix}Background`]: baseColor,
      [`statusBarItem.${prefix}Foreground`]: foreground,
      [`statusBarItem.${prefix}HoverBackground`]: hoverBackground,
      [`statusBarItem.${prefix}HoverForeground`]: hoverForeground,
    };
  }

  const statusBarItemColors: StatusBarColors = {
    "statusBarItem.activeBackground": theme.ui.primaryalt,
    "statusBarItem.compactHoverBackground": c(theme.ui.primary)
      .alpha(0.8)
      .toHex(),
    "statusBarItem.hoverBackground": c(theme.ui.primary)
      .mix(theme.ui.uibackground, 0.7)
      .toHex(),
    "statusBarItem.hoverForeground": c(theme.ui.default).toHex(),
    ...createStatusBarItemColors("prominent", theme.ui.uibackground),
    ...createStatusBarItemColors("error", theme.levels.danger),
    ...createStatusBarItemColors("offline", theme.colors.pink),
    ...createStatusBarItemColors("remote", theme.colors.turquoize),
    ...createStatusBarItemColors("warning", theme.levels.warning),
  };

  const tabColors: TabColors = {
    "tab.activeBackground": hc
      ? c(theme.ui.primary).mix(theme.ui.uibackground, 0.9).toHex()
      : theme.ui.uibackground,
    "tab.activeBorder": theme.ui.uibackground,
    "tab.activeBorderTop": theme.ui.primary,
    "tab.activeForeground": theme.ui.default,
    "tab.border": theme.ui.border,
    "tab.hoverBackground": theme.ui.uibackground,
    "tab.inactiveBackground": theme.ui.uibackgroundalt,
    "tab.inactiveForeground": theme.ui.defaultalt,
    "tab.lastPinnedBorder": theme.ui.border,
    "tab.unfocusedActiveBorder": theme.ui.uibackground,
    "tab.unfocusedActiveForeground": theme.ui.primary,
    "tab.unfocusedHoverBackground": theme.ui.uibackground,
    "tab.unfocusedInactiveForeground": theme.ui.defaultalt,
  };

  const terminalColors: TerminalColors = {
    "terminal.ansiBlack": theme.ui.uibackground,
    "terminal.ansiBlue": theme.levels.info,
    "terminal.ansiBrightBlack": light
      ? c(theme.ui.uibackgroundmid).darken(0.2).toHex()
      : c(theme.ui.uibackgroundmid).lighten(0.2).toHex(),
    "terminal.ansiBrightBlue": c(theme.levels.info).saturate(0.3).toHex(),
    "terminal.ansiBrightCyan": c(theme.colors.turquoize).saturate(0.3).toHex(),
    "terminal.ansiBrightGreen": c(theme.levels.success).saturate(0.3).toHex(),
    "terminal.ansiBrightMagenta": c(theme.colors.pink).saturate(0.3).toHex(),
    "terminal.ansiBrightRed": c(theme.levels.danger).saturate(0.3).toHex(),
    "terminal.ansiBrightWhite": c(theme.ui.default).lighten(0.2).toHex(),
    "terminal.ansiBrightYellow": c(theme.colors.yellow).saturate(0.3).toHex(),
    "terminal.ansiCyan": theme.colors.turquoize,
    "terminal.ansiGreen": theme.levels.success,
    "terminal.ansiMagenta": theme.colors.pink,
    "terminal.ansiRed": theme.levels.danger,
    "terminal.ansiWhite": theme.ui.default,
    "terminal.ansiYellow": theme.colors.yellow,
    "terminal.background": theme.ui.uibackgroundmid,
    "terminal.foreground": theme.ui.default,
    "terminal.selectionForeground": theme.ui.default,
    "terminalCursor.background": theme.ui.uibackground,
    "terminalCursor.foreground": theme.colors.yellow,
    "terminalStickyScrollHover.background": c(theme.ui.uibackground)
      .lighten(0.03)
      .toHex(),
  };

  const textColors: TextColors = {
    "textBlockQuote.background": c(theme.levels.info).alpha(0.2).toHex(),
    "textBlockQuote.border": c(theme.levels.info).alpha(0.725).toHex(),
    "textCodeBlock.background": c(theme.levels.info).alpha(0.2).toHex(),
    "textLink.activeForeground": getPrimaryOrInfo(theme.ui.primary),
    "textLink.foreground": getPrimaryOrInfo(theme.ui.primary),
    "textPreformat.background": light
      ? c(theme.colors.yellow).mix(theme.ui.uibackground, 0.5).toHex()
      : c(theme.colors.yellow).mix(theme.ui.uibackground, 0.8).toHex(),
    "textPreformat.foreground": light
      ? c(theme.colors.yellow).darken(0.3).toHex()
      : theme.colors.yellow,
    "textSeparator.foreground": theme.ui.primary,
  };

  const titleBarBackground = light
    ? c(theme.ui.uibackgroundalt).darken(0.1).toHex()
    : c(theme.ui.uibackgroundalt).darken(0.03).toHex();
  const titleBarColors: TitleBarColors = {
    "titleBar.activeBackground": titleBarBackground,
    "titleBar.activeForeground": light
      ? c(theme.ui.default).alpha(0.6).toHex()
      : c(theme.ui.default).alpha(0.4).toHex(),
    "titleBar.border": theme.ui.border,
    "titleBar.inactiveBackground": titleBarBackground,
    "titleBar.inactiveForeground": light
      ? c(theme.ui.default).alpha(0.6).toHex()
      : theme.ui.defaultalt,
  };

  const toolbarColors: ToolbarColors = {
    "toolbar.activeBackground": c(theme.ui.defaultalt).alpha(0.5).toHex(),
    "toolbar.hoverBackground": c(theme.ui.defaultalt).alpha(0.3).toHex(),
  };

  const treeColors: TreeColors = {
    "tree.indentGuidesStroke": c(theme.ui.defaultalt).alpha(0.439).toHex(),
  };

  const walkThroughColors: WalkThroughColors = {
    "walkThrough.embeddedEditorBackground": theme.ui.uibackground,
  };

  const welcomePageColors: WelcomePageColors = {
    "welcomePage.progress.background": theme.ui.primaryalt,
    "welcomePage.progress.foreground": theme.ui.primary,
    "welcomePage.tileBackground": c(theme.ui.defaultMain).alpha(0.1).toHex(),
    "welcomePage.tileBorder": c(theme.ui.defaultMain).alpha(0.2).toHex(),
    "welcomePage.tileHoverBackground": c(theme.ui.defaultMain)
      .alpha(0.2)
      .toHex(),
  };

  const widgetColors: WidgetColors = {
    "widget.shadow": widgetShadow,
  };

  // Combine all color groups
  return {
    ...baseColors,
    ...activityBarColors,
    ...badgeColors,
    ...breadcrumbColors,
    ...buttonColors,
    ...chartColors,
    ...checkboxColors,
    ...commandCenterColors,
    ...debugColors,
    ...diffEditorColors,
    ...dropdownColors,
    ...editorColors,
    ...errorLensColors,
    ...extensionButtonColors,
    ...gitDecorationColors,
    ...multiDiffEditorColors,
    ...scmGraphColors,
    ...inlineChatColors,
    ...inlineEditColors,
    ...inputColors,
    ...keybindingLabelColors,
    ...listColors,
    ...menuColors,
    ...mergeColors,
    ...minimapColors,
    ...notificationColors,
    ...panelColors,
    ...peekViewColors,
    ...pickerGroupColors,
    ...profileBadgeColors,
    ...progressBarColors,
    ...quickInputColors,
    ...sashColors,
    ...scrollbarColors,
    ...settingsColors,
    ...sideBarColors,
    ...statusBarColors,
    ...statusBarItemColors,
    ...tabColors,
    ...terminalColors,
    ...textColors,
    ...titleBarColors,
    ...toolbarColors,
    ...treeColors,
    ...walkThroughColors,
    ...welcomePageColors,
    ...widgetColors,
  };
}
