import { OSThemeChangesListener } from "./OSThemeChangesListener";
import { changeThemeInDOM } from "./changeThemeInDOM";
import {
    colorSchemeMediaQuery,
    setColorSchemeMediaQuery,
    setTheme3x,
    theme3x,
} from "./index";
import { setLightTheme } from "./setLightTheme";
import { LightOrDark } from "./types";

/**
 * Sets the automatic theme based on the user's system preference.
 * @returns {LightOrDark} The current theme ("light", "dark").
 */
export function setAutoTheme(): LightOrDark {
    if (window.matchMedia === undefined) return setLightTheme();
    if (theme3x === "auto")
        return colorSchemeMediaQuery?.matches ? "dark" : "light";

    setTheme3x("auto");

    setColorSchemeMediaQuery(window.matchMedia("(prefers-color-scheme: dark)"));

    let theme: LightOrDark = colorSchemeMediaQuery?.matches ? "dark" : "light";

    // Check initial color scheme
    changeThemeInDOM(theme);

    // Watch for changes in color scheme
    colorSchemeMediaQuery?.addEventListener("change", OSThemeChangesListener);

    return theme;
}

// Set auto theme as default.
setAutoTheme();
