/**
 * JetBrains Theme Type Definitions
 * These interfaces define the structure of JetBrains theme files
 *
 * References:
 * - https://plugins.jetbrains.com/docs/intellij/themes-customize.html
 * - https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html
 * - https://plugins.jetbrains.com/docs/intellij/themes-extras.html
 */

/**
 * Background image configuration
 */
export interface JetBrainsBackgroundConfig {
  anchor?: "bottom" | "center" | "top";
  fill?: "plain" | "scale" | "tile";
  image: string;
  transparency?: number;
}

/**
 * Icon color palette - maps original colors to new colors
 * Can also use Actions.* and Objects.* keys
 */
export interface JetBrainsIconColorPalette {
  // Standard color overrides (original color -> new color)
  [key: string]: string;
}

/**
 * Icon customization configuration
 */
export interface JetBrainsIconConfig {
  /**
   * Color palette overrides for icons
   */
  ColorPalette?: JetBrainsIconColorPalette;
}

export interface JetBrainsPluginExtension {
  dark: boolean;
  id: string;
  path: string;
}

/**
 * Plugin manifest structure for plugin.xml
 */
export interface JetBrainsPluginManifest {
  changeNotes?: string;
  depends: string[];
  description: string;
  extensions: JetBrainsPluginExtension[];
  id: string;
  name: string;
  vendor: {
    email: string;
    name: string;
    url: string;
  };
  version: string;
}

/**
 * Main JetBrains theme structure
 */
export interface JetBrainsTheme {
  /**
   * Author of the theme
   */
  author: string;

  /**
   * Background image configuration (optional)
   */
  background?: JetBrainsBackgroundConfig;

  /**
   * Named colors that can be referenced in UI
   */
  colors?: Record<string, string>;

  /**
   * Whether this is a dark theme
   */
  dark: boolean;

  /**
   * Path to the editor color scheme XML file (optional)
   */
  editorScheme?: string;

  /**
   * Empty frame background image configuration (optional)
   */
  emptyFrameBackground?: JetBrainsBackgroundConfig;

  /**
   * Icon customization
   */
  icons?: JetBrainsIconConfig;

  /**
   * Display name of the theme
   */
  name: string;

  /**
   * Parent theme to inherit from (for Islands theme support)
   * Use "Islands Dark" or "Islands Light"
   */
  parentTheme?: string;

  /**
   * UI component colors
   */
  ui: JetBrainsUiColors;
}

/**
 * UI component colors for JetBrains themes
 * Keys follow the pattern: Component.property
 *
 * This is a partial list - JetBrains supports hundreds of UI keys.
 * See: https://plugins.jetbrains.com/docs/intellij/themes-customize.html
 */
export interface JetBrainsUiColors {
  // Wildcard defaults
  "*"?: JetBrainsWildcardColors;

  // Action Button
  "ActionButton.hoverBackground"?: string;
  "ActionButton.hoverBorderColor"?: string;
  "ActionButton.pressedBackground"?: string;
  "ActionButton.pressedBorderColor"?: string;

  // Banner
  "Banner.errorBackground"?: string;
  "Banner.errorBorderColor"?: string;
  "Banner.infoBackground"?: string;
  "Banner.infoBorderColor"?: string;
  "Banner.successBackground"?: string;
  "Banner.successBorderColor"?: string;
  "Banner.warningBackground"?: string;
  "Banner.warningBorderColor"?: string;

  // Borders
  "Borders.color"?: string;
  "Borders.ContrastBorderColor"?: string;

  // Button
  "Button.arc"?: number;
  "Button.default.endBackground"?: string;
  "Button.default.focusColor"?: string;
  "Button.default.focusedBorderColor"?: string;
  "Button.default.foreground"?: string;
  "Button.default.shadowColor"?: string;
  "Button.default.startBackground"?: string;
  "Button.disabledText"?: string;
  "Button.endBackground"?: string;
  "Button.focusedBorderColor"?: string;
  "Button.foreground"?: string;
  "Button.shadowColor"?: string;
  "Button.startBackground"?: string;

  // Checkbox
  "Checkbox.Background.Default"?: string;
  "Checkbox.Background.Disabled"?: string;
  "Checkbox.Background.Selected"?: string;
  "Checkbox.Border.Default"?: string;
  "Checkbox.Border.Disabled"?: string;
  "Checkbox.Border.Selected"?: string;
  "Checkbox.Focus.Thin.Default"?: string;
  "Checkbox.Focus.Thin.Selected"?: string;
  "Checkbox.Focus.Wide"?: string;
  "Checkbox.Foreground.Disabled"?: string;
  "Checkbox.Foreground.Selected"?: string;

