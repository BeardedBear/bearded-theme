import { FontStyle, Scope, Theme } from "../typing";
import * as markup from "./markup";
import * as prog from "./prog";
import * as styling from "./styling";

function createScope(scope: string[], foreground: string, fontStyle?: FontStyle): Scope {
  return {
    scope,
    settings: {
      foreground,
      fontStyle,
    },
  };
}

export default function syntax(theme: Theme) {
  return Object.assign([
    createScope(prog.accessors, theme.colors.orange, "italic"),
    createScope(prog.classes, theme.colors.greenAlt),
    createScope(prog.comments, theme.ui.defaultalt, "italic"),
    createScope(prog.constants, theme.colors.red),
    createScope(prog.currentText, theme.ui.default),
    createScope(prog.decorators, theme.colors.pink),
    createScope(prog.exportScope, theme.colors.yellow),
    createScope(prog.functions, theme.colors.blue),
    createScope(prog.importScope, theme.colors.yellow),
    createScope(prog.keyword, theme.colors.yellow),
    createScope(prog.objectProperty, theme.ui.default),
    createScope(prog.dataProperty, theme.colors.yellow),
    createScope(prog.operators, theme.colors.yellow),
    createScope(prog.punctuation, `${theme.ui.default}60`),
    createScope(prog.self, theme.colors.orange, "italic"),
    createScope(prog.storages, theme.colors.turquoize, "italic"),
    createScope(prog.strings, theme.colors.green),
    createScope(prog.types, theme.colors.purple),
    createScope(prog.variables, theme.colors.salmon),

    // ELM
    createScope(prog.typeConstructor, theme.colors.salmon),
    createScope(prog.type, theme.colors.purple, "normal"),

    // MARKUP
    createScope(markup.component, theme.colors.blue),

    // HTML
    createScope(markup.variables, theme.colors.salmon),
    createScope(markup.tags, theme.colors.blue),
    createScope(markup.tagsPunctuation, `${theme.colors.blue}aa`),
    createScope(markup.attributes, theme.colors.yellow, "italic"),
    // MARKDOWN
    createScope(markup.mdCode, theme.colors.purple),
    createScope(markup.mdCodeLanguage, theme.colors.purple),
    createScope(markup.mdList, theme.colors.blue),
    createScope(markup.mdListPunctuation, theme.colors.blue),
    createScope(markup.mdHeading, theme.colors.yellow),
    createScope(markup.mdHeadingPunctuation, theme.colors.yellow),
    createScope(markup.mdLink, theme.colors.blue),
    createScope(markup.mdBold, theme.colors.blue, "bold"),
    createScope(markup.mdItalic, theme.colors.blue, "italic"),
    createScope(markup.mdQuote, theme.colors.blue, "italic"),
    createScope(markup.mdQuotePunctuation, theme.colors.blue, "italic"),

    // STYLING
    createScope(styling.pseudoClasses, theme.colors.pink),
    createScope(styling.pseudoElements, theme.colors.pink),
    createScope(styling.classes, theme.colors.turquoize, "italic"),
    createScope(styling.suffix, theme.colors.turquoize, "italic"),
    createScope(styling.property, theme.ui.default),
    createScope(styling.ids, theme.colors.purple),
    createScope(styling.and, theme.colors.orange),
    createScope(styling.units, theme.colors.orange, "italic"),
    createScope(styling.value, theme.colors.orange),
    createScope(styling.nums, theme.colors.orange),
    createScope(styling.tag, theme.colors.blue),
  ]);
}
