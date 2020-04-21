import { createScope } from "./index.js";

import * as prog from "./scopes/prog.js";
import * as markup from "./scopes/markup.js";
import { typeConstructor, type } from "./scopes/elm.js";

export default function (theme) {
  return Object.assign([
    createScope(prog.accessors, theme.orange, "italic"),
    createScope(prog.classes, theme.greenalt),
    createScope(prog.comments, theme.primary + "80", "italic"),
    createScope(prog.constants, theme.red),
    createScope(prog.currentText, theme.default),
    createScope(prog.decorators, theme.pink),
    createScope(prog.exportScope, theme.yellow),
    createScope(prog.functions, theme.blue),
    createScope(prog.importScope, theme.yellow),
    createScope(prog.keyword, theme.yellow),
    createScope(prog.punctuation, theme.default + "aa"),
    createScope(prog.self, theme.orange, "italic"),
    createScope(prog.storages, theme.turquoize, "italic"),
    createScope(prog.strings, theme.green),
    createScope(prog.types, theme.purple),
    createScope(prog.variables, theme.salmon),

    // ELM
    createScope(typeConstructor, theme.salmon),
    createScope(type, theme.purple, "normal"),

    // MARKUP
    // HTML
    createScope(markup.variables, theme.salmon),
    createScope(markup.tags, theme.blue),
    createScope(markup.tagsPunctuation, theme.blue),
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
  ]);
}
