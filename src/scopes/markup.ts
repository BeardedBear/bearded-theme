// HTML
export const variables = ["support.variable.liquid", "support.class.liquid"];
export const tags = [
  "text.html.basic entity.name",
  "source.js-ignored-vscode",
  "entity.name.tag",
  // BLADE
  "meta.embedded.block.blade constant.other.php",
  "meta.embedded.block.blade keyword.operator.comparison.php",
  "meta.embedded.block.blade keyword.operator.arithmetic.php",
];
export const tagsPunctuation = [
  "meta.tag.sgml.doctype.html",
  "punctuation.definition.tag",
  "meta.tag.block.any",
  "meta.tag.block.any.html",
  "meta.tag.inline.any",
  "source.css-ignored-vscode",
  "meta.tag.metadata.style.end.html",
  "text.html.vue invalid.illegal.character-not-allowed-here.html",
  "meta.tag.inline.i.start.html",
  "meta.tag.structure.div.start.html",
];
export const attributes = [
  "entity.other.attribute-name",
  "entity.name.tag.liquid",
  "invalid.deprecated.entity.other.attribute-name",
  // BLADE
  "meta.embedded.block.blade storage.type.php",
];

// MARKDOWN
export const mdCode = [
  "markup.inline.raw.string.markdown",
  "punctuation.definition.raw.markdown",
  "markup.fenced_code.block.markdown",
  "markup.fenced_code.block.markdown punctuation",
  "markup.raw.block.markdown",
];
export const mdCodeLanguage = ["fenced_code.block.language"];
export const mdList = ["markup.list.unnumbered.markdown meta.paragraph.markdown"];
export const mdListPunctuation = ["punctuation.definition.list.begin"];
export const mdHeading = ["entity.name.section", "markup.heading.setext"];
export const mdHeadingPunctuation = ["punctuation.definition.heading"];
export const mdLink = ["markup.underline.link", "markup.underline.link.image"];
export const mdItalic = ["markup.italic", "punctuation.definition.italic"];
export const mdBold = ["markup.bold", "punctuation.definition.bold"];

export const mdQuote = ["markup.quote"];
export const mdQuotePunctuation = ["punctuation.definition.quote.begin"];
export const component = [
  "entity.name.tag.other.html",
  "meta.tag.other.html punctuation.definition.tag.end.html",
  "meta.tag.other.html punctuation.definition.tag.begin.html",
  "entity.name.tag support.class.component",
  "support.class.component.html",
];
