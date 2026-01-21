/**
 * JetBrains Theme Generator
 *
 * Main build script for generating JetBrains IDE themes.
 * Generates a complete plugin structure that can be built with Gradle.
 *
 * Output structure:
 * dist/jetbrains/
 * ⌂ resources/
 * ⌂ ⌂ META-INF/
 * ⌂ ⌂ ⌂ plugin.xml
 * ⌂ themes/
 * ⌂ ⌂ bearded-theme-{slug}.theme.json
 * ⌂ ⌂ bearded-theme-{slug}.xml (editor schemes)
 * ⌂ build.gradle.kts
 * ⌂ settings.gradle.kts
 * ⌂ gradle.properties
 * ⌂ README.md
 */

import { chmodSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import { Meta } from "../../shared/meta";
import { themeRegistry, ThemeRegistryEntry } from "../../shared/theme-registry";
import { getJetBrainsVersion } from "../../version-manager";
import { buildEditorScheme } from "./editor-scheme";
import { generatePluginXml } from "./plugin";
import { buildJetBrainsTheme } from "./theme";

// Output directories
const OUTPUT_DIR = "dist/jetbrains";
const THEMES_DIR = join(OUTPUT_DIR, "themes");
const RESOURCES_DIR = join(OUTPUT_DIR, "resources");
const META_INF_DIR = join(RESOURCES_DIR, "META-INF");

/**
 * Main build function for JetBrains themes
 */
async function buildJetBrainsThemes(): Promise<void> {
  console.log("🎨 Building JetBrains themes...");

  // Get version from versions.json
  const version = getJetBrainsVersion();
  console.log(`Using JetBrains version: ${version}`);

  // Ensure output directories exist
  mkdirSync(THEMES_DIR, { recursive: true });
  mkdirSync(META_INF_DIR, { recursive: true });

  // Generate all theme files
  for (const entry of themeRegistry) {
    await generateThemeFiles(entry);
  }

  // Generate plugin.xml
  const pluginXml = generatePluginXml(themeRegistry, version);
  writeFileSync(join(META_INF_DIR, "plugin.xml"), pluginXml, {
    encoding: "utf8",
  });

  // Generate Gradle build files and wrapper
  generateGradleFiles(version);
  generateGradleWrapper();

  // Generate README
  generateReadme();

  console.log(
    `Generated ${themeRegistry.length} JetBrains themes in ${OUTPUT_DIR}`,
  );
  console.log(`Generated plugin.xml (version ${version})`);
  console.log("✅ Generated Gradle build files");
  console.log("✅ Generated README.md");
  console.log(`
 JetBrains plugin ready in: ${OUTPUT_DIR}/
`);
  console.log("\n To build the plugin:");
  console.log("   cd dist/jetbrains");
  console.log("   ./gradlew buildPlugin");
  console.log("\n   The plugin ZIP will be in build/distributions/");
}

/**
 * Generate Gradle build files for the plugin
 *
 * @param version - Plugin version
 */
function generateGradleFiles(version: string): void {
  // build.gradle.kts
  const buildGradle = `plugins {
    id("org.jetbrains.intellij.platform") version "2.10.5"
}

group = "com.beardedtheme"
version = "${version}"

repositories {
    mavenCentral()
    intellijPlatform {
        defaultRepositories()
    }
}

// Configure source sets to use our directory structure
sourceSets {
    main {
        resources {
            srcDirs("resources", "themes")
        }
    }
}

dependencies {
    intellijPlatform {
        // Target IntelliJ IDEA Community as our base IDE (works with all JetBrains IDEs)
        // Using a stable version that has available dependencies
        create("IC", "2024.2.1")

        // Use bundled plugin verifier
        pluginVerifier()
    }
}

intellijPlatform {
    pluginConfiguration {
        name = "${Meta.name}"
        version = "${version}"
        description = "${Meta.description} A collection of carefully crafted color themes."
        changeNotes = "See GitHub releases for changelog."

        ideaVersion {
            sinceBuild = "242"
            untilBuild = provider { null }
        }

        vendor {
            name = "${Meta.author.name}"
            email = "${Meta.author.email}"
            url = "${Meta.urls.github}"
        }
    }

    publishing {
        // Configure for JetBrains Marketplace publishing
        // token = System.getenv("PUBLISH_TOKEN")
    }

    // Disable instrumentation since this is a theme-only plugin with no code
    instrumentCode = false
}

tasks {
    buildSearchableOptions {
        enabled = false
    }

    processResources {
        duplicatesStrategy = DuplicatesStrategy.INCLUDE
    }
}
`;

  writeFileSync(join(OUTPUT_DIR, "build.gradle.kts"), buildGradle, {
    encoding: "utf8",
  });

  // settings.gradle.kts
  const settingsGradle = `rootProject.name = "${Meta.slug}"

pluginManagement {
    repositories {
        maven("https://oss.sonatype.org/content/repositories/snapshots/")
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}
`;

  writeFileSync(join(OUTPUT_DIR, "settings.gradle.kts"), settingsGradle, {
    encoding: "utf8",
  });

  // gradle.properties
  const gradleProperties = `# Gradle settings
org.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError
org.gradle.caching=true
org.gradle.parallel=true

# Kotlin settings
kotlin.stdlib.default.dependency=false

# IntelliJ Platform settings
# See https://plugins.jetbrains.com/docs/intellij/tools-gradle-intellij-plugin.html
platformType=IC
platformVersion=2024.2.1
`;

  writeFileSync(join(OUTPUT_DIR, "gradle.properties"), gradleProperties, {
    encoding: "utf8",
  });
}

/**
 * Generate Gradle wrapper files
 *
 * Creates the gradlew, gradlew.bat scripts and gradle/wrapper directory
 * so users don't need Gradle installed to build the plugin.
 */
function generateGradleWrapper(): void {
  const wrapperDir = join(OUTPUT_DIR, "gradle", "wrapper");
  mkdirSync(wrapperDir, { recursive: true });

  // gradle-wrapper.properties
  const wrapperProperties = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.13-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`;

  writeFileSync(
    join(wrapperDir, "gradle-wrapper.properties"),
    wrapperProperties,
    { encoding: "utf8" },
  );

  // gradlew (Unix shell script)
  const gradlewUnix = `#!/bin/sh

#
# Gradle start up script for POSIX systems
#

# Attempt to set APP_HOME
# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=\${app_path%"\${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=\${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;; #(
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=\${0##*/}
APP_HOME=$( cd "\${APP_HOME:-./}" && pwd -P ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar

# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            #(
              /?*)  t=\${arg#)}; t=/\${t%%/*}           #(
                    [ -e "$t" ] ;;                    #(
              *)    false ;; #(
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # temporary files, so each has its own turn at the end.
        shift
        set -- "$@" "$arg"
    done
fi

# Add default JVM options here.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command;
#   * $DEFAULT_JVM_OPTS, $JAVA_OPTS, and $GRADLE_OPTS can contain fragments of
#     temporary shell commands that run inside "" and get evaluated
#     within "" by the exec below.
#   * DEFAULT_JVM_OPTS://
set -- \
        "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
        org.gradle.wrapper.GradleWrapperMain \
        "$@"

# Stop when "xeli" has created that special file indicating that the initialization is complete
# that file is a sign for us to skip the code below, which is used for initializing Gradle

exec "$JAVACMD" "$@"
`;

  writeFileSync(join(OUTPUT_DIR, "gradlew"), gradlewUnix, { encoding: "utf8" });

  // Make gradlew executable on Unix systems
  try {
    chmodSync(join(OUTPUT_DIR, "gradlew"), 0o755);
  } catch {
    // Ignore chmod errors on Windows
  }

  // gradlew.bat (Windows batch script)
  const gradlewBat = `@rem
@rem Gradle startup script for Windows
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here.
set DEFAULT_JVM_OPTS "-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

 echo.
 echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
 echo.
 echo Please set the JAVA_HOME variable in your environment to match the
 echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

 echo.
 echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
 echo.
 echo Please set the JAVA_HOME variable in your environment to match the
 echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar


@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem having the _cmd.exe return code instead.
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
`;

  writeFileSync(join(OUTPUT_DIR, "gradlew.bat"), gradlewBat, {
    encoding: "utf8",
  });

  console.log("✅ Generated Gradle wrapper scripts");
  console.log(
    "   ⚠️  Note: gradle-wrapper.jar must be downloaded on first build",
  );
}

/**
 * Generate README for the JetBrains plugin
 */
function generateReadme(): void {
  const codeBlock = "```";

  const readmeContent = `# ${Meta.name} for JetBrains IDEs

${Meta.description} A collection of carefully crafted color themes for JetBrains IDEs.

## Installation

### From JetBrains Marketplace (Recommended)

1. Open your JetBrains IDE (WebStorm, IntelliJ IDEA, PyCharm, etc.)
2. Go to **Settings/Preferences** → **Plugins** → **Marketplace**
3. Search for "${Meta.name}"
4. Click **Install**
5. Restart the IDE
6. Go to **Settings/Preferences** → **Appearance & Behavior** → **Appearance**
7. Select your preferred ${Meta.name} from the Theme dropdown

### From ZIP File (Manual Installation)

1. Download the plugin ZIP file from the releases
2. Open your JetBrains IDE
3. Go to **Settings/Preferences** → **Plugins**
4. Click the gear icon ⚙️ and select **Install Plugin from Disk...**
5. Select the downloaded ZIP file
6. Restart the IDE
7. Select your theme in **Settings/Preferences** → **Appearance & Behavior** → **Appearance**

## Building from Source

### Prerequisites

- Java 17 or higher
- Gradle (wrapper included)

### Build Commands

${codeBlock}bash
# Build the plugin
./gradlew buildPlugin

# The plugin ZIP will be in build/distributions/

# Run the plugin in a sandbox IDE for testing
./gradlew runIde

# Verify plugin compatibility
./gradlew verifyPlugin
${codeBlock}

## Available Themes

${themeRegistry.map((entry) => `- ${Meta.name} ${entry.name}`).join(
    "\n",
)}

## Theme Categories

${Meta.categories.map((c) => `- **${c.name}** - ${c.description}`).join(
    "\n",
)}

## Links

- [VS Code Extension](${Meta.urls.marketplace.vscode})
- [Zed Extension](${Meta.urls.github})
- [GitHub Repository](${Meta.urls.github})
- [Report Issues](${Meta.urls.issues})

## License

${Meta.license}

## Author

Made with ❤️ by [${Meta.author.name}](https://github.com/${Meta.author.name})
`;

  writeFileSync(join(OUTPUT_DIR, "README.md"), readmeContent, {
    encoding: "utf8",
  });
}

/**
 * Generate theme.json and editor scheme XML for a single theme
 *
 * @param entry - Theme registry entry
 */
async function generateThemeFiles(entry: ThemeRegistryEntry): Promise<void> {
  const { slug } = entry;

  // Generate theme.json
  const theme = buildJetBrainsTheme(entry);
  const themeJson = JSON.stringify(theme, null, 2);
  writeFileSync(join(THEMES_DIR, `bearded-theme-${slug}.theme.json`), themeJson, {
    encoding: "utf8",
  });

  // Generate editor color scheme XML
  const editorScheme = buildEditorScheme(entry);
  writeFileSync(join(THEMES_DIR, `bearded-theme-${slug}.xml`), editorScheme, {
    encoding: "utf8",
  });
}

// Run the build
buildJetBrainsThemes();

export { buildJetBrainsThemes, generateThemeFiles };