  // ComboBox
  "ComboBox.ArrowButton.background"?: string;
  "ComboBox.ArrowButton.disabledIconColor"?: string;
  "ComboBox.ArrowButton.iconColor"?: string;
  "ComboBox.ArrowButton.nonEditableBackground"?: string;
  "ComboBox.background"?: string;
  "ComboBox.disabledBackground"?: string;
  "ComboBox.disabledForeground"?: string;
  "ComboBox.foreground"?: string;
  "ComboBox.modifiedItemForeground"?: string;
  "ComboBox.nonEditableBackground"?: string;
  "ComboBox.selectionBackground"?: string;
  "ComboBox.selectionForeground"?: string;

  // CompletionPopup
  "CompletionPopup.background"?: string;
  "CompletionPopup.foreground"?: string;
  "CompletionPopup.matchForeground"?: string;
  "CompletionPopup.selectionBackground"?: string;
  "CompletionPopup.selectionForeground"?: string;
  "CompletionPopup.selectionInactiveBackground"?: string;
  "CompletionPopup.selectionInfoForeground"?: string;

  // Counter
  "Counter.background"?: string;
  "Counter.foreground"?: string;

  // Debugger
  "Debugger.Variables.collectingDataForeground"?: string;
  "Debugger.Variables.errorMessageForeground"?: string;
  "Debugger.Variables.evaluatingExpressionForeground"?: string;
  "Debugger.Variables.modifyingValueForeground"?: string;
  "Debugger.Variables.type"?: string;

  // DefaultTabs (for all tabs except TabbedPane)
  "DefaultTabs.background"?: string;
  "DefaultTabs.borderColor"?: string;
  "DefaultTabs.hoverBackground"?: string;
  "DefaultTabs.inactiveColoredFileBackground"?: string;
  "DefaultTabs.inactiveMaskColor"?: string;
  "DefaultTabs.underlineColor"?: string;
  "DefaultTabs.underlinedTabBackground"?: string;
  "DefaultTabs.underlinedTabForeground"?: string;
  "DefaultTabs.underlineHeight"?: number;

  // DragAndDrop
  "DragAndDrop.areaBackground"?: string;
  "DragAndDrop.areaBorderColor"?: string;
  "DragAndDrop.areaForeground"?: string;

  // Editor
  "Editor.background"?: string;
  "Editor.foreground"?: string;
  "Editor.SearchField.background"?: string;

  // EditorPane
  "EditorPane.background"?: string;

  // EditorTabs
  "EditorTabs.background"?: string;
  "EditorTabs.borderColor"?: string;
  "EditorTabs.hoverBackground"?: string;
  "EditorTabs.inactiveColoredFileBackground"?: string;
  "EditorTabs.inactiveMaskColor"?: string;
  "EditorTabs.inactiveUnderlineColor"?: string;
  "EditorTabs.inactiveUnderlinedTabBackground"?: string;
  "EditorTabs.underlineArc"?: number;
  "EditorTabs.underlineColor"?: string;
  "EditorTabs.underlinedTabBackground"?: string;
  "EditorTabs.underlinedTabForeground"?: string;
  "EditorTabs.underlineHeight"?: number;

  // FileColor
  "FileColor.Blue"?: string;
  "FileColor.Green"?: string;
  "FileColor.Orange"?: string;
  "FileColor.Rose"?: string;
  "FileColor.Violet"?: string;
  "FileColor.Yellow"?: string;

  // Focus
  "Focus.borderColor"?: string;
  "Focus.color"?: string;

  // Git
  "Git.Log.Ref.LocalBranch"?: string;
  "Git.Log.Ref.Other"?: string;
  "Git.Log.Ref.RemoteBranch"?: string;
  "Git.Log.Ref.Tag"?: string;

  // Group
  "Group.disabledSeparatorColor"?: string;
  "Group.separatorColor"?: string;

  // GutterTooltip
  "GutterTooltip.backgroundColor"?: string;
  "GutterTooltip.borderColor"?: string;
  "GutterTooltip.lineSeparatorColor"?: string;

