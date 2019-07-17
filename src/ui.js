module.exports.body = function(theme) {
  let activityBar = {
    "activityBar.background": theme.uibackgroundalt,
    "activityBar.foreground": theme.primary,
    "activityBar.border": theme.uiborder,
    "activityBarBadge.background": theme.primary,
    "activityBarBadge.foreground": "#ffffff",
    "activityBar.inactiveForeground": theme.default + "50"
  };
  let badge = {
    "badge.background": theme.primary,
    "badge.foreground": "#ffffff"
  };
  let breadcrumb = {
    "breadcrumbPicker.background": theme.uibackground
  };
  let button = {
    "button.background": theme.primary,
    "button.foreground": "#ffffff",
    "extensionButton.prominentBackground": theme.primary + "9d",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionButton.prominentHoverBackground": theme.primary
  };
  let common = {
    focusBorder: theme.primary + "aa",
    foreground: theme.default + "cc",
    "widget.shadow": theme.transparent,
    "selection.background": theme.primaryalt,
    "menu.background": theme.uibackground,
    "menu.border": theme.uiborder,
    errorForeground: theme.red,
    contrastBorder: theme.primary + "50",
    contrastActiveBorder: theme.transparent
  };
  let debug = {
    "debugExceptionWidget.background": theme.primaryalt,
    "debugExceptionWidget.border": theme.uiborder,
    "debugToolBar.background": theme.primaryalt
  };
  let description = {
    descriptionForeground: theme.default + "cc"
  };
  let diff = {
    "diffEditor.insertedTextBackground": theme.green + "30",
    "diffEditor.insertedTextBorder": theme.transparent,
    "diffEditor.removedTextBackground": theme.red + "40",
    "diffEditor.removedTextBorder": theme.transparent,
    "diffEditor.border": theme.uiborder
  };
  let dropdown = {
    "dropdown.background": theme.uibackground,
    "dropdown.border": theme.uiborder,
    "dropdown.foreground": theme.default
  };
  let editor = {
    "editor.background": theme.uibackground,
    "editor.foreground": theme.default + "cc",
    "editor.findMatchBackground": theme.primary + "50",
    "editor.findMatchBorder": theme.primary,
    "editor.findMatchHighlightBackground": theme.yellow + "50",
    "editor.findMatchHighlightBorder": theme.yellow,
    "editor.hoverHighlightBackground": theme.primary + "50",
    "editor.lineHighlightBackground": theme.primary + "0c",
    "editor.lineHighlightBorder": theme.primary + "1a",
    "editor.rangeHighlightBackground": theme.primary + "21",
    "editor.selectionBackground": theme.primary + "40",
    "editor.selectionForeground": theme.primary,
    "editor.inactiveSelectionBackground": theme.primary + "50",
    "editor.selectionHighlightBorder": theme.default + "80",
    "editor.selectionHighlightBackground": theme.default + "15",
    "editor.wordHighlightStrongBackground": theme.default + "21",
    "editor.wordHighlightBackground": theme.default + "21",
    "editorBracketMatch.background": theme.primary + "5d",
    "editorBracketMatch.border": theme.primary + "96",
    "editorCodeLens.foreground": theme.default + "cc",
    "editorCursor.foreground": theme.yellow,
    "editorGroup.border": theme.uiborder,
    "editorGroup.dropBackground": theme.primary + "15",
    "editorHoverWidget.background": theme.uibackgroundalt,
    "editorHoverWidget.border": theme.uiborder,
    "editorIndentGuide.background": theme.default + "0e",
    "editorLink.activeForeground": theme.default + "cc",
    "editorWarning.border": theme.transparent
  };
  let editorMarker = {
    "editorMarkerNavigation.background": theme.default,
    "editorMarkerNavigationError.background": theme.red,
    "editorMarkerNavigationWarning.background": theme.yellow
  };
  let find = {
    "editorWarning.foreground": theme.yellow,
    "editorWhitespace.foreground": theme.primaryalt,
    "editorWidget.background": theme.primaryalt,
    "editorWidget.resizeBorder": theme.primary + "50"
  };
  let gutter = {
    "editorGutter.background": theme.uibackground,
    "editorGutter.addedBackground": theme.green + "cc",
    "editorGutter.deletedBackground": theme.red + "cc",
    "editorGutter.modifiedBackground": theme.blue + "cc",
    "editorLineNumber.foreground": theme.default + "40",
    "editorLineNumber.activeForeground": theme.default
  };
  let input = {
    "input.background": theme.transparent,
    "input.foreground": theme.default,
    "input.border": theme.grey + "aa",
    "input.placeholderForeground": theme.default + "cc",
    "inputOption.activeBorder": theme.primary,
    "inputValidation.errorBackground": theme.primaryalt,
    "inputValidation.errorBorder": theme.yellow,
    "inputValidation.infoBackground": theme.primaryalt,
    "inputValidation.infoBorder": theme.primary,
    "inputValidation.warningBackground": theme.primaryalt,
    "inputValidation.warningBorder": theme.yellow
  };
  let list = {
    "list.activeSelectionBackground": theme.primary + "38",
    "list.dropBackground": theme.primary + "15",
    "list.focusBackground": theme.primary + "38",
    "list.errorForeground": theme.red,
    "list.warningForeground": theme.orange,
    "list.focusForeground": theme.default + "cc",
    "list.highlightForeground": theme.yellow,
    "list.hoverBackground": theme.grey + "20",
    "list.hoverForeground": theme.default + "cc",
    "list.inactiveSelectionBackground": theme.primary + "38",
    "gitDecoration.modifiedResourceForeground": theme.blue,
    "gitDecoration.deletedResourceForeground": theme.red,
    "gitDecoration.untrackedResourceForeground": theme.green,
    "gitDecoration.ignoredResourceForeground": theme.grey + "cc",
    "gitDecoration.conflictingResourceForeground": theme.primary
  };
  let merge = {
    "merge.border": theme.uiborder,
    "merge.commonContentBackground": theme.yellow,
    "merge.commonHeaderBackground": theme.yellow,
    "merge.currentContentBackground": theme.green,
    "merge.currentHeaderBackground": theme.green,
    "merge.incomingContentBackground": theme.blue,
    "merge.incomingHeaderBackground": theme.blue,
    "editorOverviewRuler.border": theme.uiborder,
    "editorOverviewRuler.commonContentForeground": theme.yellow,
    "editorOverviewRuler.currentContentForeground": theme.red,
    "editorOverviewRuler.incomingContentForeground": theme.green
  };
  let notification = {
    "notificationCenterHeader.foreground": theme.default + "cc",
    "notificationCenterHeader.background": theme.primaryalt,
    "notifications.foreground": theme.default + "cc",
    "notifications.background": theme.primaryalt,
    "notifications.border": theme.primary + "50",
    "notificationLink.foreground": theme.yellow
  };
  let panel = {
    "panel.background": theme.uibackground,
    "panel.border": theme.uiborder,
    "panelTitle.activeBorder": theme.primary,
    "panelTitle.activeForeground": theme.primary,
    "panelTitle.inactiveForeground": theme.default + "54"
  };
  let pickView = {
    "peekView.border": theme.primary,
    "peekViewEditor.background": theme.primaryalt + "40",
    "peekViewEditor.matchHighlightBackground": theme.primaryalt + "40",
    "peekViewEditorGutter.background": theme.primaryalt + "40",
    "peekViewResult.background": theme.primaryalt + "40",
    "peekViewResult.fileForeground": theme.default + "cc",
    "peekViewResult.lineForeground": theme.default + "cc",
    "peekViewResult.matchHighlightBackground": theme.primaryalt,
    "peekViewResult.selectionBackground": theme.primaryalt,
    "peekViewResult.selectionForeground": theme.default + "cc",
    "peekViewTitle.background": theme.uiborder,
    "peekViewTitleDescription.foreground": theme.default + "cc",
    "peekViewTitleLabel.foreground": theme.uiborder
  };
  let picker = {
    "pickerGroup.border": theme.uiborder,
    "pickerGroup.foreground": theme.default + "cc"
  };
  let progressbar = {
    "progressBar.background": theme.yellow
  };
  let scrollbar = {
    "scrollbar.shadow": theme.transparent,
    "scrollbarSlider.activeBackground": theme.default + "3f",
    "scrollbarSlider.background": theme.default + "18",
    "scrollbarSlider.background": theme.default + "20",
    "scrollbarSlider.hoverBackground": theme.default + "35"
  };
  let sidebar = {
    "sideBar.background": theme.uibackgroundalt,
    "sideBar.border": theme.transparent,
    "sideBar.foreground": theme.default + "cc",
    "sideBarSectionHeader.background": theme.grey + "20",
    "sideBarSectionHeader.foreground": theme.default + "cc",
    "sideBarTitle.foreground": theme.default,
    "sideBarSectionHeader.border": theme.uiborder,
    "tree.indentGuidesStroke": theme.default + "30"
  };
  let statusBar = {
    "statusBar.background": theme.uiborder,
    "statusBar.border": theme.uiborder,
    "statusBar.debuggingBackground": theme.primary + "44",
    "statusBar.debuggingBorder": theme.primary,
    "statusBar.debuggingForeground": theme.default,
    "statusBar.foreground": theme.default + "cc",
    "statusBar.noFolderBackground": theme.uiborder,
    "statusBar.noFolderBorder": theme.primary,
    "statusBar.noFolderForeground": theme.default + "cc",
    "statusBarItem.activeBackground": theme.primaryalt,
    "statusBarItem.hoverBackground": theme.default + "15",
    "statusBarItem.prominentBackground": theme.uiborder,
    "statusBarItem.prominentHoverBackground": theme.primaryalt
  };
  let suggest = {
    "editorSuggestWidget.background": theme.uibackground,
    "editorSuggestWidget.border": theme.uiborder,
    "editorSuggestWidget.foreground": theme.default + "cc",
    "editorSuggestWidget.highlightForeground": theme.yellow,
    "editorSuggestWidget.selectedBackground": theme.primary + "4d"
  };
  let tabs = {
    "editorGroupHeader.noTabsBackground": theme.uibackground,
    "editorGroupHeader.tabsBackground": theme.uibackground,
    "editorGroupHeader.tabsBorder": theme.uiborder,
    "tab.activeBackground": theme.primary + "31",
    "tab.activeForeground": theme.default + "cc",
    "tab.border": theme.uibackground,
    "tab.activeBorder": theme.primary,
    "tab.hoverBackground": theme.primary + "20",
    "tab.unfocusedHoverBackground": theme.primary + "20",
    "tab.inactiveBackground": theme.uibackground,
    "tab.inactiveForeground": theme.default + "71",
    "tab.unfocusedActiveForeground": theme.default + "cc",
    "tab.unfocusedInactiveForeground": theme.default + "cc"
  };
  let terminal = {
    "terminal.ansiBlack": theme.uibackground,
    "terminal.ansiRed": theme.red,
    "terminal.ansiGreen": theme.green,
    "terminal.ansiYellow": theme.yellow,
    "terminal.ansiBlue": theme.blue,
    "terminal.ansiMagenta": theme.pink,
    "terminal.ansiCyan": theme.turquoize,
    "terminal.ansiWhite": theme.default,
    "terminal.ansiBrightBlack": theme.blue,
    "terminal.ansiBrightRed": theme.red,
    "terminal.ansiBrightGreen": theme.green,
    "terminal.ansiBrightYellow": theme.yellow,
    "terminal.ansiBrightBlue": theme.blue,
    "terminal.ansiBrightMagenta": theme.pink,
    "terminal.ansiBrightCyan": theme.turquoize,
    "terminal.ansiBrightWhite": theme.primaryalt,
    "terminal.background": theme.uibackground,
    "terminal.foreground": theme.default,
    "terminalCursor.background": theme.yellow,
    "terminalCursor.foreground": theme.yellow
  };
  let text = {
    "textBlockQuote.background": theme.blue + "34",
    "textBlockQuote.border": theme.blue + "b9",
    "textCodeBlock.background": theme.blue + "34",
    "textLink.activeForeground": theme.blue,
    "textLink.foreground": theme.blue,
    "textPreformat.foreground": theme.yellow,
    "textSeparator.foreground": theme.primary,
    "walkThrough.embeddedEditorBackground": theme.uibackground
  };
  let titleBar = {
    "titleBar.activeBackground": theme.uiborder,
    "titleBar.activeForeground": theme.default,
    "titleBar.inactiveBackground": theme.primaryalt,
    "titleBar.inactiveForeground": theme.default + "33",
    "titleBar.border": theme.uiborder
  };
  return Object.assign(
    activityBar,
    badge,
    breadcrumb,
    button,
    common,
    debug,
    description,
    diff,
    dropdown,
    editor,
    editorMarker,
    find,
    gutter,
    input,
    list,
    merge,
    notification,
    panel,
    pickView,
    picker,
    progressbar,
    scrollbar,
    sidebar,
    statusBar,
    suggest,
    tabs,
    terminal,
    text,
    titleBar
  );
};
