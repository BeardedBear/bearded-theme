@echo off
setlocal enabledelayedexpansion

REM Colors for better readability
set "GREEN=[0;32m"
set "BLUE=[0;34m"
set "YELLOW=[1;33m"
set "RED=[0;31m"
set "NC=[0m"

REM Get version from package.json using node
for /f "tokens=*" %%a in ('node -p "require('./package.json').version"') do set VERSION=%%a
set RELEASE_NOTES=./releases/%VERSION%.md

echo !BLUE!^=== Bearded Theme Release Process ===!NC!
echo !BLUE!Version: !GREEN!v%VERSION%!NC!

REM Check if VSIX version already exists
if exist "./releases/%VERSION%.vsix" (
    echo !YELLOW!VSIX file for v%VERSION% already exists.!NC!
    set /p REBUILD="Do you want to rebuild the package? (y/n) "
    echo.
    if /i "!REBUILD!"=="y" (
        echo !BLUE!Building VSIX package...!NC!
        call npm run build:ext
    )
) else (
    echo !BLUE!Building VSIX package...!NC!
    call npm run build:ext
)

REM Check if release notes file exists
if not exist "%RELEASE_NOTES%" (
    echo !YELLOW!Release notes file not found.!NC!
    set /p CREATE_NOTES="Do you want to create a release notes template? (y/n) "
    echo.
    if /i "!CREATE_NOTES!"=="y" (
        echo !BLUE!Creating release notes file...!NC!
        call npm run create:release-notes
        echo !GREEN!✓ Release notes file created: %RELEASE_NOTES%!NC!
        echo !YELLOW!Please edit the release notes file before continuing.!NC!
        echo Press Enter when you have finished editing...
        pause > nul
        echo.
    )
) else (
    echo !GREEN!✓ Release notes file found: %RELEASE_NOTES%!NC!
)

REM Publish to VS Code Marketplace
echo !BLUE!Publishing to VS Code Marketplace...!NC!
if defined VSCE_PAT (
    echo !GREEN!✓ VSCE token found in environment variables!NC!
    call npm run publish:vscode
) else (
    echo !YELLOW!VSCE token not found in environment variables!NC!
    set /p HAS_TOKEN="Do you have a VSCE token? (y/n) "
    echo.
    if /i "!HAS_TOKEN!"=="y" (
        set /p VSCE_TOKEN="Enter your VS Code Marketplace token: "
        echo.
        if defined VSCE_TOKEN (
            set "VSCE_PAT=!VSCE_TOKEN!"
            call npm run publish:vscode
        ) else (
            echo !RED!Empty token, VS Code Marketplace publication cancelled.!NC!
        )
    ) else (
        set /p TRY_PUBLISH="Do you still want to try publishing to VS Code Marketplace? (y/n) "
        echo.
        if /i "!TRY_PUBLISH!"=="y" (
            call npm run publish:vscode
        ) else (
            echo !YELLOW!VS Code Marketplace publication skipped.!NC!
        )
    )
)

REM Publish to Open VSX
echo !BLUE!Publishing to Open VSX...!NC!
if defined OVSX_TOKEN (
    echo !GREEN!✓ Open VSX token found in environment variables!NC!
    call npm run publish:ovsx
) else (
    echo !YELLOW!Open VSX token not found in environment variables!NC!
    set /p HAS_OVSX_TOKEN="Do you have an Open VSX token? (y/n) "
    echo.
    if /i "!HAS_OVSX_TOKEN!"=="y" (
        set /p OVSX_TOKEN_VALUE="Enter your Open VSX token: "
        echo.
        if defined OVSX_TOKEN_VALUE (
            set "OVSX_TOKEN=!OVSX_TOKEN_VALUE!"
            call npm run publish:ovsx
        ) else (
            echo !RED!Empty token, Open VSX publication cancelled.!NC!
        )
    ) else (
        echo !YELLOW!Open VSX publication skipped.!NC!
    )
)

REM Create GitHub version tag
echo !BLUE!Creating GitHub version tag...!NC!
set /p CREATE_TAG="Do you want to create a GitHub tag for this version? (y/n) "
echo.
if /i "!CREATE_TAG!"=="y" (
    call npm run release
    echo !GREEN!✓ Tag v%VERSION% created on GitHub!NC!
) else (
    echo !YELLOW!GitHub tag creation skipped.!NC!
)

echo !GREEN!^=== Publication process completed ===!NC!
endlocal
