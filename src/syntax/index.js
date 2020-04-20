import markup from "./markup.js";
import styling from "./styling.js";
import data from "./data.js";
import config from "./config.js";
import programmation from "./programmation.js";

export default function(theme){
    return Object.assign(
        [].concat(
            config(theme),
            data(theme),
            markup(theme),
            programmation(theme),
            styling(theme)
        )
    );
};


export function createScope(scope, foreground, fontStyle) {
    return {
        scope,
        settings: {
            foreground,
            fontStyle
        }
    }
}

