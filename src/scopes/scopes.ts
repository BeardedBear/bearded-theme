import { FontStyle, Scope, Theme } from "../typing";
import * as markup from "./markup";
import * as prog from "./prog";
import * as styling from "./styling";

function createScope(
  scope: string[],
  foreground: string,
  fontStyle?: FontStyle
): Scope {
  return {
    scope,
    settings: {
      foreground,
      fontStyle
    }
  };
}

export default function syntax(theme: Theme) {
  return Object.assign([
    createScope(prog.accessors, theme.orange, "italic"),
    createScope(prog.classes, theme.greenAlt),
    createScope(prog.comments, theme.defaultalt, "italic"),
    createScope(prog.constants, theme.red),
    createScope(prog.currentText, theme.default),
    createScope(prog.decorators, theme.pink),
    createScope(prog.exportScope, theme.yellow),
    createScope(prog.functions, theme.blue),
    createScope(prog.importScope, theme.yellow),
    createScope(prog.keyword, theme.yellow),
    createScope(prog.objectProperty, theme.default),
    createScope(prog.dataProperty, theme.yellow),
    createScope(prog.operators, theme.yellow),
    createScope(prog.punctuation, `${theme.default}60`),
    createScope(prog.self, theme.orange, "italic"),
    createScope(prog.storages, theme.turquoize, "italic"),
    createScope(prog.strings, theme.green),
    createScope(prog.types, theme.purple),
    createScope(prog.variables, theme.salmon),

    // ELM
    createScope(prog.typeConstructor, theme.salmon),
    createScope(prog.type, theme.purple, "normal"),

    // MARKUP
    createScope(markup.component, theme.blue),

    // HTML
    createScope(markup.variables, theme.salmon),
    createScope(markup.tags, theme.blue),
    createScope(markup.tagsPunctuation, `${theme.blue}aa`),
    createScope(markup.attributes, theme.yellow, "italic"),
    // MARKDOWN
    createScope(markup.mdCode, theme.purple),
    createScope(markup.mdCodeLanguage, theme.purple),
    createScope(markup.mdList, theme.blue),
    createScope(markup.mdListPunctuation, theme.blue),
    createScope(markup.mdHeading, theme.yellow),
    createScope(markup.mdHeadingPunctuation, theme.yellow),
    createScope(markup.mdLink, theme.blue),
    createScope(markup.mdBold, theme.blue, "bold"),
    createScope(markup.mdItalic, theme.blue, "italic"),
    createScope(markup.mdQuote, theme.blue, "italic"),
    createScope(markup.mdQuotePunctuation, theme.blue, "italic"),

    // STYLING
    createScope(styling.pseudoClasses, theme.pink),
    createScope(styling.pseudoElements, theme.pink),
    createScope(styling.classes, theme.turquoize, "italic"),
    createScope(styling.suffix, theme.turquoize, "italic"),
    createScope(styling.property, theme.default),
    createScope(styling.ids, theme.purple),
    createScope(styling.and, theme.orange),
    createScope(styling.units, theme.orange, "italic"),
    createScope(styling.value, theme.orange),
    createScope(styling.nums, theme.orange),
    createScope(styling.tag, theme.blue)
  ]);
}
