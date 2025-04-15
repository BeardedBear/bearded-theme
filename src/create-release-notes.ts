import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

/**
 * Creates release notes for the current version of the package
 */
const createReleaseNotes = (): void => {
  try {
    // Get the current package version from package.json
    const packagePath = path.resolve(process.cwd(), "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    const version = packageJson.version;

    // Get the current branch
    const branch = execSync("git branch --show-current").toString().trim();

    // Create the output path
    const outputPath = path.resolve(process.cwd(), "releases", `${version}.md`);

    // Create the header with version and date
    const today = new Date();
    const dateString = today.toISOString().split("T")[0]; // YYYY-MM-DD format
    let content = `## ${version} - ${dateString}\n\n`;

    // Fetch all tags
    execSync("git fetch --tags");

    // Check if there are previous tags
    let hasPreviousTag = false;
    let lastTag = "";
    try {
      // Use a more Windows-friendly approach to check for tags
      const tagsOutput = execSync("git tag -l").toString().trim();
      hasPreviousTag = tagsOutput.length > 0;

      if (hasPreviousTag) {
        lastTag = execSync("git describe --tags --abbrev=0").toString().trim();
      }
    } catch (error) {
      console.error("Error checking for tags:", error);
      hasPreviousTag = false;
    }

    // Function to extract GitHub issue numbers from commit messages
    const extractIssueNumbers = (commit: string): string => {
      // Look for #XXX patterns in the commit message
      const issueMatches = commit.match(/#(\d+)/g);

      if (issueMatches) {
        // Return the original commit message, we'll keep the issue references
        return commit;
      }

      return commit;
    };

    // Function to get commits by type
    const getCommits = (pattern: string): string[] => {
      try {
        // Get all commits first
        const gitCommand = hasPreviousTag
          ? `git log "${lastTag}"..HEAD --pretty=format:"%s" ${branch}`
          : `git log --pretty=format:"%s" ${branch}`;

        const allCommits = execSync(gitCommand).toString().trim();

        if (!allCommits) {
          return [];
        }

        // Then filter the commits client-side based on the pattern
        // Split the pattern by | to handle multiple prefixes
        const patternPrefixes = pattern
          .split("\\|")
          .map((p) => p.replace(/^\^/, ""));

        // Manually filter the commits
        const filteredCommits = allCommits.split("\n").filter((commit) => {
          return patternPrefixes.some((prefix) => {
            const cleanPrefix = prefix.trim();
            return commit.toLowerCase().startsWith(cleanPrefix.toLowerCase());
          });
        });

        // Format the filtered commits
        const processedLines = filteredCommits.map((line) => {
          // Process the line to extract issue numbers and format them correctly
          const processedLine = extractIssueNumbers(line);

          // Remove the commit type prefix (e.g., "fix: ", "feat: ")
          let cleanedLine = processedLine;
          patternPrefixes.forEach((prefix) => {
            const prefixRegex = new RegExp(`^${prefix}\\s*:\\s*`, "i");
            cleanedLine = cleanedLine.replace(prefixRegex, "");
          });

          // Capitalize the first letter of the commit message
          cleanedLine =
            cleanedLine.charAt(0).toUpperCase() + cleanedLine.slice(1);

          // Prepend the dash for markdown list format
          return `- ${cleanedLine}`;
        });

        return processedLines;
      } catch (error) {
        console.error("Error getting commits:", error);
        return [];
      }
    };

    // Get features and improvements
    const featuresPattern = "^feat\\|^improve\\|^enhancement\\|^add";
    const features = getCommits(featuresPattern);
    if (features.length > 0) {
      content += `### Features and Improvements\n\n${features.join("\n")}\n\n`;
    } else {
      content += `### Features and Improvements\n\nNo new features or improvements in this release.\n\n`;
    }

    // Get bug fixes
    const bugsPattern = "^fix\\|^bug";
    const bugfixes = getCommits(bugsPattern);
    if (bugfixes.length > 0) {
      content += `### Bug Fixes\n\n${bugfixes.join("\n")}\n\n`;
    } else {
      content += `### Bug Fixes\n\nNo bug fixes in this release.\n\n`;
    }

    // Get other changes
    const otherPattern = "^chore\\|^docs\\|^refactor\\|^style\\|^test";
    const otherChanges = getCommits(otherPattern);
    if (otherChanges.length > 0) {
      content += `### Other Changes\n\n${otherChanges.join("\n")}\n\n`;
    } else {
      content += `### Other Changes\n\nNo other changes in this release.\n\n`;
    }

    // Write to file
    fs.writeFileSync(outputPath, content);
    console.log(`Release notes created at: ${outputPath}`);
  } catch (error) {
    console.error("Error creating release notes:", error);
    process.exit(1);
  }
};

// Run the function when the script is executed
createReleaseNotes();
