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

export const comments = ["comment", "punctuation.definition.comment", "string.quoted.docstring.multi"];

export const keyword = [
  "keyword.control",
  // "keyword.other",
  "keyword.control.conditional",
  "storage.modifier",
  "keyword.operator.new",
  "keyword.operator.expression.in",
  // "keyword.operator",
  // BLADE
  "keyword.begin.blade",
  "keyword.end.blade",
  "keyword.blade",
  // ELM
  "keyword.type-alias",
  "keyword.type",
  "support.class.console",
];

export const constants = ["constant"];

export const currentText = ["source", "support", "constant.character.entity.named"];

export const decorators = [
  "entity.name.function.decorator",
  "meta.decorator entity.name.function",
  "meta.decorator punctuation.decorator",
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
  // Typescript
  "variable.language.super.ts",
  // VUE
  "source.directive",
  // PYTHON
  "meta.function-call.generic",
  // PHP
  "meta.method-call.static.php",
  "meta.method-call.php",
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

export const dataProperty = [
  "variable.object.property",
  "keyword.other.definition.ini",
  "support.type.property-name",
  "entity.name.tag.yaml",
];

export const objectProperty = ["meta.object-literal.key"];

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
  // XML
  "meta.tag.xml",
  "meta.tag.preprocessor.xml",
  // JAVASCRIPT
  "storage.type.function.arrow",
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
  // BLADE
  "support.function.construct.begin.blade",
  "support.function.construct.end.blade source.php",
  "support.function.construct.end.blade",
  "meta.function.echo.blade source.php",
];

export const self = [
  "variable.language.this",
  "variable.language.special.self",
  "variable.parameter.function.language.special.self",
];

export const storages = [
  "storage",
  "storage.type",
  "storage.type.function",
  "keyword.function",
  "storage.type.class",
  "storage.type.property",
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
];

export const types = ["entity.name.type", "support.type", "support.class"];

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
];
