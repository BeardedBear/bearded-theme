/**
 * Bearded Theme Build Orchestrator
 *
 * This script orchestrates the build process for VSCode, Zed, and JetBrains themes.
 * Run with: vite-node src/build.ts [vscode|zed|jetbrains|all]
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

type BuildTarget = "all" | "jetbrains" | "vscode" | "zed";

function buildJetBrains(): void {
  console.log("\n🟣 Building JetBrains themes...\n");
  execSync("vite-node src/generators/jetbrains/index.ts", { stdio: "inherit" });
}

function buildJetBrainsPlugin(): void {
  console.log("\n📦 Building JetBrains plugin package...\n");

  const jetbrainsDir = join(process.cwd(), "dist", "jetbrains");

  // Check if Java is available
  if (!isCommandAvailable("java")) {
    console.warn("\n⚠️ Java not found in PATH.");
    console.warn("   Make sure Java 11+ is installed and JAVA_HOME is set.");
    console.warn("   Theme files were still generated in dist/jetbrains/\n");
    console.warn("   To build manually after installing Java:");
    console.warn("     cd dist/jetbrains");
    console.warn("     gradlew.bat buildPlugin  (Windows)");
    console.warn("     ./gradlew buildPlugin    (macOS/Linux)\n");
    return;
  }

  try {
    execSync("java -version", { stdio: "pipe" });
  } catch {
    console.warn("\n⚠️ Could not verify Java installation.");
    console.warn("   Theme files were still generated in dist/jetbrains/\n");
    return;
  }

  // Determine the correct Gradle wrapper command for the platform
  const isWindows = process.platform === "win32";
  const gradleWrapper = isWindows ? "gradlew.bat" : "./gradlew";

  // Initialize the wrapper if needed
  if (!initGradleWrapper(jetbrainsDir)) {
    console.warn("\n⚠️ Could not initialize Gradle wrapper.");
    console.warn("   Please install Gradle and run: gradle wrapper --gradle-version 8.5");
    console.warn("   Or download gradle-wrapper.jar manually to dist/jetbrains/gradle/wrapper/");
    console.warn("   Theme files were still generated in dist/jetbrains/\n");
    return;
  }

  // Build the plugin using the wrapper with cwd option
  console.log("\n   🔨 Running Gradle build...\n");
  try {
    execSync(`${gradleWrapper} buildPlugin`, {
      cwd: jetbrainsDir,
      stdio: "inherit",
    });

    console.log("\n✅ JetBrains plugin built successfully!");
    console.log("   Plugin ZIP: dist/jetbrains/build/distributions/\n");
  } catch {
    console.warn("\n⚠️ Gradle build failed.");
    console.warn("   Check the error messages above for details.");
    console.warn("   Theme files were still generated in dist/jetbrains/\n");
  }
}

function buildVscode(): void {
  console.log("\n🔵 Building VSCode themes...\n");
  execSync("vite-node src/generators/vscode/index.ts", { stdio: "inherit" });
}

function buildZed(): void {
  console.log("\n🟢 Building Zed themes...\n");
  execSync("vite-node src/generators/zed/index.ts", { stdio: "inherit" });
}

function getBuildTarget(): BuildTarget {
  const arg = process.argv[2]?.toLowerCase();
  if (
    arg === "vscode" ||
    arg === "zed" ||
    arg === "jetbrains" ||
    arg === "all"
  ) {
    return arg;
  }
  return "all";
}

/**
 * Initialize or update the Gradle wrapper
 */
function initGradleWrapper(jetbrainsDir: string): boolean {
  const isWindows = process.platform === "win32";
  const wrapperJar = join(jetbrainsDir, "gradle", "wrapper", "gradle-wrapper.jar");

  // If wrapper jar already exists, we're good
  if (existsSync(wrapperJar)) {
    return true;
  }

  console.log("   📥 Gradle wrapper jar not found, initializing...");

  // Try using gradle command to generate the wrapper
  if (isCommandAvailable("gradle")) {
    console.log("   Using 'gradle' to generate wrapper...");
    try {
      execSync("gradle wrapper --gradle-version 8.5", {
        cwd: jetbrainsDir,
        stdio: "inherit",
      });
      return true;
    } catch (error) {
      console.warn("   Failed to generate wrapper with gradle:", error);
    }
  }

  // Try downloading the wrapper jar directly
  console.log("   Attempting to download gradle-wrapper.jar...");
  const wrapperJarUrl =
    "https://github.com/gradle/gradle/raw/v8.13.0/gradle/wrapper/gradle-wrapper.jar";

  try {
    if (isWindows) {
      // Use PowerShell to download on Windows
      execSync(
        `powershell -Command "New-Item -ItemType Directory -Force -Path 'gradle\\wrapper' | Out-Null; Invoke-WebRequest -Uri '${wrapperJarUrl}' -OutFile 'gradle\\wrapper\\gradle-wrapper.jar'"`,
        { cwd: jetbrainsDir, stdio: "inherit" },
      );
    } else {
      // Use curl on Unix
      execSync(
        `mkdir -p gradle/wrapper && curl -L -o gradle/wrapper/gradle-wrapper.jar "${wrapperJarUrl}"`,
        { cwd: jetbrainsDir, stdio: "inherit" },
      );
    }
    return true;
  } catch (error) {
    console.warn("   Failed to download wrapper jar:", error);
  }

  return false;
}

/**
 * Check if a command is available in the system PATH
 */
function isCommandAvailable(command: string): boolean {
  try {
    const isWindows = process.platform === "win32";
    const checkCmd = isWindows ? `where ${command}` : `which ${command}`;
    execSync(checkCmd, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  const target = getBuildTarget();

  console.log("╔════════════════════════════════════════════╗");
  console.log("║        Bearded Theme Build System          ║");
  console.log("╚════════════════════════════════════════════╝");
  console.log(`\n📦 Build target: ${target.toUpperCase()}`);

  const startTime = Date.now();

  try {
    switch (target) {
      case "all":
        buildVscode();
        buildZed();
        buildJetBrains();
        buildJetBrainsPlugin();
        break;
      case "jetbrains":
        buildJetBrains();
        break;
      case "vscode":
        buildVscode();
        break;
      case "zed":
        buildZed();
        break;
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✨ Build completed in ${duration}s`);
    console.log("\n📁 Output directories:");
    if (target === "vscode" || target === "all") {
      console.log("   - dist/vscode/themes/");
    }
    if (target === "zed" || target === "all") {
      console.log("   - dist/zed/themes/");
    }
    if (target === "jetbrains" || target === "all") {
      console.log("   - dist/jetbrains/themes/");
      console.log("   - dist/jetbrains/resources/META-INF/");
    }
  } catch (error) {
    console.error("\n❌ Build failed:", error);
    process.exit(1);
  }
}

main();
