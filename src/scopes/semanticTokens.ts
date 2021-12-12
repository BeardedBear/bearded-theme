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
    property: { foreground: theme.colors.orange },
    variable: { foreground: theme.colors.salmon },
    "variable.defaultLibrary": { foreground: theme.colors.turquoize },
    "class.declaration": { foreground: theme.colors.purple },
    namespace: { foreground: theme.colors.blue },
    parameter: { foreground: theme.colors.pink },
    "class.decorator": { foreground: theme.colors.pink },
    enumMember: { foreground: theme.colors.purple },
  };
}
