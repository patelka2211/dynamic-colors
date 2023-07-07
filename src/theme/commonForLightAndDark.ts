import { OSThemeChangesListener } from "./OSThemeChangesListener";
import { changeThemeInDOM } from "./changeThemeInDOM";
import {
    colorSchemeMediaQuery,
    setColorSchemeMediaQuery,
    setUITheme,
} from "./index";
import { OSTheme } from "./types";

/**
 * Common function for setting theme (light or dark).
 * @param {OSTheme} theme The theme to set (light or dark).
 * @returns {void}
 */
export function commonForLightAndDark(theme: OSTheme): void {
    setUITheme(theme);

    changeThemeInDOM(theme);

    // Unwatch for changes in color scheme
    colorSchemeMediaQuery?.removeEventListener(
        "change",
        OSThemeChangesListener
    );

    setColorSchemeMediaQuery(undefined);
}
