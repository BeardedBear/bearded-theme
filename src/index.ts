import { writeFile } from "fs";
import syntax from "./scopes/scopes";
import { Theme } from "./typing";
import ui from "./ui";
import { arc, arcBlueBerry, arcEggplant, arcEolstorm } from "./variations/arc";
import { oceanic, solarizedDark, solarizedLight } from "./variations/solarized";

function makeTheme(name: string, theme: Theme): void {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BT${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    colors: ui(theme),
    tokenColors: syntax(theme)
  };

  writeFile(
    `themes/bearded-theme-${name}.json`,
    JSON.stringify(themeTemplate),
    (err) => {
      if (err) console.log("error", err);
    }
  );
}

makeTheme("arc", arc);
makeTheme("arc-eolstorm", arcEolstorm);
makeTheme("arc-blueberry", arcBlueBerry);
makeTheme("arc-eggplant", arcEggplant);
makeTheme("oceanic", oceanic);
makeTheme("solarized-dark", solarizedDark);
makeTheme("solarized-light", solarizedLight);
