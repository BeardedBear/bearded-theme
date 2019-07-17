module.exports.body = function(theme) {
  let common = [
    {
      name: "Current text",
      scope: [
        "source.python",
        "source.perl",
        "source.ruby",
        "source.shell",
        "source.sql",
        "source.go"
      ],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Entity / functions",
      scope: [
        "source.js entity",
        "source.js support.function",
        "source.php entity",
        "source.php support.function"
      ],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "Storage Type Function",
      scope: [
        "source.js storage.type.function",
        "source.php storage.type.function",
        "source.java storage"
      ],
      settings: {
        foreground: theme.purple,
        fontStyle: "italic"
      }
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: theme.default + "3d"
      }
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        foreground: theme.red
      }
    },
    {
      name: "Storage Type Function",
      scope: "storage.type.function",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "Keyword",
      scope: "keyword, storage.type.class",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "Meta",
      scope: "meta",
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "Meta JSX",
      scope: [
        "meta.jsx.children",
        "meta.jsx.children.js",
        "meta.jsx.children.tsx"
      ],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Meta Brace",
      scope: ["meta.brace", "source.js meta"],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Punctuation default text",
      scope: [
        "punctuation",
        "meta.brace",
        "source.js punctuation.definition.parameters",
        "source.php punctuation.definition.parameters",
        "source.python punctuation.definition.parameters",
        "punctuation.definition.template-expression"
      ],
      settings: {
        foreground: theme.default + "71"
      }
    },
    {
      name: "Punctuation Parameters",
      scope: "punctuation.definition.parameters",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "Storage Type Arrow Function",
      scope: "storage.type.function.arrow",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "String",
      scope: [
        "string",
        "punctuation.definition.string",
        "source.js string.template",
        "source.js punctuation.definition.string.template"
      ],
      settings: {
        foreground: theme.green
      }
    },
    {
      name: "String Template",
      scope: ["string.template", "punctuation.definition.string.template"],
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "Support",
      scope: "support",
      settings: {
        foreground: theme.orange
      }
    },
    {
      name: "Support Function",
      scope: "support.function",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "Support Variable Property DOM",
      scope: "support.variable.property.dom",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "Variable",
      scope: [
        "variable",
        "punctuation.definition.variable.less",
        "punctuation.definition.variable.php",
        "variable.language",
        "entity.name.type.class.js"
      ],
      settings: {
        foreground: theme.salmon
      }
    },
    {
      name: "Constant",
      scope: "constant",
      settings: {
        foreground: theme.red
      }
    }
  ];
  let cs = [
    {
      name: "[CS] - Types",
      scope: ["keyword.type.cs", "storage.type.cs"],
      settings: {
        foreground: theme.purple
      }
    },
    {
      name: "[CS] - Functions",
      scope: ["entity.name.function.cs"],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[CS] - Variables",
      scope: [
        "entity.name.variable.property.cs",
        "entity.name.variable.field.cs"
      ],
      settings: {
        foreground: theme.salmon
      }
    },
    {
      name: "[CS] - Storage modifier",
      scope: ["storage.modifier.cs"],
      settings: {
        foreground: theme.turquoize
      }
    },
    {
      name: "[CS] - Other objects",
      scope: ["variable.other.object.cs", "variable.other.object.property.cs"],
      settings: {
        foreground: theme.orange
      }
    }
  ];
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
        "entity.other.attribute-name.localname.xml"
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
        "entity.name.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.definition.tag.xml"
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
    },
    {
      name:
        "[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes",
      scope:
        "punctuation.definition.string.begin, punctuation.definition.string.end",
      settings: {
        foreground: theme.green
      }
    }
  ];
  let ini = [
    {
      name: "[INI] - Entity",
      scope: "source.ini entity",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "[INI] - Keyword",
      scope: "source.ini keyword",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[INI] - Punctuation Definition",
      scope: "source.ini punctuation.definition",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[INI] - Punctuation Separator",
      scope: "source.ini punctuation.separator",
      settings: {
        foreground: theme.yellow
      }
    }
  ];
  let javascript = [
    {
      name: "[JAVASCRIPT] - Inherited Component",
      scope: "entity.other.inherited-class.js",
      settings: {
        foreground: "#ccc"
      }
    }
  ];
  let css = [
    {
      name: "[CSS] - pseudo",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css"
      ],
      settings: {
        foreground: theme.red
      }
    },
    {
      name: "[CSS] - Class",
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.parent-selector-suffix.css punctuation"
      ],
      settings: {
        foreground: theme.green
      }
    },
    {
      name: "[CSS] - &",
      scope: [
        "entity.name.tag.reference.scss",
        "keyword.control.at-rule.media.css punctuation",
        "keyword.control.at-rule.import.scss",
        "entity.other.attribute-name.parent-selector.css punctuation"
      ],
      settings: {
        foreground: theme.orange
      }
    },
    {
      name: "[CSS] - ID Selector",
      scope: "entity.other.attribute-name.id.css",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[CSS] - Element Selector",
      scope: ["entity.name.tag.css"],
      settings: {
        foreground: theme.purple
      }
    },
    {
      name: "[CSS] - Support",
      scope: [
        "source.css support",
        "source.css entity.name.tag",
        "meta.property-list.css",
        "meta.property-list.scss"
      ],
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[CSS] - Constant",
      scope: [
        "source.css constant",
        "source.css support.constant",
        "constant.numeric.css keyword"
      ],
      settings: {
        foreground: theme.default + "cc"
      }
    },

    {
      name: "[CSS] - String",
      scope: ["source.css string", "source.css punctuation.definition.string"],
      settings: {
        foreground: theme.green
      }
    },
    {
      name: "[CSS] - Variable",
      scope: ["source.css variable", "source.stylus variable"],
      settings: {
        foreground: theme.salmon
      }
    }
  ];
  let python = [
    {
      name: "[PYTHON]",
      scope: ["storage.type.class", "storage.type.function"],
      settings: {
        foreground: theme.turquoize,
        fontStyle: "italic"
      }
    },
    {
      name: "[PYTHON] - Self Argument",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: theme.pink
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
  let typescript = [
    {
      name: "[TYPESCRIPT] - Entity Name Type",
      scope: "source.ts entity.name.type",
      settings: {
        foreground: theme.turquoize
      }
    },
    {
      name: "[TYPESCRIPT] - Keyword",
      scope: "source.ts keyword",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[TYPESCRIPT] - Punctuation Parameters",
      scope: "source.ts punctuation.definition.parameters",
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "[TYPESCRIPT] - Punctuation Arrow Parameters",
      scope: "meta.arrow.ts punctuation.definition.parameters",
      settings: {
        foreground: theme.yellow
      }
    },
    {
      name: "[TYPESCRIPT] - Storage",
      scope: "source.ts storage",
      settings: {
        foreground: theme.blue
      }
    },
    {
      name: "[TYPESCRIPT] - Inherited Component",
      scope:
        "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
      settings: {
        foreground: theme.default + "cc"
      }
    }
  ];
  let elm = [
    {
      name: "[ELM] - Types",
      scope: ["meta.function.type-declaration.elm storage", "storage.type.elm"],
      settings: {
        foreground: theme.purple
      }
    },
    {
      name: "[ELM] - Accessor",
      scope: ["record.accessor.elm", "entity.name.record.field.accessor.elm"],
      settings: {
        foreground: theme.red
      }
    },
    {
      name: "[ELM] - Import",
      scope: ["keyword.control.import.elm", "keyword.other.elm"],
      settings: {
        foreground: theme.greenalt
      }
    },
    {
      name: "[ELM] - Type Constructor",
      scope: ["source.elm constant"],
      settings: {
        foreground: theme.salmon
      }
    },
    {
      name: "[ELM] - Imports",
      scope: ["meta.module.name.elm support", "meta.import.elm support"],
      settings: {
        foreground: theme.orange
      }
    },
    {
      name: "[ELM] - Meta",
      scope: ["source.elm meta"],
      settings: {
        foreground: theme.default + "cc"
      }
    },
    {
      name: "[ELM] - String",
      scope: [
        "punctuation.definition.string.begin.elm",
        "punctuation.definition.string.end.elm",
        "source.elm string"
      ],
      settings: {
        foreground: theme.green
      }
    },
    {
      name: "[ELM] - Punctuation",
      scope: ["source.elm punctuation"],
      settings: {
        foreground: theme.default + "71"
      }
    },
    {
      name: "[ELM] - Function",
      scope: [
        "meta.function.type-declaration.elm entity",
        "entity.name.function.top_level.elm"
      ],
      settings: {
        foreground: theme.blue
      }
    }
  ];
  let json = [
    {
      name: "[JSON] - Support",
      scope: [
        "source.json support",
        "punctuation.support.type.property-name.begin.json.comments punctuation",
        "entity.name.tag.yaml"
      ],
      settings: {
        foreground: theme.yellow
      }
    }
  ];

  return Object.assign(
    [].concat(
      css,
      common,
      cs,
      elm,
      ini,
      html,
      javascript,
      json,
      markdown,
      python,
      typescript
    )
  );
};
