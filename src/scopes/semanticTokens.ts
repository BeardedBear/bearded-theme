// https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-coloring-in-color-themes
import { Theme } from "../typing";

interface SemanticToken {
  foreground: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export default function semanticTokens(theme: Theme): { [index: string]: SemanticToken } {
  return {
    "property.declaration": { foreground: theme.ui.default },
    "variable.defaultLibrary": { foreground: theme.ui.default },
    "class.defaultLibrary": { foreground: theme.ui.default },
    "property.defaultLibrary": { foreground: theme.ui.default },
    class: { foreground: theme.colors.turquoize },
    namespace: { foreground: theme.colors.salmon },
    "entity.name.function.js": { foreground: theme.colors.salmon },
    parameter: { foreground: theme.colors.pink, italic: true },
    enumMember: { foreground: theme.colors.purple },
  };
}
