/**
 * JetBrains UI Color Mappings
 *
 * Maps Bearded Theme colors to JetBrains UI component colors.
 * Based on official JetBrains theme documentation:
 * - https://plugins.jetbrains.com/docs/intellij/themes-customize.html
 * - https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html
 */

import { colord as c } from "colord";

import { ThemeOptions } from "../../shared/theme-registry";
import { Theme } from "../../shared/types";
import { JetBrainsUiColors } from "./types";
import { transparent } from "./utils";

/**
 * Build JetBrains UI colors from a Bearded Theme
 *
 * @param theme - The source theme
 * @param options - Theme options (light, hc, etc.)
 * @returns JetBrains UI color configuration
 */
export function buildJetBrainsUiColors(
  theme: Theme,
  options: ThemeOptions,
): JetBrainsUiColors {
  const { hc, light } = options;
  const { colors, levels, ui } = theme;

  // Helper functions
  const alpha = (color: string, a: number): string =>
    c(color).alpha(a).toHex();

  const lightenOrDarken = (color: string, amount: number): string =>
    light ? c(color).darken(amount).toHex() : c(color).lighten(amount).toHex();

  const hoverBg = lightenOrDarken(ui.uibackground, 0.05);
  const selectedBg = alpha(ui.primary, 0.2);
  const activeBg = alpha(ui.primary, 0.3);
  const borderColor = ui.border;
  const inputBg = light
    ? c(ui.uibackground).lighten(0.02).toHex()
    : c(ui.uibackground).lighten(0.03).toHex();

  return {
    // Wildcard defaults (applied to all components)
    "*": {
      acceleratorForeground: ui.defaultalt,
      acceleratorSelectionForeground: ui.default,
      background: ui.uibackground,
      borderColor: borderColor,
      caretForeground: ui.primary,
      disabledBackground: alpha(ui.uibackground, 0.6),
      disabledBorderColor: alpha(borderColor, 0.5),
      disabledForeground: alpha(ui.default, 0.4),
      disabledText: alpha(ui.default, 0.4),
      errorBorderColor: levels.danger,
      errorForeground: levels.danger,
      focusColor: alpha(ui.primary, 0.5),
      focusedBorderColor: ui.primary,
      foreground: ui.default,
      hoverBackground: hoverBg,
      hoverBorderColor: lightenOrDarken(borderColor, 0.1),
      inactiveBackground: ui.uibackgroundalt,
      inactiveForeground: ui.defaultalt,
      infoForeground: levels.info,
      lightSelectionBackground: alpha(ui.primary, 0.15),
      lightSelectionForeground: ui.default,
      modifiedItemForeground: levels.info,
      pressedBackground: activeBg,
      pressedBorderColor: ui.primary,
      selectionBackground: selectedBg,
      selectionForeground: ui.default,
      selectionInactiveBackground: alpha(ui.primary, 0.1),
      selectionInactiveForeground: ui.default,
      separatorColor: borderColor,
      warningBorderColor: levels.warning,
      warningForeground: levels.warning,
    },

    // Action Button
    "ActionButton.hoverBackground": hoverBg,
    "ActionButton.hoverBorderColor": transparent(borderColor),
    "ActionButton.pressedBackground": activeBg,
    "ActionButton.pressedBorderColor": transparent(borderColor),

    // Banner
    "Banner.errorBackground": alpha(levels.danger, 0.15),
    "Banner.errorBorderColor": alpha(levels.danger, 0.5),
    "Banner.infoBackground": alpha(levels.info, 0.15),
    "Banner.infoBorderColor": alpha(levels.info, 0.5),
    "Banner.successBackground": alpha(levels.success, 0.15),
    "Banner.successBorderColor": alpha(levels.success, 0.5),
    "Banner.warningBackground": alpha(levels.warning, 0.15),
    "Banner.warningBorderColor": alpha(levels.warning, 0.5),

    // Borders
    "Borders.color": borderColor,
    "Borders.ContrastBorderColor": hc
      ? ui.default
      : lightenOrDarken(borderColor, 0.1),

    // Button
    "Button.arc": 6,
    "Button.default.endBackground": ui.primary,
    "Button.default.focusColor": alpha(ui.primary, 0.5),
    "Button.default.focusedBorderColor": c(ui.primary).lighten(0.2).toHex(),
    "Button.default.foreground": light
      ? "#FFFFFF"
      : c(ui.primary).isDark()
        ? "#FFFFFF"
        : "#000000",
    "Button.default.shadowColor": transparent(ui.uibackground),
    "Button.default.startBackground": ui.primary,
    "Button.disabledText": alpha(ui.default, 0.4),
    "Button.endBackground": ui.uibackgroundalt,
    "Button.focusedBorderColor": ui.primary,
    "Button.foreground": ui.default,
    "Button.shadowColor": transparent(ui.uibackground),
    "Button.startBackground": ui.uibackgroundalt,

    // Checkbox
    "Checkbox.Background.Default": inputBg,
    "Checkbox.Background.Disabled": alpha(inputBg, 0.5),
    "Checkbox.Background.Selected": ui.primary,
    "Checkbox.Border.Default": borderColor,
    "Checkbox.Border.Disabled": alpha(borderColor, 0.5),
    "Checkbox.Border.Selected": ui.primary,
    "Checkbox.Focus.Thin.Default": alpha(ui.primary, 0.5),
    "Checkbox.Focus.Thin.Selected": alpha(ui.primary, 0.5),
    "Checkbox.Focus.Wide": alpha(ui.primary, 0.3),
    "Checkbox.Foreground.Disabled": alpha(ui.default, 0.4),
    "Checkbox.Foreground.Selected": light
      ? "#FFFFFF"
      : c(ui.primary).isDark()
        ? "#FFFFFF"
        : "#000000",

    // ComboBox
    "ComboBox.ArrowButton.background": inputBg,
    "ComboBox.ArrowButton.disabledIconColor": alpha(ui.default, 0.3),
    "ComboBox.ArrowButton.iconColor": ui.defaultalt,
    "ComboBox.ArrowButton.nonEditableBackground": inputBg,
    "ComboBox.background": inputBg,
    "ComboBox.disabledBackground": alpha(inputBg, 0.5),
    "ComboBox.disabledForeground": alpha(ui.default, 0.4),
    "ComboBox.foreground": ui.default,
    "ComboBox.modifiedItemForeground": levels.info,
    "ComboBox.nonEditableBackground": inputBg,
    "ComboBox.selectionBackground": selectedBg,
    "ComboBox.selectionForeground": ui.default,

    // CompletionPopup
    "CompletionPopup.background": ui.uibackgroundmid,
    "CompletionPopup.foreground": ui.default,
    "CompletionPopup.matchForeground": ui.primary,
    "CompletionPopup.selectionBackground": selectedBg,
    "CompletionPopup.selectionForeground": ui.default,
    "CompletionPopup.selectionInactiveBackground": alpha(ui.primary, 0.1),
    "CompletionPopup.selectionInfoForeground": ui.defaultalt,

    // Counter
    "Counter.background": ui.primary,
    "Counter.foreground": light
      ? "#FFFFFF"
      : c(ui.primary).isDark()
        ? "#FFFFFF"
        : "#000000",

    // Debugger
    "Debugger.Variables.collectingDataForeground": ui.defaultalt,
    "Debugger.Variables.errorMessageForeground": levels.danger,
    "Debugger.Variables.evaluatingExpressionForeground": levels.info,
    "Debugger.Variables.modifyingValueForeground": levels.warning,
    "Debugger.Variables.type": colors.purple,

    // DefaultTabs
    "DefaultTabs.background": ui.uibackgroundalt,
    "DefaultTabs.borderColor": borderColor,
    "DefaultTabs.hoverBackground": hoverBg,
    "DefaultTabs.inactiveColoredFileBackground": transparent(ui.uibackground),
    "DefaultTabs.inactiveMaskColor": transparent(ui.uibackground),
    "DefaultTabs.underlineColor": ui.primary,
    "DefaultTabs.underlinedTabBackground": ui.uibackground,
    "DefaultTabs.underlinedTabForeground": ui.default,
    "DefaultTabs.underlineHeight": 3,

    // DragAndDrop
    "DragAndDrop.areaBackground": alpha(ui.primary, 0.1),
    "DragAndDrop.areaBorderColor": ui.primary,
    "DragAndDrop.areaForeground": ui.primary,

    // Editor
    "Editor.background": ui.uibackground,
    "Editor.foreground": ui.default,
    "Editor.SearchField.background": inputBg,

    // EditorPane
    "EditorPane.background": ui.uibackground,

    // EditorTabs
    "EditorTabs.background": ui.uibackgroundalt,
    "EditorTabs.borderColor": borderColor,
    "EditorTabs.hoverBackground": hoverBg,
    "EditorTabs.inactiveColoredFileBackground": transparent(ui.uibackground),
    "EditorTabs.inactiveMaskColor": transparent(ui.uibackground),
    "EditorTabs.inactiveUnderlineColor": alpha(ui.primary, 0.5),
    "EditorTabs.inactiveUnderlinedTabBackground": ui.uibackgroundmid,
    "EditorTabs.inactiveUnderlinedTabBorderColor": alpha(ui.primary, 0.5),
    "EditorTabs.underlineArc": 0,
    "EditorTabs.underlineColor": ui.primary,
    // Islands-specific tab colors
    "EditorTabs.underlinedBorderColor": ui.primary,
    "EditorTabs.underlinedTabBackground": ui.uibackground,

    "EditorTabs.underlinedTabForeground": ui.default,
    "EditorTabs.underlineHeight": 3,
    // FileColor
    "FileColor.Blue": alpha(colors.blue, 0.15),
    "FileColor.Green": alpha(colors.green, 0.15),
    "FileColor.Orange": alpha(colors.orange, 0.15),
    "FileColor.Rose": alpha(colors.pink, 0.15),

    "FileColor.Violet": alpha(colors.purple, 0.15),
    "FileColor.Yellow": alpha(colors.yellow, 0.15),

    // Focus
    "Focus.borderColor": ui.primary,
    "Focus.color": alpha(ui.primary, 0.5),
    // Git
    "Git.Log.Ref.LocalBranch": colors.green,
    "Git.Log.Ref.Other": colors.purple,

    "Git.Log.Ref.RemoteBranch": colors.turquoize,
    "Git.Log.Ref.Tag": colors.yellow,

    // Group
    "Group.disabledSeparatorColor": alpha(borderColor, 0.5),
    "Group.separatorColor": borderColor,
    // GutterTooltip
    "GutterTooltip.backgroundColor": ui.uibackgroundmid,

    "GutterTooltip.borderColor": borderColor,
    "GutterTooltip.lineSeparatorColor": borderColor,

    // InfoPanel
    "InfoPanel.background": ui.uibackgroundalt,

    "InfoPanel.foreground": ui.default,
    // InplaceRefactoringPopup
    "InplaceRefactoringPopup.borderColor": ui.primary,
    "Island.arc": 20,
    "Island.arc.compact": 16,
    "Island.borderColor": ui.uibackground,
    "Island.borderWidth": 5,
    "Island.borderWidth.compact": 4,
    "Island.inactiveAlpha": 0.44,
    // Islands Theme Support
    // See: https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html
    Islands: 1,

    // Label
    "Label.background": ui.uibackground,
    "Label.disabledForeground": alpha(ui.default, 0.4),
    "Label.errorForeground": levels.danger,
    "Label.foreground": ui.default,
    "Label.infoForeground": levels.info,

    "Label.selectedDisabledForeground": alpha(ui.default, 0.4),
    "Label.selectedForeground": ui.default,
    "Label.successForeground": levels.success,
    "Label.warningForeground": levels.warning,
    // Link
    "Link.activeForeground": c(ui.primary).lighten(0.1).toHex(),
    "Link.hoverForeground": c(ui.primary).lighten(0.1).toHex(),
    "Link.pressedForeground": c(ui.primary).darken(0.1).toHex(),

    "Link.secondaryForeground": ui.defaultalt,
    "Link.visitedForeground": colors.purple,
    // List
    "List.background": ui.uibackground,
    "List.foreground": ui.default,
    "List.hoverBackground": hoverBg,
    "List.selectionBackground": selectedBg,

    "List.selectionForeground": ui.default,
    "List.selectionInactiveBackground": alpha(ui.primary, 0.1),
    "List.selectionInactiveForeground": ui.default,
    // MainMenu
    "MainMenu.background": ui.uibackgroundalt,
    "MainMenu.borderColor": borderColor,
    "MainMenu.disabledForeground": alpha(ui.default, 0.4),
    "MainMenu.foreground": ui.default,
    "MainMenu.selectionBackground": selectedBg,
    "MainMenu.selectionForeground": ui.default,
    // MainToolbar
    "MainToolbar.background": ui.uibackgroundalt,
    "MainToolbar.borderColor": transparent(borderColor),
    "MainToolbar.Dropdown.background": ui.uibackgroundalt,
    "MainToolbar.Dropdown.hoverBackground": hoverBg,
    "MainToolbar.Icon.hoverBackground": hoverBg,
    "MainToolbar.Icon.pressedBackground": activeBg,
    "MainToolbar.inactiveBackground": ui.uibackgroundalt,

    "MainToolbar.separatorColor": borderColor,
    "MainWindow.background": lightenOrDarken(ui.uibackgroundalt, 0.05),

    "MainWindow.Tab.background": ui.uibackgroundalt,
    "MainWindow.Tab.foreground": ui.defaultalt,
    "MainWindow.Tab.hoverBackground": hoverBg,
    "MainWindow.Tab.inactiveUnderlineColor": alpha(ui.primary, 0.5),
    "MainWindow.Tab.selectedBackground": ui.uibackground,
    "MainWindow.Tab.underlineColor": ui.primary,
    "MainWindow.Tab.underlineHeight": 3,
    // MemoryIndicator
    "MemoryIndicator.allocatedBackground": alpha(ui.primary, 0.2),
    "MemoryIndicator.usedBackground": ui.primary,

    // Menu
    "Menu.acceleratorForeground": ui.defaultalt,
    "Menu.acceleratorSelectionForeground": ui.default,
    "Menu.background": ui.uibackgroundmid,
    "Menu.borderColor": borderColor,
    "Menu.disabledForeground": alpha(ui.default, 0.4),
    "Menu.foreground": ui.default,
    "Menu.selectionBackground": selectedBg,

    "Menu.selectionForeground": ui.default,
    "Menu.separatorColor": borderColor,

    // MenuItem
    "MenuItem.acceleratorForeground": ui.defaultalt,
    "MenuItem.acceleratorSelectionForeground": ui.default,
    "MenuItem.background": ui.uibackgroundmid,
    "MenuItem.disabledForeground": alpha(ui.default, 0.4),
    "MenuItem.foreground": ui.default,
    "MenuItem.selectionBackground": selectedBg,
    "MenuItem.selectionForeground": ui.default,
    // NavBar
    "NavBar.background": ui.uibackgroundalt,
    "NavBar.borderColor": borderColor,
    // Notification
    "Notification.background": ui.uibackgroundmid,
    "Notification.borderColor": borderColor,
    "Notification.errorBackground": alpha(levels.danger, 0.15),
    "Notification.errorBorderColor": levels.danger,
    "Notification.errorForeground": ui.default,
    "Notification.foreground": ui.default,

    "Notification.linkForeground": ui.primary,
    "Notification.MoreButton.background": ui.uibackgroundalt,

    "Notification.MoreButton.foreground": ui.default,
    "Notification.ToolWindow.errorBackground": alpha(levels.danger, 0.15),
    "Notification.ToolWindow.errorBorderColor": levels.danger,
    "Notification.ToolWindow.informativeBackground": alpha(levels.info, 0.15),
    "Notification.ToolWindow.informativeBorderColor": levels.info,
    "Notification.ToolWindow.warningBackground": alpha(levels.warning, 0.15),

    "Notification.ToolWindow.warningBorderColor": levels.warning,
    // Panel
    "Panel.background": ui.uibackground,
    "Panel.foreground": ui.default,
    // ParameterInfo
    "ParameterInfo.background": ui.uibackgroundmid,
    "ParameterInfo.borderColor": borderColor,
    "ParameterInfo.currentOverloadBackground": alpha(ui.primary, 0.1),
    "ParameterInfo.currentParameterForeground": ui.primary,
    "ParameterInfo.disabledForeground": alpha(ui.default, 0.4),
    "ParameterInfo.foreground": ui.default,
    // Plugins
    "Plugins.Button.installBackground": alpha(levels.success, 0.15),
    "Plugins.Button.installBorderColor": levels.success,
    "Plugins.Button.installFillBackground": levels.success,
    "Plugins.Button.installFillForeground": "#FFFFFF",
    "Plugins.Button.installFocusedBackground": alpha(levels.success, 0.25),
    "Plugins.Button.installForeground": levels.success,
    "Plugins.Button.updateBackground": alpha(ui.primary, 0.15),
    "Plugins.Button.updateBorderColor": ui.primary,
    "Plugins.Button.updateForeground": ui.primary,
    "Plugins.disabledForeground": alpha(ui.default, 0.4),
    "Plugins.eapTagBackground": alpha(colors.orange, 0.2),
    "Plugins.eapTagForeground": colors.orange,
    "Plugins.hoverBackground": hoverBg,
    "Plugins.lightSelectionBackground": alpha(ui.primary, 0.1),
    "Plugins.paidTagBackground": alpha(colors.green, 0.2),
    "Plugins.paidTagForeground": colors.green,
    "Plugins.SearchField.background": inputBg,
    "Plugins.SearchField.borderColor": borderColor,

    "Plugins.SectionHeader.background": ui.uibackgroundalt,
    "Plugins.SectionHeader.foreground": ui.default,
    "Plugins.Tab.hoverBackground": hoverBg,
    "Plugins.Tab.selectedBackground": selectedBg,
    "Plugins.Tab.selectedForeground": ui.default,
    "Plugins.tagBackground": alpha(ui.primary, 0.15),
    "Plugins.tagForeground": ui.primary,
    "Plugins.trialTagBackground": alpha(colors.purple, 0.2),
    "Plugins.trialTagForeground": colors.purple,
    // Popup
    "Popup.Advertiser.background": ui.uibackgroundalt,
    "Popup.Advertiser.borderColor": borderColor,
    "Popup.Advertiser.borderInsets": "1,1,1,1",

    "Popup.Advertiser.foreground": ui.defaultalt,
    "Popup.background": ui.uibackgroundmid,
    "Popup.borderColor": borderColor,
    "Popup.Header.activeBackground": ui.uibackgroundalt,
    "Popup.Header.inactiveBackground": ui.uibackgroundalt,

    "Popup.inactiveBorderColor": alpha(borderColor, 0.5),
    "Popup.Separator.foreground": borderColor,
    "Popup.Toolbar.background": ui.uibackgroundalt,
    "Popup.Toolbar.borderColor": borderColor,
    // PopupMenu
    "PopupMenu.background": ui.uibackgroundmid,
    "PopupMenu.foreground": ui.default,
    "PopupMenu.selectionBackground": selectedBg,
    "PopupMenu.selectionForeground": ui.default,
    "PopupMenu.translucentBackground": alpha(ui.uibackgroundmid, 0.95),
    // ProgressBar
    "ProgressBar.backgroundColor": ui.uibackgroundalt,
    "ProgressBar.failedColor": levels.danger,
    "ProgressBar.failedEndColor": c(levels.danger).lighten(0.1).toHex(),

    "ProgressBar.foreground": ui.primary,
    "ProgressBar.indeterminateEndColor": c(ui.primary).lighten(0.15).toHex(),
    "ProgressBar.indeterminateStartColor": ui.primary,
    "ProgressBar.passedColor": levels.success,
    "ProgressBar.passedEndColor": c(levels.success).lighten(0.1).toHex(),
    "ProgressBar.progressColor": ui.primary,
    "ProgressBar.selectionBackground": ui.uibackgroundalt,
    "ProgressBar.selectionForeground": ui.default,
    "ProgressBar.trackColor": ui.uibackgroundalt,
    // RunWidget
    "RunWidget.background": ui.uibackgroundalt,
    "RunWidget.foreground": ui.default,

    "RunWidget.hoverBackground": hoverBg,
    "RunWidget.iconColor": levels.success,
    "RunWidget.runningBackground": alpha(levels.success, 0.15),
    "RunWidget.runningForeground": ui.default,
    "RunWidget.runningHoverBackground": alpha(levels.success, 0.25),
    "RunWidget.runningIconColor": levels.success,
    "RunWidget.stopBackground": alpha(levels.danger, 0.15),
    "RunWidget.stopForeground": ui.default,
    "RunWidget.stopHoverBackground": alpha(levels.danger, 0.25),
    // ScrollBar
    "ScrollBar.background": transparent(ui.uibackground),
    "ScrollBar.hoverThumbColor": alpha(ui.default, 0.3),
    "ScrollBar.hoverTrackColor": transparent(ui.uibackground),
    "ScrollBar.Mac.hoverThumbBorderColor": transparent(ui.uibackground),
    "ScrollBar.Mac.hoverThumbColor": alpha(ui.default, 0.3),
    "ScrollBar.Mac.hoverTrackColor": transparent(ui.uibackground),
    "ScrollBar.Mac.thumbBorderColor": transparent(ui.uibackground),
    "ScrollBar.Mac.thumbColor": alpha(ui.default, 0.15),
    "ScrollBar.Mac.trackColor": transparent(ui.uibackground),
    "ScrollBar.Mac.Transparent.hoverThumbBorderColor":
      transparent(ui.uibackground),
    "ScrollBar.Mac.Transparent.hoverThumbColor": alpha(ui.default, 0.3),
    "ScrollBar.Mac.Transparent.hoverTrackColor": transparent(ui.uibackground),
    "ScrollBar.Mac.Transparent.thumbBorderColor": transparent(ui.uibackground),

    "ScrollBar.Mac.Transparent.thumbColor": alpha(ui.default, 0.15),
    "ScrollBar.Mac.Transparent.trackColor": transparent(ui.uibackground),
    "ScrollBar.thumbColor": alpha(ui.default, 0.15),
    "ScrollBar.track": transparent(ui.uibackground),
    "ScrollBar.trackColor": transparent(ui.uibackground),
    "ScrollBar.Transparent.hoverThumbColor": alpha(ui.default, 0.3),
    "ScrollBar.Transparent.hoverTrackColor": transparent(ui.uibackground),
    "ScrollBar.Transparent.thumbColor": alpha(ui.default, 0.15),
    "ScrollBar.Transparent.trackColor": transparent(ui.uibackground),
    // SearchEverywhere
    "SearchEverywhere.Advertiser.background": ui.uibackgroundalt,

    "SearchEverywhere.Advertiser.foreground": ui.defaultalt,
    "SearchEverywhere.background": ui.uibackgroundmid,
    "SearchEverywhere.Header.background": ui.uibackgroundalt,

    "SearchEverywhere.List.separatorColor": borderColor,
    "SearchEverywhere.List.separatorForeground": ui.defaultalt,
    "SearchEverywhere.SearchField.background": inputBg,
    "SearchEverywhere.SearchField.borderColor": borderColor,

    "SearchEverywhere.Tab.selectedBackground": selectedBg,
    "SearchEverywhere.Tab.selectedForeground": ui.default,

    // SearchField
    "SearchField.background": inputBg,
    "SearchField.errorBackground": alpha(levels.danger, 0.15),
    "SearchField.errorForeground": levels.danger,
    // SearchMatch
    "SearchMatch.endBackground": alpha(colors.yellow, 0.3),

    "SearchMatch.endForeground": ui.default,
    "SearchMatch.startBackground": alpha(colors.yellow, 0.3),

    "SearchMatch.startForeground": ui.default,

    // SearchOption
    "SearchOption.background": ui.uibackgroundalt,

    "SearchOption.selectedBackground": selectedBg,
    // SegmentedButton
    "SegmentedButton.focusedSelectedButtonColor": ui.primary,
    "SegmentedButton.selectedButtonColor": selectedBg,
    "SegmentedButton.selectedEndBorderColor": ui.primary,
    "SegmentedButton.selectedStartBorderColor": ui.primary,

    // Separator
    "Separator.foreground": borderColor,
    "Separator.separatorColor": borderColor,
    // Settings
    "Settings.Spotlight.borderColor": ui.primary,
    // SidePanel
    "SidePanel.background": ui.uibackgroundalt,
    // Slider
    "Slider.background": ui.uibackground,

    "Slider.buttonBorderColor": borderColor,

    "Slider.buttonColor": ui.uibackgroundalt,
    "Slider.tickColor": ui.defaultalt,
    "Slider.trackColor": ui.uibackgroundalt,
    // SpeedSearch
    "SpeedSearch.background": ui.uibackgroundmid,

    "SpeedSearch.borderColor": ui.primary,
    "SpeedSearch.errorBackground": alpha(levels.danger, 0.15),
    "SpeedSearch.errorBorderColor": levels.danger,
    "SpeedSearch.foreground": ui.default,
    // Spinner
    "Spinner.background": inputBg,
    // StatusBar
    "StatusBar.background": ui.uibackgroundalt,
    "StatusBar.borderColor": transparent(borderColor),
    "StatusBar.hoverBackground": hoverBg,
    "StatusBar.Widget.hoverBackground": hoverBg,
    // TabbedPane
    "TabbedPane.background": ui.uibackgroundalt,
    "TabbedPane.borderColor": borderColor,
    "TabbedPane.contentAreaColor": ui.uibackground,
    "TabbedPane.disabled": alpha(ui.default, 0.4),
    "TabbedPane.focus": ui.primary,
    "TabbedPane.focusColor": alpha(ui.primary, 0.5),
    "TabbedPane.foreground": ui.default,

    "TabbedPane.hoverColor": hoverBg,
    "TabbedPane.tabSelectionHeight": 3,
    "TabbedPane.underlineColor": ui.primary,
    // Table
    "Table.alternateRowBackground": alpha(ui.uibackgroundalt, 0.5),
    "Table.background": ui.uibackground,
    "Table.dropLineColor": ui.primary,
    "Table.focusCellBackground": selectedBg,
    "Table.foreground": ui.default,
    "Table.gridColor": borderColor,
    "Table.hoverBackground": hoverBg,

    "Table.lightSelectionBackground": alpha(ui.primary, 0.1),
    "Table.lightSelectionForeground": ui.default,

    "Table.lightSelectionInactiveBackground": alpha(ui.primary, 0.05),
    "Table.lightSelectionInactiveForeground": ui.default,
    "Table.selectionBackground": selectedBg,
    "Table.selectionForeground": ui.default,
    "Table.selectionInactiveBackground": alpha(ui.primary, 0.1),
    "Table.selectionInactiveForeground": ui.default,
    "Table.stripeColor": alpha(ui.uibackgroundalt, 0.5),

    // Tag
    "Tag.background": alpha(ui.primary, 0.15),
    "Tag.foreground": ui.primary,
    // TextArea
    "TextArea.background": inputBg,
    "TextArea.caretForeground": ui.primary,
    "TextArea.foreground": ui.default,
    "TextArea.inactiveBackground": alpha(inputBg, 0.5),
    "TextArea.inactiveForeground": ui.defaultalt,
    "TextArea.selectionBackground": selectedBg,
    "TextArea.selectionForeground": ui.default,
    // TextField
    "TextField.background": inputBg,
    "TextField.borderColor": borderColor,
    "TextField.caretForeground": ui.primary,
    "TextField.disabledBackground": alpha(inputBg, 0.5),

    "TextField.focusedBorderColor": ui.primary,
    "TextField.foreground": ui.default,
    "TextField.highlight": selectedBg,
    "TextField.hoverBorderColor": lightenOrDarken(borderColor, 0.1),
    "TextField.inactiveBackground": alpha(inputBg, 0.5),
    "TextField.inactiveForeground": ui.defaultalt,
    "TextField.placeholderForeground": ui.defaultalt,

    "TextField.selectionBackground": selectedBg,
    "TextField.selectionForeground": ui.default,
    // TitlePane
    "TitlePane.background": ui.uibackgroundalt,
    "TitlePane.Button.hoverBackground": hoverBg,
    "TitlePane.foreground": ui.default,
    "TitlePane.fullScreen.background": ui.uibackgroundalt,
    "TitlePane.inactiveBackground": ui.uibackgroundalt,
    "TitlePane.inactiveForeground": ui.defaultalt,

    "TitlePane.infoForeground": ui.defaultalt,
    // ToggleButton
    "ToggleButton.background": ui.uibackgroundalt,
    "ToggleButton.borderColor": borderColor,
    "ToggleButton.buttonColor": ui.default,
    "ToggleButton.disabledBorderColor": alpha(borderColor, 0.5),

    "ToggleButton.offBackground": ui.uibackgroundalt,
    "ToggleButton.offForeground": ui.defaultalt,
    "ToggleButton.onBackground": ui.primary,
    "ToggleButton.onForeground": light
      ? "#FFFFFF"
      : c(ui.primary).isDark()
        ? "#FFFFFF"
        : "#000000",
    // ToolBar
    "ToolBar.background": ui.uibackgroundalt,
    "ToolBar.borderHandleColor": borderColor,
    "ToolBar.floatingBackground": ui.uibackgroundmid,
    "ToolBar.foreground": ui.default,
    "ToolBar.separatorColor": borderColor,

    // ToolTip
    "ToolTip.Actions.background": ui.uibackgroundalt,
    "ToolTip.Actions.foreground": ui.default,
    "ToolTip.Actions.Info.foreground": ui.defaultalt,
    "ToolTip.background": ui.uibackgroundmid,
    "ToolTip.borderColor": borderColor,
    "ToolTip.foreground": ui.default,
    "ToolTip.infoForeground": ui.defaultalt,
    "ToolTip.separatorColor": borderColor,
    "ToolTip.shortcutForeground": ui.defaultalt,
    // ToolWindow
    "ToolWindow.background": ui.uibackground,
    "ToolWindow.Button.hoverBackground": hoverBg,
    "ToolWindow.Button.selectedBackground": selectedBg,
    "ToolWindow.Button.selectedForeground": ui.default,
    "ToolWindow.Header.background": ui.uibackgroundalt,
    "ToolWindow.Header.borderColor": borderColor,
    "ToolWindow.Header.closeButton.background": transparent(ui.uibackground),
    "ToolWindow.Header.inactiveBackground": ui.uibackgroundalt,
    "ToolWindow.HeaderCloseButton.background": transparent(ui.uibackground),
    "ToolWindow.HeaderTab.hoverBackground": hoverBg,
    "ToolWindow.HeaderTab.hoverInactiveBackground": hoverBg,
    "ToolWindow.HeaderTab.selectedBackground": ui.uibackground,

    "ToolWindow.HeaderTab.selectedInactiveBackground": ui.uibackgroundmid,
    "ToolWindow.HeaderTab.underlineColor": ui.primary,
    "ToolWindow.HeaderTab.underlinedTabBackground": ui.uibackground,
    "ToolWindow.HeaderTab.underlinedTabForeground": ui.default,
    "ToolWindow.HeaderTab.underlinedTabInactiveBackground": ui.uibackgroundmid,
    "ToolWindow.HeaderTab.underlinedTabInactiveForeground": ui.defaultalt,
    "ToolWindow.HeaderTab.underlineHeight": 3,

    "ToolWindow.Stripe.background": ui.uibackgroundalt,
    "ToolWindow.Stripe.borderColor": transparent(borderColor),

    // Tree
    "Tree.background": ui.uibackground,
    "Tree.errorForeground": levels.danger,
    "Tree.foreground": ui.default,
    "Tree.hoverBackground": hoverBg,
    "Tree.modifiedItemForeground": levels.info,
    "Tree.rowHeight": 24,
    "Tree.selectionBackground": selectedBg,
    "Tree.selectionForeground": ui.default,
    "Tree.selectionInactiveBackground": alpha(ui.primary, 0.1),

    // ValidationTooltip
    "ValidationTooltip.errorBackground": alpha(levels.danger, 0.15),
    "ValidationTooltip.errorBorderColor": levels.danger,
    "ValidationTooltip.warningBackground": alpha(levels.warning, 0.15),
    "ValidationTooltip.warningBorderColor": levels.warning,

    // VersionControl
    "VersionControl.FileHistory.Commit.otherBranchBackground":
      alpha(colors.purple, 0.1),
    "VersionControl.FileHistory.Commit.selectedBranchBackground":
      alpha(ui.primary, 0.1),
    "VersionControl.GitCommits.graphColor": ui.primary,
    "VersionControl.GitLog.headIconColor": colors.yellow,
    "VersionControl.GitLog.localBranchIconColor": colors.green,
    "VersionControl.GitLog.otherIconColor": colors.purple,
    "VersionControl.GitLog.remoteBranchIconColor": colors.turquoize,
    "VersionControl.GitLog.tagIconColor": colors.yellow,
    "VersionControl.HgLog.bookmarkIconColor": colors.green,
    "VersionControl.HgLog.branchIconColor": colors.turquoize,
    "VersionControl.HgLog.closedBranchIconColor": alpha(colors.turquoize, 0.5),
    "VersionControl.HgLog.headIconColor": colors.yellow,
    "VersionControl.HgLog.localTagIconColor": colors.orange,
    "VersionControl.HgLog.mqTagIconColor": colors.purple,
    "VersionControl.HgLog.tagIconColor": colors.yellow,
    "VersionControl.HgLog.tipIconColor": colors.pink,
    "VersionControl.Log.Commit.currentBranchBackground": alpha(ui.primary, 0.1),
    "VersionControl.Log.Commit.hoveredBackground": hoverBg,
    "VersionControl.Log.Commit.unmatchedForeground": ui.defaultalt,
    "VersionControl.Ref.background": alpha(ui.primary, 0.15),
    "VersionControl.Ref.backgroundBase": ui.uibackgroundalt,
    "VersionControl.RefLabel.background": alpha(ui.primary, 0.15),
    "VersionControl.RefLabel.backgroundBase": ui.uibackgroundalt,
    "VersionControl.RefLabel.foreground": ui.default,

    // WelcomeScreen
    "WelcomeScreen.background": ui.uibackground,
    "WelcomeScreen.borderColor": borderColor,
    "WelcomeScreen.captionBackground": ui.uibackgroundalt,
    "WelcomeScreen.captionForeground": ui.default,
    "WelcomeScreen.Details.background": ui.uibackgroundalt,
    "WelcomeScreen.footerBackground": ui.uibackgroundalt,
    "WelcomeScreen.footerForeground": ui.defaultalt,
    "WelcomeScreen.groupIconBorderColor": borderColor,
    "WelcomeScreen.headerBackground": ui.uibackgroundalt,
    "WelcomeScreen.headerForeground": ui.default,
    "WelcomeScreen.Projects.actions.background": ui.uibackgroundalt,
    "WelcomeScreen.Projects.actions.selectionBackground": selectedBg,
    "WelcomeScreen.Projects.background": ui.uibackground,
    "WelcomeScreen.Projects.selectionBackground": selectedBg,
    "WelcomeScreen.Projects.selectionInactiveBackground":
      alpha(ui.primary, 0.1),
    "WelcomeScreen.separatorColor": borderColor,
    "WelcomeScreen.SidePanel.background": ui.uibackgroundalt,

    // Window
    "window.border": hc ? ui.default : borderColor,
  };
}
