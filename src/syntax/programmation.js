import { createScope } from "./index.js";

// SCOPES
import accessors from "./scopes/accessors.js";
import classes from "./scopes/classes.js";
import comments from "./scopes/comments.js";
import conditional from "./scopes/conditional.js";
import constants from "./scopes/constants.js";
import currentText from "./scopes/currentText.js";
import decorators from "./scopes/decorators.js";
import exportScope from "./scopes/exportScope.js";
import functions from "./scopes/functions.js";
import importScope from "./scopes/importScope.js";
import punctuation from "./scopes/punctuation.js";
import self from "./scopes/self.js";
import storages from "./scopes/storages.js";
import strings from "./scopes/strings.js";
import types from "./scopes/types.js";
import variables from "./scopes/variables.js";

export default function (theme) {
  const common = [
    createScope(accessors, theme.orange, "italic"),
    createScope(classes, theme.greenalt),
    createScope(comments, theme.primary + "80", "italic"),
    createScope(conditional, theme.yellow),
    createScope(constants, theme.red),
    createScope(currentText, theme.default),
    createScope(decorators, theme.pink),
    createScope(exportScope, theme.yellow),
    createScope(functions, theme.blue),
    createScope(importScope, theme.yellow),
    createScope(punctuation, theme.default + "aa"),
    createScope(self, theme.orange, "italic"),
    createScope(storages, theme.turquoize, "italic"),
    createScope(strings, theme.green),
    createScope(types, theme.purple),
    createScope(variables, theme.salmon),
  ];

  let elm = [
    {
      name: "Type Constructor",
      scope: ["source.elm constant"],
      settings: {
        foreground: theme.salmon,
      },
    },
  ];
  return Object.assign([].concat(common, elm));
}
