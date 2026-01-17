# AGENTS.md - AI Agent Guidelines for Bearded Theme

This document provides guidelines and best practices for AI agents working on the Bearded Theme project.

## Project Overview

Bearded Theme is a color theme extension for **VS Code** and **Zed** editors. It features 60+ theme variants including dark, light, high-contrast, and accessibility-focused options.

### Key Technologies

- **TypeScript** (ES Modules)
- **Node.js** with `vite-node` for build execution
- **colord** library for color manipulation
- **VS Code Extension API** for theme contribution
- **Zed Theme Schema** for Zed editor support

## Project Structure

```
bearded-theme/
├── src/
│   ├── shared/                    # Shared code between generators
│   │   ├── theme-registry.ts      # Central registry of all theme variants
│   │   └── types.ts               # Shared TypeScript interfaces (Theme, ThemeColors, etc.)
│   ├── generators/
│   │   ├── vscode/                # VS Code theme generator
│   │   │   ├── index.ts           # VS Code build script
│   │   │   ├── ui.ts              # VS Code UI color mappings
│   │   │   ├── types.ts           # VS Code specific type definitions
│   │   │   └── scopes/            # Syntax highlighting scopes (VS Code)
│   │   │       ├── scopes.ts
│   │   │       ├── semanticTokens.ts
│   │   │       ├── prog.ts
│   │   │       ├── markup.ts
│   │   │       └── styling.ts
│   │   └── zed/                   # Zed theme generator
│   ├── variations/                # Theme color definitions (shared)
│   ├── helper.ts                  # Color utility functions
│   └── build.ts                   # Build orchestrator
├── dist/                          # Generated output (DO NOT edit manually)
│   ├── vscode/themes/
│   └── zed/themes/
├── releases/                      # VSIX packages and release notes
└── assets/                        # Icons and images
```

## Critical Files

| File                                | Purpose                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------- |
| `src/shared/theme-registry.ts`      | **Single source of truth** for all theme variants                          |
| `src/shared/types.ts`               | Shared TypeScript interfaces (Theme, ThemeColors, ThemeUi, etc.)           |
| `src/generators/vscode/types.ts`    | VS Code specific type definitions (ActivityBarColors, EditorColors, etc.)  |
| `src/helper.ts`                     | Color manipulation utilities (`makeMainColorsDark`, `makeMainColorsLight`) |
| `src/variations/*.ts`               | Individual theme color palettes                                            |
| `src/generators/vscode/ui.ts`       | VS Code UI color mappings                                                  |
| `src/generators/vscode/scopes/*.ts` | VS Code syntax highlighting scopes                                         |
| `package.json`                      | Extension manifest with theme contributions                                |

## Coding Standards

### Code Formatting

This project uses **ESLint Stylistic** for code formatting (not Prettier).

**Configuration:**

- Double quotes for strings
- 2-space indentation
- Semicolons required
- Trailing commas in multiline structures
- Max line length: 80 characters (with exceptions for strings, URLs, etc.)

**Commands:**

- `npm run lint` - Check formatting and code quality
- `npm run fix` - Auto-fix formatting and linting issues

All formatting rules are defined in `eslint.config.js` using `@stylistic/eslint-plugin`.

**Interface Property Spacing:**

For consistent interface formatting, follow these rules:

- No blank lines between properties within the same logical group
- One blank line after comment headers that introduce a new group
- Properties are sorted alphabetically by default (via `perfectionist` plugin)
- Exception: `src/generators/zed/types.ts` maintains logical grouping instead of alphabetical sorting

Example:

```typescript
export interface MyInterface {
  // Group 1
  propertyA: string;
  propertyB: string;

  // Group 2
  propertyC: string;
  propertyD: string;
}
```

### TypeScript Conventions

- Use ES Module syntax (`import`/`export`)
- Prefer `const` over `let`
- Use explicit type annotations for function parameters and return types
- Use interfaces over types when possible for object shapes

### Color Handling

