import { copyFileSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import {
  getZedAppearance,
  themeRegistry,
  ThemeRegistryEntry,
} from "../../shared/theme-registry";
import { getZedVersion } from "../../version-manager";
import { ZedTheme, ZedThemeFamily } from "./types";
import { buildZedThemeStyle } from "./ui";

const OUTPUT_DIR = "dist/zed/themes";
const ZED_DIR = "dist/zed";

/**
 * Build all Zed themes and output to dist/zed
 */
async function buildZedThemes(): Promise<void> {
  console.log("🎨 Building Zed themes...");

  // Get version from versions.json (Zed-specific version)
  const version = getZedVersion();
  console.log(`📦 Using Zed version: ${version}`);

  // Ensure output directories exist
  mkdirSync(OUTPUT_DIR, { recursive: true });
  mkdirSync(ZED_DIR, { recursive: true });

  // Create the theme family with all themes
  const themeFamily: ZedThemeFamily = {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    author: "BeardedBear",
    name: "Bearded Theme",
    themes: themeRegistry.map(createZedTheme),
  };

  // Write the combined theme family file
  writeFileSync(
    `${OUTPUT_DIR}/bearded-theme.json`,
    JSON.stringify(themeFamily, null, 2),
    { encoding: "utf8" },
  );

  // Generate extension.toml with synced version
  const extensionToml = `id = "bearded-theme"
name = "Bearded Theme"
description = "The theme with a long beard."
version = "${version}"
schema_version = 1
authors = ["BeardedBear <beardedbearbear@gmail.com>"]
repository = "https://github.com/BeardedBear/bearded-theme"
`;

  writeFileSync(`${ZED_DIR}/extension.toml`, extensionToml, {
    encoding: "utf8",
  });

  // Copy LICENSE file (required by Zed as of October 2025)
  try {
    const licenseSrc = join(process.cwd(), "LICENSE");
    const licenseDest = join(ZED_DIR, "LICENSE");
    copyFileSync(licenseSrc, licenseDest);
    console.log("📄 Copied LICENSE file to dist/zed/");
  } catch {
    console.warn(
      "⚠️ Could not copy LICENSE file. Make sure LICENSE exists at project root.",
    );
  }

  // Generate README for Zed extension
  const readmeContent = `# Bearded Theme for Zed

The theme with a long beard.

## Installation

1. Open Zed
2. Open the Extensions panel (\`cmd+shift+x\` or \`ctrl+shift+x\`)
3. Search for "Bearded Theme"
4. Click Install

## Available Themes

${themeRegistry.map((entry) => `- Bearded Theme ${entry.name}`).join("\n")}

## Links

- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedtheme)
- [GitHub Repository](https://github.com/BeardedBear/bearded-theme)
- [Report Issues](https://github.com/BeardedBear/bearded-theme/issues)

## License

GNU General Public License v3.0

## Author

Made with ❤️ by [BeardedBear](https://github.com/BeardedBear)
`;

  writeFileSync(`${ZED_DIR}/README.md`, readmeContent, { encoding: "utf8" });

  console.log(
    `✅ Generated Zed theme family with ${themeRegistry.length} themes in ${OUTPUT_DIR}`,
  );
  console.log(`✅ Generated extension.toml (version ${version})`);
  console.log("✅ Generated README.md");
  console.log(`\n📁 Zed extension ready in: ${ZED_DIR}/`);
}

/**
 * Creates a single Zed theme object
 */
function createZedTheme(entry: ThemeRegistryEntry): ZedTheme {
  return {
    appearance: getZedAppearance(entry.options),
    name: `Bearded Theme ${entry.name}`,
    style: buildZedThemeStyle(entry.theme, entry.options),
  };
}

// Run the build
buildZedThemes();

export { buildZedThemes, createZedTheme };
