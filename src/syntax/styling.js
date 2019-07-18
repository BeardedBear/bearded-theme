module.exports.body = function(theme) {
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
    }
  ];

  return Object.assign([].concat(css));
};
