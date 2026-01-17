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

    // Set to track commits that have already been processed
    const processedCommits = new Set<string>();

    // Function to convert GitHub issue numbers in commit messages to actual GitHub links with attribution
    const extractIssueNumbers = (commit: string): string => {
      // Look for #XXX patterns in the commit message
      const issueMatches = commit.match(/#(\d+)/g);

      if (issueMatches) {
        // Replace each #XXX with markdown link to GitHub issue
        let updatedCommit = commit;

        issueMatches.forEach((match) => {
          try {
            // Extract the issue number without the # symbol
            const issueNumber = match.substring(1);

            // Try to get issue author using curl command
            let issueAuthor = "";
            try {
              // Use curl to get issue info (with a timeout to avoid hanging)
              const curlCommand = `curl -s -m 5 -H "User-Agent: BeardedTheme-ReleaseNotes-Script" https://api.github.com/repos/BeardedBear/bearded-theme/issues/${issueNumber}`;
              const issueData = JSON.parse(execSync(curlCommand).toString());

              if (issueData && issueData.user && issueData.user.login) {
                issueAuthor = ` (Thanks @${issueData.user.login})`;
              }
            } catch (error) {
              console.warn(
                `Could not fetch author for issue #${issueNumber}:`,
                error,
              );
              // Continue without author info if there's an error
            }

            // Create GitHub issue link with author attribution if available
            const issueLink = `[${match}${issueAuthor}](https://github.com/BeardedBear/bearded-theme/issues/${issueNumber})`;

            // Replace the #XXX with the link
            updatedCommit = updatedCommit.replace(match, issueLink);
          } catch (error) {
            console.error("Error processing issue reference:", error);
            // If any error occurs, just keep original reference
          }
        });

        return updatedCommit;
      }

      return commit;
    };

    // Function to get all commits between two points
    const getAllCommits = (): string[] => {
      try {
        // Get all commits first
        const gitCommand = hasPreviousTag
          ? `git log "${lastTag}"..HEAD --pretty=format:"%s" ${branch}`
          : `git log --pretty=format:"%s" ${branch}`;

        const allCommits = execSync(gitCommand).toString().trim();

        if (!allCommits) {
          return [];
        }

        return allCommits.split("\n");
      } catch (error) {
        console.error("Error getting commits:", error);
        return [];
      }
    };

    // Function to get commits by type
    const getCommits = (pattern: string): string[] => {
      try {
        // Split the pattern by | to handle multiple prefixes
        const patternPrefixes = pattern
          .split("\\|")
          .map((p) => p.replace(/^\^/, ""));

        // Get all commits if not already loaded
        const allCommits = getAllCommits();

        // Manually filter the commits
        const filteredCommits = allCommits.filter((commit) => {
          // Skip if this commit has already been processed
          if (processedCommits.has(commit)) {
            return false;
          }

          // Check if commit matches any of the patterns
          const matches = patternPrefixes.some((prefix) => {
            const cleanPrefix = prefix.trim();
            return commit.toLowerCase().startsWith(cleanPrefix.toLowerCase());
          });

          // If it matches, mark it as processed
          if (matches) {
            processedCommits.add(commit);
          }

          return matches;
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
      content += "### Features and Improvements\n\nNo new features or improvements in this release.\n\n";
    } // Get bug fixes
    const bugsPattern = "^fix\\|^bug";
    const bugfixes = getCommits(bugsPattern);
    if (bugfixes.length > 0) {
      content += `### Bug Fixes\n\n${bugfixes.join("\n")}\n\n`;
    } else {
      content += "### Bug Fixes\n\nNo bug fixes in this release.\n\n";
    }

    // Process other changes without displaying them
    // This still marks them as processed, so they won't show up in other sections
    const otherPattern = "^chore\\|^docs\\|^refactor\\|^style\\|^test";
    getCommits(otherPattern); // Just process them to mark as seen, but don't add to content

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
