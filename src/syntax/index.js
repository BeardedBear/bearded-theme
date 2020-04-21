import programmation from "./programmation.js";

export default function (theme) {
  return Object.assign([].concat(programmation(theme)));
}

export function createScope(scope, foreground, fontStyle) {
  return {
    scope,
    settings: {
      foreground,
      fontStyle,
    },
  };
}
