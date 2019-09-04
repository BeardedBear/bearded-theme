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
                "source.go",
                "variable.object.property.ts",
                "text.pug",
                "constant.character.entity.named.nbsp.html",
                "constant.character.entity.named.bull.html"
            ],
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "Class",
            scope: [
                "source.ts entity.name.type",
                "entity.name.type.class.python",
                "source.tsx entity.name.type",
                "entity.name.type.class.java",
                "entity.name.type.class.cs"
            ],
            settings: {
                foreground: theme.greenalt
            }
        },
        {
            name: "#functions",
            scope: [
                "source.js entity",
                "source.js support.function",
                "source.php entity",
                "source.php support.function",
                "entity.name.function.cs",
                "meta.function.type-declaration.elm entity",
                "entity.name.function.top_level.elm",
                "support.function",
                "entity.name.function.ts",
                "meta.function-call.js support",
                "entity.name.function.elixir",
                "entity.name.function.go",
                "meta.function-call.python",
                "entity.name.function.python",
                "entity.name.function.tsx",
                "entity.name.function.ts",
                "entity.name.function.lua",
                "variable.language.super.ts",
                "entity.name.function.java",
                "entity.name.function.pug",
                "entity.name.function.js"
            ],
            settings: {
                foreground: theme.blue
            }
        },
        {
            name: "#functions type",
            scope: ["storage.type.function", "meta.function.lua keyword"],
            settings: {
                foreground: theme.blue,
                fontStyle: "italic"
            }
        },
        {
            name: "#Type",
            scope: [
                "source.js storage.type.function",
                "source.php storage.type.function",
                "source.java storage",
                "keyword.type.cs",
                "storage.type.cs",
                "meta.function.type-declaration.elm storage",
                "storage.type.elm",
                "support.type.primitive.ts",
                "source.ts meta.type.annotation.ts entity.name.type.ts",
                "support.type.primitive.tsx",
                "source.tsx meta.type.annotation.tsx entity.name.type.tsx",
                "source.vue support.class.builtin.js",
                "storage.type.string.go",
                "storage.type.boolean.go",
                "storage.type.numeric.go",
                "entity.name.type.go",
                "support.type.exception.python",
                "entity.name.type.interface.ts"
            ],
            settings: {
                foreground: theme.purple
            }
        },
        {
            name: "#Import",
            scope: [
                "keyword.control.import.js",
                "keyword.control.import.elm",
                "keyword.other.elm",
                "meta.module.name.elm support",
                "meta.import.elm support",
                "keyword.control.import.ts"
            ],
            settings: {
                foreground: theme.yellow
            }
        },
        {
            name: "Comment",
            scope: [
                "comment",
                "punctuation.definition.comment",
                "string.quoted.docstring.multi.python",
                "punctuation.definition.string.begin.python",
                "punctuation.definition.string.end.python"
            ],
            settings: {
                fontStyle: "italic",
                foreground: theme.default + "70"
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
            name: "Meta Brace",
            scope: ["meta.brace", "source.js meta"],
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "#Modifier",
            scope: [
                "storage.modifier.cs",
                "storage.modifier.ts",
                "storage.type.class.tsx",
                "storage.type.class",
                "storage.type.class.python",
                "keyword.control.export.ts",
                "storage.type.function.ts",
                "storage.type.function.js",
                "storage.type.function.python",
                "keyword.function.go",
                "storage.type.function.php"
            ],
            settings: {
                foreground: theme.turquoize,
                fontStyle: "italic"
            }
        },
        {
            name: "#Punctuation",
            scope: [
                "punctuation",
                "meta.brace",
                "source.js punctuation.definition.parameters",
                "source.php punctuation.definition.parameters",
                "source.python punctuation.definition.parameters",
                "punctuation.definition.template-expression",
                "source.ts punctuation.definition.parameters",
                "source.elm punctuation",
                "meta.tag.preprocessor.xml",
                "keyword.operator.assignment.js",
                "punctuation.definition.parameters.begin.ts",
                "punctuation.definition.parameters.end.ts",
                "punctuation.definition.parameters.begin.tsx",
                "punctuation.definition.parameters.end.tsx",
                "meta.tag.block.any.html",
                "meta.tag.inline.any.html",
                "keyword.operator.assignment.tsx",
                "punctuation.definition.parameters.begin.lua",
                "punctuation.definition.parameters.end.lua",
                "punctuation.definition.parameters.begin.bracket.round.css",
                "punctuation.definition.parameters.end.bracket.round.css",
                "punctuation.definition.variable.php",
                "punctuation.definition.parameters.begin.bracket.round.java",
                "punctuation.definition.parameters.end.bracket.round.java",
                "constant.name.attribute.tag.pug",
                "punctuation.definition.parameters.begin.js",
                "punctuation.definition.parameters.end.js",
                "string.interpolated.pug",
                "attribute_value",
                "keyword.other.whitespace.liquid"
            ],
            settings: {
                foreground: theme.default + "aa"
            }
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
                "support.function.construct.output.php"
            ],
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
                "source.js punctuation.definition.string.template",
                "punctuation.definition.string.begin.elm",
                "punctuation.definition.string.end.elm",
                "source.elm string",
                "punctuation.definition.string.begin",
                "punctuation.definition.string.end",
                "source.css string",
                "source.css punctuation.definition.string",
                "meta.toc-list.id.html"
            ],
            settings: {
                foreground: theme.green
            }
        },
        {
            name: "String Template",
            scope: [
                "string.template",
                "punctuation.definition.string.template"
            ],
            settings: {
                foreground: theme.greenalt
            }
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
                "entity.other.inherited-class.python"
            ],
            settings: {
                foreground: theme.orange,
                fontStyle: "italic"
            }
        },
        {
            name: "Support",
            scope: "support",
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "Support Variable Property DOM",
            scope: "support.variable.property.dom",
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "Variable",
            scope: [
                "variable",
                "punctuation.definition.variable.less",
                "variable.language",
                "entity.name.type.class.js",
                "entity.name.variable.property.cs",
                "entity.name.variable.field.cs",
                "source.css variable",
                "source.stylus variable",
                "entity.name.type.ts",
                "support.variable.magic.python",
                "meta.method.body.java",
                "entity.name.variable.local.cs"
            ],
            settings: {
                foreground: theme.salmon
            }
        },
        {
            name: "Constant",
            scope: [
                "constant",
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php"
            ],
            settings: {
                foreground: theme.red
            }
        }
    ];
    let cs = [
        {
            name: "[CS] - Other objects",
            scope: [
                "variable.other.object.property.cs",
                "variable.other.global.safer.php",
                "variable.other.global.php"
            ],
            settings: {
                foreground: theme.orange
            }
        }
    ];
    let java = [
        {
            name: "[JAVA] - Storage modifier",
            scope: ["storage.modifier.java"],
            settings: {
                foreground: theme.turquoize,
                fontStyle: "italic"
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

    let typescript = [
        {
            name: "[TYPESCRIPT] - Punctuation Arrow Parameters",
            scope: "meta.arrow.ts punctuation.definition.parameters",
            settings: {
                foreground: theme.yellow
            }
        },

        {
            name: "[TYPESCRIPT] - Inherited Component",
            scope:
                "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
            settings: {
                foreground: theme.default
            }
        }
    ];
    let elm = [
        {
            name: "[ELM] - Accessor",
            scope: [
                "record.accessor.elm",
                "entity.name.record.field.accessor.elm"
            ],
            settings: {
                foreground: theme.turquoize
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
            name: "[ELM] - Meta",
            scope: ["source.elm meta"],
            settings: {
                foreground: theme.default
            }
        }
    ];
    return Object.assign(
        [].concat(common, cs, java, elm, javascript, typescript)
    );
};
