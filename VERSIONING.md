# Versioning System

## Overview

Bearded Theme uses **independent versions** for each IDE:

- **VS Code**: Version **11.0.0** (continues historical numbering)
- **Zed**: Version **1.0.0** (fresh start)

## Configuration

All versions are stored in `versions.json`:

```json
{
  "vscode": "11.0.0",
  "zed": "1.0.0"
}
```

## Quick Commands

### Check versions

```bash
cat versions.json
```

### Update versions

```bash
# Bump Zed: 1.0.0 → 1.0.1
npm run bump:version zed patch

# Bump VS Code: 11.0.0 → 11.1.0
npm run bump:version vscode minor

# Bump both
npm run bump:version all patch
```

### Bump types

- `patch` - Bug fixes (1.0.0 → 1.0.1)
- `minor` - New features (1.0.0 → 1.1.0)
- `major` - Breaking changes (1.0.0 → 2.0.0)

## Workflows

### For Zed

```bash
npm run bump:version zed patch
npm run build:zed
# Version appears in dist/zed/extension.toml
```

### For VS Code

```bash
npm run bump:version vscode minor
npm run build:vscode
npm run create:release-notes
# Version synced to both versions.json and package.json
```

## Important Notes

1. **VS Code**: The bump script automatically syncs `versions.json` and `package.json`
2. **Zed**: Only uses `versions.json`, no need to touch `package.json`
3. Each IDE follows its own semantic versioning independently
4. The system includes automatic fallbacks if `versions.json` is missing

## Code API

```typescript
import { getVSCodeVersion, getZedVersion } from "./version-manager";

const zedVersion = getZedVersion(); // "1.0.0"
const vscodeVersion = getVSCodeVersion(); // "11.0.0"
```

## Benefits

- **Independent releases** for each IDE
- **Clear versioning** that reflects platform-specific changes
- **Flexibility** to evolve each platform at its own pace
