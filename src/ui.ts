import { colord as c } from "colord";
import { Theme, UIKey } from "./typing";

export default function ui(
  theme: Theme,
  hc?: boolean,
  light?: boolean,
): Partial<UIKey> {
  return {
    contrastBorder: "#00000000",
    // activityBar

    "activityBar.background": theme.ui.uibackgroundalt,
    "activityBar.border": theme.ui.uiborder,
    "activityBar.foreground": theme.ui.primary,
    "activityBar.inactiveForeground": `${theme.ui.defaultalt}AA`,
    "activityBarBadge.background": theme.ui.primary,
    "activityBar.activeBorder": theme.ui.primary,
    "activityBar.activeBackground": theme.ui.primary + 10,
    "activityBarBadge.foreground": theme.ui.uibackgroundalt,

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
    "button.secondaryBackground": `${theme.ui.primary}20`,
    "button.secondaryForeground": theme.ui.default,
    "button.secondaryHoverBackground": `${theme.ui.primary}35`,
    "extensionButton.prominentBackground": `${theme.ui.primary}9d`,
    "extensionButton.prominentForeground": theme.ui.default,
    "extensionButton.prominentHoverBackground": theme.ui.primary,
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
    contrastActiveBorder: "#00000000",
    errorForeground: theme.levels.danger,
    "errorLens.hintForeground": theme.levels.info + 99,
    "errorLens.infoForeground": theme.levels.info + 99,
    "errorLens.errorForeground": theme.levels.danger + 99,
    "errorLens.warningForeground": theme.levels.warning + 99,
    focusBorder: `${theme.ui.primary}40`,
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
    descriptionForeground: theme.ui.default,
    // diff
    "diffEditor.border": theme.ui.uiborder,
    "diffEditor.insertedTextBackground": hc
      ? "#00000000"
      : `${theme.levels.success}20`,
    "diffEditor.removedTextBackground": hc
      ? "#00000000"
      : `${theme.levels.danger}25`,
    "diffEditor.diagonalFill": `${theme.ui.uiborder}80`,
    "diffEditor.insertedTextBorder": "#00000000",
    "diffEditor.removedTextBorder": "#00000000",
    // "diffEditor.insertedTextBorder": hc && `${theme.levels.success}30`,
    // "diffEditor.removedTextBorder": hc && `${theme.levels.danger}40`,
    "diffEditorGutter.insertedLineBackground": "#00000000",
    "diffEditorGutter.removedLineBackground": "#00000000",
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
    "editorGhostText.border": "#00000000",
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
    "editor.findMatchBackground": `${theme.ui.primary}20`,
    "editor.findMatchBorder": `${theme.ui.primary}60`,
    "editor.findMatchHighlightBackground": `${theme.ui.primary}20`,
    "editor.findMatchHighlightBorder": `${theme.ui.primary}40`,
    "editor.foreground": theme.ui.default,
    "editor.hoverHighlightBackground": `${theme.ui.primary}40`,
    "editor.lineHighlightBackground": `${theme.ui.primary}0c`,
    "editor.lineHighlightBorder": `${theme.ui.primary}1a`,
    "editor.rangeHighlightBackground": `${theme.ui.primary}20`,
    "editor.selectionBackground": `${theme.ui.primary}27`,
    "editor.selectionForeground": theme.ui.default,
    "editor.inactiveSelectionBackground": `${theme.ui.primary}20`,
    "editor.selectionHighlightBorder": `${theme.ui.primary}80`,
    "editor.selectionHighlightBackground": `${theme.ui.primary}15`,
    "editor.wordHighlightStrongBackground": `${theme.ui.primary}40`,
    "editor.wordHighlightBackground": `${theme.ui.primary}20`,
    "editorBracketMatch.background": `${theme.ui.primary}20`,
    "editorBracketMatch.border": `${theme.ui.primary}40`,
    "editorCodeLens.foreground": theme.ui.defaultMain + 80,
    "editorCursor.foreground": theme.colors.yellow,
    "editorGroup.border": theme.ui.uiborder,
    "editorGroup.dropBackground": `${theme.ui.primary}15`,
    "editorHoverWidget.background": theme.ui.primaryalt,
    "editorHoverWidget.border": theme.ui.uiborder,
    "editorIndentGuide.background": hc
      ? `${theme.ui.defaultalt}70`
      : `${theme.ui.defaultalt}30`,
    "editorIndentGuide.activeBackground": hc
      ? theme.ui.defaultalt
      : `${theme.ui.defaultalt}bb`,
    "editorLink.activeForeground": theme.ui.default,
    "editorWarning.border": hc && "#00000000",
    "editorInfo.border": hc && "#00000000",
    "editorGutter.commentRangeForeground": theme.ui.primaryalt,
    "sash.hoverBorder": `${theme.ui.primary}50`,
    "editorRuler.foreground": c(theme.ui.defaultalt).alpha(0.2).toHex(),

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
      hc ? theme.ui.defaultalt : theme.ui.defaultalt + 90
    }`,
    "editorLineNumber.activeForeground": theme.ui.defaultalt,
    // dropdown
    "dropdown.background": theme.ui.uibackground,
    "dropdown.listBackground": theme.ui.uibackground,
    "dropdown.foreground": theme.ui.default,
    "dropdown.border": `${theme.ui.defaultalt}50`,
    // input
    "input.background": "#00000000",
    "input.foreground": theme.ui.default,
    "input.border": `${theme.ui.defaultalt}60`,
    "input.placeholderForeground": `${theme.ui.default}60`,
    "inputOption.activeBorder": theme.ui.primary,
    "inputValidation.errorBackground": theme.ui.primaryalt,
    "inputValidation.errorBorder": theme.colors.yellow,
    "inputValidation.infoBackground": theme.ui.primaryalt,
    "inputValidation.infoBorder": theme.ui.primary,
    "inputValidation.warningBackground": theme.ui.primaryalt,
    "inputValidation.warningBorder": theme.colors.yellow,

    // list
    "list.dropBackground": `${theme.ui.primary}15`,
    disabledForeground: light
      ? c(theme.ui.primaryalt).darken(0.3).desaturate(0.1).toHex()
      : c(theme.ui.primaryalt).lighten(0.3).desaturate(0.1).toHex(),
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
    "quickInputTitle.background": theme.ui.uibackgroundalt,
    "quickInputList.focusForeground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.8).desaturate(0.1).toHex(),
    "quickInput.foreground": light
      ? theme.ui.defaultMain
      : c(theme.ui.primaryalt).lighten(0.5).desaturate(0.1).toHex(),
    "quickInputList.focusBackground": light
      ? c(theme.ui.defaultalt).alpha(0.2).toHex()
      : c(theme.ui.primaryalt).lighten(0.15).alpha(0.45).toHex(),
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
    "panel.dropBorder": theme.ui.uiborder,
    "panelSection.border": theme.ui.uiborder,
    "panelTitle.activeBorder": theme.ui.primary,
    "panelTitle.activeForeground": theme.ui.primary,
    "panelTitle.inactiveForeground": theme.ui.defaultalt,
    "panelSectionHeader.background": `${theme.ui.defaultalt}20`,
    "panelSectionHeader.foreground": theme.ui.default,
    "panelSectionHeader.border": theme.ui.uiborder,
    // pickView
    "peekView.border": theme.ui.primary,
    "peekViewEditor.background": `${theme.ui.primaryalt}40`,
    "peekViewEditor.matchHighlightBackground": `${theme.ui.primaryalt}40`,
    "peekViewResult.background": `${theme.ui.primaryalt}40`,
    "peekViewResult.fileForeground": theme.ui.default,
    "peekViewResult.lineForeground": theme.ui.default,
    "peekViewResult.matchHighlightBackground": theme.ui.primaryalt,
    "peekViewResult.selectionBackground": theme.ui.primaryalt,
    "peekViewResult.selectionForeground": theme.ui.default,
    "peekViewTitle.background": theme.ui.uiborder,
    "peekViewTitleDescription.foreground": theme.ui.default,
    "peekViewTitleLabel.foreground": theme.ui.default,
    "peekViewEditorGutter.background": `${theme.ui.primaryalt}40`,
    "editorMarkerNavigation.background": theme.ui.uibackgroundalt,
    "editorMarkerNavigationError.background": `${theme.levels.danger}90`,
    "editorMarkerNavigationWarning.background": `${theme.levels.warning}90`,
    "editorMarkerNavigationInfo.background": `${theme.levels.info}90`,
    "editorError.border": "#00000000",
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
    "keybindingLabel.foreground": hc && theme.ui.primary,
    "keybindingLabel.border": hc && theme.ui.primary + 60,
    "keybindingLabel.bottomBorder": hc && theme.ui.primary + 60,
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
    "tab.hoverBackground": `${theme.ui.uibackground}cc`,
    "tab.unfocusedHoverBackground": `${theme.ui.primary}10`,
    "tab.unfocusedHoverBorder": "#00000000",
    "tab.inactiveBackground": theme.ui.uibackgroundalt,
    "tab.inactiveForeground": theme.ui.defaultalt,
    "tab.unfocusedActiveForeground": theme.ui.default,
    "tab.unfocusedInactiveForeground": theme.ui.default,
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
    "terminalCursor.background": theme.colors.yellow,
    "terminalCursor.foreground": theme.colors.yellow,
    "terminal.selectionForeground": theme.ui.default,
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
  };
}
