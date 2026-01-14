// https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-coloring-in-color-themes
import { Theme } from "../types";

interface SemanticToken {
  bold?: boolean;
  foreground: string;
  italic?: boolean;
  underline?: boolean;
}

export default function semanticTokens(
  theme: Theme,
): Record<string, SemanticToken> {
  return {
    "class.declaration": { foreground: theme.colors.purple },
    "class.decorator": { foreground: theme.colors.pink },
    enumMember: { foreground: theme.colors.purple },
    "meta.decorator": { foreground: theme.colors.pink },
    namespace: { foreground: theme.colors.blue },
    parameter: { foreground: theme.colors.pink },
    property: { foreground: theme.colors.orange },
    "property.declaration": { foreground: theme.ui.default },
    variable: { foreground: theme.colors.salmon },
    "variable.defaultLibrary": { foreground: theme.colors.turquoize },
  };
}
