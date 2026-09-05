import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getVersionConfig, VersionConfig } from "./version-manager";

/**
 * Version bump types
 */
type BumpType = "major" | "minor" | "patch";

/**
 * IDE types
 */
type IDE = "all" | "vscode" | "zed";

/**
 * Bump a version string
 */
function bumpVersion(version: string, type: BumpType): string {
  const [major, minor, patch] = parseVersion(version);

  switch (type) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error(`Unknown bump type: ${type}`);
  }
}

/**
 * Main function
 */
function main(): void {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error("Usage: npm run bump:version <ide> <type>");
    console.error("  ide:  vscode | zed | all");
    console.error("  type: major | minor | patch");
    console.error("");
    console.error("Examples:");
    console.error(
      "  npm run bump:version zed patch    # Bump Zed from 1.0.0 to 1.0.1",
    );
    console.error(
      "  npm run bump:version vscode minor  # Bump VS Code from 11.0.0 to 11.1.0",
    );
    console.error("  npm run bump:version all patch     # Bump both IDEs");
    process.exit(1);
  }

  const ide = args[0] as IDE;
  const bumpType = args[1] as BumpType;

  // Validate arguments
  if (!["all", "vscode", "zed"].includes(ide)) {
    console.error(`❌ Invalid IDE: ${ide}`);
    console.error("   Must be: vscode | zed | all");
    process.exit(1);
  }

  if (!["major", "minor", "patch"].includes(bumpType)) {
    console.error(`❌ Invalid bump type: ${bumpType}`);
    console.error("   Must be: major | minor | patch");
    process.exit(1);
  }

  try {
    // Read current versions
    const versions = getVersionConfig();
    console.log("📦 Current versions:");
    console.log(`   VS Code: ${versions.vscode}`);
    console.log(`   Zed:     ${versions.zed}`);
    console.log("");

    // Bump versions
    if (ide === "vscode" || ide === "all") {
      const oldVersion = versions.vscode;
      const newVersion = bumpVersion(oldVersion, bumpType);
      versions.vscode = newVersion;
      console.log(`✅ VS Code: ${oldVersion} → ${newVersion}`);

      // Also update package.json for VS Code
      const packageJson = readPackageJson();
      packageJson.version = newVersion;
      writePackageJson(packageJson);
      console.log("   Updated package.json");
    }

    if (ide === "zed" || ide === "all") {
      const oldVersion = versions.zed;
      const newVersion = bumpVersion(oldVersion, bumpType);
      versions.zed = newVersion;
      console.log(`✅ Zed:     ${oldVersion} → ${newVersion}`);
    }

    // Save updated versions
    writeVersionConfig(versions);
    console.log("");
    console.log("✅ Updated versions.json");
    console.log("");
    console.log("📝 Next steps:");

    if (ide === "vscode" || ide === "all") {
      console.log("   1. Run: npm run build:vscode");
      console.log("   2. Run: npm run create:release-notes");
      console.log(`   3. Edit: releases/${versions.vscode}.md`);
      console.log("   4. Run: npm run build:ext:vscode");
      console.log("   5. Run: npm run publish:all");
    }

    if (ide === "zed" || ide === "all") {
      console.log("   1. Run: npm run build:zed");
      console.log("   2. Commit and push changes");
      console.log("   3. Open PR to zed-industries/extensions");
    }
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

/**
 * Parse semantic version string
 */
function parseVersion(version: string): [number, number, number] {
  const parts = version.split(".").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid version format: ${version}`);
  }
  return [parts[0], parts[1], parts[2]];
}

/**
 * Read package.json
 */
function readPackageJson(): Record<string, unknown> {
  const packagePath = join(process.cwd(), "package.json");
  return JSON.parse(readFileSync(packagePath, "utf8"));
}

/**
 * Write package.json
 */
function writePackageJson(packageJson: Record<string, unknown>): void {
  const packagePath = join(process.cwd(), "package.json");
  writeFileSync(
    packagePath,
    JSON.stringify(packageJson, null, 2) + "\n",
    "utf8",
  );
}

/**
 * Write versions.json
 */
function writeVersionConfig(config: VersionConfig): void {
  const versionsPath = join(process.cwd(), "versions.json");
  writeFileSync(versionsPath, JSON.stringify(config, null, 2) + "\n", "utf8");
}

// Run the script
main();
