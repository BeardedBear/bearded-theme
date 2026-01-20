# JetBrains Theme Generator

This directory contains the theme generator for JetBrains IDEs (WebStorm, IntelliJ IDEA, PyCharm, PhpStorm, Rider, GoLand, etc.).

## Structure

```
jetbrains/
├── index.ts          # Main build script
├── types.ts          # TypeScript type definitions for JetBrains themes
├── ui.ts             # UI color mappings
├── theme.ts          # Theme JSON builder
├── editor-scheme.ts  # Editor color scheme XML generator
├── plugin.ts         # Plugin manifest (plugin.xml) generator
├── utils.ts          # Color utility functions
└── README.md         # This file
```

## Generated Output

The build process generates a complete Gradle-based plugin structure:

```
dist/jetbrains/
├── resources/
│   └── META-INF/
│       └── plugin.xml          # Plugin manifest
├── themes/
│   ├── bearded-theme-*.theme.json  # UI theme files
│   └── bearded-theme-*.xml         # Editor color schemes
├── build.gradle.kts            # Gradle build configuration
├── settings.gradle.kts         # Gradle settings
├── gradle.properties           # Gradle properties
└── README.md                   # Installation instructions
```

## Building Themes

### Generate Theme Files Only

```bash
npm run build:jetbrains
```

This generates all theme files in `dist/jetbrains/` but does not build the plugin package.

### Build Plugin Package (ZIP)

```bash
npm run build:ext:jetbrains
```

This generates the theme files AND builds the plugin ZIP file. Requires:
- Java 11 or higher installed
- Internet connection (for Gradle to download dependencies)

The plugin ZIP will be created in `dist/jetbrains/build/distributions/`.

### Full Build (All Platforms)

```bash
npm run build
```

This builds VS Code, Zed, and JetBrains themes, plus the JetBrains plugin package.

## Installation

### Method 1: Install from Disk (Development)

1. Build the plugin: `npm run build:ext:jetbrains`
2. Open your JetBrains IDE
3. Go to **Settings/Preferences** → **Plugins**
4. Click the gear icon ⚙️ → **Install Plugin from Disk...**
5. Select the ZIP file from `dist/jetbrains/build/distributions/`
6. Restart the IDE

### Method 2: Quick Install (Local Themes Only)

```bash
npm run install:jetbrains:local
```

This copies the theme files directly to your IDE's config directory for quick testing.

### Method 3: Development Workflow

```bash
npm run dev:jetbrains:install
```

This builds and installs the themes in one command, useful during development.

## Theme Structure

### theme.json

Each theme has a `.theme.json` file that defines:
- Theme metadata (name, author, dark/light)
- Parent theme (Islands Dark/Light for modern UI)
- Named colors for reuse
- UI component colors

```json
{
  "name": "Bearded Theme Arc",
  "dark": true,
  "author": "BeardedBear",
  "parentTheme": "Islands Dark",
  "editorScheme": "/themes/bearded-theme-arc.xml",
  "colors": {
    "primary": "#8196b5",
    "background": "#1c2433"
  },
  "ui": {
    "*": {
      "background": "#1c2433",
      "foreground": "#c3cfd9"
    },
    "Button.default.startBackground": "#8196b5"
  }
}
```

### Editor Scheme (XML)

Each theme also has an `.xml` file for syntax highlighting:
- Color definitions for editor elements
- Syntax highlighting attributes
- Console colors
- Diff/VCS colors

## Adding New UI Keys

JetBrains IDEs support hundreds of UI component keys. To add new ones:

1. Find the key name using the **UI Inspector** in the IDE:
   - Help → Diagnostic Tools → UI Inspector
   - Click on any UI element to see its properties

2. Add the key to `types.ts` in the `JetBrainsUiColors` interface

3. Add the color mapping in `ui.ts`

## Islands Theme Support

The generator uses JetBrains' new Islands theme style by default:
- Sets `parentTheme` to "Islands Dark" or "Islands Light"
- Uses rounded corners and modern styling
- Hides sidebar borders for cleaner appearance

Reference: https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html

## Testing

1. Build the themes: `npm run build:jetbrains`
2. Install in IDE (see Installation above)
3. Restart the IDE
4. Go to **Settings** → **Appearance & Behavior** → **Appearance**
5. Select a Bearded Theme from the Theme dropdown
6. Verify:
   - UI colors are correct
   - Syntax highlighting works
   - No console errors

## Troubleshooting

### "Could not resolve all files for configuration"

Make sure you have Java 11+ installed and `JAVA_HOME` is set correctly.

### Theme not appearing in IDE

- Verify the plugin is installed (Settings → Plugins → Installed)
- Check the IDE's log for errors (Help → Show Log in...)
- Ensure the theme JSON is valid

### Colors look wrong

- Check that the hex colors don't have `#` prefix in wrong places
- Verify alpha values are in correct format (RRGGBBAA)
- Some keys may be overridden by other settings

## Resources

- [Developing Themes](https://plugins.jetbrains.com/docs/intellij/developing-themes.html)
- [Customizing Themes](https://plugins.jetbrains.com/docs/intellij/themes-customize.html)
- [Theme Extras (Editor Schemes)](https://plugins.jetbrains.com/docs/intellij/themes-extras.html)
- [Islands Theme](https://plugins.jetbrains.com/docs/intellij/supporting-islands-theme.html)
- [IntelliJ Platform Plugin Template](https://github.com/JetBrains/intellij-platform-plugin-template)
