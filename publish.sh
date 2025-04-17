#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")
RELEASE_NOTES="./releases/$VERSION.md"

echo -e "${BLUE}=== Bearded Theme Release Process ===${NC}"
echo -e "${BLUE}Version: ${GREEN}v$VERSION${NC}"

# Check if VSIX version already exists
if [ -f "./releases/$VERSION.vsix" ]; then
    echo -e "${YELLOW}VSIX file for v$VERSION already exists.${NC}"
    read -p "Do you want to rebuild the package? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}Building VSIX package...${NC}"
        npm run build:ext
    fi
else
    echo -e "${BLUE}Building VSIX package...${NC}"
    npm run build:ext
fi

# Check if release notes file exists
if [ ! -f "$RELEASE_NOTES" ]; then
    echo -e "${YELLOW}Release notes file not found.${NC}"
    read -p "Do you want to create a release notes template? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}Creating release notes file...${NC}"
        npm run create:release-notes
        echo -e "${GREEN}✓ Release notes file created: $RELEASE_NOTES${NC}"
        echo -e "${YELLOW}Please edit the release notes file before continuing.${NC}"
        read -p "Press Enter when you have finished editing..." -n 1 -r
        echo
    fi
else
    echo -e "${GREEN}✓ Release notes file found: $RELEASE_NOTES${NC}"
fi

# Publish to VS Code Marketplace
echo -e "${BLUE}Publishing to VS Code Marketplace...${NC}"
if [ -n "$VSCE_PAT" ]; then
    echo -e "${GREEN}✓ VSCE token found in environment variables${NC}"
    npm run publish:vscode
else
    echo -e "${YELLOW}VSCE token not found in environment variables${NC}"
    read -p "Do you have a VSCE token? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your VS Code Marketplace token: " VSCE_TOKEN
        echo
        if [ -n "$VSCE_TOKEN" ]; then
            VSCE_PAT=$VSCE_TOKEN npm run publish:vscode
        else
            echo -e "${RED}Empty token, VS Code Marketplace publication cancelled.${NC}"
        fi
    else
        read -p "Do you still want to try publishing to VS Code Marketplace? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npm run publish:vscode
        else
            echo -e "${YELLOW}VS Code Marketplace publication skipped.${NC}"
        fi
    fi
fi

# Publish to Open VSX
echo -e "${BLUE}Publishing to Open VSX...${NC}"
if [ -n "$OVSX_TOKEN" ]; then
    echo -e "${GREEN}✓ Open VSX token found in environment variables${NC}"
    npm run publish:ovsx
else
    echo -e "${YELLOW}Open VSX token not found in environment variables${NC}"
    read -p "Do you have an Open VSX token? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your Open VSX token: " OVSX_TOKEN_VALUE
        echo
        if [ -n "$OVSX_TOKEN_VALUE" ]; then
            OVSX_TOKEN=$OVSX_TOKEN_VALUE npm run publish:ovsx
        else
            echo -e "${RED}Empty token, Open VSX publication cancelled.${NC}"
        fi
    else
        echo -e "${YELLOW}Open VSX publication skipped.${NC}"
    fi
fi

# Create GitHub version tag
echo -e "${BLUE}Creating GitHub version tag...${NC}"
read -p "Do you want to create a GitHub tag for this version? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm run release
    echo -e "${GREEN}✓ Tag v$VERSION created on GitHub${NC}"
else
    echo -e "${YELLOW}GitHub tag creation skipped.${NC}"
fi

echo -e "${GREEN}=== Publication process completed ===${NC}"
