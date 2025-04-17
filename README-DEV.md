# Bearded Theme - Developer Guide

This document provides the necessary instructions for setting up, developing, and publishing the Bearded Theme VS Code extension.

## Initial Setup

```bash
# Install dependencies
npm install
```

## Development

### Development Mode with Auto-reload

```bash
npm run dev
```

This mode uses nodemon to watch for changes in source files and automatically recompile the theme.

### Building the theme

```bash
npm run build
```

This command generates the theme files in the `themes/` folder.

### Building the extension

```bash
npm run build:ext
```

This command creates a VSIX file that can be manually installed in VS Code. The file will be generated in `./releases/{version}.vsix`.

## Publication Process

### Preparing a New Version

1. Update the version in `package.json`
2. Create a release notes file in `./releases/{version}.md` with the details of the changes:

```bash
npm run create:release-notes
```

This file will be used for GitHub publication and should be modified with relevant information.

### Publication Tokens

To publish the extension, you will need:

1. A VS Code Marketplace token (VSCE_PAT)
2. An Open VSX token (OVSX_TOKEN)

You have two options for providing these tokens:

#### Option 1: Environment Variables

Set them as environment variables before running the publish script:

```bash
export VSCE_PAT=your_vscode_marketplace_token
export OVSX_TOKEN=your_open_vsx_token
./publish.sh
```

#### Option 2: Manual Entry

The publish script now supports entering tokens manually during the publication process. If the tokens are not found in environment variables, you will be prompted to enter them when needed.

### Manual Publication

Two scripts are available to guide you through the publication process:

```bash
# On Linux/Mac
./publish.sh

# On Windows
publish.bat
```

This script:

- Checks the current version
- Builds the VSIX extension if necessary
- Checks/creates the release notes
- Publishes to VS Code Marketplace
- Publishes to Open VSX
- Creates a version tag on GitHub

### Individual Platform Publication

If you prefer to publish to each platform separately:

```bash
# VS Code Marketplace
npm run publish:vscode

# Open VSX
npm run publish:ovsx

# GitHub Release
npm run release
```

### Complete Publication

To build the extension and publish it to all platforms in a single command:

```bash
npm run publish:all
```

## Project Structure

- `src/` - TypeScript source code for theme generation
  - `variations/` - Theme variants
  - `scopes/` - Scope definitions for syntax highlighting
- `themes/` - Generated theme JSON files
- `releases/` - Release notes and VSIX packages
- `assets/` - Images and graphical resources

## Troubleshooting

If you encounter issues during publication:

1. Check that your access tokens are valid
2. Make sure the version in `package.json` is unique and doesn't already exist
3. Verify that release notes exist for the current version
