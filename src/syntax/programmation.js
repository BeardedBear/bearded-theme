import { createScope } from "./index.js";

// SCOPES
import currentText from "./scopes/currentText.js";
import classes from "./scopes/classes.js";
import functions from "./scopes/functions.js";
import types from "./scopes/types.js";
import punctuation from "./scopes/punctuation.js";
import strings from "./scopes/strings.js";
import variables from "./scopes/variables.js";

import imports from "./scopes/imports.js";

import constants from "./scopes/constants.js";
import storages from "./scopes/storages.js";

export default function (theme) {
  const common = [
    createScope(currentText, theme.default),
    createScope(classes, theme.greenalt),
    createScope(functions, theme.blue),
    createScope(types, theme.purple),
    createScope(punctuation, theme.default + "aa"),
    createScope(strings, theme.green),
    createScope(variables, theme.salmon),
    createScope(imports, theme.yellow),
    createScope(constants, theme.red),
    createScope(storages, theme.turquoize, "italic"),
    {
      name: "Meta Brace",
      scope: ["meta.brace", "source.js meta"],
      settings: {
        foreground: theme.default,
      },
    },
    {
      name: "#Modifier",
      scope: ["entity.name.function.decorator.python"],
      settings: {
        foreground: theme.pink,
      },
    },

    {
      name: "Storage",
      scope: [
        "storage",
        "source.ts storage",
        "storage.type.function.arrow",
        "punctuation.definition.parameters",
        "storage.type.function",
        "keyword",
        "support.function.construct.output.php",
      ],
      settings: {
        foreground: theme.yellow,
      },
    },
    {
      name: "Comment",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.quoted.docstring.multi.python",
        "punctuation.definition.string.begin.python",
        "punctuation.definition.string.end.python",
      ],
      settings: {
        fontStyle: "italic",
        foreground: theme.primary + "80",
      },
    },
    {
      name: "This",
      scope: [
        "variable.language.this.js",
        "variable.language.this.ts",
        "variable.parameter.function.language.special.self.python",
        "variable.language.special.self.python",
        "support.module.elm",
        "variable.other.object.java",
        "variable.other.object.cs",
        "entity.other.inherited-class.python",
        "variable.other.object.property",
        "support.other.namespace.php",
        "entity.other.attribute-name.namespace.xml",
      ],
      settings: {
        foreground: theme.orange,
        fontStyle: "italic",
      },
    },
    {
      name: "Support Variable Property DOM",
      scope: "support.variable.property.dom",
      settings: {
        foreground: theme.default,
      },
    },
  ];
  let cs = [
    {
      name: "[CS] - Other objects",
      scope: ["variable.other.object.property.cs", "variable.other.global.safer.php", "variable.other.global.php"],
      settings: {
        foreground: theme.orange,
      },
    },
  ];

  let javascript = [
    {
      name: "[JAVASCRIPT] - Inherited Component",
      scope: "entity.other.inherited-class.js",
      settings: {
        foreground: "#ccc",
      },
    },
  ];

  let typescript = [
    {
      name: "Punctuation Arrow Parameters",
      scope: "meta.arrow.ts punctuation.definition.parameters",
      settings: {
        foreground: theme.yellow,
      },
    },

    {
      name: "Inherited Component",
      scope: "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
      settings: {
        foreground: theme.default,
      },
    },
  ];
  let elm = [
    {
      name: "Accessor",
      scope: ["record.accessor.elm", "entity.name.record.field.accessor.elm"],
      settings: {
        foreground: theme.turquoize,
      },
    },

    {
      name: "Type Constructor",
      scope: ["source.elm constant"],
      settings: {
        foreground: theme.salmon,
      },
    },

    {
      name: "Meta",
      scope: ["source.elm meta"],
      settings: {
        foreground: theme.default,
      },
    },
  ];
  return Object.assign([].concat(common, cs, elm, javascript, typescript));
}
