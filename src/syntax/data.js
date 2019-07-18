module.exports.body = function(theme) {
  let data = [
    {
      name: "[DATA] - Support",
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
  return Object.assign([].concat(data));
};
