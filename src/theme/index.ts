import { OSTheme, UITheme } from "./types";

/**
 * The current UI theme (light or dark or auto).
 * @type {UITheme}
 */
export let uiTheme: UITheme;
export function setUITheme(newUITheme: UITheme) {
    uiTheme = newUITheme;
}

/**
 * The current OS theme (light or dark).
 * @type {OSTheme}
 */
export let osTheme: OSTheme;
export function setOSTheme(newOSTheme: OSTheme) {
    osTheme = newOSTheme;
}

/**
 * Media query list for monitoring color scheme changes.
 */
export let colorSchemeMediaQuery: MediaQueryList | undefined;
export function setColorSchemeMediaQuery(newValue: MediaQueryList | undefined) {
    colorSchemeMediaQuery = newValue;
}
