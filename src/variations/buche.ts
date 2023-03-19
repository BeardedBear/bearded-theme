import { Theme } from "../typing";

/*
Voici un template "Brut" d'un theme type (pris sur celui de will), je t'ai setup les fichiers pour pouvoir
relier tout le bousin ensemble, comme ca tu n'a qu'a faire le setup et modifier les variables.

Toutes les variables, contrairement aux autres themes qui sont passés par la moulinette de la version 8,
dans le fichier helper.ts comme tu pourra le constater si tu regarde les autres fichiers.

Pour setup le projet et que tu puisse tester tes couleurs, tu dois :
- yarn install
- yarn dev

Puis une fois que c'est en watch mode, tu pourra faire Ctrl + F5 pour lancer une instance de VSCode en parallele
qui te permettra en revenant sur le VSCode d'origine de pouvoir modifier les variables et que ca se repercutent
dans la version instanciée.

N'oublie pas que dans la version instanciée, tu dois séléctionner la variation temporairement
appellé 'Bearded Theme Buche' DEUX FOIS, puisque ca l'applique au VSCode d'origine pour la première
puis la seconde fois pour la version instanciée.
*/

export const buche: Theme = {
  ui: {
    primary: "#b498f5", // Couleur principale des boutons, des elements séléctionné dans la sidebar tout ca
    primaryalt: "#231e36", // Couleur utilisée majoritairement dans les background des menus par ex.
    uiborder: "#000000", // Besoin de préciser vraiment ?
    uibackground: "#14111f", // Couleur du fond pour le code
    uibackgroundmid: "#100e1a", // Couleur du fond pour le terminal
    uibackgroundalt: "#0d0a14", // Couleur du fond de la sidebar
    default: "#bdb6d3", // Couleur de la police par default
    defaultMain: "#bfb9da", // Couleur de la police qui sert le plus souvent aux éléments de liste de fichier par ex.
    defaultalt: "#585775", // Couleur des éléments qui semble disabled par ex.
  },
  colors: {
    blue: "#8ad0ff", // Principalement pour les fonctions
    green: "#5fee9b", // Principalement les Strings
    greenAlt: "#A4EF58", // Moins utilisée, pour des classes
    orange: "#ffae82", // Utilisée souvent pour ce que j'appelle les accessors, type this.machin.truc
    pink: "#fda7f7", // Principalement utilisée pour les décorateurs ou les parametres de fonctions
    purple: "#c39eff", // Utilisée pour le typage
    red: "#f7775a", // Utilisée pour les constantes
    salmon: "#ff8ea0", // Utilisée pour les variables
    turquoize: "#44f8e9", // Utilisée pour les storage, ou pour des keywords tel que const, var, let etc
    yellow: "#fce38a", // Utilisée pour les keywords du genre if, else etc,  et les operateurs mathematiques ou d'attribution
  },
  levels: {
    danger: "#f7775a", // C'est clair Luc ne pas ?
    success: "#5fee9b", // C'est clair Luc ne pas ?
    warning: "#ffae82", // C'est clair Luc ne pas ?
    info: "#8ad0ff", // C'est clair Luc ne pas ?
  },
};
