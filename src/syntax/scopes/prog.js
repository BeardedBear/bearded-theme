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
  "keyword.other",
  "keyword.control.conditional",
  "storage.modifier",
  "keyword.operator.new",
  "keyword.operator.expression.in",
];

export const constants = ["constant"];

export const currentText = [
  "source",
  "support",
  "variable.object.property",
  "constant.character.entity.named",
  "meta.object-literal.key",
];

export const decorators = ["entity.name.function.decorator", "meta.decorator"];

export const exportScope = ["keyword.control.export"];

export const functions = [
  "entity",
  "support.function",
  "entity.name.function",
  "meta.function-call",
  "meta.function-call support",
  // Typescript
  "variable.language.super.ts",
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

export const punctuation = [
  "punctuation",
  "attribute_value",
  "meta.brace",
  "punctuation.definition.parameters",
  "punctuation.definition.template-expression",
  "keyword.operator",
  "keyword.other.colon",
  "keyword.operator.arrow",
  // ELM
  "meta.function.type-declaration",
  // XML
  "meta.tag.xml",
  "meta.tag.preprocessor.xml",
  // JAVASCRIPT
  "keyword.operator",
  "storage.type.function.arrow",
  // PUG
  "constant.name.attribute.tag.pug",
  "string.interpolated.pug",
  // TWIG
  "keyword.other.whitespace.liquid",
  "meta.tag.template.block.twig",
  "meta.tag.template.value.twig",
  // CSS
  "keyword.other.unit",
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

export const types = ["keyword.type", "entity.name.type", "support.type", "support.class"];

export const variables = [
  "variable",
  "variable.language",
  "entity.name.type.class.js",
  "entity.name.variable",
  "support.variable.magic",
  "meta.method.body",
  "entity.name.variable",
  "punctuation.definition.variable",
];