  // InfoPanel
  "InfoPanel.background"?: string;
  "InfoPanel.foreground"?: string;

  // InplaceRefactoringPopup
  "InplaceRefactoringPopup.borderColor"?: string;

  // Islands (for Islands theme support)
  "Island.arc"?: number;
  "Island.arc.compact"?: number;
  "Island.borderColor"?: string;
  "Island.borderWidth"?: number;
  "Island.borderWidth.compact"?: number;
  "Island.inactiveAlpha"?: number;
  Islands?: number;

  // Label
  "Label.background"?: string;
  "Label.disabledForeground"?: string;
  "Label.errorForeground"?: string;
  "Label.foreground"?: string;
  "Label.infoForeground"?: string;
  "Label.selectedDisabledForeground"?: string;
  "Label.selectedForeground"?: string;
  "Label.successForeground"?: string;
  "Label.warningForeground"?: string;

  // Link
  "Link.activeForeground"?: string;
  "Link.hoverForeground"?: string;
  "Link.pressedForeground"?: string;
  "Link.secondaryForeground"?: string;
  "Link.visitedForeground"?: string;

  // List
  "List.background"?: string;
  "List.foreground"?: string;
  "List.hoverBackground"?: string;
  "List.selectionBackground"?: string;
  "List.selectionForeground"?: string;
  "List.selectionInactiveBackground"?: string;
  "List.selectionInactiveForeground"?: string;

  // MainMenu
  "MainMenu.background"?: string;
  "MainMenu.borderColor"?: string;
  "MainMenu.disabledForeground"?: string;
  "MainMenu.foreground"?: string;
  "MainMenu.selectionBackground"?: string;
  "MainMenu.selectionForeground"?: string;

  // MainToolbar
  "MainToolbar.background"?: string;
  "MainToolbar.borderColor"?: string;
  "MainToolbar.Dropdown.background"?: string;
  "MainToolbar.Dropdown.hoverBackground"?: string;
  "MainToolbar.Icon.hoverBackground"?: string;
  "MainToolbar.Icon.pressedBackground"?: string;
  "MainToolbar.inactiveBackground"?: string;
  "MainToolbar.separatorColor"?: string;
  "MainWindow.background"?: string;
  "MainWindow.Tab.background"?: string;
  "MainWindow.Tab.foreground"?: string;
  "MainWindow.Tab.hoverBackground"?: string;
  "MainWindow.Tab.inactiveUnderlineColor"?: string;
  "MainWindow.Tab.selectedBackground"?: string;
  "MainWindow.Tab.underlineColor"?: string;
  "MainWindow.Tab.underlineHeight"?: number;

  // MemoryIndicator
  "MemoryIndicator.allocatedBackground"?: string;
  "MemoryIndicator.usedBackground"?: string;

  // Menu
  "Menu.acceleratorForeground"?: string;
  "Menu.acceleratorSelectionForeground"?: string;
  "Menu.background"?: string;
  "Menu.borderColor"?: string;
  "Menu.disabledForeground"?: string;
  "Menu.foreground"?: string;
  "Menu.selectionBackground"?: string;
  "Menu.selectionForeground"?: string;
  "Menu.separatorColor"?: string;

  // MenuItem
  "MenuItem.acceleratorForeground"?: string;
  "MenuItem.acceleratorSelectionForeground"?: string;
  "MenuItem.background"?: string;
  "MenuItem.disabledForeground"?: string;
  "MenuItem.foreground"?: string;
  "MenuItem.selectionBackground"?: string;
  "MenuItem.selectionForeground"?: string;

  // NavBar
  "NavBar.background"?: string;
  "NavBar.borderColor"?: string;

  // NewUI (for new UI components)
  "NewUI.activeBackground"?: string;

  // NotificationError
  "Notification.background"?: string;
  "Notification.borderColor"?: string;
  "Notification.errorBackground"?: string;
  "Notification.errorBorderColor"?: string;
  "Notification.errorForeground"?: string;
  "Notification.foreground"?: string;
  "Notification.linkForeground"?: string;
  "Notification.MoreButton.background"?: string;
  "Notification.MoreButton.foreground"?: string;
  "Notification.ToolWindow.errorBackground"?: string;
  "Notification.ToolWindow.errorBorderColor"?: string;
  "Notification.ToolWindow.informativeBackground"?: string;
  "Notification.ToolWindow.informativeBorderColor"?: string;
  "Notification.ToolWindow.warningBackground"?: string;
  "Notification.ToolWindow.warningBorderColor"?: string;

