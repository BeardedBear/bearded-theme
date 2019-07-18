const markup = require("./markup");
const styling = require("./styling");
const data = require("./data");
const config = require("./config");
const programmation = require("./programmation");

module.exports.body = function(theme) {
  return Object.assign(
    [].concat(
      config.body(theme),
      data.body(theme),
      markup.body(theme),
      programmation.body(theme),
      styling.body(theme)
    )
  );
};
