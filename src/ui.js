module.exports.body = function(theme) {
    let activityBar = {
        "activityBar.background": theme.uibackgroundalt,
        "activityBar.border": theme.uiborder,
        "activityBar.foreground": theme.primary,
        "activityBar.inactiveForeground": theme.default + "50",
        // "activityBar.dropBackground": "#ff0000",
        "activityBarBadge.background": theme.primary,
        "activityBarBadge.foreground": "#ffffff"
    };
    let badge = {
        "badge.background": theme.primary,
        "badge.foreground": "#ffffff"
        // "extensionBadge.remoteBackground": "#ff0000",
        // "extensionBadge.remoteForeground": "#ff0000",
    };
    let breadcrumb = {
        "breadcrumbPicker.background": theme.uibackground
        // "breadcrumb.activeSelectionForeground": "#ff0000",
        // "breadcrumb.background": "#ff0000",
        // "breadcrumb.focusForeground": "#ff0000",
        // "breadcrumb.foreground": "#ff0000",
    };
    let button = {
        "button.background": theme.primary,
        "button.foreground": "#ffffff",
        // "button.hoverBackground": "#ff0000",
        "extensionButton.prominentBackground": theme.primary + "9d",
        "extensionButton.prominentForeground": "#ffffff",
        "extensionButton.prominentHoverBackground": theme.primary
    };
    let common = {
        contrastActiveBorder: theme.transparent,
        contrastBorder: theme.primary + "50",
        errorForeground: theme.red,
        focusBorder: theme.primary + "aa",
        foreground: theme.default + "cc",
        "selection.background": theme.default + "80",
        "widget.shadow": theme.transparent
    };
    let debug = {
        "debugExceptionWidget.background": theme.primaryalt,
        "debugExceptionWidget.border": theme.uiborder,
        "debugToolBar.background": theme.primaryalt
        // "debugToolBar.border": "#ff0000",
    };
    let description = {
        descriptionForeground: theme.default + "cc"
    };
    let diff = {
        "diffEditor.border": theme.uiborder,
        "diffEditor.insertedTextBackground": theme.green + "30",
        "diffEditor.insertedTextBorder": theme.transparent,
        "diffEditor.removedTextBackground": theme.red + "40",
        "diffEditor.removedTextBorder": theme.transparent
    };
    let dropdown = {
        "dropdown.background": theme.uibackground,
        "dropdown.border": theme.uiborder,
        "dropdown.foreground": theme.default
        // "dropdown.listBackground": "#ff0000",
    };
    let editor = {
        "editor.background": theme.uibackground,
        "editor.findMatchBackground": theme.primary + "50",
        "editor.findMatchBorder": theme.primary,
        "editor.findMatchHighlightBackground": theme.yellow + "50",
        "editor.findMatchHighlightBorder": theme.yellow,
        "editor.foreground": theme.default + "cc",
        "editor.hoverHighlightBackground": theme.primary + "50",
        "editor.lineHighlightBackground": theme.primary + "0c",
        "editor.lineHighlightBorder": theme.primary + "1a",
        "editor.rangeHighlightBackground": theme.primary + "21",
        // "editor.rangeHighlightBorder": "#ff0000",
        "editor.selectionBackground": theme.primary + "40",
        "editor.selectionForeground": theme.primary,
        "editor.inactiveSelectionBackground": theme.primary + "50",
        "editor.selectionHighlightBorder": theme.default + "80",
        "editor.selectionHighlightBackground": theme.default + "15",
        "editor.wordHighlightStrongBackground": theme.default + "21",
        "editor.wordHighlightBackground": theme.default + "21",
        // "editor.wordHighlightBorder": "#ff0000",
        // "editor.wordHighlightStrongBorder": "#ff0000",
        "editorBracketMatch.background": theme.primary + "5d",
        "editorBracketMatch.border": theme.primary + "96",
        "editorCodeLens.foreground": theme.default + "cc",
        "editorCursor.foreground": theme.yellow,
        // "editorCursor.background": "#ff0000",
        "editorGroup.border": theme.uiborder,
        "editorGroup.dropBackground": theme.primary + "15",
        // "editorGroup.emptyBackground": "#ff0000",
        // "editorGroup.focusedEmptyBorder": "#ff0000",
        "editorHoverWidget.background": theme.uibackgroundalt,
        "editorHoverWidget.border": theme.uiborder,
        // "editorHoverWidget.statusBarBackground": "#ff0000",
        "editorIndentGuide.background": theme.default + "0e",
        "editorLink.activeForeground": theme.default + "cc",
        "editorWarning.border": theme.transparent
        // "editor.findRangeHighlightBackground": "#ff0000",
        // "editor.findRangeHighlightBorder": "#ff0000",
        // "editor.focusedStackFrameHighlightBackground": "#ff0000",
        // "editor.snippetFinalTabstopHighlightBackground": "#ff0000",
        // "editor.snippetFinalTabstopHighlightBorder": "#ff0000",
        // "editor.snippetTabstopHighlightBackground": "#ff0000",
        // "editor.snippetTabstopHighlightBorder": "#ff0000",
        // "editor.stackFrameHighlightBackground": "#ff0000",
        // "editorError.border": "#ff0000",
        // "editorError.foreground": "#ff0000",
        // "editorGutter.commentRangeForeground": "#ff0000",
        // "editorHint.border": "#ff0000",
        // "editorHint.foreground": "#ff0000",
        // "editorIndentGuide.activeBackground": "#ff0000",
        // "editorInfo.border": "#ff0000",
        // "editorInfo.foreground": "#ff0000",
        // "editorMarkerNavigationInfo.background": "#ff0000",
        // "editorPane.background": "#ff0000",
        // "editorRuler.foreground": "#ff0000",
        // "editorUnnecessaryCode.border": "#ff0000",
        // "editorUnnecessaryCode.opacity": "#ff0000",
        // "editorWidget.border": "#ff0000"
    };
    let editorMarker = {
        "editorMarkerNavigation.background": theme.default,
        "editorMarkerNavigationError.background": theme.red,
        "editorMarkerNavigationWarning.background": theme.yellow
    };
    let editorOverviewRuler = {
        // "editorOverviewRuler.addedForeground": "#ff0000",
        // "editorOverviewRuler.bracketMatchForeground": "#ff0000",
        // "editorOverviewRuler.deletedForeground": "#ff0000",
        // "editorOverviewRuler.errorForeground": "#ff0000",
        // "editorOverviewRuler.findMatchForeground": "#ff0000",
        // "editorOverviewRuler.infoForeground": "#ff0000",
        // "editorOverviewRuler.modifiedForeground": "#ff0000",
        // "editorOverviewRuler.rangeHighlightForeground": "#ff0000",
        // "editorOverviewRuler.selectionHighlightForeground": "#ff0000",
        // "editorOverviewRuler.warningForeground": "#ff0000",
        // "editorOverviewRuler.wordHighlightForeground": "#ff0000",
        // "editorOverviewRuler.wordHighlightStrongForeground": "#ff0000",
    };
    let find = {
        "editorWarning.foreground": theme.yellow,
        "editorWhitespace.foreground": theme.primaryalt,
        "editorWidget.background": theme.primaryalt,
        "editorWidget.resizeBorder": theme.primary + "50"
    };
    let gitlens = {
        // "gitlens.gutterBackgroundColor": "#ff0000",
        // "gitlens.gutterForegroundColor": "#ff0000",
        // "gitlens.gutterUncommittedForegroundColor": "#ff0000",
        // "gitlens.lineHighlightBackgroundColor": "#ff0000",
        // "gitlens.lineHighlightOverviewRulerColor": "#ff0000",
        // "gitlens.trailingLineBackgroundColor": "#ff0000",
        // "gitlens.trailingLineForegroundColor": "#ff0000",
    };
    let gutter = {
        "editorGutter.background": theme.uibackground,
        "editorGutter.addedBackground": theme.green + "cc",
        "editorGutter.deletedBackground": theme.red + "cc",
        "editorGutter.modifiedBackground": theme.blue + "cc",
        "editorLineNumber.foreground": theme.default + "40",
        "editorLineNumber.activeForeground": theme.default + "bb"
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
        // "inputValidation.errorForeground": "#ff0000",
        // "inputValidation.infoForeground": "#ff0000",
        // "inputValidation.warningForeground": "#ff0000",
        // "quickInput.background": "#ff0000",
        // "quickInput.foreground": "#ff0000",
    };
    let list = {
        "list.activeSelectionBackground": theme.primary + "38",
        "list.dropBackground": theme.primary + "15",
        "list.focusBackground": theme.primary + "38",
        "list.errorForeground": theme.red,
        "list.warningForeground": theme.orange,
        "list.focusForeground": theme.default + "cc",
        "list.highlightForeground": theme.yellow,
        "list.activeSelectionForeground": theme.default + "cc",
        "list.hoverBackground": theme.grey + "20",
        "list.hoverForeground": theme.default + "cc",
        "list.inactiveSelectionBackground": theme.primary + "38",
        // "list.inactiveFocusBackground": "#ff0000",
        // "list.inactiveSelectionForeground": "#ff0000",
        // "list.invalidItemForeground": "#ff0000",
        "gitDecoration.modifiedResourceForeground": theme.blue,
        "gitDecoration.deletedResourceForeground": theme.red,
        "gitDecoration.untrackedResourceForeground": theme.green,
        "gitDecoration.ignoredResourceForeground": theme.grey + "cc",
        "gitDecoration.conflictingResourceForeground": theme.primary
        // "gitDecoration.addedResourceForeground": "#ff0000",
        // "gitDecoration.submoduleResourceForeground": "#ff0000",
        // "listFilterWidget.background": "#ff0000",
        // "listFilterWidget.noMatchesOutline": "#ff0000",
        // "listFilterWidget.outline": "#ff0000",
    };
    let menu = {
        "menu.background": theme.uibackground,
        "menu.border": theme.uiborder,
        // "menu.foreground": "#ff0000",
        "menu.separatorBackground": theme.default + "30"
        // "menu.selectionBackground": "#ff0000",
        // "menu.selectionBorder": "#ff0000",
        // "menu.selectionForeground": "#ff0000",
        // "menubar.selectionBackground": "#ff0000",
        // "menubar.selectionBorder": "#ff0000",
        // "menubar.selectionForeground": "#ff0000",
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
        // "notificationCenter.border": "#ff0000",
        "notifications.foreground": theme.default + "cc",
        "notifications.background": theme.primaryalt,
        "notifications.border": theme.primary + "50",
        "notificationLink.foreground": theme.yellow
        // "notificationToast.border": "#ff0000",
    };
    let panel = {
        "panel.background": theme.uibackground,
        "panel.border": theme.uiborder,
        // "panel.dropBackground": "#ff0000",
        "panelTitle.activeBorder": theme.primary,
        "panelTitle.activeForeground": theme.primary,
        "panelTitle.inactiveForeground": theme.default + "54"
        // "panelInput.border": "#ff0000",
    };
    let pickView = {
        "peekView.border": theme.primary,
        "peekViewEditor.background": theme.primaryalt + "40",
        "peekViewEditor.matchHighlightBackground": theme.primaryalt + "40",
        // "peekViewEditor.matchHighlightBorder": "#ff0000",
        "peekViewResult.background": theme.primaryalt + "40",
        "peekViewResult.fileForeground": theme.default + "cc",
        "peekViewResult.lineForeground": theme.default + "cc",
        "peekViewResult.matchHighlightBackground": theme.primaryalt,
        "peekViewResult.selectionBackground": theme.primaryalt,
        "peekViewResult.selectionForeground": theme.default + "cc",
        "peekViewTitle.background": theme.uiborder,
        "peekViewTitleDescription.foreground": theme.default + "cc",
        "peekViewTitleLabel.foreground": theme.uiborder,
        "peekViewEditorGutter.background": theme.primaryalt + "40"
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
        "scrollbarSlider.background": theme.default + "20",
        "scrollbarSlider.hoverBackground": theme.default + "35"
    };
    let settings = {
        // "settings.checkboxBackground": "#ff0000",
        // "settings.checkboxBorder": "#ff0000",
        // "settings.checkboxForeground": "#ff0000",
        // "settings.dropdownBackground": "#ff0000",
        // "settings.dropdownBorder": "#ff0000",
        // "settings.dropdownForeground": "#ff0000",
        // "settings.dropdownListBorder": "#ff0000",
        // "settings.headerForeground": "#ff0000",
        // "settings.modifiedItemIndicator": "#ff0000",
        // "settings.numberInputBackground": "#ff0000",
        // "settings.numberInputBorder": "#ff0000",
        // "settings.numberInputForeground": "#ff0000",
        // "settings.textInputBackground": "#ff0000",
        // "settings.textInputBorder": "#ff0000",
        // "settings.textInputForeground": "#ff0000",
    };
    let sidebar = {
        "sideBar.background": theme.uibackgroundalt,
        "sideBar.border": theme.transparent,
        "sideBar.foreground": theme.default + "cc",
        // "sideBar.dropBackground": "#ff0000",
        "sideBarSectionHeader.background": theme.grey + "20",
        "sideBarSectionHeader.foreground": theme.default + "80",
        "sideBarTitle.foreground": theme.default + "90",
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
        // "statusBarItem.prominentForeground": "#ff0000",
        // "statusBarItem.remoteBackground": "#ff0000",
        // "statusBarItem.remoteForeground": "#ff0000",
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
        "tab.activeBackground": theme.primary + "10",
        "tab.activeForeground": theme.default,
        // "tab.activeBorderTop": "#ff0000",
        // "tab.activeModifiedBorder": "#ff0000",
        "tab.border": theme.uibackground,
        "tab.activeBorder": theme.primary,
        "tab.hoverBorder": theme.primary + "50",
        // "tab.hoverBackground": "#ff0000",
        "tab.unfocusedHoverBackground": theme.primary + "10",
        "tab.unfocusedHoverBorder": theme.primary,
        "tab.inactiveBackground": theme.uibackground,
        "tab.inactiveForeground": theme.default + "71",
        // "tab.inactiveModifiedBorder": "#ff0000",
        "tab.unfocusedActiveForeground": theme.default + "cc",
        "tab.unfocusedInactiveForeground": theme.default + "cc"
        // "tab.unfocusedActiveBackground": "#ff0000",
        // "tab.unfocusedActiveBorder": "#ff0000",
        // "tab.unfocusedActiveBorderTop": "#ff0000",
        // "tab.unfocusedActiveModifiedBorder": "#ff0000",
        // "tab.unfocusedInactiveModifiedBorder": "#ff0000",
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
        // "terminal.selectionBackground": "#ff0000",
        // "terminal.border": "#ff0000",
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
    let welcomePage = {
        // "welcomePage.background": "#ff0000",
        // "welcomePage.buttonBackground": "#ff0000",
        // "welcomePage.buttonHoverBackground": "#ff0000",
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
        editorOverviewRuler,
        find,
        gitlens,
        gutter,
        input,
        list,
        menu,
        merge,
        notification,
        panel,
        pickView,
        picker,
        progressbar,
        scrollbar,
        settings,
        sidebar,
        statusBar,
        suggest,
        tabs,
        terminal,
        text,
        titleBar,
        welcomePage
    );
};