  // Panel
  "Panel.background"?: string;
  "Panel.foreground"?: string;

  // ParameterInfo
  "ParameterInfo.background"?: string;
  "ParameterInfo.borderColor"?: string;
  "ParameterInfo.currentOverloadBackground"?: string;
  "ParameterInfo.currentParameterForeground"?: string;
  "ParameterInfo.disabledForeground"?: string;
  "ParameterInfo.foreground"?: string;

  // Plugins
  "Plugins.Button.installBackground"?: string;
  "Plugins.Button.installBorderColor"?: string;
  "Plugins.Button.installFillBackground"?: string;
  "Plugins.Button.installFillForeground"?: string;
  "Plugins.Button.installFocusedBackground"?: string;
  "Plugins.Button.installForeground"?: string;
  "Plugins.Button.updateBackground"?: string;
  "Plugins.Button.updateBorderColor"?: string;
  "Plugins.Button.updateForeground"?: string;
  "Plugins.disabledForeground"?: string;
  "Plugins.eapTagBackground"?: string;
  "Plugins.eapTagForeground"?: string;
  "Plugins.hoverBackground"?: string;
  "Plugins.lightSelectionBackground"?: string;
  "Plugins.paidTagBackground"?: string;
  "Plugins.paidTagForeground"?: string;
  "Plugins.SearchField.background"?: string;
  "Plugins.SearchField.borderColor"?: string;
  "Plugins.SectionHeader.background"?: string;
  "Plugins.SectionHeader.foreground"?: string;
  "Plugins.Tab.hoverBackground"?: string;
  "Plugins.Tab.selectedBackground"?: string;
  "Plugins.Tab.selectedForeground"?: string;
  "Plugins.tagBackground"?: string;
  "Plugins.tagForeground"?: string;
  "Plugins.trialTagBackground"?: string;
  "Plugins.trialTagForeground"?: string;

  // Popup
  "Popup.Advertiser.background"?: string;
  "Popup.Advertiser.borderColor"?: string;
  "Popup.Advertiser.borderInsets"?: string;
  "Popup.Advertiser.foreground"?: string;
  "Popup.background"?: string;
  "Popup.borderColor"?: string;
  "Popup.Header.activeBackground"?: string;
  "Popup.Header.inactiveBackground"?: string;
  "Popup.inactiveBorderColor"?: string;
  "Popup.Separator.foreground"?: string;
  "Popup.Toolbar.background"?: string;
  "Popup.Toolbar.borderColor"?: string;

  // PopupMenu
  "PopupMenu.background"?: string;
  "PopupMenu.foreground"?: string;
  "PopupMenu.selectionBackground"?: string;
  "PopupMenu.selectionForeground"?: string;
  "PopupMenu.translucentBackground"?: string;

  // ProgressBar
  "ProgressBar.backgroundColor"?: string;
  "ProgressBar.failedColor"?: string;
  "ProgressBar.failedEndColor"?: string;
  "ProgressBar.foreground"?: string;
  "ProgressBar.indeterminateEndColor"?: string;
  "ProgressBar.indeterminateStartColor"?: string;
  "ProgressBar.passedColor"?: string;
  "ProgressBar.passedEndColor"?: string;
  "ProgressBar.progressColor"?: string;
  "ProgressBar.selectionBackground"?: string;
  "ProgressBar.selectionForeground"?: string;
  "ProgressBar.trackColor"?: string;

  // RunWidget
  "RunWidget.background"?: string;
  "RunWidget.foreground"?: string;
  "RunWidget.hoverBackground"?: string;
  "RunWidget.iconColor"?: string;
  "RunWidget.runningBackground"?: string;
  "RunWidget.runningForeground"?: string;
  "RunWidget.runningHoverBackground"?: string;
  "RunWidget.runningIconColor"?: string;
  "RunWidget.stopBackground"?: string;
  "RunWidget.stopForeground"?: string;
  "RunWidget.stopHoverBackground"?: string;

