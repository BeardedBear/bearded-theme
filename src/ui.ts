import { colord as c } from "colord";

import { Theme, VSCodeThemeColors } from "./typing";

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

  // Common values
  const shadow = light
    ? c("#000000").alpha(0.2).toHex()
    : c("#000000").alpha(0.4).toHex();
  const widgetShadow = light
    ? c("#000000").alpha(0.05).toHex()
    : c("#000000").alpha(0.2).toHex();

  // Group UI elements by category for better organization
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
    "icon.foreground": `${theme.ui.defaultMain}AA`,
    "selection.background": `${theme.ui.primary}60`,
  };

  const activityBarColors: Partial<VSCodeThemeColors> = {
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

  const badgeColors: Partial<VSCodeThemeColors> = {
    "badge.background": theme.ui.primary,
    "badge.foreground": theme.ui.uibackgroundalt,
  };

  const breadcrumbColors: Partial<VSCodeThemeColors> = {
    "breadcrumb.background": theme.ui.uibackground,
    "breadcrumbPicker.background": c(theme.ui.uibackground)
      .lighten(0.05)
      .toHex(),
  };

  const buttonColors: Partial<VSCodeThemeColors> = {
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

  const chartColors: Partial<VSCodeThemeColors> = {
    "charts.blue": theme.colors.blue,
    "charts.foreground": theme.ui.default,
    "charts.green": theme.colors.green,
    "charts.lines": theme.ui.default,
    "charts.orange": theme.colors.orange,
    "charts.purple": theme.colors.pink,
    "charts.red": theme.colors.red,
    "charts.yellow": theme.colors.yellow,
  };

  const checkboxColors: Partial<VSCodeThemeColors> = {
    "checkbox.foreground": theme.ui.default,
  };

  const commandCenterColors: Partial<VSCodeThemeColors> = {
    "commandCenter.activeBackground": `${theme.ui.primaryalt}60`,
    "commandCenter.activeForeground": `${theme.ui.defaultMain}90`,
    "commandCenter.background": theme.ui.uibackground,
    "commandCenter.border": theme.ui.border,
    "commandCenter.foreground": theme.ui.defaultalt,
  };

  const debugColors: Partial<VSCodeThemeColors> = {
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

  const diffEditorColors: Partial<VSCodeThemeColors> = {
    "diffEditor.border": theme.ui.border,
    "diffEditor.diagonalFill": c(theme.ui.uibackground).lighten(0.05).toHex(),
    "diffEditor.insertedLineBackground": c(theme.levels.success)
      .alpha(0.1)
      .toHex(),
    "diffEditor.insertedTextBackground": c(theme.levels.success)
      .alpha(0.15)
      .toHex(),
    "diffEditor.insertedTextBorder": transparent,
    "diffEditor.move.border": c(theme.colors.yellow).alpha(0.3).toHex(),
    "diffEditor.moveActive.border": c(theme.colors.yellow).alpha(0.7).toHex(),
    "diffEditor.removedLineBackground": c(theme.levels.danger)
      .alpha(0.1)
      .toHex(),
    "diffEditor.removedTextBackground": c(theme.levels.danger)
      .alpha(0.15)
      .toHex(),
    "diffEditor.removedTextBorder": transparent,
    "diffEditorGutter.insertedLineBackground": transparent,
    "diffEditorGutter.removedLineBackground": transparent,
    "diffEditorOverview.insertedForeground": `${theme.levels.success}25`,
    "diffEditorOverview.removedForeground": `${theme.levels.danger}30`,
  };

  const dropdownColors: Partial<VSCodeThemeColors> = {
    "dropdown.background": inputBackground(),
    "dropdown.border": inputBorder(),
    "dropdown.foreground": theme.ui.default,
    "dropdown.listBackground": inputBackground(),
  };

  const editorColors: Partial<VSCodeThemeColors> = {
    "editor.background": theme.ui.uibackground,
    "editor.findMatchBackground": `${theme.ui.primary}30`,
    "editor.findMatchBorder": `${theme.ui.primary}60`,
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
    "editor.selectionHighlightBackground": `${theme.ui.primary}15`,
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
    "editorCodeLens.foreground": theme.ui.defaultMain + 80,
    "editorCursor.background": theme.ui.primary,
    "editorCursor.foreground": theme.colors.yellow,
    "editorError.border": transparent,
    "editorError.foreground": theme.levels.danger,
    "editorGhostText.border": transparent,
    "editorGhostText.foreground": theme.ui.default + 70,
    "editorGroup.border": theme.ui.border,
    "editorGroup.dropBackground": `${theme.ui.primary}15`,
    "editorGroupHeader.border": transparent,
    "editorGroupHeader.noTabsBackground": theme.ui.uibackground,
    "editorGroupHeader.tabsBackground": theme.ui.uibackgroundalt,
    "editorGroupHeader.tabsBorder": theme.ui.border,
    "editorGutter.addedBackground": `${theme.levels.success}cc`,
    "editorGutter.background": theme.ui.uibackground,
    "editorGutter.commentRangeForeground": theme.ui.primaryalt,
    "editorGutter.deletedBackground": `${theme.levels.danger}cc`,
    "editorGutter.modifiedBackground": `${theme.levels.info}cc`,
    "editorHoverWidget.background": theme.ui.primaryalt,
    "editorHoverWidget.border": theme.ui.border,
    "editorIndentGuide.activeBackground1": hc
      ? c(theme.ui.defaultalt).alpha(0.9).toHex()
      : c(theme.ui.defaultalt).alpha(0.8).toHex(),
    "editorIndentGuide.background1": hc
      ? c(theme.ui.defaultalt).alpha(0.4).toHex()
      : c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "editorInfo.border": transparent,
    "editorInlayHint.background": theme.ui.defaultMain + 20,
    "editorInlayHint.foreground": theme.ui.defaultMain + "90",
    "editorInlayHint.typeBackground": theme.colors.purple + 30,
    "editorInlayHint.typeForeground": theme.colors.purple + "aa",
    "editorLineNumber.activeForeground": light
      ? c(theme.ui.uibackground).darken(0.7).toHex()
      : c(theme.ui.uibackgroundmid).lighten(0.5).desaturate(0.05).toHex(),
    "editorLineNumber.foreground": c(theme.ui.default)
      .mix(theme.ui.uibackground, 0.75)
      .saturate(0.05)
      .toHex(),
    "editorLink.activeForeground": theme.ui.default,
    "editorMarkerNavigation.background": theme.ui.uibackgroundalt,
    "editorMarkerNavigationError.background": `${theme.levels.danger}90`,
    "editorMarkerNavigationInfo.background": `${theme.levels.info}90`,
    "editorMarkerNavigationWarning.background": `${theme.levels.warning}90`,
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
    "editorWhitespace.foreground": `${theme.ui.defaultalt}60`,
    "editorWidget.background": theme.ui.primaryalt,
    "editorWidget.border": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "editorWidget.resizeBorder": `${theme.ui.primary}50`,
  };

  const errorLensColors: Partial<VSCodeThemeColors> = {
    "errorLens.errorForeground": theme.levels.danger + 99,
    "errorLens.hintForeground": theme.levels.info + 99,
    "errorLens.infoForeground": theme.levels.info + 99,
    "errorLens.warningForeground": theme.levels.warning + 99,
  };

  const extensionButtonColors: Partial<VSCodeThemeColors> = {
    "extensionButton.background": c(theme.ui.primary).alpha(0.5).toHex(),
    "extensionButton.foreground": light
      ? c(theme.ui.primary).darken(0.5).toHex()
      : c(theme.ui.primary).lighten(0.22).toHex(),
    "extensionButton.hoverBackground": c(theme.ui.primary).alpha(0.6).toHex(),
    "extensionButton.prominentBackground": `${theme.ui.primary}9d`,
    "extensionButton.prominentForeground": theme.ui.default,
    "extensionButton.prominentHoverBackground": theme.ui.primary,
  };

  const gitDecorationColors: Partial<VSCodeThemeColors> = {
    "gitDecoration.conflictingResourceForeground": theme.ui.primary,
    "gitDecoration.deletedResourceForeground": theme.levels.danger,
    "gitDecoration.ignoredResourceForeground": theme.ui.defaultalt,
    "gitDecoration.modifiedResourceForeground": theme.levels.info,
    "gitDecoration.untrackedResourceForeground": theme.levels.success,
  };

  const inlineChatColors: Partial<VSCodeThemeColors> = {
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

  const inputColors: Partial<VSCodeThemeColors> = {
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

  const keybindingLabelColors: Partial<VSCodeThemeColors> = {
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

  const listColors: Partial<VSCodeThemeColors> = {
    "list.activeSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.45).toHex(),
    "list.activeSelectionForeground": theme.ui.default,
    "list.dropBackground": `${theme.ui.primary}15`,
    "list.errorForeground": theme.levels.danger,
    "list.focusBackground": `${theme.ui.primary}40`,
    "list.focusForeground": theme.ui.defaultMain,
    "list.highlightForeground": theme.colors.yellow,
    "list.hoverBackground": light
      ? c(theme.ui.defaultalt).alpha(0.05).toHex()
      : c(theme.ui.primaryalt).lighten(0.05).alpha(0.2).toHex(),
    "list.hoverForeground": light
      ? c(theme.ui.defaultalt).darken(0.8).toHex()
      : c(theme.ui.primaryalt).lighten(0.7).desaturate(0.1).toHex(),
    "list.inactiveSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.12).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.25).toHex(),
    "list.inactiveSelectionForeground": theme.ui.default,
    "list.warningForeground": theme.levels.warning,
  };

  const menuColors: Partial<VSCodeThemeColors> = {
    "menu.background": theme.ui.primaryalt,
    "menu.border": theme.ui.border,
    "menu.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.5).desaturate(0.1).toHex(),
    "menu.selectionForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "menu.separatorBackground": theme.ui.border + 65,
    "menubar.selectionBackground": theme.ui.primaryalt,
    "menubar.selectionForeground": theme.ui.defaultMain,
  };

  const mergeColors: Partial<VSCodeThemeColors> = {
    "merge.border": theme.ui.border,
    "merge.commonContentBackground": `${theme.colors.yellow}30`,
    "merge.commonHeaderBackground": `${theme.colors.yellow}80`,
    "merge.currentContentBackground": `${theme.levels.success}30`,
    "merge.currentHeaderBackground": `${theme.levels.success}80`,
    "merge.incomingContentBackground": `${theme.levels.info}30`,
    "merge.incomingHeaderBackground": `${theme.levels.info}80`,
  };

  const minimapColors: Partial<VSCodeThemeColors> = {
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

  const notificationColors: Partial<VSCodeThemeColors> = {
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

  const panelColors: Partial<VSCodeThemeColors> = {
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

  const peekViewColors: Partial<VSCodeThemeColors> = {
    "peekView.border": theme.ui.border,
    "peekViewEditor.background": c(theme.ui.uibackground).lighten(0.04).toHex(),
    "peekViewEditor.matchHighlightBackground": `${theme.ui.primaryalt}40`,
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

  const pickerGroupColors: Partial<VSCodeThemeColors> = {
    "pickerGroup.border": theme.ui.border,
    "pickerGroup.foreground": theme.ui.default,
  };

  const profileBadgeColors: Partial<VSCodeThemeColors> = {
    "profileBadge.background": theme.ui.primary,
    "profileBadge.foreground": theme.ui.uibackground,
  };

  const progressBarColors: Partial<VSCodeThemeColors> = {
    "progressBar.background": theme.colors.yellow,
  };

  const quickInputColors: Partial<VSCodeThemeColors> = {
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
    "quickInputList.focusIconForeground": theme.ui.defaultalt,
    "quickInputTitle.background": theme.ui.uibackgroundalt,
  };

  const sashColors: Partial<VSCodeThemeColors> = {
    "sash.hoverBorder": `${theme.ui.primary}50`,
  };

  const scrollbarColors: Partial<VSCodeThemeColors> = {
    "scrollbar.shadow": shadow,
    "scrollbarSlider.activeBackground": c(theme.ui.default).alpha(0.3).toHex(),
    "scrollbarSlider.background": c(theme.ui.default).alpha(0.15).toHex(),
    "scrollbarSlider.hoverBackground": c(theme.ui.default).alpha(0.2).toHex(),
  };

  const settingsColors: Partial<VSCodeThemeColors> = {
    "settings.headerForeground": theme.ui.primary,
    "settings.modifiedItemIndicator": theme.ui.primary,
  };

  const sideBarColors: Partial<VSCodeThemeColors> = {
    "sideBar.background": theme.ui.uibackgroundalt,
    "sideBar.border": theme.ui.border,
    "sideBar.foreground": `${theme.ui.defaultMain}CC`,
    "sideBarSectionHeader.background": theme.ui.uibackgroundalt,
    "sideBarSectionHeader.border": theme.ui.border,
    "sideBarSectionHeader.foreground": theme.ui.default,
    "sideBarStickyScroll.background": c(theme.ui.uibackgroundalt)
      .darken(0.02)
      .toHex(),
    "sideBarStickyScroll.shadow": shadow,
    "sideBarTitle.foreground": theme.ui.defaultalt,
  };

  const statusBarColors: Partial<VSCodeThemeColors> = {
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

  const statusBarItemColors: Partial<VSCodeThemeColors> = {
    "statusBarItem.activeBackground": theme.ui.primaryalt,
    "statusBarItem.compactHoverBackground": c(theme.ui.primary)
      .alpha(0.8)
      .toHex(),
    "statusBarItem.errorBackground": c(theme.levels.danger).toHex(),
    "statusBarItem.errorForeground": c(theme.levels.danger).darken(0.5).toHex(),
    "statusBarItem.errorHoverBackground": c(theme.levels.danger)
      .lighten(0.05)
      .toHex(),
    "statusBarItem.errorHoverForeground": c(theme.ui.uibackground).toHex(),
    "statusBarItem.hoverBackground": c(theme.ui.primary)
      .mix(theme.ui.uibackground, 0.6)
      .toHex(),
    "statusBarItem.hoverForeground": c(theme.ui.default).toHex(),
    "statusBarItem.offlineBackground": c(theme.colors.pink).toHex(),
    "statusBarItem.offlineForeground": c(theme.colors.pink).darken(0.5).toHex(),
    "statusBarItem.offlineHoverBackground": c(theme.colors.pink)
      .lighten(0.05)
      .toHex(),
    "statusBarItem.prominentBackground": light
      ? c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),
    "statusBarItem.prominentForeground": c(theme.ui.default).toHex(),
    "statusBarItem.prominentHoverBackground": light
      ? c(theme.ui.uibackground).darken(0.2).toHex()
      : c(theme.ui.uibackground).lighten(0.2).toHex(),
    "statusBarItem.remoteBackground": c(theme.colors.turquoize).toHex(),
    "statusBarItem.remoteForeground": c(theme.colors.turquoize)
      .darken(0.5)
      .toHex(),
    "statusBarItem.remoteHoverBackground": c(theme.colors.turquoize)
      .lighten(0.05)
      .toHex(),
    "statusBarItem.remoteHoverForeground": c(theme.ui.uibackground).toHex(),
    "statusBarItem.warningBackground": c(theme.levels.warning).toHex(),
    "statusBarItem.warningForeground": c(theme.levels.warning)
      .darken(0.5)
      .toHex(),
    "statusBarItem.warningHoverBackground": c(theme.levels.warning)
      .lighten(0.05)
      .toHex(),
    "statusBarItem.warningHoverForeground": c(theme.ui.uibackground).toHex(),
  };

  const tabColors: Partial<VSCodeThemeColors> = {
    "tab.activeBackground": hc
      ? c(theme.ui.primary).mix(theme.ui.uibackground, 0.9).toHex()
      : theme.ui.uibackground,
    "tab.activeBorder": theme.ui.uibackground,
    "tab.activeBorderTop": theme.ui.primary,
    "tab.activeForeground": theme.ui.primary,
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

  const terminalColors: Partial<VSCodeThemeColors> = {
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

  const textColors: Partial<VSCodeThemeColors> = {
    "textBlockQuote.background": `${theme.levels.info}34`,
    "textBlockQuote.border": `${theme.levels.info}b9`,
    "textCodeBlock.background": `${theme.levels.info}34`,
    "textLink.activeForeground": theme.levels.info,
    "textLink.foreground": theme.levels.info,
    "textPreformat.background": light
      ? c(theme.colors.yellow).mix(theme.ui.uibackground, 0.5).toHex()
      : c(theme.colors.yellow).mix(theme.ui.uibackground, 0.8).toHex(),
    "textPreformat.foreground": light
      ? c(theme.colors.yellow).darken(0.3).toHex()
      : theme.colors.yellow,
    "textSeparator.foreground": theme.ui.primary,
  };

  const titleBarColors: Partial<VSCodeThemeColors> = {
    "titleBar.activeBackground": c(theme.ui.border).lighten(0.02).toHex(),
    "titleBar.activeForeground": theme.ui.defaultalt,
    "titleBar.border": theme.ui.border,
    "titleBar.inactiveBackground": c(theme.ui.border).lighten(0.02).toHex(),
    "titleBar.inactiveForeground": theme.ui.defaultalt,
  };

  const toolbarColors: Partial<VSCodeThemeColors> = {
    "toolbar.hoverBackground": hc
      ? theme.ui.defaultMain + 40
      : theme.ui.defaultalt + 60,
  };

  const treeColors: Partial<VSCodeThemeColors> = {
    "tree.indentGuidesStroke": theme.ui.defaultalt + 70,
  };

  const walkThroughColors: Partial<VSCodeThemeColors> = {
    "walkThrough.embeddedEditorBackground": theme.ui.uibackground,
  };

  const welcomePageColors: Partial<VSCodeThemeColors> = {
    "welcomePage.progress.background": theme.ui.primaryalt,
    "welcomePage.progress.foreground": theme.ui.primary,
    "welcomePage.tileBackground": theme.ui.defaultMain + 10,
    "welcomePage.tileBorder": theme.ui.defaultMain + 20,
    "welcomePage.tileHoverBackground": theme.ui.defaultMain + 20,
  };

  const widgetColors: Partial<VSCodeThemeColors> = {
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
    ...inlineChatColors,
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
