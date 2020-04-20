let createScope = (scope, foreground, fontStyle) => {
    return {
        scope,
        settings: {
            foreground,
            fontStyle
        }
    }
}

const currentTextScope = [
    "source.python",
    "source.perl",
    "source.ruby",
    "source.shell",
    "source.sql",
    "source.go",
    "variable.object.property.ts",
    "text.pug",
    "constant.character.entity.named.nbsp.html",
    "constant.character.entity.named.bull.html",
    "variable.other.object",
    "support"
];

const classScope = [
    "source.ts entity.name.type",
    "entity.name.type.class.python",
    "source.tsx entity.name.type",
    "entity.name.type.class.java",
    "entity.name.type.class.cs"
];

const functionScope = [
    "support.function",
    // PHP
    "source.php entity",
    "source.php support.function",
    // CS
    "entity.name.function.cs",
    // ELM
    "meta.function.type-declaration.elm entity",
    "entity.name.function.top_level.elm",
    "entity.name.record.field.elm",
    // ELIXIR
    "entity.name.function.elixir",
    // GO
    "entity.name.function.go",
    // PYTHON
    "meta.function-call.python",
    "entity.name.function.python",
    // LUA
    "entity.name.function.lua",
    // JAVA
    "entity.name.function.java",
    // TWIG
    "meta.function-call.twig",
    // PUG
    "entity.name.function.pug",
    // Javascript
    "source.js entity",
    "source.js support.function",
    "meta.function-call.js support",
    "entity.name.function.js",
    // Typescript
    "entity.name.function.ts",
    "entity.name.function.tsx",
    "entity.name.function.ts",
    "variable.language.super.ts"
];

const typeScope = [
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
    "support.class.builtin",
    "storage.type.string.go",
    "storage.type.boolean.go",
    "storage.type.numeric.go",
    "entity.name.type.go",
    "support.type.exception.python",
    "entity.name.type.interface.ts",
    "support.type.python",
    "entity.name.type.ts",
    "source.ts support.type.builtin",
    "storage.type.php",
    "support.class.php"
];

const punctuationScope = [
    "attribute_value",
    "punctuation.accessor",
    "punctuation",
    "meta.brace",
    "punctuation.definition.template-expression",
    // PHP
    "source.php punctuation.definition.parameters",
    // PYTHON
    "source.python punctuation.definition.parameters",
    // ELM
    "source.elm punctuation",
    // XML
    "meta.tag.xml",
    "meta.tag.preprocessor.xml",
    // JAVASCRIPT
    "keyword.operator.assignment.js",
    "source.js punctuation.definition.parameters",
    // TYPESCRIPT
    "source.ts punctuation.definition.parameters",
    "punctuation.definition.parameters.begin.ts",
    "punctuation.definition.parameters.end.ts",
    "punctuation.definition.parameters.begin.tsx",
    "punctuation.definition.parameters.end.tsx",
    "keyword.operator.assignment.tsx",
    // HTML
    "meta.tag.block.any.html",
    "meta.tag.inline.any.html",
    // LUA
    "punctuation.definition.parameters.begin.lua",
    "punctuation.definition.parameters.end.lua",
    // JAVA
    "punctuation.definition.parameters.begin.bracket.round.java",
    "punctuation.definition.parameters.end.bracket.round.java",
    // jAVASCRIPT
    "punctuation.definition.parameters.begin.js",
    "punctuation.definition.parameters.end.js",
    // PUG
    "constant.name.attribute.tag.pug",
    "string.interpolated.pug",
    // TWIG
    "keyword.other.whitespace.liquid",
    "punctuation.definition.parameters.begin.twig",
    "punctuation.definition.parameters.end.twig",
    "meta.tag.template.block.twig",
    "meta.tag.template.value.twig",
    // SCSS
    "punctuation.definition.parameters.begin.bracket.round.scss",
    "punctuation.definition.parameters.end.bracket.round.scss",
    // CSS
    "punctuation.definition.parameters.begin.bracket.round.css",
    "punctuation.definition.parameters.end.bracket.round.css",
    "keyword.other.unit.ex.css",
    "keyword.other.unit.px.css",
    "keyword.other.unit.pc.css",
    "keyword.other.unit.pt.css",
    "keyword.other.unit.ch.css",
    "keyword.other.unit.in.css",
    "keyword.other.unit.fr.css",
    "keyword.other.unit.vmax.css",
    "keyword.other.unit.vmin.css",
    "keyword.other.unit.mm.css",
    "keyword.other.unit.cm.css",
    "keyword.other.unit.percentage.css",
    "keyword.other.unit.vw.css",
    "keyword.other.unit.vh.css",
    "keyword.other.unit.em.css",
    "keyword.other.unit.rem.css"
]