  // ScrollBar
  "ScrollBar.background"?: string;
  "ScrollBar.hoverThumbColor"?: string;
  "ScrollBar.hoverTrackColor"?: string;
  "ScrollBar.Mac.hoverThumbBorderColor"?: string;
  "ScrollBar.Mac.hoverThumbColor"?: string;
  "ScrollBar.Mac.hoverTrackColor"?: string;
  "ScrollBar.Mac.thumbBorderColor"?: string;
  "ScrollBar.Mac.thumbColor"?: string;
  "ScrollBar.Mac.trackColor"?: string;
  "ScrollBar.Mac.Transparent.hoverThumbBorderColor"?: string;
  "ScrollBar.Mac.Transparent.hoverThumbColor"?: string;
  "ScrollBar.Mac.Transparent.hoverTrackColor"?: string;
  "ScrollBar.Mac.Transparent.thumbBorderColor"?: string;
  "ScrollBar.Mac.Transparent.thumbColor"?: string;
  "ScrollBar.Mac.Transparent.trackColor"?: string;
  "ScrollBar.thumbColor"?: string;
  "ScrollBar.track"?: string;
  "ScrollBar.trackColor"?: string;
  "ScrollBar.Transparent.hoverThumbColor"?: string;
  "ScrollBar.Transparent.hoverTrackColor"?: string;
  "ScrollBar.Transparent.thumbColor"?: string;
  "ScrollBar.Transparent.trackColor"?: string;

  // SearchEverywhere
  "SearchEverywhere.Advertiser.background"?: string;
  "SearchEverywhere.Advertiser.foreground"?: string;
  "SearchEverywhere.background"?: string;
  "SearchEverywhere.Header.background"?: string;
  "SearchEverywhere.List.separatorColor"?: string;
  "SearchEverywhere.List.separatorForeground"?: string;
  "SearchEverywhere.SearchField.background"?: string;
  "SearchEverywhere.SearchField.borderColor"?: string;
  "SearchEverywhere.Tab.selectedBackground"?: string;
  "SearchEverywhere.Tab.selectedForeground"?: string;

  // SearchField
  "SearchField.background"?: string;
  "SearchField.errorBackground"?: string;
  "SearchField.errorForeground"?: string;

  // SearchMatch
  "SearchMatch.endBackground"?: string;
  "SearchMatch.endForeground"?: string;
  "SearchMatch.startBackground"?: string;
  "SearchMatch.startForeground"?: string;

  // SearchOption
  "SearchOption.background"?: string;
  "SearchOption.selectedBackground"?: string;

  // SegmentedButton
  "SegmentedButton.focusedSelectedButtonColor"?: string;
  "SegmentedButton.selectedButtonColor"?: string;
  "SegmentedButton.selectedEndBorderColor"?: string;
  "SegmentedButton.selectedStartBorderColor"?: string;

  // Separator
  "Separator.foreground"?: string;
  "Separator.separatorColor"?: string;

  // Settings
  "Settings.Spotlight.borderColor"?: string;

  // SidePanel
  "SidePanel.background"?: string;

  // Slider
  "Slider.background"?: string;
  "Slider.buttonBorderColor"?: string;
  "Slider.buttonColor"?: string;
  "Slider.tickColor"?: string;
  "Slider.trackColor"?: string;

  // SpeedSearch
  "SpeedSearch.background"?: string;
  "SpeedSearch.borderColor"?: string;
  "SpeedSearch.errorBackground"?: string;
  "SpeedSearch.errorBorderColor"?: string;
  "SpeedSearch.foreground"?: string;

  // Spinner
  "Spinner.background"?: string;

  // StatusBar
  "StatusBar.background"?: string;
  "StatusBar.borderColor"?: string;
  "StatusBar.hoverBackground"?: string;
  "StatusBar.Widget.hoverBackground"?: string;

  // TabbedPane
  "TabbedPane.background"?: string;
  "TabbedPane.borderColor"?: string;
  "TabbedPane.contentAreaColor"?: string;
  "TabbedPane.disabled"?: string;
  "TabbedPane.focus"?: string;
  "TabbedPane.focusColor"?: string;
  "TabbedPane.foreground"?: string;
  "TabbedPane.hoverColor"?: string;
  "TabbedPane.tabSelectionHeight"?: number;
  "TabbedPane.underlineColor"?: string;
  // Table
  "Table.alternateRowBackground"?: string;
  "Table.background"?: string;
  "Table.dropLineColor"?: string;
  "Table.focusCellBackground"?: string;
  "Table.foreground"?: string;
  "Table.gridColor"?: string;

