export default function(theme) {
    let ini = [
        {
            name: "[INI] - Entity",
            scope: "source.ini entity",
            settings: {
                foreground: theme.default
            }
        },
        {
            name: "[INI] - Keyword",
            scope: "source.ini keyword",
            settings: {
                foreground: theme.yellow
            }
        },
        {
            name: "[INI] - Punctuation Definition",
            scope: "source.ini punctuation.definition",
            settings: {
                foreground: theme.yellow
            }
        },
        {
            name: "[INI] - Punctuation Separator",
            scope: "source.ini punctuation.separator",
            settings: {
                foreground: theme.yellow
            }
        }
    ];
    return Object.assign([].concat(ini));
};
