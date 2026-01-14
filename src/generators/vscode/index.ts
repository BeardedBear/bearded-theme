import { mkdirSync, writeFile, writeFileSync } from "fs";
import { dirname } from "path";

import {
  getVscodeUiTheme,
  themeRegistry,
  ThemeRegistryEntry,
} from "../../shared/theme-registry";
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import ui from "./ui";

const OUTPUT_DIR = "dist/vscode/themes";

/**
 * Main build function for VSCode themes
 */
async function buildVscodeThemes(): Promise<void> {
  console.log("🎨 Building VSCode themes...");

  // Generate all themes
  for (const entry of themeRegistry) {
    await makeVscodeTheme(entry);
  }

  // Generate themes contribution for package.json
  const themesContribute = generateThemeContributes();
  writeFileSync(
    "dist/vscode/themes-contribute.json",
    JSON.stringify(themesContribute, null, 2),
    { encoding: "utf8" },
  );

  console.log(
    `✅ Generated ${themeRegistry.length} VSCode themes in ${OUTPUT_DIR}`,
  );
}

/**
 * Generates VSCode package.json contributes.themes array
 */
function generateThemeContributes(): Array<{
  label: string;
  path: string;
  uiTheme: string;
}> {
  return themeRegistry.map((entry) => ({
    label: `Bearded Theme ${entry.name}`,
    path: `./dist/vscode/themes/bearded-theme-${entry.slug}.json`,
    uiTheme: getVscodeUiTheme(entry.options),
  }));
}

/**
 * Generates a VSCode theme and writes it to a JSON file in dist/vscode/themes.
 */
async function makeVscodeTheme(entry: ThemeRegistryEntry): Promise<void> {
  const { name, options, slug, theme } = entry;
  const { desaturateInputs, hc, light, untindedSelection } = options;

  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    colors: ui(theme, hc, light, untindedSelection, desaturateInputs),
    name: `BeardedTheme ${name}`,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
    tokenColors: syntax(theme, hc, light),
  };

  const outputPath = `${OUTPUT_DIR}/bearded-theme-${slug}.json`;

  // Ensure directory exists
  mkdirSync(dirname(outputPath), { recursive: true });

  writeFile(outputPath, JSON.stringify(themeTemplate, null, 2), (err) => {
    if (err) console.log("error", err);
  });
}

// Run the build
buildVscodeThemes();

export { buildVscodeThemes, makeVscodeTheme };
