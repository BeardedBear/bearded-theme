/**
 * Bearded Theme Build Orchestrator
 *
 * This script orchestrates the build process for both VSCode and Zed themes.
 * Run with: vite-node src/build.ts [vscode|zed|all]
 */

import { execSync } from "child_process";

type BuildTarget = "all" | "vscode" | "zed";

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
  if (arg === "vscode" || arg === "zed" || arg === "all") {
    return arg;
  }
  return "all";
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
  } catch (error) {
    console.error("\n❌ Build failed:", error);
    process.exit(1);
  }
}

main();
