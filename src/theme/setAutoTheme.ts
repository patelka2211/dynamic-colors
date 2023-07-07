import { OSThemeChangesListener } from "./OSThemeChangesListener";
import { changeThemeInDOM } from "./changeThemeInDOM";
import {
    colorSchemeMediaQuery,
    setColorSchemeMediaQuery,
    setUITheme,
    uiTheme,
} from "./index";
import { setLightTheme } from "./setLightTheme";
import { OSTheme } from "./types";

/**
 * Sets the automatic theme based on the user's system preference.
 * @returns {OSTheme} The current theme ("light", "dark").
 */
export function setAutoTheme(): OSTheme {
    if (window.matchMedia === undefined) return setLightTheme();
    if (uiTheme === "auto")
        return colorSchemeMediaQuery?.matches ? "dark" : "light";

    setUITheme("auto");

    setColorSchemeMediaQuery(window.matchMedia("(prefers-color-scheme: dark)"));

    let theme: OSTheme = colorSchemeMediaQuery?.matches ? "dark" : "light";

    // Check initial color scheme
    changeThemeInDOM(theme);

    // Watch for changes in color scheme
    colorSchemeMediaQuery?.addEventListener("change", OSThemeChangesListener);

    return theme;
}

// Set auto theme as default.
setAutoTheme();
