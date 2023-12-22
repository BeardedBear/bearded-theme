import { colord as c } from "colord";
import { Theme, UIKey } from "./typing";

const transparent = "#00000000";

export default function ui(
  theme: Theme,
  hc?: boolean,
  light?: boolean,
  untindedSelection?: boolean,
  desaturateInputs?: boolean,
): Partial<UIKey> {
  function createSelectionColor(delta: number): string {
    return untindedSelection
      ? c(theme.ui.uibackground)
          .lighten(0.3 * delta)
          .alpha(0.4)
          .toHex()
      : c(theme.ui.primary)
          .alpha(0.25 * delta)
          .toHex();
  }

  function inputBackground(): string {
    return light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.3).darken(0.02).toHex()
        : c(theme.ui.uibackground).darken(0.02).toHex()
      : c(theme.ui.uibackground).lighten(0.02).toHex();
  }

  function inputBorder(): string {
    return light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.5).darken(0.1).toHex()
        : c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex();
  }
  return {
    contrastBorder: transparent,

    // activityBar
    "activityBar.background": theme.ui.uibackgroundalt,
    "activityBar.border": theme.ui.uiborder,
    "activityBar.foreground": theme.ui.primary,
    "activityBar.inactiveForeground": hc
      ? theme.ui.defaultalt
      : c(theme.ui.defaultalt).alpha(0.7).toHex(),
    "activityBar.activeBorder": theme.ui.primary,
    "activityBar.activeBackground": hc
      ? c(theme.ui.primary).alpha(0.2).toHex()
      : c(theme.ui.primary).alpha(0.15).toHex(),
    "activityBarBadge.background": theme.ui.primary,
    "activityBarBadge.foreground": theme.ui.uibackgroundalt,
    "activityBar.dropBorder": c(theme.ui.defaultalt).alpha(0.2).toHex(),

    // welcome
    "welcomePage.tileBackground": theme.ui.defaultMain + 10,
    "welcomePage.tileBorder": theme.ui.defaultMain + 20,
    "welcomePage.tileHoverBackground": theme.ui.defaultMain + 20,
    "welcomePage.progress.background": theme.ui.primaryalt,
    "welcomePage.progress.foreground": theme.ui.primary,

    // badge
    "badge.background": theme.ui.primary,
    "badge.foreground": theme.ui.uibackground,

    // breadcrumb
    "breadcrumb.background": theme.ui.uibackground,
    "breadcrumbPicker.background": theme.ui.uibackground,

    // button
    "button.background": `${theme.ui.primary}75`,
    "button.foreground": theme.ui.default,
    "button.border": `${theme.ui.primary}75`,
    "button.hoverBackground": `${theme.ui.primary}90`,
    "extensionButton.foreground": theme.ui.default,
    "extensionButton.background": theme.ui.primary + 60,
    "extensionButton.hoverBackground": theme.ui.primary + 90,
    "extensionButton.prominentBackground": `${theme.ui.primary}9d`,
    "extensionButton.prominentForeground": theme.ui.default,
    "extensionButton.prominentHoverBackground": theme.ui.primary,
    "button.secondaryBackground": `${theme.ui.primary}20`,
    "button.secondaryForeground": theme.ui.default,
    "button.secondaryHoverBackground": `${theme.ui.primary}35`,

    // charts
    "charts.foreground": theme.ui.default,
    "charts.lines": theme.ui.default,
    "charts.red": theme.colors.red,
    "charts.blue": theme.colors.blue,
    "charts.yellow": theme.colors.yellow,
    "charts.orange": theme.colors.orange,
    "charts.green": theme.colors.green,
    "charts.purple": theme.colors.pink,

    // common
    contrastActiveBorder: transparent,
    errorForeground: theme.levels.danger,
    "errorLens.hintForeground": theme.levels.info + 99,
    "errorLens.infoForeground": theme.levels.info + 99,
    "errorLens.errorForeground": theme.levels.danger + 99,
    "errorLens.warningForeground": theme.levels.warning + 99,
    // focusBorder: `${theme.ui.primary}40`,
    focusBorder: light
      ? c(theme.ui.uibackground).darken(0.2).toHex()
      : c(theme.ui.uibackground).lighten(0.2).toHex(),
    foreground: `${theme.ui.defaultMain}AA`,
    "icon.foreground": `${theme.ui.defaultMain}AA`,
    "selection.background": `${theme.ui.primary}60`,
    "widget.shadow": `${theme.ui.uiborder}30`,
    "profileBadge.background": theme.ui.primary,
    "profileBadge.foreground": theme.ui.uibackground,

    // Command center
    "commandCenter.border": theme.ui.uiborder,
    "commandCenter.background": theme.ui.uibackground,
    "commandCenter.activeBackground": `${theme.ui.primaryalt}60`,
    "commandCenter.activeForeground": `${theme.ui.defaultMain}90`,
    "commandCenter.foreground": theme.ui.defaultalt,

    // Checkbox
    "checkbox.foreground": theme.ui.default,

    // debug
    "debugExceptionWidget.background": theme.ui.primaryalt,
    "debugExceptionWidget.border": theme.ui.uiborder,
    "debugToolBar.background": theme.ui.primaryalt,
    "toolbar.hoverBackground": hc
      ? theme.ui.defaultMain + 40
      : theme.ui.defaultalt + 60,

    // description
    descriptionForeground: c(theme.ui.default).alpha(0.3).toHex(),
    disabledForeground: c(theme.ui.default).alpha(0.3).toHex(),

    // diff
    "diffEditor.border": theme.ui.uiborder,
    "diffEditor.insertedTextBackground": hc
      ? transparent
      : `${theme.levels.success}20`,
    "diffEditor.removedTextBackground": hc
      ? transparent
      : `${theme.levels.danger}25`,
    "diffEditor.diagonalFill": `${theme.ui.uiborder}80`,
    "diffEditor.insertedTextBorder": transparent,
    "diffEditor.removedTextBorder": transparent,
    "diffEditorGutter.insertedLineBackground": transparent,
    "diffEditorGutter.removedLineBackground": transparent,
    "diffEditor.insertedLineBackground": `${theme.levels.success}20`,
    "diffEditor.removedLineBackground": `${theme.levels.danger}25`,
    "diffEditorOverview.insertedForeground": `${theme.levels.success}25`,
    "diffEditorOverview.removedForeground": `${theme.levels.danger}30`,

    // Inlay hints
    "editorInlayHint.background": theme.ui.defaultMain + 20,
    "editorInlayHint.foreground": theme.ui.defaultMain + "90",
    "editorInlayHint.typeBackground": theme.colors.purple + 30,
    "editorInlayHint.typeForeground": theme.colors.purple + "aa",

    // editor
    "editorGhostText.border": transparent,
    "editorGhostText.foreground": theme.ui.default + 70,
    "editorCursor.background": theme.ui.primary,
    "editorBracketHighlight.foreground1": theme.colors.yellow,
    "editorBracketHighlight.foreground2": theme.colors.pink,
    "editorBracketHighlight.foreground3": theme.colors.blue,
    "editorBracketHighlight.foreground4": theme.colors.purple,
    "editorBracketHighlight.foreground5": theme.colors.turquoize,
    "editorBracketHighlight.foreground6": theme.colors.salmon,
    "editorBracketHighlight.unexpectedBracket.foreground": theme.levels.danger,
    "editor.foldBackground": theme.ui.uibackgroundalt,
    "editor.background": theme.ui.uibackground,
    "editor.foreground": theme.ui.default,
    // selection
    "editor.findMatchBackground": `${theme.ui.primary}30`,
    "editor.findMatchBorder": `${theme.ui.primary}60`,
    "editor.findMatchHighlightBackground": createSelectionColor(0.8),
    "editor.findMatchHighlightBorder": createSelectionColor(1.2),
    "editor.hoverHighlightBackground": createSelectionColor(1),
    "editor.lineHighlightBackground": createSelectionColor(0.2),
    "editor.lineHighlightBorder": createSelectionColor(0.5),
    "editor.rangeHighlightBackground": createSelectionColor(0.8),
    "editor.selectionBackground": createSelectionColor(1),
    "editor.selectionForeground": theme.ui.default,
    "editor.inactiveSelectionBackground": createSelectionColor(1),
    "editor.selectionHighlightBorder": createSelectionColor(1),
    "editor.selectionHighlightBackground": `${theme.ui.primary}15`,
    "editor.wordHighlightStrongBackground": createSelectionColor(1),
    "editor.wordHighlightBorder": createSelectionColor(1.2),
    "editor.wordHighlightBackground": createSelectionColor(0.5),
    "editorBracketMatch.background": createSelectionColor(1),
    "editorBracketMatch.border": createSelectionColor(1.5),
    // end selection
    "editorCodeLens.foreground": theme.ui.defaultMain + 80,
    "editorCursor.foreground": theme.colors.yellow,
    "editorGroup.border": theme.ui.uiborder,
    "editorGroup.dropBackground": `${theme.ui.primary}15`,
    "editorHoverWidget.background": theme.ui.primaryalt,
    "editorHoverWidget.border": theme.ui.uiborder,
    "editorIndentGuide.activeBackground1": c(theme.colors.yellow).toHex(),
    "editorIndentGuide.activeBackground2": c(theme.colors.pink).toHex(),
    "editorIndentGuide.activeBackground3": c(theme.colors.blue).toHex(),
    "editorIndentGuide.activeBackground4": c(theme.colors.purple).toHex(),
    "editorIndentGuide.activeBackground5": c(theme.colors.turquoize).toHex(),
    "editorIndentGuide.activeBackground6": c(theme.colors.salmon).toHex(),
    "editorIndentGuide.background1": c(theme.colors.yellow).alpha(0.3).toHex(),
    "editorIndentGuide.background2": c(theme.colors.pink).alpha(0.3).toHex(),
    "editorIndentGuide.background3": c(theme.colors.blue).alpha(0.3).toHex(),
    "editorIndentGuide.background4": c(theme.colors.purple).alpha(0.3).toHex(),
    "editorIndentGuide.background5": c(theme.colors.turquoize)
      .alpha(0.3)
      .toHex(),
    "editorIndentGuide.background6": c(theme.colors.salmon).alpha(0.3).toHex(),

    // "editorIndentGuide.background": hc
    //   ? `${theme.ui.defaultalt}70`
    //   : `${theme.ui.defaultalt}30`,
    // "editorIndentGuide.activeBackground": hc
    //   ? theme.ui.defaultalt
    //   : `${theme.ui.defaultalt}bb`,
    "editorLink.activeForeground": theme.ui.default,
    "editorWarning.border": transparent,
    "editorInfo.border": transparent,
    "editorGutter.commentRangeForeground": theme.ui.primaryalt,
    "sash.hoverBorder": `${theme.ui.primary}50`,
    "editorRuler.foreground": c(theme.ui.defaultalt).alpha(0.2).toHex(),
    "editor.linkedEditingBackground": c(theme.colors.blue)
      .alpha(0.2)
      .saturate(0.2)
      .toHex(),

    // find
    "editorWarning.foreground": theme.colors.yellow,
    "editorWhitespace.foreground": `${theme.ui.defaultalt}60`,
    "editorWidget.background": theme.ui.primaryalt,
    "editorWidget.resizeBorder": `${theme.ui.primary}50`,

    // gutter
    "editorGutter.background": theme.ui.uibackground,
    "editorGutter.addedBackground": `${theme.levels.success}cc`,
    "editorGutter.deletedBackground": `${theme.levels.danger}cc`,
    "editorGutter.modifiedBackground": `${theme.levels.info}cc`,
    "editorLineNumber.foreground": `${
      hc
        ? theme.ui.defaultalt
        : light
        ? c(theme.ui.uibackgroundmid).darken(0.2).toHex()
        : c(theme.ui.uibackgroundmid).lighten(0.2).toHex()
    }`,
    "editorLineNumber.activeForeground": theme.ui.defaultalt,
    "editorStickyScrollHover.background": c(theme.ui.uibackground)
      .lighten(0.06)
      .toHex(),

    // dropdown
    "dropdown.foreground": theme.ui.default,
    "dropdown.background": inputBackground(),
    "dropdown.listBackground": inputBackground(),
    "dropdown.border": inputBorder(),

    // input

    "input.foreground": theme.ui.default,
    "input.background": inputBackground(),
    "input.border": inputBorder(),
    "input.placeholderForeground": light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.7).darken(0.3).toHex()
        : c(theme.ui.uibackground).darken(0.3).toHex()
      : c(theme.ui.uibackground).lighten(0.25).toHex(),
    // "inputOption.activeBorder": theme.ui.primary,
    // "inputOption.hoverBackground": theme.colors.blue,
    // "inputOption.activeBackground": theme.colors.orange,
    "inputValidation.errorBackground": theme.ui.primaryalt,
    "inputValidation.errorBorder": theme.colors.yellow,
    "inputValidation.infoBackground": theme.ui.primaryalt,
    "inputValidation.infoBorder": theme.ui.primary,
    "inputValidation.warningBackground": theme.ui.primaryalt,
    "inputValidation.warningBorder": theme.colors.yellow,
    // "inputOption.activeBackground": `${theme.ui.primary}30`,
    // "inputOption.activeForeground": theme.ui.default,
    // "inputValidation.errorForeground": theme.ui.default,
    // "inputValidation.infoForeground": theme.ui.default,
    // "inputValidation.warningForeground": theme.ui.default,

    // list
    "list.dropBackground": `${theme.ui.primary}15`,
    "list.focusBackground": `${theme.ui.primary}40`,
    "list.focusForeground": theme.ui.defaultMain,
    "list.errorForeground": theme.levels.danger,
    "list.warningForeground": theme.levels.warning,
    "list.highlightForeground": theme.colors.yellow,
    "list.activeSelectionForeground": theme.ui.default,
    "list.activeSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.45).toHex(),
    "list.inactiveSelectionBackground": light
      ? c(theme.ui.defaultalt).alpha(0.12).toHex()
      : c(theme.ui.primaryalt).lighten(0.1).alpha(0.25).toHex(),
    "list.inactiveSelectionForeground": theme.ui.default,
    "list.hoverBackground": light
      ? c(theme.ui.defaultalt).alpha(0.05).toHex()
      : c(theme.ui.primaryalt).lighten(0.05).alpha(0.2).toHex(),
    "list.hoverForeground": light
      ? c(theme.ui.defaultalt).darken(0.8).toHex()
      : c(theme.ui.primaryalt).lighten(0.7).desaturate(0.1).toHex(),
    "quickInput.background": c(theme.ui.uibackground).lighten(0.03).toHex(),
    "quickInputList.focusIconForeground": theme.ui.defaultalt,
    "quickInputTitle.background": theme.ui.uibackgroundalt,
    "quickInputList.focusForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "quickInput.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.default).alpha(0.7).toHex(),
    // : c(theme.ui.primaryalt).lighten(0.5).desaturate(0.1).toHex(),
    "quickInputList.focusBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.2).alpha(0.45).toHex(),
    "gitDecoration.modifiedResourceForeground": theme.levels.info,
    "gitDecoration.deletedResourceForeground": theme.levels.danger,
    "gitDecoration.untrackedResourceForeground": theme.levels.success,
    "gitDecoration.ignoredResourceForeground": theme.ui.defaultalt,
    "gitDecoration.conflictingResourceForeground": theme.ui.primary,

    // menu
    "menu.border": theme.ui.uiborder,
    "menu.background": theme.ui.primaryalt,
    "menu.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.5).desaturate(0.1).toHex(),
    "menu.separatorBackground": theme.ui.uiborder + 65,
    "menu.selectionForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "menubar.selectionBackground": theme.ui.primaryalt,
    "menubar.selectionForeground": theme.ui.defaultMain,

    // merge
    "merge.border": theme.ui.uiborder,
    "merge.commonContentBackground": `${theme.colors.yellow}30`,
    "merge.commonHeaderBackground": `${theme.colors.yellow}80`,
    "merge.currentContentBackground": `${theme.levels.success}30`,
    "merge.currentHeaderBackground": `${theme.levels.success}80`,
    "merge.incomingContentBackground": `${theme.levels.info}30`,
    "merge.incomingHeaderBackground": `${theme.levels.info}80`,
    "editorOverviewRuler.border": theme.ui.uiborder,
    "editorOverviewRuler.commonContentForeground": theme.colors.yellow,
    "editorOverviewRuler.currentContentForeground": theme.levels.danger,
    "editorOverviewRuler.incomingContentForeground": theme.levels.success,

    // minimap
    "minimap.background": theme.ui.uibackground,
    "minimap.errorHighlight": theme.levels.danger,
    "minimap.findMatchHighlight": theme.ui.primary,
    "minimap.selectionHighlight": theme.ui.primary,
    "minimap.selectionOccurrenceHighlight": theme.ui.primary,
    "minimap.warningHighlight": theme.levels.warning,
    "minimapGutter.addedBackground": theme.levels.success,
    "minimapGutter.deletedBackground": theme.levels.danger,
    "minimapGutter.modifiedBackground": theme.levels.info,

    // notification
    "notificationCenterHeader.foreground": theme.ui.default,
    "notificationCenterHeader.background": theme.ui.primaryalt,
    "notifications.foreground": theme.ui.defaultMain,
    "notifications.background": theme.ui.primaryalt,
    "notifications.border": theme.ui.uiborder,
    "notificationLink.foreground": theme.colors.yellow,
    "notificationsErrorIcon.foreground": theme.colors.red,
    "notificationsWarningIcon.foreground": theme.colors.orange,
    "notificationsInfoIcon.foreground": theme.colors.blue,

    // panel
    "panel.background": theme.ui.uibackgroundmid,
    "panel.border": theme.ui.uiborder,
    "panel.dropBorder": c(theme.ui.defaultalt).alpha(0.5).toHex(),
    "panelSection.border": theme.ui.uiborder,
    "panelTitle.activeBorder": theme.ui.primary,
    "panelTitle.activeForeground": theme.ui.primary,
    "panelTitle.inactiveForeground": theme.ui.defaultalt,
    "panelSectionHeader.background": light
      ? c(theme.ui.uibackgroundmid).darken(0.05).toHex()
      : c(theme.ui.uibackgroundmid).lighten(0.05).toHex(),
    "panelSectionHeader.foreground": theme.ui.default,
    "panelSectionHeader.border": theme.ui.uiborder,
    "panelInput.border": light
      ? desaturateInputs
        ? c(theme.ui.uibackground).desaturate(0.5).darken(0.1).toHex()
        : c(theme.ui.uibackground).darken(0.1).toHex()
      : c(theme.ui.uibackground).lighten(0.1).toHex(),

    // Peekview
    "peekViewEditor.background": c(theme.ui.uibackground).lighten(0.04).toHex(),
    "peekViewEditorGutter.background": c(theme.ui.uibackground)
      .lighten(0.04)
      .toHex(),
    "peekViewEditor.matchHighlightBackground": `${theme.ui.primaryalt}40`,
    "peekViewResult.background": c(theme.ui.uibackground)
      .lighten(0.025)
      .toHex(),
    "peekViewResult.fileForeground": theme.ui.default,
    "peekViewResult.lineForeground": theme.ui.defaultMain,
    "peekViewResult.matchHighlightBackground": c(theme.ui.primary)
      .alpha(0.5)
      .toHex(),
    "peekViewEditor.matchHighlightBorder": transparent,
    "peekViewResult.selectionBackground": c(theme.ui.primary)
      .alpha(0.2)
      .toHex(),
    "peekViewResult.selectionForeground": theme.ui.default,
    "peekViewTitle.background": c(theme.ui.uibackground).lighten(0.05).toHex(),
    "peekView.border": theme.ui.uiborder,
    "peekViewTitleDescription.foreground": theme.ui.default,
    "peekViewTitleLabel.foreground": theme.ui.default,
    "peekViewEditorStickyScroll.background": c(theme.ui.uibackground)
      .lighten(0.04)
      .toHex(),
    "editorMarkerNavigation.background": theme.ui.uibackgroundalt,
    "editorMarkerNavigationError.background": `${theme.levels.danger}90`,
    "editorMarkerNavigationWarning.background": `${theme.levels.warning}90`,
    "editorMarkerNavigationInfo.background": `${theme.levels.info}90`,
    "editorError.border": transparent,
    "editorError.foreground": theme.levels.danger,

    // picker
    "pickerGroup.border": theme.ui.uiborder,
    "pickerGroup.foreground": theme.ui.default,

    // progressbar
    "progressBar.background": theme.colors.yellow,

    // scrollbar
    "scrollbar.shadow": `#00000000`,
    "scrollbarSlider.activeBackground": `${theme.ui.primary}40`,
    "scrollbarSlider.background": `${theme.ui.primary}20`,
    "scrollbarSlider.hoverBackground": `${theme.ui.primary}30`,

    // settings
    "settings.modifiedItemIndicator": theme.ui.primary,
    "settings.headerForeground": theme.ui.primary,
    "keybindingLabel.background": theme.ui.primaryalt,
    "keybindingLabel.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.4).desaturate(0.1).toHex(),
    "keybindingLabel.border": light
      ? theme.ui.defaultalt
      : c(theme.ui.primaryalt).lighten(0.2).desaturate(0.1).toHex(),
    "keybindingLabel.bottomBorder": light
      ? theme.ui.defaultalt
      : c(theme.ui.primaryalt).lighten(0.2).desaturate(0.1).toHex(),

    // sidebar
    "sideBar.background": theme.ui.uibackgroundalt,
    "sideBar.border": theme.ui.uiborder,
    "sideBar.foreground": `${theme.ui.defaultMain}CC`,
    "sideBarSectionHeader.background": theme.ui.uibackgroundalt,
    "sideBarSectionHeader.foreground": theme.ui.default,
    "sideBarSectionHeader.border": theme.ui.uiborder,
    "sideBarTitle.foreground": theme.ui.defaultalt,
    "tree.indentGuidesStroke": theme.ui.defaultalt + 70,

    // statusBar
    "statusBar.background": theme.ui.uibackgroundalt,
    "statusBar.border": theme.ui.uiborder,
    "statusBar.debuggingBackground": `${theme.ui.primary}44`,
    "statusBar.debuggingForeground": theme.ui.default,
    "statusBar.foreground": `${theme.ui.defaultMain}BB`,
    "statusBar.noFolderBackground": theme.ui.uibackgroundalt,
    "statusBar.noFolderBorder": theme.ui.uiborder,
    "statusBar.noFolderForeground": `${theme.ui.defaultMain}BB`,
    "statusBarItem.activeBackground": theme.ui.primaryalt,
    "statusBarItem.hoverBackground": `${theme.ui.defaultalt}30`,
    "statusBarItem.prominentBackground": theme.ui.uiborder,
    "statusBarItem.prominentHoverBackground": theme.ui.primaryalt,
    "statusBarItem.errorBackground": theme.levels.danger,
    "statusBarItem.warningBackground": theme.levels.warning,

    // suggest
    "editorSuggestWidget.background": theme.ui.uibackground,
    "editorSuggestWidget.border": theme.ui.uiborder,
    "editorSuggestWidget.foreground": theme.ui.defaultMain,
    "editorSuggestWidget.highlightForeground": theme.colors.yellow,
    "editorSuggestWidget.selectedBackground": `${theme.ui.primary}4d`,

    // tabs
    "editorGroupHeader.noTabsBackground": theme.ui.uibackground,
    "editorGroupHeader.tabsBackground": theme.ui.uibackgroundalt,
    "editorGroupHeader.tabsBorder": theme.ui.uiborder,
    "editorGroupHeader.border": "#bb272700",
    "tab.activeBackground": hc ? theme.ui.primary + 20 : theme.ui.uibackground,
    "tab.activeForeground": theme.ui.primary,
    "tab.activeBorderTop": theme.ui.primary,
    "tab.activeBorder": theme.ui.uibackground,
    "tab.border": theme.ui.uiborder,
    "tab.hoverBackground": theme.ui.uibackground,
    "tab.inactiveBackground": theme.ui.uibackgroundalt,
    "tab.inactiveForeground": theme.ui.defaultalt,
    "tab.unfocusedHoverBackground": theme.ui.uibackground,
    "tab.unfocusedActiveForeground": theme.ui.primary,
    "tab.unfocusedInactiveForeground": theme.ui.defaultalt,
    "tab.unfocusedActiveBorder": theme.ui.uibackground,

    "tab.lastPinnedBorder": theme.ui.uiborder,

    // terminal
    "terminal.ansiBlack": theme.ui.uibackground,
    "terminal.ansiRed": theme.levels.danger,
    "terminal.ansiGreen": theme.levels.success,
    "terminal.ansiYellow": theme.colors.yellow,
    "terminal.ansiBlue": theme.levels.info,
    "terminal.ansiMagenta": theme.colors.pink,
    "terminal.ansiCyan": theme.colors.turquoize,
    "terminal.ansiWhite": theme.ui.default,
    "terminal.ansiBrightBlack": theme.levels.info,
    "terminal.ansiBrightRed": theme.levels.danger,
    "terminal.ansiBrightGreen": theme.levels.success,
    "terminal.ansiBrightYellow": theme.colors.yellow,
    "terminal.ansiBrightBlue": theme.levels.info,
    "terminal.ansiBrightMagenta": theme.colors.pink,
    "terminal.ansiBrightCyan": theme.colors.turquoize,
    "terminal.ansiBrightWhite": theme.ui.default,
    "terminal.background": theme.ui.uibackgroundmid,
    "terminal.foreground": theme.ui.default,
    "terminalCursor.background": theme.ui.uibackground,
    "terminalCursor.foreground": theme.colors.yellow,
    "terminal.selectionForeground": theme.ui.default,
    // "terminal.selectionBackground": `${theme.ui.primary}30`,

    // text
    "textBlockQuote.background": `${theme.levels.info}34`,
    "textBlockQuote.border": `${theme.levels.info}b9`,
    "textCodeBlock.background": `${theme.levels.info}34`,
    "textLink.activeForeground": theme.levels.info,
    "textLink.foreground": theme.levels.info,
    "textPreformat.foreground": theme.colors.yellow,
    "textSeparator.foreground": theme.ui.primary,
    "walkThrough.embeddedEditorBackground": theme.ui.uibackground,

    // titleBar
    "titleBar.activeBackground": theme.ui.uibackgroundalt,
    "titleBar.activeForeground": theme.ui.defaultalt,
    "titleBar.inactiveBackground": theme.ui.uiborder,
    "titleBar.inactiveForeground": theme.ui.defaultalt,
    "titleBar.border": theme.ui.uiborder,

    "editorUnnecessaryCode.border": hc
      ? c(theme.ui.defaultMain).alpha(0.6).toHex()
      : transparent,
    "editorUnnecessaryCode.opacity": "#000000aa",

    // "editorError.background": theme.levels.danger + 99,
    // "editorError.foreground": theme.levels.danger,
    // "editorWarning.foreground": theme.levels.warning,
    // "editorInfo.foreground": theme.levels.info,
    // "editorHint.foreground": theme.levels.success,
    // "editor.background": theme.ui.uibackground,
  };
}
