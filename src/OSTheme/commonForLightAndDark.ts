import { OSThemeChangesListener } from "./OSThemeChangesListener";
import { changeThemeInDOM } from "./changeThemeInDOM";
import {
    colorSchemeMediaQuery,
    setColorSchemeMediaQuery,
    setTheme3x,
} from "./index";
import { LightOrDark } from "./types";

/**
 * Common function for setting theme (light or dark).
 * @param {LightOrDark} theme The theme to set (light or dark).
 * @returns {void}
 */
export function commonForLightAndDark(theme: LightOrDark): void {
    setTheme3x(theme);

    changeThemeInDOM(theme);

    // Unwatch for changes in color scheme
    colorSchemeMediaQuery?.removeEventListener(
        "change",
        OSThemeChangesListener
    );

    setColorSchemeMediaQuery(undefined);
}
