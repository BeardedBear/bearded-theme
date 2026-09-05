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
 * Get version configuration from versions.json
 */
export function getVersionConfig(): VersionConfig {
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

/**
 * Get Zed version from versions.json
 */
export function getZedVersion(): string {
  const config = getVersionConfig();
  return config.zed;
}
