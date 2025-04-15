export type FontStyle = "bold" | "italic" | "normal";

export interface Scope {
  scope: string[];
  settings: {
    fontStyle?: FontStyle;
    foreground: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  levels: ThemeLevels;
  ui: ThemeUi;
}

export interface ThemeColors {
  /**
   * Color for the functions
   */
  blue: string;
  /**
   * Color for the strings
   */
  green: string;
  /**
   * Color for the classes
   */
  greenAlt: string;
  /**
   * Color for the accessors
   */
  orange: string;
  /**
   * Color for the functions arguments or decorators
   */
  pink: string;
  /**
   * Color for typings
   */
  purple: string;
  /**
   * Color for the constants
   */
  red: string;
  /**
   * Color for the variables
   */
  salmon: string;
  /**
   * Color for the storages of type of functions
   */
  turquoize: string;
  /**
   * Color for the keywords
   */
  yellow: string;
}

export interface ThemeLevels {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface ThemeUi {
  border: string;
  default: string;
  defaultalt: string;
  defaultMain: string;
  primary: string;
  primaryalt: string;
  uibackground: string;
  uibackgroundalt: string;
  uibackgroundmid: string;
}

export type UIKey = VSCodeThemeColors;

/**
 * Represents all available color customization options in a VSCode theme
 */
export type VSCodeThemeColors = {
  // Activity Bar & Action Bar
  "actionBar.toggledBackground"?: string;
  "activityBar.activeBackground"?: string;
  "activityBar.activeBorder"?: string;
  "activityBar.activeFocusBorder"?: string;
  "activityBar.background"?: string;
  "activityBar.border"?: string;
  "activityBar.dropBorder"?: string;
  "activityBar.foreground"?: string;
  "activityBar.inactiveForeground"?: string;
  "activityBarBadge.background"?: string;
  "activityBarBadge.foreground"?: string;
  "activityBarTop.activeBackground"?: string;
  "activityBarTop.activeBorder"?: string;
  "activityBarTop.background"?: string;
  "activityBarTop.dropBorder"?: string;
  "activityBarTop.foreground"?: string;
  "activityBarTop.inactiveForeground"?: string;
  "activityErrorBadge.background"?: string;
  "activityErrorBadge.foreground"?: string;
  "activityWarningBadge.background"?: string;
  "activityWarningBadge.foreground"?: string;

  // Badge
  "badge.background"?: string;
  "badge.foreground"?: string;

  // Banner
  "banner.background"?: string;
  "banner.foreground"?: string;
  "banner.iconForeground"?: string;

  // Breadcrumb
  "breadcrumb.activeSelectionForeground"?: string;
  "breadcrumb.background"?: string;
  "breadcrumb.focusForeground"?: string;
  "breadcrumb.foreground"?: string;
  "breadcrumbPicker.background"?: string;

  // Button
  "button.background"?: string;
  "button.border"?: string;
  "button.foreground"?: string;
  "button.hoverBackground"?: string;
  "button.secondaryBackground"?: string;
  "button.secondaryForeground"?: string;
  "button.secondaryHoverBackground"?: string;
  "button.separator"?: string;

  // Charts
  "chart.axis"?: string;
  "chart.guide"?: string;
  "chart.line"?: string;
  "charts.blue"?: string;
  "charts.foreground"?: string;
  "charts.green"?: string;
  "charts.lines"?: string;
  "charts.orange"?: string;
  "charts.purple"?: string;
  "charts.red"?: string;
  "charts.yellow"?: string;

  // Chat
  "chat.avatarBackground"?: string;
  "chat.avatarForeground"?: string;
  "chat.editedFileForeground"?: string;
  "chat.requestBackground"?: string;
  "chat.requestBorder"?: string;
  "chat.slashCommandBackground"?: string;
  "chat.slashCommandForeground"?: string;

  // Checkbox
  "checkbox.background"?: string;
  "checkbox.border"?: string;
  "checkbox.foreground"?: string;
  "checkbox.selectBackground"?: string;
  "checkbox.selectBorder"?: string;

  // Command Center
  "commandCenter.activeBackground"?: string;
  "commandCenter.activeBorder"?: string;
  "commandCenter.activeForeground"?: string;
  "commandCenter.background"?: string;
  "commandCenter.border"?: string;
  "commandCenter.debuggingBackground"?: string;
  "commandCenter.foreground"?: string;
  "commandCenter.inactiveBorder"?: string;
  "commandCenter.inactiveForeground"?: string;

  // Comments View
  "commentsView.resolvedIcon"?: string;
  "commentsView.unresolvedIcon"?: string;

  // Contrast
  contrastActiveBorder?: string;
  contrastBorder?: string;

  // Debug
  "debugConsole.errorForeground"?: string;
  "debugConsole.infoForeground"?: string;
  "debugConsole.sourceForeground"?: string;
  "debugConsole.warningForeground"?: string;
  "debugConsoleInputIcon.foreground"?: string;
  "debugExceptionWidget.background"?: string;
  "debugExceptionWidget.border"?: string;
  "debugIcon.breakpointCurrentStackframeForeground"?: string;
  "debugIcon.breakpointDisabledForeground"?: string;
  "debugIcon.breakpointForeground"?: string;
  "debugIcon.breakpointStackframeForeground"?: string;
  "debugIcon.breakpointUnverifiedForeground"?: string;
  "debugIcon.continueForeground"?: string;
  "debugIcon.disconnectForeground"?: string;
  "debugIcon.pauseForeground"?: string;
  "debugIcon.restartForeground"?: string;
  "debugIcon.startForeground"?: string;
  "debugIcon.stepBackForeground"?: string;
  "debugIcon.stepIntoForeground"?: string;
  "debugIcon.stepOutForeground"?: string;
  "debugIcon.stepOverForeground"?: string;
  "debugIcon.stopForeground"?: string;
  "debugTokenExpression.boolean"?: string;
  "debugTokenExpression.error"?: string;
  "debugTokenExpression.name"?: string;
  "debugTokenExpression.number"?: string;
  "debugTokenExpression.string"?: string;
  "debugTokenExpression.type"?: string;
  "debugTokenExpression.value"?: string;
  "debugToolBar.background"?: string;
  "debugToolBar.border"?: string;
  "debugView.exceptionLabelBackground"?: string;
  "debugView.exceptionLabelForeground"?: string;
  "debugView.stateLabelBackground"?: string;
  "debugView.stateLabelForeground"?: string;
  "debugView.valueChangedHighlight"?: string;

  // Description
  descriptionForeground?: string;

  // Diff Editor
  "diffEditor.border"?: string;
  "diffEditor.diagonalFill"?: string;
  "diffEditor.insertedLineBackground"?: string;
  "diffEditor.insertedTextBackground"?: string;
  "diffEditor.insertedTextBorder"?: string;
  "diffEditor.move.border"?: string;
  "diffEditor.moveActive.border"?: string;
  "diffEditor.removedLineBackground"?: string;
  "diffEditor.removedTextBackground"?: string;
  "diffEditor.removedTextBorder"?: string;
  "diffEditor.unchangedCodeBackground"?: string;
  "diffEditor.unchangedRegionBackground"?: string;
  "diffEditor.unchangedRegionForeground"?: string;
  "diffEditor.unchangedRegionShadow"?: string;
  "diffEditorGutter.insertedLineBackground"?: string;
  "diffEditorGutter.removedLineBackground"?: string;
  "diffEditorOverview.insertedForeground"?: string;
  "diffEditorOverview.removedForeground"?: string;

  // Disabled
  disabledForeground?: string;

  // Dropdown
  "dropdown.background"?: string;
  "dropdown.border"?: string;
  "dropdown.foreground"?: string;
  "dropdown.listBackground"?: string;

  // Editor
  "editor.background"?: string;
  "editor.compositionBorder"?: string;
  "editor.findMatchBackground"?: string;
  "editor.findMatchBorder"?: string;
  "editor.findMatchForeground"?: string;
  "editor.findMatchHighlightBackground"?: string;
  "editor.findMatchHighlightBorder"?: string;
  "editor.findMatchHighlightForeground"?: string;
  "editor.findRangeHighlightBackground"?: string;
  "editor.findRangeHighlightBorder"?: string;
  "editor.focusedStackFrameHighlightBackground"?: string;
  "editor.foldBackground"?: string;
  "editor.foldPlaceholderForeground"?: string;
  "editor.foreground"?: string;
  "editor.hoverHighlightBackground"?: string;
  "editor.inactiveSelectionBackground"?: string;
  "editor.inlineValuesBackground"?: string;
  "editor.inlineValuesForeground"?: string;
  "editor.lineHighlightBackground"?: string;
  "editor.lineHighlightBorder"?: string;
  "editor.linkedEditingBackground"?: string;
  "editor.placeholder.foreground"?: string;
  "editor.rangeHighlightBackground"?: string;
  "editor.rangeHighlightBorder"?: string;
  "editor.selectionBackground"?: string;
  "editor.selectionForeground"?: string;
  "editor.selectionHighlightBackground"?: string;
  "editor.selectionHighlightBorder"?: string;
  "editor.snippetFinalTabstopHighlightBackground"?: string;
  "editor.snippetFinalTabstopHighlightBorder"?: string;
  "editor.snippetTabstopHighlightBackground"?: string;
  "editor.snippetTabstopHighlightBorder"?: string;
  "editor.stackFrameHighlightBackground"?: string;
  "editor.symbolHighlightBackground"?: string;
  "editor.symbolHighlightBorder"?: string;
  "editor.wordHighlightBackground"?: string;
  "editor.wordHighlightBorder"?: string;
  "editor.wordHighlightStrongBackground"?: string;
  "editor.wordHighlightStrongBorder"?: string;
  "editor.wordHighlightTextBackground"?: string;
  "editor.wordHighlightTextBorder"?: string;
  "editorActionList.background"?: string;
  "editorActionList.focusBackground"?: string;
  "editorActionList.focusForeground"?: string;
  "editorActionList.foreground"?: string;
  "editorBracketHighlight.foreground1"?: string;
  "editorBracketHighlight.foreground2"?: string;
  "editorBracketHighlight.foreground3"?: string;
  "editorBracketHighlight.foreground4"?: string;
  "editorBracketHighlight.foreground5"?: string;
  "editorBracketHighlight.foreground6"?: string;
  "editorBracketHighlight.unexpectedBracket.foreground"?: string;
  "editorBracketMatch.background"?: string;
  "editorBracketMatch.border"?: string;
  "editorBracketPairGuide.activeBackground1"?: string;
  "editorBracketPairGuide.activeBackground2"?: string;
  "editorBracketPairGuide.activeBackground3"?: string;
  "editorBracketPairGuide.activeBackground4"?: string;
  "editorBracketPairGuide.activeBackground5"?: string;
  "editorBracketPairGuide.activeBackground6"?: string;
  "editorBracketPairGuide.background1"?: string;
  "editorBracketPairGuide.background2"?: string;
  "editorBracketPairGuide.background3"?: string;
  "editorBracketPairGuide.background4"?: string;
  "editorBracketPairGuide.background5"?: string;
  "editorBracketPairGuide.background6"?: string;
  "editorCodeLens.foreground"?: string;
  "editorCommentsWidget.rangeActiveBackground"?: string;
  "editorCommentsWidget.rangeBackground"?: string;
  "editorCommentsWidget.replyInputBackground"?: string;
  "editorCommentsWidget.resolvedBorder"?: string;
  "editorCommentsWidget.unresolvedBorder"?: string;
  "editorCursor.background"?: string;
  "editorCursor.foreground"?: string;
  "editorError.background"?: string;
  "editorError.border"?: string;
  "editorError.foreground"?: string;
  "editorGhostText.background"?: string;
  "editorGhostText.border"?: string;
  "editorGhostText.foreground"?: string;
  "editorGroup.border"?: string;
  "editorGroup.dropBackground"?: string;
  "editorGroup.dropIntoPromptBackground"?: string;
  "editorGroup.dropIntoPromptBorder"?: string;
  "editorGroup.dropIntoPromptForeground"?: string;
  "editorGroup.emptyBackground"?: string;
  "editorGroup.focusedEmptyBorder"?: string;
  "editorGroupHeader.border"?: string;
  "editorGroupHeader.noTabsBackground"?: string;
  "editorGroupHeader.tabsBackground"?: string;
  "editorGroupHeader.tabsBorder"?: string;
  "editorGutter.addedBackground"?: string;
  "editorGutter.background"?: string;
  "editorGutter.commentGlyphForeground"?: string;
  "editorGutter.commentRangeForeground"?: string;
  "editorGutter.commentUnresolvedGlyphForeground"?: string;
  "editorGutter.deletedBackground"?: string;
  "editorGutter.foldingControlForeground"?: string;
  "editorGutter.itemBackground"?: string;
  "editorGutter.itemGlyphForeground"?: string;
  "editorGutter.modifiedBackground"?: string;
  "editorHint.border"?: string;
  "editorHint.foreground"?: string;
  "editorHoverWidget.background"?: string;
  "editorHoverWidget.border"?: string;
  "editorHoverWidget.foreground"?: string;
  "editorHoverWidget.highlightForeground"?: string;
  "editorHoverWidget.statusBarBackground"?: string;
  "editorIndentGuide.activeBackground1"?: string;
  "editorIndentGuide.activeBackground2"?: string;
  "editorIndentGuide.activeBackground3"?: string;
  "editorIndentGuide.activeBackground4"?: string;
  "editorIndentGuide.activeBackground5"?: string;
  "editorIndentGuide.activeBackground6"?: string;
  "editorIndentGuide.background1"?: string;
  "editorIndentGuide.background2"?: string;
  "editorIndentGuide.background3"?: string;
  "editorIndentGuide.background4"?: string;
  "editorIndentGuide.background5"?: string;
  "editorIndentGuide.background6"?: string;
  "editorInfo.background"?: string;
  "editorInfo.border"?: string;
  "editorInfo.foreground"?: string;
  "editorInlayHint.background"?: string;
  "editorInlayHint.foreground"?: string;
  "editorInlayHint.parameterBackground"?: string;
  "editorInlayHint.parameterForeground"?: string;
  "editorInlayHint.typeBackground"?: string;
  "editorInlayHint.typeForeground"?: string;
  "editorLightBulb.foreground"?: string;
  "editorLightBulbAi.foreground"?: string;
  "editorLightBulbAutoFix.foreground"?: string;
  "editorLineNumber.activeForeground"?: string;
  "editorLineNumber.dimmedForeground"?: string;
  "editorLineNumber.foreground"?: string;
  "editorLink.activeForeground"?: string;
  "editorMarkerNavigation.background"?: string;
  "editorMarkerNavigationError.background"?: string;
  "editorMarkerNavigationError.headerBackground"?: string;
  "editorMarkerNavigationInfo.background"?: string;
  "editorMarkerNavigationInfo.headerBackground"?: string;
  "editorMarkerNavigationWarning.background"?: string;
  "editorMarkerNavigationWarning.headerBackground"?: string;
  "editorMinimap.inlineChatInserted"?: string;
  "editorMultiCursor.primary.background"?: string;
  "editorMultiCursor.primary.foreground"?: string;
  "editorMultiCursor.secondary.background"?: string;
  "editorMultiCursor.secondary.foreground"?: string;
  "editorOverviewRuler.addedForeground"?: string;
  "editorOverviewRuler.background"?: string;
  "editorOverviewRuler.border"?: string;
  "editorOverviewRuler.bracketMatchForeground"?: string;
  "editorOverviewRuler.commentForeground"?: string;
  "editorOverviewRuler.commentUnresolvedForeground"?: string;
  "editorOverviewRuler.commonContentForeground"?: string;
  "editorOverviewRuler.currentContentForeground"?: string;
  "editorOverviewRuler.deletedForeground"?: string;
  "editorOverviewRuler.errorForeground"?: string;
  "editorOverviewRuler.findMatchForeground"?: string;
  "editorOverviewRuler.incomingContentForeground"?: string;
  "editorOverviewRuler.infoForeground"?: string;
  "editorOverviewRuler.inlineChatInserted"?: string;
  "editorOverviewRuler.inlineChatRemoved"?: string;
  "editorOverviewRuler.modifiedForeground"?: string;
  "editorOverviewRuler.rangeHighlightForeground"?: string;
  "editorOverviewRuler.selectionHighlightForeground"?: string;
  "editorOverviewRuler.warningForeground"?: string;
  "editorOverviewRuler.wordHighlightForeground"?: string;
  "editorOverviewRuler.wordHighlightStrongForeground"?: string;
  "editorOverviewRuler.wordHighlightTextForeground"?: string;
  "editorPane.background"?: string;
  "editorRuler.foreground"?: string;
  "editorStickyScroll.background"?: string;
  "editorStickyScroll.border"?: string;
  "editorStickyScroll.shadow"?: string;
  "editorStickyScrollHover.background"?: string;
  "editorSuggestWidget.background"?: string;
  "editorSuggestWidget.border"?: string;
  "editorSuggestWidget.focusHighlightForeground"?: string;
  "editorSuggestWidget.foreground"?: string;
  "editorSuggestWidget.highlightForeground"?: string;
  "editorSuggestWidget.selectedBackground"?: string;
  "editorSuggestWidget.selectedForeground"?: string;
  "editorSuggestWidget.selectedIconForeground"?: string;
  "editorSuggestWidgetStatus.foreground"?: string;
  "editorUnicodeHighlight.background"?: string;
  "editorUnicodeHighlight.border"?: string;
  "editorUnnecessaryCode.border"?: string;
  "editorUnnecessaryCode.opacity"?: string;
  "editorWarning.background"?: string;
  "editorWarning.border"?: string;
  "editorWarning.foreground"?: string;
  "editorWatermark.foreground"?: string;
  "editorWhitespace.foreground"?: string;
  "editorWidget.background"?: string;
  "editorWidget.border"?: string;
  "editorWidget.foreground"?: string;
  "editorWidget.resizeBorder"?: string;

  // Error
  errorForeground?: string;
  "errorLens.errorBackground"?: string;
  "errorLens.errorBackgroundLight"?: string;
  "errorLens.errorForeground"?: string;
  "errorLens.errorForegroundLight"?: string;
  "errorLens.errorMessageBackground"?: string;
  "errorLens.errorRangeBackground"?: string;
  "errorLens.hintBackground"?: string;
  "errorLens.hintBackgroundLight"?: string;
  "errorLens.hintForeground"?: string;
  "errorLens.hintForegroundLight"?: string;
  "errorLens.hintMessageBackground"?: string;
  "errorLens.hintRangeBackground"?: string;
  "errorLens.infoBackground"?: string;
  "errorLens.infoBackgroundLight"?: string;
  "errorLens.infoForeground"?: string;
  "errorLens.infoForegroundLight"?: string;
  "errorLens.infoMessageBackground"?: string;
  "errorLens.infoRangeBackground"?: string;
  "errorLens.statusBarErrorForeground"?: string;
  "errorLens.statusBarHintForeground"?: string;
  "errorLens.statusBarIconErrorForeground"?: string;
  "errorLens.statusBarIconWarningForeground"?: string;
  "errorLens.statusBarInfoForeground"?: string;
  "errorLens.statusBarWarningForeground"?: string;
  "errorLens.warningBackground"?: string;
  "errorLens.warningBackgroundLight"?: string;
  "errorLens.warningForeground"?: string;
  "errorLens.warningForegroundLight"?: string;
  "errorLens.warningMessageBackground"?: string;
  "errorLens.warningRangeBackground"?: string;

  // Extension
  "extensionBadge.remoteBackground"?: string;
  "extensionBadge.remoteForeground"?: string;
  "extensionButton.background"?: string;
  "extensionButton.foreground"?: string;
  "extensionButton.hoverBackground"?: string;
  "extensionButton.prominentBackground"?: string;
  "extensionButton.prominentForeground"?: string;
  "extensionButton.prominentHoverBackground"?: string;
  "extensionButton.separator"?: string;
  "extensionIcon.preReleaseForeground"?: string;
  "extensionIcon.privateForeground"?: string;
  "extensionIcon.sponsorForeground"?: string;
  "extensionIcon.starForeground"?: string;
  "extensionIcon.verifiedForeground"?: string;

  // Other Controls
  focusBorder?: string;
  foreground?: string;

  // Gauge
  "gauge.background"?: string;
  "gauge.border"?: string;
  "gauge.errorBackground"?: string;
  "gauge.errorForeground"?: string;
  "gauge.foreground"?: string;
  "gauge.warningBackground"?: string;
  "gauge.warningForeground"?: string;

  // Git
  "git.blame.editorDecorationForeground"?: string;
  "gitDecoration.addedResourceForeground"?: string;
  "gitDecoration.conflictingResourceForeground"?: string;
  "gitDecoration.deletedResourceForeground"?: string;
  "gitDecoration.ignoredResourceForeground"?: string;
  "gitDecoration.modifiedResourceForeground"?: string;
  "gitDecoration.renamedResourceForeground"?: string;
  "gitDecoration.stageDeletedResourceForeground"?: string;
  "gitDecoration.stageModifiedResourceForeground"?: string;
  "gitDecoration.submoduleResourceForeground"?: string;
  "gitDecoration.untrackedResourceForeground"?: string;

  // Icon
  "icon.foreground"?: string;

  // Inline Chat & Edit
  "inlineChat.background"?: string;
  "inlineChat.border"?: string;
  "inlineChat.foreground"?: string;
  "inlineChat.shadow"?: string;
  "inlineChatDiff.inserted"?: string;
  "inlineChatDiff.removed"?: string;
  "inlineChatInput.background"?: string;
  "inlineChatInput.border"?: string;
  "inlineChatInput.focusBorder"?: string;
  "inlineChatInput.placeholderForeground"?: string;
  "inlineEdit.gutterIndicator.background"?: string;
  "inlineEdit.gutterIndicator.primaryBackground"?: string;
  "inlineEdit.gutterIndicator.primaryBorder"?: string;
  "inlineEdit.gutterIndicator.primaryForeground"?: string;
  "inlineEdit.gutterIndicator.secondaryBackground"?: string;
  "inlineEdit.gutterIndicator.secondaryBorder"?: string;
  "inlineEdit.gutterIndicator.secondaryForeground"?: string;
  "inlineEdit.gutterIndicator.successfulBackground"?: string;
  "inlineEdit.gutterIndicator.successfulBorder"?: string;
  "inlineEdit.gutterIndicator.successfulForeground"?: string;
  "inlineEdit.modifiedBackground"?: string;
  "inlineEdit.modifiedBorder"?: string;
  "inlineEdit.modifiedChangedLineBackground"?: string;
  "inlineEdit.modifiedChangedTextBackground"?: string;
  "inlineEdit.originalBackground"?: string;
  "inlineEdit.originalBorder"?: string;
  "inlineEdit.originalChangedLineBackground"?: string;
  "inlineEdit.originalChangedTextBackground"?: string;
  "inlineEdit.tabWillAcceptModifiedBorder"?: string;
  "inlineEdit.tabWillAcceptOriginalBorder"?: string;

  // Input
  "input.background"?: string;
  "input.border"?: string;
  "input.foreground"?: string;
  "input.placeholderForeground"?: string;

  // InputOption
  "inputOption.activeBackground"?: string;
  "inputOption.activeBorder"?: string;
  "inputOption.activeForeground"?: string;
  "inputOption.hoverBackground"?: string;

  // InputValidation
  "inputValidation.errorBackground"?: string;
  "inputValidation.errorBorder"?: string;
  "inputValidation.errorForeground"?: string;
  "inputValidation.infoBackground"?: string;
  "inputValidation.infoBorder"?: string;
  "inputValidation.infoForeground"?: string;
  "inputValidation.warningBackground"?: string;
  "inputValidation.warningBorder"?: string;
  "inputValidation.warningForeground"?: string;

  // Interactive
  "interactive.activeCodeBorder"?: string;
  "interactive.inactiveCodeBorder"?: string;

  // Issues
  "issues.closed"?: string;
  "issues.newIssueDecoration"?: string;
  "issues.open"?: string;

  // KeyBinding
  "keybindingLabel.background"?: string;
  "keybindingLabel.border"?: string;
  "keybindingLabel.bottomBorder"?: string;
  "keybindingLabel.foreground"?: string;
  "keybindingTable.headerBackground"?: string;
  "keybindingTable.rowsBackground"?: string;

  // List
  "list.activeSelectionBackground"?: string;
  "list.activeSelectionForeground"?: string;
  "list.activeSelectionIconForeground"?: string;
  "list.deemphasizedForeground"?: string;
  "list.dropBackground"?: string;
  "list.dropBetweenBackground"?: string;
  "list.errorForeground"?: string;
  "list.filterMatchBackground"?: string;
  "list.filterMatchBorder"?: string;
  "list.focusAndSelectionOutline"?: string;
  "list.focusBackground"?: string;
  "list.focusForeground"?: string;
  "list.focusHighlightForeground"?: string;
  "list.focusOutline"?: string;
  "list.highlightForeground"?: string;
  "list.hoverBackground"?: string;
  "list.hoverForeground"?: string;
  "list.inactiveFocusBackground"?: string;
  "list.inactiveFocusOutline"?: string;
  "list.inactiveSelectionBackground"?: string;
  "list.inactiveSelectionForeground"?: string;
  "list.inactiveSelectionIconForeground"?: string;
  "list.invalidItemForeground"?: string;
  "list.warningForeground"?: string;
  "listFilterWidget.background"?: string;
  "listFilterWidget.noMatchesOutline"?: string;
  "listFilterWidget.outline"?: string;
  "listFilterWidget.shadow"?: string;

  // Menu
  "menu.background"?: string;
  "menu.border"?: string;
  "menu.foreground"?: string;
  "menu.selectionBackground"?: string;
  "menu.selectionBorder"?: string;
  "menu.selectionForeground"?: string;
  "menu.separatorBackground"?: string;
  "menubar.selectionBackground"?: string;
  "menubar.selectionBorder"?: string;
  "menubar.selectionForeground"?: string;

  // Merge
  "merge.border"?: string;
  "merge.commonContentBackground"?: string;
  "merge.commonHeaderBackground"?: string;
  "merge.currentContentBackground"?: string;
  "merge.currentHeaderBackground"?: string;
  "merge.incomingContentBackground"?: string;
  "merge.incomingHeaderBackground"?: string;
  "mergeEditor.change.background"?: string;
  "mergeEditor.change.word.background"?: string;
  "mergeEditor.changeBase.background"?: string;
  "mergeEditor.changeBase.word.background"?: string;
  "mergeEditor.conflict.handled.minimapOverViewRuler"?: string;
  "mergeEditor.conflict.handledFocused.border"?: string;
  "mergeEditor.conflict.handledUnfocused.border"?: string;
  "mergeEditor.conflict.input1.background"?: string;
  "mergeEditor.conflict.input2.background"?: string;
  "mergeEditor.conflict.unhandled.minimapOverViewRuler"?: string;
  "mergeEditor.conflict.unhandledFocused.border"?: string;
  "mergeEditor.conflict.unhandledUnfocused.border"?: string;
  "mergeEditor.conflictingLines.background"?: string;

  // Minimap
  "minimap.background"?: string;
  "minimap.chatEditHighlight"?: string;
  "minimap.errorHighlight"?: string;
  "minimap.findMatchHighlight"?: string;
  "minimap.foregroundOpacity"?: string;
  "minimap.infoHighlight"?: string;
  "minimap.selectionHighlight"?: string;
  "minimap.selectionOccurrenceHighlight"?: string;
  "minimap.warningHighlight"?: string;
  "minimapGutter.addedBackground"?: string;
  "minimapGutter.deletedBackground"?: string;
  "minimapGutter.modifiedBackground"?: string;
  "minimapSlider.activeBackground"?: string;
  "minimapSlider.background"?: string;
  "minimapSlider.hoverBackground"?: string;

  // Multi Diff Editor
  "multiDiffEditor.background"?: string;
  "multiDiffEditor.border"?: string;
  "multiDiffEditor.headerBackground"?: string;

  // Notebook
  "notebook.cellBorderColor"?: string;
  "notebook.cellEditorBackground"?: string;
  "notebook.cellHoverBackground"?: string;
  "notebook.cellInsertionIndicator"?: string;
  "notebook.cellStatusBarItemHoverBackground"?: string;
  "notebook.cellToolbarSeparator"?: string;
  "notebook.editorBackground"?: string;
  "notebook.focusedCellBackground"?: string;
  "notebook.focusedCellBorder"?: string;
  "notebook.focusedEditorBorder"?: string;
  "notebook.inactiveFocusedCellBorder"?: string;
  "notebook.inactiveSelectedCellBorder"?: string;
  "notebook.outputContainerBackgroundColor"?: string;
  "notebook.outputContainerBorderColor"?: string;
  "notebook.selectedCellBackground"?: string;
  "notebook.selectedCellBorder"?: string;
  "notebook.symbolHighlightBackground"?: string;
  "notebookEditorOverviewRuler.runningCellForeground"?: string;
  "notebookScrollbarSlider.activeBackground"?: string;
  "notebookScrollbarSlider.background"?: string;
  "notebookScrollbarSlider.hoverBackground"?: string;
  "notebookStatusErrorIcon.foreground"?: string;
  "notebookStatusRunningIcon.foreground"?: string;
  "notebookStatusSuccessIcon.foreground"?: string;

  // Notifications
  "notificationCenter.border"?: string;
  "notificationCenterHeader.background"?: string;
  "notificationCenterHeader.foreground"?: string;
  "notificationLink.foreground"?: string;
  "notifications.background"?: string;
  "notifications.border"?: string;
  "notifications.foreground"?: string;
  "notificationsErrorIcon.foreground"?: string;
  "notificationsInfoIcon.foreground"?: string;
  "notificationsWarningIcon.foreground"?: string;
  "notificationToast.border"?: string;

  // Output View
  "outputView.background"?: string;
  "outputViewStickyScroll.background"?: string;

  // Panel
  "panel.background"?: string;
  "panel.border"?: string;
  "panel.dropBackground"?: string;
  "panel.dropBorder"?: string;
  "panelInput.border"?: string;
  "panelSection.border"?: string;
  "panelSection.dropBackground"?: string;
  "panelSectionHeader.background"?: string;
  "panelSectionHeader.border"?: string;
  "panelSectionHeader.foreground"?: string;
  "panelStickyScroll.background"?: string;
  "panelStickyScroll.border"?: string;
  "panelStickyScroll.shadow"?: string;
  "panelTitle.activeBorder"?: string;
  "panelTitle.activeForeground"?: string;
  "panelTitle.border"?: string;
  "panelTitle.inactiveForeground"?: string;
  "panelTitleBadge.background"?: string;
  "panelTitleBadge.foreground"?: string;

  // PeekView
  "peekView.border"?: string;
  "peekViewEditor.background"?: string;
  "peekViewEditor.matchHighlightBackground"?: string;
  "peekViewEditor.matchHighlightBorder"?: string;
  "peekViewEditorGutter.background"?: string;
  "peekViewEditorStickyScroll.background"?: string;
  "peekViewResult.background"?: string;
  "peekViewResult.fileForeground"?: string;
  "peekViewResult.lineForeground"?: string;
  "peekViewResult.matchHighlightBackground"?: string;
  "peekViewResult.selectionBackground"?: string;
  "peekViewResult.selectionForeground"?: string;
  "peekViewTitle.background"?: string;
  "peekViewTitleDescription.foreground"?: string;
  "peekViewTitleLabel.foreground"?: string;

  // PickerGroup
  "pickerGroup.border"?: string;
  "pickerGroup.foreground"?: string;

  // Ports
  "ports.iconRunningProcessForeground"?: string;

  // Problems
  "problemsErrorIcon.foreground"?: string;
  "problemsInfoIcon.foreground"?: string;
  "problemsWarningIcon.foreground"?: string;

  // Profile
  "profileBadge.background"?: string;
  "profileBadge.foreground"?: string;
  "profiles.sashBorder"?: string;

  // ProgressBar
  "progressBar.background"?: string;

  // Pull Requests
  "pullRequests.draft"?: string;
  "pullRequests.merged"?: string;
  "pullRequests.notification"?: string;
  "pullRequests.open"?: string;

  // QuickInput
  "quickInput.background"?: string;
  "quickInput.foreground"?: string;
  "quickInputList.focusBackground"?: string;
  "quickInputList.focusForeground"?: string;
  "quickInputList.focusIconForeground"?: string;
  "quickInputTitle.background"?: string;

  // Radio
  "radio.activeBackground"?: string;
  "radio.activeBorder"?: string;
  "radio.activeForeground"?: string;
  "radio.inactiveBackground"?: string;
  "radio.inactiveBorder"?: string;
  "radio.inactiveForeground"?: string;
  "radio.inactiveHoverBackground"?: string;

  // Sash
  "sash.hoverBorder"?: string;

  // SCM Graph
  "scmGraph.foreground1"?: string;
  "scmGraph.foreground2"?: string;
  "scmGraph.foreground3"?: string;
  "scmGraph.foreground4"?: string;
  "scmGraph.foreground5"?: string;
  "scmGraph.historyItemBaseRefColor"?: string;
  "scmGraph.historyItemHoverAdditionsForeground"?: string;
  "scmGraph.historyItemHoverDefaultLabelBackground"?: string;
  "scmGraph.historyItemHoverDefaultLabelForeground"?: string;
  "scmGraph.historyItemHoverDeletionsForeground"?: string;
  "scmGraph.historyItemHoverLabelForeground"?: string;
  "scmGraph.historyItemRefColor"?: string;
  "scmGraph.historyItemRemoteRefColor"?: string;

  // ScrollBar
  "scrollbar.shadow"?: string;
  "scrollbarSlider.activeBackground"?: string;
  "scrollbarSlider.background"?: string;
  "scrollbarSlider.hoverBackground"?: string;

  // Search
  "search.resultsInfoForeground"?: string;
  "searchEditor.findMatchBackground"?: string;
  "searchEditor.findMatchBorder"?: string;
  "searchEditor.textInputBorder"?: string;

  // Selection
  "selection.background"?: string;

  // Settings
  "settings.checkboxBackground"?: string;
  "settings.checkboxBorder"?: string;
  "settings.checkboxForeground"?: string;
  "settings.dropdownBackground"?: string;
  "settings.dropdownBorder"?: string;
  "settings.dropdownForeground"?: string;
  "settings.dropdownListBorder"?: string;
  "settings.focusedRowBackground"?: string;
  "settings.focusedRowBorder"?: string;
  "settings.headerBorder"?: string;
  "settings.headerForeground"?: string;
  "settings.modifiedItemIndicator"?: string;
  "settings.numberInputBackground"?: string;
  "settings.numberInputBorder"?: string;
  "settings.numberInputForeground"?: string;
  "settings.rowHoverBackground"?: string;
  "settings.sashBorder"?: string;
  "settings.settingsHeaderHoverForeground"?: string;
  "settings.textInputBackground"?: string;
  "settings.textInputBorder"?: string;
  "settings.textInputForeground"?: string;

  // SideBar
  "sideBar.background"?: string;
  "sideBar.border"?: string;
  "sideBar.dropBackground"?: string;
  "sideBar.foreground"?: string;
  "sideBarActivityBarTop.border"?: string;
  "sideBarSectionHeader.background"?: string;
  "sideBarSectionHeader.border"?: string;
  "sideBarSectionHeader.foreground"?: string;
  "sideBarStickyScroll.background"?: string;
  "sideBarStickyScroll.border"?: string;
  "sideBarStickyScroll.shadow"?: string;
  "sideBarTitle.background"?: string;
  "sideBarTitle.border"?: string;
  "sideBarTitle.foreground"?: string;
  "sideBySideEditor.horizontalBorder"?: string;
  "sideBySideEditor.verticalBorder"?: string;
  "simpleFindWidget.sashBorder"?: string;

  // StatusBar
  "statusBar.background"?: string;
  "statusBar.border"?: string;
  "statusBar.debuggingBackground"?: string;
  "statusBar.debuggingBorder"?: string;
  "statusBar.debuggingForeground"?: string;
  "statusBar.focusBorder"?: string;
  "statusBar.foreground"?: string;
  "statusBar.noFolderBackground"?: string;
  "statusBar.noFolderBorder"?: string;
  "statusBar.noFolderForeground"?: string;
  "statusBarItem.activeBackground"?: string;
  "statusBarItem.compactHoverBackground"?: string;
  "statusBarItem.errorBackground"?: string;
  "statusBarItem.errorForeground"?: string;
  "statusBarItem.errorHoverBackground"?: string;
  "statusBarItem.errorHoverForeground"?: string;
  "statusBarItem.focusBorder"?: string;
  "statusBarItem.hoverBackground"?: string;
  "statusBarItem.hoverForeground"?: string;
  "statusBarItem.offlineBackground"?: string;
  "statusBarItem.offlineForeground"?: string;
  "statusBarItem.offlineHoverBackground"?: string;
  "statusBarItem.offlineHoverForeground"?: string;
  "statusBarItem.prominentBackground"?: string;
  "statusBarItem.prominentForeground"?: string;
  "statusBarItem.prominentHoverBackground"?: string;
  "statusBarItem.prominentHoverForeground"?: string;
  "statusBarItem.remoteBackground"?: string;
  "statusBarItem.remoteForeground"?: string;
  "statusBarItem.remoteHoverBackground"?: string;
  "statusBarItem.remoteHoverForeground"?: string;
  "statusBarItem.warningBackground"?: string;
  "statusBarItem.warningForeground"?: string;
  "statusBarItem.warningHoverBackground"?: string;
  "statusBarItem.warningHoverForeground"?: string;

  // Symbol Icons
  "symbolIcon.arrayForeground"?: string;
  "symbolIcon.booleanForeground"?: string;
  "symbolIcon.classForeground"?: string;
  "symbolIcon.colorForeground"?: string;
  "symbolIcon.constantForeground"?: string;
  "symbolIcon.constructorForeground"?: string;
  "symbolIcon.enumeratorForeground"?: string;
  "symbolIcon.enumeratorMemberForeground"?: string;
  "symbolIcon.eventForeground"?: string;
  "symbolIcon.fieldForeground"?: string;
  "symbolIcon.fileForeground"?: string;
  "symbolIcon.folderForeground"?: string;
  "symbolIcon.functionForeground"?: string;
  "symbolIcon.interfaceForeground"?: string;
  "symbolIcon.keyForeground"?: string;
  "symbolIcon.keywordForeground"?: string;
  "symbolIcon.methodForeground"?: string;
  "symbolIcon.moduleForeground"?: string;
  "symbolIcon.namespaceForeground"?: string;
  "symbolIcon.nullForeground"?: string;
  "symbolIcon.numberForeground"?: string;
  "symbolIcon.objectForeground"?: string;
  "symbolIcon.operatorForeground"?: string;
  "symbolIcon.packageForeground"?: string;
  "symbolIcon.propertyForeground"?: string;
  "symbolIcon.referenceForeground"?: string;
  "symbolIcon.snippetForeground"?: string;
  "symbolIcon.stringForeground"?: string;
  "symbolIcon.structForeground"?: string;
  "symbolIcon.textForeground"?: string;
  "symbolIcon.typeParameterForeground"?: string;
  "symbolIcon.unitForeground"?: string;
  "symbolIcon.variableForeground"?: string;

  // Tab
  "tab.activeBackground"?: string;
  "tab.activeBorder"?: string;
  "tab.activeBorderTop"?: string;
  "tab.activeForeground"?: string;
  "tab.activeModifiedBorder"?: string;
  "tab.border"?: string;
  "tab.dragAndDropBorder"?: string;
  "tab.hoverBackground"?: string;
  "tab.hoverBorder"?: string;
  "tab.hoverForeground"?: string;
  "tab.inactiveBackground"?: string;
  "tab.inactiveForeground"?: string;
  "tab.inactiveModifiedBorder"?: string;
  "tab.lastPinnedBorder"?: string;
  "tab.selectedBackground"?: string;
  "tab.selectedBorderTop"?: string;
  "tab.selectedForeground"?: string;
  "tab.unfocusedActiveBackground"?: string;
  "tab.unfocusedActiveBorder"?: string;
  "tab.unfocusedActiveBorderTop"?: string;
  "tab.unfocusedActiveForeground"?: string;
  "tab.unfocusedActiveModifiedBorder"?: string;
  "tab.unfocusedHoverBackground"?: string;
  "tab.unfocusedHoverBorder"?: string;
  "tab.unfocusedHoverForeground"?: string;
  "tab.unfocusedInactiveForeground"?: string;
  "tab.unfocusedInactiveModifiedBorder"?: string;

  // Terminal
  "terminal.ansiBlack"?: string;
  "terminal.ansiBlue"?: string;
  "terminal.ansiBrightBlack"?: string;
  "terminal.ansiBrightBlue"?: string;
  "terminal.ansiBrightCyan"?: string;
  "terminal.ansiBrightGreen"?: string;
  "terminal.ansiBrightMagenta"?: string;
  "terminal.ansiBrightRed"?: string;
  "terminal.ansiBrightWhite"?: string;
  "terminal.ansiBrightYellow"?: string;
  "terminal.ansiCyan"?: string;
  "terminal.ansiGreen"?: string;
  "terminal.ansiMagenta"?: string;
  "terminal.ansiRed"?: string;
  "terminal.ansiWhite"?: string;
  "terminal.ansiYellow"?: string;
  "terminal.background"?: string;
  "terminal.border"?: string;
  "terminal.dropBackground"?: string;
  "terminal.findMatchBackground"?: string;
  "terminal.findMatchBorder"?: string;
  "terminal.findMatchHighlightBackground"?: string;
  "terminal.findMatchHighlightBorder"?: string;
  "terminal.foreground"?: string;
  "terminal.hoverHighlightBackground"?: string;
  "terminal.inactiveSelectionBackground"?: string;
  "terminal.initialHintForeground"?: string;
  "terminal.selectionBackground"?: string;
  "terminal.selectionForeground"?: string;
  "terminal.tab.activeBorder"?: string;
  "terminalCommandDecoration.defaultBackground"?: string;
  "terminalCommandDecoration.errorBackground"?: string;
  "terminalCommandDecoration.successBackground"?: string;
  "terminalCommandGuide.foreground"?: string;
  "terminalCursor.background"?: string;
  "terminalCursor.foreground"?: string;
  "terminalOverviewRuler.border"?: string;
  "terminalOverviewRuler.cursorForeground"?: string;
  "terminalOverviewRuler.findMatchForeground"?: string;
  "terminalStickyScroll.background"?: string;
  "terminalStickyScroll.border"?: string;
  "terminalStickyScrollHover.background"?: string;
  "terminalSymbolIcon.aliasForeground"?: string;
  "terminalSymbolIcon.argumentForeground"?: string;
  "terminalSymbolIcon.fileForeground"?: string;
  "terminalSymbolIcon.flagForeground"?: string;
  "terminalSymbolIcon.folderForeground"?: string;
  "terminalSymbolIcon.inlineSuggestionForeground"?: string;
  "terminalSymbolIcon.methodForeground"?: string;
  "terminalSymbolIcon.optionForeground"?: string;
  "terminalSymbolIcon.optionValueForeground"?: string;

  // Testing
  "testing.coverCountBadgeBackground"?: string;
  "testing.coverCountBadgeForeground"?: string;
  "testing.coveredBackground"?: string;
  "testing.coveredBorder"?: string;
  "testing.coveredGutterBackground"?: string;
  "testing.iconErrored"?: string;
  "testing.iconErrored.retired"?: string;
  "testing.iconFailed"?: string;
  "testing.iconFailed.retired"?: string;
  "testing.iconPassed"?: string;
  "testing.iconPassed.retired"?: string;
  "testing.iconQueued"?: string;
  "testing.iconQueued.retired"?: string;
  "testing.iconSkipped"?: string;
  "testing.iconSkipped.retired"?: string;
  "testing.iconUnset"?: string;
  "testing.iconUnset.retired"?: string;
  "testing.message.error.badgeBackground"?: string;
  "testing.message.error.badgeBorder"?: string;
  "testing.message.error.badgeForeground"?: string;
  "testing.message.error.lineBackground"?: string;
  "testing.message.info.decorationForeground"?: string;
  "testing.message.info.lineBackground"?: string;
  "testing.messagePeekBorder"?: string;
  "testing.messagePeekHeaderBackground"?: string;
  "testing.peekBorder"?: string;
  "testing.peekHeaderBackground"?: string;
  "testing.runAction"?: string;
  "testing.uncoveredBackground"?: string;
  "testing.uncoveredBorder"?: string;
  "testing.uncoveredBranchBackground"?: string;
  "testing.uncoveredGutterBackground"?: string;

  // Text
  "textBlockQuote.background"?: string;
  "textBlockQuote.border"?: string;
  "textCodeBlock.background"?: string;
  "textLink.activeForeground"?: string;
  "textLink.foreground"?: string;
  "textPreformat.background"?: string;
  "textPreformat.foreground"?: string;
  "textSeparator.foreground"?: string;

  // TitleBar
  "titleBar.activeBackground"?: string;
  "titleBar.activeForeground"?: string;
  "titleBar.border"?: string;
  "titleBar.inactiveBackground"?: string;
  "titleBar.inactiveForeground"?: string;

  // Toolbar
  "toolbar.activeBackground"?: string;
  "toolbar.hoverBackground"?: string;
  "toolbar.hoverOutline"?: string;

  // Tree
  "tree.inactiveIndentGuidesStroke"?: string;
  "tree.indentGuidesStroke"?: string;
  "tree.tableColumnsBorder"?: string;
  "tree.tableOddRowsBackground"?: string;

  // WalkThrough
  "walkThrough.embeddedEditorBackground"?: string;
  "walkthrough.stepTitle.foreground"?: string;

  // WelcomePage
  "welcomePage.background"?: string;
  "welcomePage.progress.background"?: string;
  "welcomePage.progress.foreground"?: string;
  "welcomePage.tileBackground"?: string;
  "welcomePage.tileBorder"?: string;
  "welcomePage.tileHoverBackground"?: string;

  // Widget
  "widget.border"?: string;
  "widget.shadow"?: string;

  // Window
  "window.activeBorder"?: string;
  "window.inactiveBorder"?: string;
};