  "Table.hoverBackground"?: string;
  "Table.lightSelectionBackground"?: string;
  "Table.lightSelectionForeground"?: string;
  "Table.lightSelectionInactiveBackground"?: string;
  "Table.lightSelectionInactiveForeground"?: string;
  "Table.selectionBackground"?: string;
  "Table.selectionForeground"?: string;
  "Table.selectionInactiveBackground"?: string;
  "Table.selectionInactiveForeground"?: string;
  "Table.stripeColor"?: string;

  // Tag
  "Tag.background"?: string;
  "Tag.foreground"?: string;

  // TextArea
  "TextArea.background"?: string;
  "TextArea.caretForeground"?: string;
  "TextArea.foreground"?: string;
  "TextArea.inactiveBackground"?: string;
  "TextArea.inactiveForeground"?: string;
  "TextArea.selectionBackground"?: string;
  "TextArea.selectionForeground"?: string;

  // TextField
  "TextField.background"?: string;
  "TextField.borderColor"?: string;
  "TextField.caretForeground"?: string;
  "TextField.disabledBackground"?: string;
  "TextField.focusedBorderColor"?: string;
  "TextField.foreground"?: string;
  "TextField.highlight"?: string;
  "TextField.hoverBorderColor"?: string;
  "TextField.inactiveBackground"?: string;
  "TextField.inactiveForeground"?: string;
  "TextField.placeholderForeground"?: string;
  "TextField.selectionBackground"?: string;
  "TextField.selectionForeground"?: string;

  // TitlePane
  "TitlePane.background"?: string;
  "TitlePane.Button.hoverBackground"?: string;
  "TitlePane.foreground"?: string;
  "TitlePane.fullScreen.background"?: string;
  "TitlePane.inactiveBackground"?: string;
  "TitlePane.inactiveForeground"?: string;
  "TitlePane.infoForeground"?: string;

  // ToggleButton
  "ToggleButton.background"?: string;
  "ToggleButton.borderColor"?: string;
  "ToggleButton.buttonColor"?: string;
  "ToggleButton.disabledBorderColor"?: string;
  "ToggleButton.offBackground"?: string;
  "ToggleButton.offForeground"?: string;
  "ToggleButton.onBackground"?: string;
  "ToggleButton.onForeground"?: string;

  // ToolBar
  "ToolBar.background"?: string;
  "ToolBar.borderHandleColor"?: string;
  "ToolBar.floatingBackground"?: string;
  "ToolBar.foreground"?: string;
  "ToolBar.separatorColor"?: string;

  // ToolTip
  "ToolTip.Actions.background"?: string;
  "ToolTip.Actions.foreground"?: string;
  "ToolTip.Actions.Info.foreground"?: string;
  "ToolTip.background"?: string;
  "ToolTip.borderColor"?: string;
  "ToolTip.foreground"?: string;
  "ToolTip.infoForeground"?: string;
  "ToolTip.separatorColor"?: string;
  "ToolTip.shortcutForeground"?: string;

  // ToolWindow
  "ToolWindow.background"?: string;
  "ToolWindow.Button.hoverBackground"?: string;
  "ToolWindow.Button.selectedBackground"?: string;
  "ToolWindow.Button.selectedForeground"?: string;
  "ToolWindow.Header.background"?: string;
  "ToolWindow.Header.borderColor"?: string;
  "ToolWindow.Header.closeButton.background"?: string;
  "ToolWindow.Header.inactiveBackground"?: string;
  "ToolWindow.HeaderCloseButton.background"?: string;
  "ToolWindow.HeaderTab.hoverBackground"?: string;
  "ToolWindow.HeaderTab.hoverInactiveBackground"?: string;
  "ToolWindow.HeaderTab.selectedBackground"?: string;
  "ToolWindow.HeaderTab.selectedInactiveBackground"?: string;
  "ToolWindow.HeaderTab.underlineColor"?: string;
  "ToolWindow.HeaderTab.underlinedTabBackground"?: string;
  "ToolWindow.HeaderTab.underlinedTabForeground"?: string;
  "ToolWindow.HeaderTab.underlinedTabInactiveBackground"?: string;
  "ToolWindow.HeaderTab.underlinedTabInactiveForeground"?: string;
  "ToolWindow.HeaderTab.underlineHeight"?: number;
  "ToolWindow.Stripe.background"?: string;
  "ToolWindow.Stripe.borderColor"?: string;

