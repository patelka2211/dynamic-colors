import { LightOrDark, Theme } from "./types";

/**
 * The current 3x theme (light or dark or auto).
 * @type {Theme}
 */
export let theme3x: Theme;
export function setTheme3x(newValue: Theme) {
    theme3x = newValue;
}

/**
 * The current 2x theme (light or dark).
 * @type {LightOrDark}
 */
export let theme2x: LightOrDark;
export function setTheme2x(newValue: LightOrDark) {
    theme2x = newValue;
}

/**
 * Media query list for monitoring color scheme changes.
 */
export let colorSchemeMediaQuery: MediaQueryList | undefined;
export function setColorSchemeMediaQuery(newValue: MediaQueryList | undefined) {
    colorSchemeMediaQuery = newValue;
}