- **Always use hex colors** (e.g., `#69C3FF`)
- Use the `colord` library for color manipulation:

  ```typescript
  import { colord as c } from "colord";

  // Darken/lighten
  c(color).darken(0.1).toHex();
  c(color).lighten(0.1).toHex();

  // Alpha transparency
  c(color).alpha(0.5).toHex();

  // Saturation
  c(color).desaturate(0.3).toHex();
  c(color).saturate(0.2).toHex();

  // Mix colors
  c(color1).mix(color2).toHex();
  ```

### Theme Color Structure

Every theme must define these required color properties (defined in `src/shared/types.ts`):

```typescript
interface ThemeColors {
  blue: string;
  green: string;
  greenAlt: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  salmon: string;
  turquoize: string;
  yellow: string;
}

interface ThemeLevels {
  danger: string; // Usually red
  info: string; // Usually blue
  success: string; // Usually green
  warning: string; // Usually orange
}

interface ThemeUi {
  border: string;
  default: string; // Main text color
  defaultalt: string; // Secondary text (comments, etc.)
  defaultMain: string; // Slightly dimmed main text
  primary: string; // Accent color
  primaryalt: string; // Secondary accent
  uibackground: string; // Main background
  uibackgroundalt: string; // Alt background (sidebar, panels)
  uibackgroundmid: string; // Mixed background
}
```

These types are shared across all generators (VS Code, Zed, etc.). VS Code specific types (like `ActivityBarColors`, `EditorColors`) are in `src/generators/vscode/types.ts`.

## Common Tasks

### Adding a New Theme Variant

1. **Create the color palette** in `src/variations/`:

   ```typescript
   // src/variations/my-theme.ts
   import { makeMainColorsDark } from "../helper";
   import { Theme, ThemeColors, ThemeLevels } from "../shared/types";

   const colors: ThemeColors = {
     blue: "#69C3FF",
     green: "#3CEC85",
     greenAlt: "#00D9A5",
     orange: "#FF9F43",
     pink: "#F78C6C",
     purple: "#C792EA",
     red: "#FF5370",
     salmon: "#FF8A80",
     turquoize: "#89DDFF",
     yellow: "#FFCB6B",
   };

   const levels: ThemeLevels = {
     danger: colors.red,
     info: colors.blue,
     success: colors.green,
     warning: colors.orange,
   };

   export const myTheme: Theme = {
     colors,
     levels,
     ui: makeMainColorsDark({ base: "#1c2433", primary: "#8196b5" }),
   };
   ```

2. **Register in theme-registry.ts**:

   ```typescript
   import { myTheme } from "../variations/my-theme";

   export const themeRegistry: ThemeRegistryEntry[] = [
     // ... existing themes
     { name: "My Theme", slug: "my-theme", theme: myTheme, options: {} },
   ];
   ```

3. **Update package.json** (for VS Code): Add the theme to `contributes.themes` array

4. **Build and test**:
   ```bash
   npm run build
   ```

### Theme Options

```typescript
interface ThemeOptions {
  light?: boolean; // Light theme (vs-dark becomes vs)
  hc?: boolean; // High contrast theme
  desaturateInputs?: boolean; // Desaturate input backgrounds
  untindedSelection?: boolean; // Use untinted selection color
}
```

### Modifying Syntax Highlighting

- **VS Code**: Edit files in `src/generators/vscode/scopes/`
  - `prog.ts` - Programming language tokens
  - `markup.ts` - Markdown/HTML tokens
  - `styling.ts` - CSS/SCSS tokens
  - `semanticTokens.ts` - Semantic token colors

- **Zed**: Edit `buildSyntax()` function in `src/generators/zed/index.ts`

### Modifying UI Colors

- **VS Code**: Edit `src/generators/vscode/ui.ts`
- **Zed**: Edit `buildZedThemeStyle()` in `src/generators/zed/index.ts`

## Build Commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run build`        | Build all themes (VS Code + Zed)     |
| `npm run build:vscode` | Build VS Code themes only            |
| `npm run build:zed`    | Build Zed themes only                |
| `npm run dev:vscode`   | Watch mode for VS Code               |
| `npm run dev:zed`      | Watch mode for Zed                   |
| `npm run lint`         | Check code with ESLint (no auto-fix) |
| `npm run fix`          | Format and fix code with ESLint      |

## Testing Guidelines

