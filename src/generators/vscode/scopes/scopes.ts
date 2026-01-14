import { colord as c } from "colord";

import { FontStyle, Scope, Theme } from "../types";
import * as markup from "./markup";
import * as prog from "./prog";
import * as styling from "./styling";

export default function syntax(
  theme: Theme,
  hc?: boolean,
  light?: boolean,
): Scope[] {
  return Object.assign([
    createScope(prog.accessors, theme.colors.orange),
    createScope(prog.classes, theme.colors.greenAlt),
    createScope(
      prog.comments,
      light ? c(theme.ui.defaultalt).alpha(0.7).toHex() : theme.ui.defaultalt,
      "italic",
    ),
    createScope(prog.constants, theme.colors.red),
    createScope(prog.currentText, theme.ui.defaultMain),
    createScope(prog.decorators, theme.colors.pink),
    createScope(prog.exportScope, theme.colors.yellow),
    createScope(prog.functions, theme.colors.blue),
    createScope(prog.importScope, theme.colors.yellow),
    createScope(prog.keyword, theme.colors.yellow),
    createScope(prog.objectProperty, theme.ui.default),
    createScope(prog.dataProperty, theme.colors.yellow),
    createScope(prog.operators, theme.colors.yellow),
    createScope(
      prog.punctuation,
      hc ? theme.ui.default : c(theme.ui.default).alpha(0.4).toHex(),
    ),
    createScope(prog.self, theme.colors.orange),
    createScope(prog.storages, theme.colors.turquoize),
    createScope(prog.strings, theme.colors.green),
    createScope(
      prog.stringsAlt,
      light
        ? c(theme.colors.greenAlt)
          .desaturate(0.1)
          .alpha(0.8)
          .darken(0.1)
          .toHex()
        : c(theme.colors.greenAlt).desaturate(0.1).alpha(0.8).toHex(),
    ),
    createScope(prog.types, theme.colors.purple),
    createScope(prog.variables, theme.colors.salmon),

    // ELM
    createScope(prog.typeConstructor, theme.colors.salmon),
    createScope(prog.type, theme.colors.purple),

    // MARKUP
    createScope(markup.component, theme.colors.purple),
    createScope(markup.diffAdd, theme.colors.green),
    createScope(markup.diffDel, theme.colors.red),
    createScope(markup.diffHead, theme.colors.blue),
    createScope(markup.diffRange, theme.colors.orange),

    // HTML
    createScope(markup.variables, theme.colors.salmon),
    createScope(markup.tags, theme.colors.blue),
    createScope(
      markup.tagsPunctuation,
      c(theme.colors.blue).alpha(0.7).toHex(),
    ),
    createScope(markup.attributes, theme.colors.yellow),
    // MARKDOWN
    createScope(markup.mdCode, theme.colors.purple),
    createScope(markup.mdCodeLanguage, theme.colors.purple),
    createScope(markup.mdList, theme.colors.blue),
    createScope(markup.mdListPunctuation, theme.colors.blue),
    createScope(markup.mdHeading, theme.colors.yellow),
    createScope(markup.mdHeadingPunctuation, theme.colors.yellow),
    createScope(markup.mdLink, theme.colors.blue),
    createScope(markup.mdBold, theme.colors.salmon, "bold"),
    createScope(markup.mdStriked, theme.colors.red),
    createScope(markup.mdItalic, theme.colors.orange, "italic"),
    createScope(markup.mdQuote, theme.colors.pink),
    createScope(markup.mdQuotePunctuation, theme.colors.blue),
    createScope(markup.frontMatter, theme.ui.defaultalt, "italic"),

    // STYLING
    createScope(styling.pseudoClasses, theme.colors.pink),
    createScope(styling.pseudoElements, theme.colors.pink),
    createScope(styling.classes, theme.colors.turquoize),
    createScope(styling.suffix, theme.colors.turquoize),
    createScope(styling.property, theme.ui.default),
    createScope(styling.ids, theme.colors.purple),
    createScope(styling.and, theme.colors.orange),
    createScope(styling.units, theme.colors.orange),
    createScope(styling.value, theme.colors.orange),
    createScope(styling.nums, theme.colors.orange),
    createScope(styling.tag, theme.colors.blue),
  ]);
}

function createScope(
  scope: string[],
  foreground: string,
  fontStyle?: FontStyle,
): Scope {
  return {
    scope,
    settings: {
      fontStyle,
      foreground,
    },
  };
}
