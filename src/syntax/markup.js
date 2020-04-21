export const variables = ["support.variable.liquid", "support.class.liquid"];
export const tags = ["text.html.basic entity.name", "source.js-ignored-vscode", "entity.name.tag"];
export const tagsPunctuation = [
  "meta.tag.sgml.doctype.html",
  "punctuation.definition.tag",
  "meta.tag.block.any",
  "meta.tag.inline.any",
];
export const attributes = ["entity.other.attribute-name", "entity.name.tag.liquid"];

export default function (theme) {
  let markdown = [
    {
      name: "[MARKDOWN] - Heading Punctuation",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: theme.salmon,
      },
    },
    {
      name: "[MARKDOWN] - List",
      scope: "markup.list.unnumbered.markdown meta.paragraph.markdown",
      settings: {
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Raw",
      scope: [
        "markup.inline.raw.string.markdown",
        "punctuation.definition.raw.markdown",
        "markup.fenced_code.block.markdown",
        "markup.fenced_code.block.markdown punctuation",
      ],
      settings: {
        foreground: theme.purple,
      },
    },
    {
      name: "[MARKDOWN] - Heading Name Section",
      scope: ["entity.name.section.markdown", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
      settings: {
        foreground: theme.yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "[MARKDOWN] - Paragraph",
      scope: "meta.paragraph.markdown",
      settings: {
        foreground: theme.default,
      },
    },
    {
      name: "[MARKDOWN] - Quote Punctuation",
      scope: "beginning.punctuation.definition.quote.markdown",
      settings: {
        foreground: theme.yellow,
      },
    },
    {
      name: "[MARKDOWN] - Quote Paragraph",
      scope: "markup.quote.markdown meta.paragraph.markdown",
      settings: {
        fontStyle: "italic",
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: theme.yellow,
      },
    },
    {
      name: "[MARKDOWN] - Emphasis Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold",
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Emphasis Italic",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Lists",
      scope: "beginning.punctuation.definition.list.markdown",
      settings: {
        foreground: theme.yellow,
      },
    },
    {
      name: "[MARKDOWN] - Link Title",
      scope: "string.other.link.title.markdown",
      settings: {
        foreground: theme.greenalt,
      },
    },
    {
      name: "[MARKDOWN] - Link/Image Title",
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "string.other.link.description.title.markdown",
      ],
      settings: {
        foreground: theme.greenalt,
      },
    },
    {
      name: "[MARKDOWN] - Link Address",
      scope: ["markup.underline.link.markdown", "markup.underline.link.image.markdown"],
      settings: {
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Inline Code",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: theme.blue,
      },
    },
    {
      name: "[MARKDOWN] - Code Block",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: theme.blue,
      },
    },
  ];

  return Object.assign([].concat(markdown));
}
