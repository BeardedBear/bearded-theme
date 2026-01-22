# Versioning System

## Overview

Bearded Theme uses **independent versions** for each IDE:

- **VS Code**: Version **11.0.0** (continues historical numbering)
- **Zed**: Version **1.0.0** (fresh start)
- **JetBrains**: Version **1.0.0** (fresh start)

## Configuration

All versions are stored in `versions.json`:

```json
{
  "vscode": "11.0.0",
  "zed": "1.0.0",
  "jetbrains": "1.0.0"
}
```

## Quick Commands

### Check versions

```bash
cat versions.json
```

### Update versions

```bash
# Bump VS Code: 11.0.0 → 11.1.0
npm run bump:version vscode minor

# Bump Zed: 1.0.0 → 1.0.1
npm run bump:version zed patch

# Bump JetBrains: 1.0.0 → 1.0.1
npm run bump:version jetbrains patch

# Bump all IDEs
npm run bump:version all patch
```

### Bump types

- `patch` - Bug fixes (1.0.0 → 1.0.1)
- `minor` - New features (1.0.0 → 1.1.0)
- `major` - Breaking changes (1.0.0 → 2.0.0)

## Release Notes

Each IDE has its own release notes folder:

```
releases/
├── vscode/
│   ├── 11.0.0.md
│   └── 11.0.0.vsix
├── zed/
│   └── 1.0.0.md
└── jetbrains/
    └── 1.0.0.md
```

### Create release notes

```bash
npm run create:release-notes vscode
npm run create:release-notes zed
npm run create:release-notes jetbrains
```

## Commit Convention

Use IDE prefixes to target specific platforms in release notes:

```bash
# VS Code specific
[vscode] feat: add new color token
[vscode] fix: correct bracket highlighting

# Zed specific
[zed] feat: add panel styling
[zed] fix: correct status bar colors

# JetBrains specific
[jetbrains] feat: add bookmark UI support
[jetbrains] fix: correct editor gutter colors

# Global (included in ALL IDEs)
feat: update syntax colors
fix: improve contrast ratios
```

### Commit types

- `feat:` / `add:` - New features
- `fix:` / `bug:` - Bug fixes
- `improve:` / `enhancement:` - Improvements
- `chore:` - Maintenance tasks
- `docs:` - Documentation
- `refactor:` - Code refactoring

## Workflows

### For VS Code

```bash
npm run bump:version vscode minor
npm run build:vscode
npm run create:release-notes vscode
# Edit releases/vscode/{version}.md
npm run build:ext:vscode
./publish.sh vscode
```

### For Zed

```bash
npm run bump:version zed patch
npm run build:zed
npm run create:release-notes zed
# Edit releases/zed/{version}.md
# Commit and push changes
# Open PR to zed-industries/extensions
./publish.sh zed
```

### For JetBrains

```bash
npm run bump:version jetbrains patch
npm run build:jetbrains
npm run create:release-notes jetbrains
# Edit releases/jetbrains/{version}.md
npm run build:ext:jetbrains
./publish.sh jetbrains
```

## Git Tags

Each IDE has its own tag format:

- VS Code: `vscode-v11.0.1`
- Zed: `zed-v1.0.1`
- JetBrains: `jetbrains-v1.0.1`

Tags are created via the `publish.bat` script or manually:

```bash
npm run release:vscode
npm run release:zed
npm run release:jetbrains
```

## Important Notes

1. **VS Code**: The bump script automatically syncs `versions.json` and `package.json`
2. **Zed**: Only uses `versions.json`, no need to touch `package.json`
3. **JetBrains**: Only uses `versions.json`, plugin.xml version is generated
4. Each IDE follows its own semantic versioning independently
5. The system includes automatic fallbacks if `versions.json` is missing

## Code API

```typescript
import {
  getVSCodeVersion,
  getZedVersion,
  getJetBrainsVersion,
  getAllVersions,
} from "./version-manager";

const vscodeVersion = getVSCodeVersion(); // "11.0.0"
const zedVersion = getZedVersion(); // "1.0.0"
const jetbrainsVersion = getJetBrainsVersion(); // "1.0.0"
const allVersions = getAllVersions(); // { vscode: "11.0.0", zed: "1.0.0", jetbrains: "1.0.0" }
```

## Benefits

- **Independent releases** for each IDE
- **Clear versioning** that reflects platform-specific changes
- **Flexibility** to evolve each platform at its own pace
- **Filtered changelogs** showing only relevant changes per IDE