1. **Always run build after changes**: `npm run build`
2. **Test in VS Code**: Press F5 to launch Extension Development Host
3. **Test multiple themes**: Check at least one dark, one light, and one HC theme
4. **Check syntax highlighting**: Open files in JS, TS, Python, Markdown, CSS
5. **Verify UI elements**: Sidebar, tabs, status bar, panels, notifications

## Do's and Don'ts

### Do's

- ✅ Use the existing color manipulation helpers in `helper.ts`
- ✅ Follow the established pattern when creating new themes
- ✅ Register new themes in `theme-registry.ts` (single source of truth)
- ✅ Run `npm run fix` before committing (uses ESLint Stylistic)
- ✅ Test both VS Code and Zed output when modifying shared code
- ✅ Use meaningful, descriptive theme names
- ✅ Maintain color accessibility (contrast ratios)

### Don'ts

- ❌ Never edit files in `dist/` directly - they are generated
- ❌ Don't hardcode colors inline - use theme color references
- ❌ Don't forget to update `package.json` when adding VS Code themes
- ❌ Don't use RGB/HSL directly - always use hex with colord conversions
- ❌ Don't break existing theme slugs (used as identifiers)
- ❌ Don't create new documentation files (README.md, CONTRIBUTING.md, etc.) unless explicitly requested

## Accessibility Considerations

When creating or modifying themes:

1. **Contrast Ratios**: Ensure text has sufficient contrast against backgrounds
   - Normal text: minimum 4.5:1
   - Large text: minimum 3:1
2. **Color Blindness**: Consider colorblind users
   - Don't rely solely on red/green differentiation
   - See `src/variations/colorblind.ts` for reference

3. **High Contrast Themes**: Should have:
   - Clear, distinct borders
   - High contrast between text and background
   - Use `options: { hc: true }` in registry

## File Naming Conventions

- Theme variation files: lowercase with hyphens (e.g., `arc-eggplant.ts`)
- Generated theme files: `bearded-theme-{slug}.json`
- Theme slugs: lowercase, hyphens for spaces, ampersand for "&" (e.g., `black-&-ruby`)

## Version and Release

1. Update version in `package.json`
2. Create release notes: `npm run create:release-notes`
3. Edit `releases/{version}.md` with changes
4. Build extension: `npm run build:ext:vscode`
5. Publish: `npm run publish:all`

## Dependencies

Key dependencies and their purposes:

- `colord` + `colord/plugins/mix` - Color manipulation
- `vite-node` - TypeScript execution without compilation
- `@vscode/vsce` - VS Code extension packaging
- `ovsx` - Open VSX registry publishing
- `@stylistic/eslint-plugin` - Code formatting (replaces Prettier)
- `eslint` + `@typescript-eslint/*` - Linting and code quality
- `eslint-plugin-perfectionist` - Import, object, and interface sorting (can be disabled per-file)

## Common Patterns

### Creating Dark Theme UI

```typescript
import { makeMainColorsDark } from "../helper";

const ui = makeMainColorsDark({
  base: "#1c2433", // Base background color
  primary: "#8196b5", // Accent color
  reversed: false, // Swap background/backgroundAlt
  fontTeinted: false, // Add color tint to fonts
  primaryAlt: "#...", // Optional secondary accent
});
```

### Creating Light Theme UI

```typescript
import { makeMainColorsLight } from "../helper";

const ui = makeMainColorsLight({
  base: "#fafafa", // Base background color
  primary: "#5c6166", // Accent color
  desaturated: false, // Desaturate colors for softer look
  primaryAlt: "#...", // Optional secondary accent
});
```

## Troubleshooting

| Issue                    | Solution                                             |
| ------------------------ | ---------------------------------------------------- |
| Theme not appearing      | Check registration in `theme-registry.ts`            |
| Color errors             | Verify all required colors are defined               |
| Type errors              | Run `npx tsc --noEmit` to check                      |
| Build fails              | Check for syntax errors in variation files           |
| Package.json out of sync | Regenerate from `dist/vscode/themes-contribute.json` |

## Questions?

- Check `README-DEV.md` for additional developer documentation
- Open an issue on GitHub for unresolved questions
- Reference existing themes for implementation patterns
