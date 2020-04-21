import { createScope } from "./index.js";

// COMMON SCOPES
import accessors from "./scopes/common/prog/accessors.js";
import classes from "./scopes/common/prog/classes.js";
import comments from "./scopes/common/prog/comments.js";
import conditional from "./scopes/common/prog/conditional.js";
import constants from "./scopes/common/prog/constants.js";
import currentText from "./scopes/common/prog/currentText.js";
import decorators from "./scopes/common/prog/decorators.js";
import exportScope from "./scopes/common/prog/exportScope.js";
import functions from "./scopes/common/prog/functions.js";
import importScope from "./scopes/common/prog/importScope.js";
import punctuation from "./scopes/common/prog/punctuation.js";
import self from "./scopes/common/prog/self.js";
import storages from "./scopes/common/prog/storages.js";
import strings from "./scopes/common/prog/strings.js";
import types from "./scopes/common/prog/types.js";
import variables from "./scopes/common/prog/variables.js";

// SPECIFIC SCOPES
import { typeConstructor, type } from "./scopes/specific/elm.js";

export default function (theme) {
  return Object.assign([
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

    // ELM
    createScope(typeConstructor, theme.salmon),
    createScope(type, theme.purple, "normal"),
  ]);
}