const stringScope = [
    "string",
    "punctuation.definition.string",
    "string.template",
    "punctuation.definition.string.template",
    "punctuation.definition.string.begin.elm",
    "punctuation.definition.string.end.elm",
    "source.elm string",
    "punctuation.definition.string.begin",
    "punctuation.definition.string.end",
    "source.css string",
    "source.css punctuation.definition.string",
    "meta.toc-list.id.html",
    "string.quoted.single.python",
    "string.quoted.single.python punctuation.definition.string.begin.python",
    "string.quoted.single.python punctuation.definition.string.end.python"
]

const variableScope = [
    "variable",
    "punctuation.definition.variable.less",
    "variable.language",
    "entity.name.type.class.js",
    "entity.name.variable.property.cs",
    "entity.name.variable.field.cs",
    "source.css variable",
    "source.stylus variable",
    "support.variable.magic.python",
    "meta.method.body.java",
    "entity.name.variable.local.cs",
    "punctuation.definition.variable.php"
]

const importScope = [
    "keyword.control.import.js",
    "keyword.control.import.elm",
    "keyword.other.elm",
    "meta.module.name.elm support",
    "meta.import.elm support",
    "keyword.control.import.ts"
]

const constantScope = [
    "constant",
    "punctuation.section.embedded.begin.php",
    "punctuation.section.embedded.end.php"
]

const storageScope = [
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
    "storage.type.function.php",
    "record.name.elm",
    "storage.modifier.java"
]

module.exports.body = function (theme) {
    const common = [
        createScope(currentTextScope, theme.default),
        createScope(classScope, theme.greenalt),
        createScope(functionScope, theme.blue),
        createScope(typeScope, theme.purple),
        createScope(punctuationScope, theme.default + "aa"),
        createScope(stringScope, theme.green),
        createScope(variableScope, theme.salmon),
        createScope(importScope, theme.yellow),
        createScope(constantScope, theme.red),
        createScope(storageScope, theme.turquoize, "italic"),
        {
            name: "Meta Brace",
            scope: [
                "meta.brace",
                "source.js meta"],
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "#Modifier",
            scope: ["entity.name.function.decorator.python"],
            settings: {
                foreground: theme.pink
            }
        },

        {
            name: "Storage",
            scope: ["storage", "source.ts storage", "storage.type.function.arrow", "punctuation.definition.parameters", "storage.type.function", "keyword", "support.function.construct.output.php"],
            settings: {
                foreground: theme.yellow
            }
        },
        {
            name: "Comment",
            scope: ["comment", "punctuation.definition.comment", "string.quoted.docstring.multi.python", "punctuation.definition.string.begin.python", "punctuation.definition.string.end.python"],
            settings: {
                fontStyle: "italic",
                foreground: theme.primary + "80"
            }
        },
        {
            name: "This",
            scope: ["variable.language.this.js", "variable.language.this.ts", "variable.parameter.function.language.special.self.python", "variable.language.special.self.python", "support.module.elm", "variable.other.object.java", "variable.other.object.cs", "entity.other.inherited-class.python", "variable.other.object.property", "support.other.namespace.php", "entity.other.attribute-name.namespace.xml"],
            settings: {
                foreground: theme.orange,
                fontStyle: "italic"
            }
        },
        {
            name: "Support Variable Property DOM",
            scope: "support.variable.property.dom",
            settings: {
                foreground: theme.default
            }
        },
    ];
    let cs = [
        {
            name: "[CS] - Other objects",
            scope: ["variable.other.object.property.cs", "variable.other.global.safer.php", "variable.other.global.php"],
            settings: {
                foreground: theme.orange
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
            name: "Punctuation Arrow Parameters",
            scope: "meta.arrow.ts punctuation.definition.parameters",
            settings: {
                foreground: theme.yellow
            }
        },

        {
            name: "Inherited Component",
            scope: "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
            settings: {
                foreground: theme.default
            }
        }
    ];
    let elm = [
        {
            name: "Accessor",
            scope: ["record.accessor.elm", "entity.name.record.field.accessor.elm"],
            settings: {
                foreground: theme.turquoize
            }
        },

        {
            name: "Type Constructor",
            scope: ["source.elm constant"],
            settings: {
                foreground: theme.salmon
            }
        },

        {
            name: "Meta",
            scope: ["source.elm meta"],
            settings: {
                foreground: theme.default
            }
        }
    ];
    return Object.assign([].concat(common, cs, elm, javascript, typescript));
};