  // Tree
  "Tree.background"?: string;
  "Tree.errorForeground"?: string;
  "Tree.foreground"?: string;
  "Tree.hoverBackground"?: string;
  "Tree.modifiedItemForeground"?: string;
  "Tree.rowHeight"?: number;
  "Tree.selectionBackground"?: string;
  "Tree.selectionForeground"?: string;
  "Tree.selectionInactiveBackground"?: string;

  // ValidationTooltip
  "ValidationTooltip.errorBackground"?: string;
  "ValidationTooltip.errorBorderColor"?: string;
  "ValidationTooltip.warningBackground"?: string;
  "ValidationTooltip.warningBorderColor"?: string;

  // VersionControl
  "VersionControl.FileHistory.Commit.otherBranchBackground"?: string;
  "VersionControl.FileHistory.Commit.selectedBranchBackground"?: string;
  "VersionControl.GitCommits.graphColor"?: string;
  "VersionControl.GitLog.headIconColor"?: string;
  "VersionControl.GitLog.localBranchIconColor"?: string;
  "VersionControl.GitLog.otherIconColor"?: string;
  "VersionControl.GitLog.remoteBranchIconColor"?: string;
  "VersionControl.GitLog.tagIconColor"?: string;
  "VersionControl.HgLog.bookmarkIconColor"?: string;
  "VersionControl.HgLog.branchIconColor"?: string;
  "VersionControl.HgLog.closedBranchIconColor"?: string;
  "VersionControl.HgLog.headIconColor"?: string;
  "VersionControl.HgLog.localTagIconColor"?: string;
  "VersionControl.HgLog.mqTagIconColor"?: string;
  "VersionControl.HgLog.tagIconColor"?: string;
  "VersionControl.HgLog.tipIconColor"?: string;
  "VersionControl.Log.Commit.currentBranchBackground"?: string;
  "VersionControl.Log.Commit.hoveredBackground"?: string;
  "VersionControl.Log.Commit.unmatchedForeground"?: string;
  "VersionControl.Ref.background"?: string;
  "VersionControl.Ref.backgroundBase"?: string;
  "VersionControl.RefLabel.background"?: string;
  "VersionControl.RefLabel.backgroundBase"?: string;
  "VersionControl.RefLabel.foreground"?: string;

  // WelcomeScreen
  "WelcomeScreen.background"?: string;
  "WelcomeScreen.borderColor"?: string;
  "WelcomeScreen.captionBackground"?: string;
  "WelcomeScreen.captionForeground"?: string;
  "WelcomeScreen.Details.background"?: string;
  "WelcomeScreen.footerBackground"?: string;
  "WelcomeScreen.footerForeground"?: string;
  "WelcomeScreen.groupIconBorderColor"?: string;
  "WelcomeScreen.headerBackground"?: string;
  "WelcomeScreen.headerForeground"?: string;
  "WelcomeScreen.Projects.actions.background"?: string;
  "WelcomeScreen.Projects.actions.selectionBackground"?: string;
  "WelcomeScreen.Projects.background"?: string;
  "WelcomeScreen.Projects.selectionBackground"?: string;
  "WelcomeScreen.Projects.selectionInactiveBackground"?: string;
  "WelcomeScreen.separatorColor"?: string;
  "WelcomeScreen.SidePanel.background"?: string;

  // Window
  "Window.border"?: string;
  "window.border"?: string;
}

/**
 * Wildcard colors (applied to all components)
 */
export interface JetBrainsWildcardColors {
  acceleratorForeground?: string;
  acceleratorSelectionForeground?: string;
  background?: string;
  borderColor?: string;
  caretForeground?: string;
  disabledBackground?: string;
  disabledBorderColor?: string;
  disabledForeground?: string;
  disabledText?: string;
  errorBorderColor?: string;
  errorForeground?: string;
  focusColor?: string;
  focusedBorderColor?: string;
  foreground?: string;
  hoverBackground?: string;
  hoverBorderColor?: string;
  inactiveBackground?: string;
  inactiveForeground?: string;
  infoForeground?: string;
  lightSelectionBackground?: string;
  lightSelectionForeground?: string;
  modifiedItemForeground?: string;
  pressedBackground?: string;
  pressedBorderColor?: string;
  selectionBackground?: string;
  selectionForeground?: string;
  selectionInactiveBackground?: string;
  selectionInactiveForeground?: string;
  separatorColor?: string;
  warningBorderColor?: string;
  warningForeground?: string;
}
