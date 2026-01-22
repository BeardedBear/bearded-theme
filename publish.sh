#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ==========================================
# VS Code publication
# ==========================================
publish_vscode() {
    # Check if VSIX version already exists
    if [ -f "./releases/vscode/$VERSION.vsix" ]; then
        echo -e "${YELLOW}VSIX file for v$VERSION already exists.${NC}"
        read -p "Do you want to rebuild the package? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Building VSIX package...${NC}"
            npm run build:ext:vscode
        fi
    else
        echo -e "${BLUE}Building VSIX package...${NC}"
        npm run build:ext:vscode
    fi

    # Check if release notes file exists
    if [ ! -f "$RELEASE_NOTES" ]; then
        echo -e "${YELLOW}Release notes file not found.${NC}"
        read -p "Do you want to create a release notes template? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Creating release notes file...${NC}"
            npm run create:release-notes vscode
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
        npm run release:vscode
        echo -e "${GREEN}✓ Tag vscode-v$VERSION created on GitHub${NC}"
    else
        echo -e "${YELLOW}GitHub tag creation skipped.${NC}"
    fi
}

# ==========================================
# Zed publication
# ==========================================
publish_zed() {
    # Build Zed extension
    echo -e "${BLUE}Building Zed extension...${NC}"
    npm run build:ext:zed

    # Check if release notes file exists
    if [ ! -f "$RELEASE_NOTES" ]; then
        echo -e "${YELLOW}Release notes file not found.${NC}"
        read -p "Do you want to create a release notes template? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Creating release notes file...${NC}"
            npm run create:release-notes zed
            echo -e "${GREEN}✓ Release notes file created: $RELEASE_NOTES${NC}"
            echo -e "${YELLOW}Please edit the release notes file before continuing.${NC}"
            read -p "Press Enter when you have finished editing..." -n 1 -r
            echo
        fi
    else
        echo -e "${GREEN}✓ Release notes file found: $RELEASE_NOTES${NC}"
    fi

    echo ""
    echo -e "${BLUE}Zed publication steps:${NC}"
    echo "  1. Extension built in: dist/zed/"
    echo "  2. Commit and push your changes"
    echo "  3. Open a PR to zed-industries/extensions repository"
    echo ""

    # Create GitHub version tag
    read -p "Do you want to create a GitHub tag for this version? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm run release:zed
        echo -e "${GREEN}✓ Tag zed-v$VERSION created on GitHub${NC}"
    else
        echo -e "${YELLOW}GitHub tag creation skipped.${NC}"
    fi
}

# ==========================================
# JetBrains publication
# ==========================================
publish_jetbrains() {
    # Build JetBrains plugin
    echo -e "${BLUE}Building JetBrains plugin...${NC}"
    npm run build:ext:jetbrains

    # Check if release notes file exists
    if [ ! -f "$RELEASE_NOTES" ]; then
        echo -e "${YELLOW}Release notes file not found.${NC}"
        read -p "Do you want to create a release notes template? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Creating release notes file...${NC}"
            npm run create:release-notes jetbrains
            echo -e "${GREEN}✓ Release notes file created: $RELEASE_NOTES${NC}"
            echo -e "${YELLOW}Please edit the release notes file before continuing.${NC}"
            read -p "Press Enter when you have finished editing..." -n 1 -r
            echo
        fi
    else
        echo -e "${GREEN}✓ Release notes file found: $RELEASE_NOTES${NC}"
    fi

    echo ""
    echo -e "${BLUE}JetBrains publication steps:${NC}"
    echo "  1. Plugin built in: releases/jetbrains/"
    echo "  2. Go to https://plugins.jetbrains.com/"
    echo "  3. Upload the ZIP file manually"
    echo ""

    # Create GitHub version tag
    read -p "Do you want to create a GitHub tag for this version? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm run release:jetbrains
        echo -e "${GREEN}✓ Tag jetbrains-v$VERSION created on GitHub${NC}"
    else
        echo -e "${YELLOW}GitHub tag creation skipped.${NC}"
    fi
}

# ==========================================
# Main script
# ==========================================

# Check for IDE argument
if [ -z "$1" ]; then
    echo -e "${RED}Usage: ./publish.sh <ide>${NC}"
    echo "  ide: vscode | zed | jetbrains"
    echo ""
    echo "Examples:"
    echo "  ./publish.sh vscode"
    echo "  ./publish.sh zed"
    echo "  ./publish.sh jetbrains"
    exit 1
fi

IDE=$1

# Validate IDE argument
if [[ ! "$IDE" =~ ^(vscode|zed|jetbrains)$ ]]; then
    echo -e "${RED}Invalid IDE: $IDE${NC}"
    echo "  Must be: vscode | zed | jetbrains"
    exit 1
fi

# Get version from versions.json
VERSION=$(node -p "require('./versions.json').$IDE")
RELEASE_NOTES="./releases/$IDE/$VERSION.md"

echo -e "${BLUE}=== Bearded Theme Release Process ===${NC}"
echo -e "${BLUE}IDE: ${GREEN}$IDE${NC}"
echo -e "${BLUE}Version: ${GREEN}v$VERSION${NC}"

# IDE-specific publication
case $IDE in
    vscode)
        publish_vscode
        ;;
    zed)
        publish_zed
        ;;
    jetbrains)
        publish_jetbrains
        ;;
esac

echo -e "${GREEN}=== Publication process completed ===${NC}"
