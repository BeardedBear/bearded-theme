# Bearded Theme - Developer Guide

This document provides the necessary instructions for setting up, developing, and publishing the Bearded Theme extension for **VS Code** and **Zed**.

## Project Architecture

The project is structured to share a common codebase between VS Code and Zed theme generation:

```
bearded-theme/
├── src/
│   ├── shared/                    # Shared code between generators
│   │   └── theme-registry.ts      # Central registry of all theme variants
│   ├── generators/
│   │   ├── vscode/               # VS Code theme generator
│   │   │   └── index.ts
│   │   └── zed/                  # Zed theme generator
│   │       └── index.ts
│   ├── variations/               # Theme color definitions (shared)
│   ├── scopes/                   # Syntax highlighting scopes (VS Code)
│   ├── typing.ts                 # TypeScript type definitions
│   ├── ui.ts                     # VS Code UI color mappings
│   ├── helper.ts                 # Color utility functions
│   └── build.ts                  # Build orchestrator
├── dist/
│   ├── vscode/                   # Generated VS Code themes
│   │   └── themes/
│   └── zed/                      # Generated Zed themes
│       ├── themes/
│       └── extension.toml
├── releases/                     # VSIX packages and release notes
└── assets/                       # Icons and images
```

## Initial Setup

```bash
# Install dependencies
npm install
```

## Development

### Building All Themes

```bash
npm run build
```

This builds themes for **both** VS Code and Zed.

### Building for Specific Platforms

```bash
# Build only VS Code themes
npm run build:vscode

# Build only Zed themes
npm run build:zed
```

### Development Mode with Auto-reload

```bash
# Watch VS Code themes only
npm run dev:vscode

# Watch Zed themes only
npm run dev:zed
```

## Output Directories

| Platform | Output Directory      | Format                                      |
| -------- | --------------------- | ------------------------------------------- |
| VS Code  | `dist/vscode/themes/` | Individual JSON files per theme             |
| Zed      | `dist/zed/themes/`    | Single `bearded-theme.json` with all themes |

## Adding a New Theme Variant

1. Create the color palette in `src/variations/`:

```typescript
// src/variations/my-theme.ts
import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const myColors: ThemeColors = {
  blue: "#69C3FF",
  green: "#3CEC85",
  // ... other colors
};

const myLevels: ThemeLevels = {
  danger: myColors.red,
  info: myColors.blue,
  success: myColors.green,
  warning: myColors.orange,
};

export const myTheme: Theme = {
  colors: myColors,
  levels: myLevels,
  ui: makeMainColorsDark({ base: "#1c2433", primary: "#8196b5" }),
};
```

2. Register the theme in `src/shared/theme-registry.ts`:

```typescript
import { myTheme } from "../variations/my-theme";

export const themeRegistry: ThemeRegistryEntry[] = [
  // ... existing themes
  { name: "My Theme", slug: "my-theme", theme: myTheme, options: {} },
];
```

3. Rebuild:

```bash
npm run build
```

The theme will automatically be generated for both VS Code and Zed.

## Theme Options

When registering a theme, you can specify options:

```typescript
interface ThemeOptions {
  light?: boolean; // Light theme (default: false = dark)
  hc?: boolean; // High contrast theme
  desaturateInputs?: boolean; // Desaturate input backgrounds
  untindedSelection?: boolean; // Use untinted selection color
}
```

Example:

```typescript
{ name: "My Light Theme", slug: "my-light", theme: myLightTheme, options: { light: true } },
{ name: "My HC Theme", slug: "my-hc", theme: myHcTheme, options: { hc: true } },
```

## Building Extensions

### VS Code Extension

```bash
# Build themes and create VSIX package
npm run build:ext
```

The VSIX file will be generated in `./releases/{version}.vsix`.

### Zed Extension

```bash
# Build Zed themes
npm run build:ext:zed
```

The Zed extension files are in `dist/zed/`:

- `extension.toml` - Extension manifest
- `themes/bearded-theme.json` - Theme family file

## Publication Process

### VS Code Marketplace

#### Preparing a New Version

1. Update the version in `package.json`
2. Create release notes:

```bash
npm run create:release-notes
```

This creates `./releases/{version}.md` which should be edited with relevant information.

#### Publishing

```bash
# Publish to VS Code Marketplace
npm run publish:vscode

# Publish to Open VSX
npm run publish:ovsx

# Publish to both + GitHub
npm run publish:all
```

Or use the interactive script:

```bash
# On Linux/Mac
./publish.sh

# On Windows
publish.bat
```

### Zed Extension

To publish to Zed's extension registry:

1. Build the Zed themes: `npm run build:zed`
2. Copy the contents of `dist/zed/` to your extension repository
3. Follow Zed's extension publishing guidelines

## Token Requirements

| Platform            | Token Type            | Environment Variable |
| ------------------- | --------------------- | -------------------- |
| VS Code Marketplace | Personal Access Token | `VSCE_PAT`           |
| Open VSX            | Access Token          | `OVSX_TOKEN`         |

If tokens are not set as environment variables, the publish scripts will prompt you to enter them.

## Troubleshooting

### Build Issues

- **Theme not appearing**: Make sure it's registered in `theme-registry.ts`
- **Color errors**: Verify all required colors are defined in your theme variant
- **Type errors**: Run `npx tsc --noEmit` to check for TypeScript issues

### Publication Issues

1. Verify tokens are valid and have correct permissions
2. Ensure the version in `package.json` is unique
3. Check that release notes exist for the current version
