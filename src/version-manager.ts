import { readFileSync } from "fs";
import { join } from "path";

/**
 * Configuration interface for IDE versions
 */
export interface VersionConfig {
  vscode: string;
  zed: string;
}

/**
 * Get all versions for all supported IDEs
 */
export function getAllVersions(): VersionConfig {
  return getVersionConfig();
}

/**
 * Get version from package.json (for backwards compatibility)
 */
export function getPackageVersion(): string {
  try {
    const packageJsonPath = join(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    return packageJson.version || "1.0.0";
  } catch {
    console.warn("⚠️ Could not read package.json, using default version");
    return "1.0.0";
  }
}

/**
 * Get VS Code version from versions.json
 */
export function getVSCodeVersion(): string {
  const config = getVersionConfig();
  return config.vscode;
}

/**
 * Get Zed version from versions.json
 */
export function getZedVersion(): string {
  const config = getVersionConfig();
  return config.zed;
}

/**
 * Get version configuration from versions.json
 */
function getVersionConfig(): VersionConfig {
  try {
    const versionsPath = join(process.cwd(), "versions.json");
    const versions: VersionConfig = JSON.parse(
      readFileSync(versionsPath, "utf8"),
    );
    return versions;
  } catch (error) {
    console.warn(
      "⚠️ Could not read versions.json, using default versions",
      error,
    );
    return {
      vscode: "1.0.0",
      zed: "1.0.0",
    };
  }
}
