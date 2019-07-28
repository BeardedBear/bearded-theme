module.exports.body = function(theme) {
  let html = [
    {
      name: "[HTML] - Text",
      scope: ["text.html.derivative"],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "[HTML] - Attribute",
      scope: [
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.localname.xml",
        "entity.other.attribute-name.xml",
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.id.html",
        "entity.other.attribute-name.tsx"
      ],
      settings: {
        foreground: theme.yellow,
        fontStyle: "italic"
      }
    },
    {
      name: "[HTML] - Entity Name",
      scope: [
        "text.html.basic entity.name",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.definition.tag.xml",
        "punctuation.definition.tag.begin.js",
        "punctuation.definition.tag.end.js",
        "support.class.component.js",
        "entity.name.tag.html",
        "entity.name.tag.template.html",
        "entity.name.tag.script.html",
        "entity.name.tag.style.html",
        "entity.name.tag.block.any.html",
        "entity.name.tag.other.html",
        "entity.name.tag.inline.any.html",
        "support.class.component.tsx",
        "punctuation.definition.tag.begin.tsx",
        "punctuation.definition.tag.end.tsx",
        "entity.name.tag.localname.xml",
        "entity.name.tag.xml"
      ],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[HTML] - ID value",
      scope: "meta.toc-list.id.html",
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "[HTML] - Entity Other",
      scope: "text.html.basic entity.other",
      settings: {
        fontStyle: "italic",
        foreground: theme.yellow
      }
    },
    {
      name: "[HTML] - Script Tag",
      scope: "meta.tag.metadata.script.html entity.name.tag.html",
      settings: {
        foreground: theme.yellow
      }
    }
  ];

  let markdown = [
    {
      name: "[MARKDOWN] - Heading Punctuation",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: theme.salmon
      }
    },
    {
      name: "[MARKDOWN] - List",
      scope: "markup.list.unnumbered.markdown meta.paragraph.markdown",
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Raw",
      scope: [
        "markup.inline.raw.string.markdown",
        "punctuation.definition.raw.markdown",
        "markup.fenced_code.block.markdown",
        "markup.fenced_code.block.markdown punctuation"
      ],
      settings: {
        foreground: theme.purple
      }
    },
    {
      name: "[MARKDOWN] - Heading Name Section",
      scope: [
        "entity.name.section.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      settings: {
        foreground: theme.yellow,
        fontStyle: "bold"
      }
    },
    {
      name: "[MARKDOWN] - Paragraph",
      scope: "meta.paragraph.markdown",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "[MARKDOWN] - Quote Punctuation",
      scope: "beginning.punctuation.definition.quote.markdown",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[MARKDOWN] - Quote Paragraph",
      scope: "markup.quote.markdown meta.paragraph.markdown",
      settings: {
        fontStyle: "italic",
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[MARKDOWN] - Emphasis Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold",
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Emphasis Italic",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Lists",
      scope: "beginning.punctuation.definition.list.markdown",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[MARKDOWN] - Link Title",
      scope: "string.other.link.title.markdown",
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "[MARKDOWN] - Link/Image Title",
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "string.other.link.description.title.markdown"
      ],
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "[MARKDOWN] - Link Address",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown"
      ],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Inline Code",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[MARKDOWN] - Code Block",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: theme.blue
      }
    }
  ];

  return Object.assign([].concat(html, markdown));
};
