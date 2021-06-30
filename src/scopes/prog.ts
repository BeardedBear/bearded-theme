export const accessors = [
  "support.module.elm",
  "entity.other.inherited-class.python",
  "variable.other.object",
  "support.other.namespace.php",
  "entity.other.attribute-name.namespace.xml",
  "record.accessor",
  "entity.name.record.field.accessor",
];

export const classes = ["entity.name.type"];

export const comments = [
  "comment",
  "punctuation.definition.comment",
  "string.quoted.docstring.multi",
  "comment.block.documentation source",
];

export const keyword = [
  "keyword.control",
  "keyword.control.conditional",
  "storage.modifier",
  "keyword.operator.new",
  "keyword.operator.expression",
  // BLADE
  "keyword.begin.blade",
  "keyword.end.blade",
  "keyword.blade",
  // ELM
  "keyword.type-alias",
  "keyword.type",
  "support.class.console",
  "keyword.other.await",
  "storage.type.class.jsdoc",
  "punctuation.definition.block.tag.jsdoc",
  "keyword.operator.assignment.cs",
];

export const constants = ["constant"];

export const currentText = [
  "source",
  "support",
  "constant.character.entity.named",
  "meta.jsx.children",
  // LUA
  "source.lua",
];

export const decorators = [
  "entity.name.function.decorator",
  "meta.decorator entity.name.function",
  "meta.decorator punctuation.decorator",
  "punctuation.definition.decorator",
  "meta.decorator variable.other.readwrite.ts",
];

export const exportScope = ["keyword.control.export", "support.type.object.module"];

export const functions = [
  // "entity",
  "support.function",
  "entity.name.function",
  "meta.function-call",
  "meta.function",
  "meta.method.declaration",
  "meta.function-call support",
  "meta.decorator meta.definition.method entity.name.function",
  "meta.decorator meta.method.declaration entity.name.function",
  // Typescript
  "variable.language.super.ts",
  // VUE
  "source.directive",
  // PYTHON
  "meta.function-call.generic",
  // PHP
  "meta.method-call.static.php",
  "meta.method-call.php",
  "meta.class storage.type",
];

export const importScope = [
  "keyword.control.import",
  "meta.module.name.elm support",
  "meta.import.elm support",
  // CSS
  "keyword.control.at-rule",
  "punctuation.definition.keyword",
  // PUG
  "variable.control.import.include",
];

export const dataProperty = ["keyword.other.definition.ini", "support.type.property-name", "entity.name.tag.yaml"];

export const objectProperty = ["meta.object-literal.key", "variable.object.property"];

export const operators = [
  "keyword.operator.comparison",
  "storage.type.function.arrow",
  // LUA
  "keyword.operator.lua",
];

export const punctuation = [
  "punctuation",
  "attribute_value",
  "meta.brace",
  "punctuation.definition.parameters",
  "punctuation.definition.template-expression",
  "keyword.operator",
  "keyword.other",
  // "keyword.operator.arrow",
  "punctuation.terminator",
  "punctuation.separator",
  "punctuation.definition.generic.begin",
  "punctuation.definition.generic.end",
  // ELM
  "meta.function.type-declaration",
  "keyword.other.colon.elm",
  "meta.record.field.elm keyword.other.elm",
  "keyword.other.period.elm",
  // XML
  "meta.tag.xml",
  "meta.tag.preprocessor.xml",
  // JAVASCRIPT
  "punctuation.definition.block",
  "punctuation.accessor",
  // PUG
  "constant.name.attribute.tag.pug",
  "string.interpolated.pug",
  // TWIG
  "keyword.other.whitespace.liquid",
  "meta.tag.template.block.twig",
  "meta.tag.template.value.twig",
  "begin.bracket",
  "end.bracket",
  "text.html.twig meta.tag.inline.any",
  "text.html.twig meta.tag.block.any",
  // BLADE
  "support.function.construct.begin.blade",
  "support.function.construct.end.blade source.php",
  "support.function.construct.end.blade",
  "meta.function.echo.blade source.php",
  "punctuation.definition.list.begin.python",
  "punctuation.definition.list.end.python",
  // VUE
  "text.html.vue-html meta.tag.block.any",
  "entity.name.variable.tuple-element.cs",
];

export const self = [
  "variable.language.this",
  "variable.language.special.self",
  "variable.parameter.function.language.special.self",
];

export const storages = [
  "storage",
  // "storage.type",
  "meta.var.expr storage.type",
  "storage.type.function",
  "keyword.function",
  "storage.type.class",
  "storage.type.property",
  "keyword.other",
  // LUA
  "keyword.local.lua",
  "entity.name.class",
  "meta.function.lua keyword.control.lua",
  // TS
  "storage.type.enum",
  "storage.type.interface",
  "storage.type.type",
];

export const strings = [
  "string",
  "string.template",
  "string.quoted.single",
  "punctuation.definition.string",
  "punctuation.definition.string.template",
  "punctuation.definition.string.begin",
  "punctuation.definition.string.end",
  "string.other.link",
  "constant.character.escape.regexp",
  // CSS
  "variable.parameter.url",
];

export const types = [
  "entity.name.type",
  "support.type",
  "support.class",
  "storage.type",
  "entity.other.inherited-class",
  "keyword.type",
];

export const variables = [
  "variable",
  "variable.language",
  "entity.name.type.class.js",
  "entity.name.variable",
  "support.variable.magic",
  "meta.method.body",
  "entity.name.variable",
  "punctuation.definition.variable",
  "support.variable.property",
  "meta.class variable.object.property",
  // TS
  "variable.other.constant entity.name.function",
  "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
];

export const typeConstructor = ["source.elm constant.type-constructor"];
export const type = ["source.elm storage.type"];
