import { instances } from "./instances";

/**
 * Represents a light or dark theme.
 */
export type LightOrDark = "dark" | "light";

/**
 * Represents a theme option, including "auto" and a light or dark theme.
 */
export type Theme = "auto" | LightOrDark;

/**
 * The current 3x theme (light or dark or auto).
 * @type {Theme}
 */
export let theme3x: Theme;

/**
 * The current 2x theme (light or dark).
 * @type {LightOrDark}
 */
export let theme2x: LightOrDark;

/**
 * Changes the theme in the DOM.
 * @param {LightOrDark} theme - The theme to apply (light or dark).
 * @returns {void}
 */
function changeThemeInDOM(theme: LightOrDark): void {
    if (theme2x === theme) return;

    theme2x = theme;

    instances.forEach((instance) => {
        let color = instance.dcColor;
        if (color !== null) instance.setColor(color);
    });
}

/**
 * Callback function for the OS theme changes listener.
 * @param {MediaQueryListEvent} event - The event object for the media query list change.
 * @returns {void}
 */
function OSThemeChangesListenerCallback(event: MediaQueryListEvent): void {
    changeThemeInDOM(event.matches ? "dark" : "light");
}

/**
 * Media query list for monitoring color scheme changes.
 */
let colorSchemeMediaQuery: MediaQueryList | null;

/**
 * Common function for setting theme (light or dark).
 * @param {LightOrDark} theme The theme to set (light or dark).
 * @returns {void}
 */
function commonForSetTheme(theme: LightOrDark): void {
    theme3x = theme;

    changeThemeInDOM(theme);

    // Unwatch for changes in color scheme
    colorSchemeMediaQuery?.removeEventListener(
        "change",
        OSThemeChangesListenerCallback
    );

    colorSchemeMediaQuery = null;
}

/**
 * Sets the theme to light.
 * @returns {void}
 */
export function setLightTheme(): void {
    if (theme3x === "light") return;
    commonForSetTheme("light");
}

/**
 * Sets the theme to dark.
 * @returns {void}
 */
export function setDarkTheme(): void {
    if (theme3x === "dark") return;
    commonForSetTheme("dark");
}

/**
 * Sets the theme to auto, which adjusts based on the OS theme.
 * @returns {void}
 */
export function setAutoTheme(): void {
    if (theme3x === "auto" || window.matchMedia === undefined) return;

    theme3x = "auto";

    colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Check initial color scheme
    changeThemeInDOM(colorSchemeMediaQuery.matches ? "dark" : "light");

    // Watch for changes in color scheme
    colorSchemeMediaQuery.addEventListener(
        "change",
        OSThemeChangesListenerCallback
    );
}

/**
 * Cycles through available themes: auto -> light -> dark.
 * @returns {Theme} The updated theme after cycling.
 */
export function themeCycle(): Theme {
    if (theme3x === "auto") setLightTheme();
    else if (theme3x === "dark") setAutoTheme();
    else if (theme3x === "light") setDarkTheme();
    return theme3x;
}

function runAfterLoad() {
    setAutoTheme();

    setTimeout(() => {
        console.log("runAfterLoad removed");
        window.removeEventListener("load", runAfterLoad);
    }, 1000);
}

// Event listener function to set the theme to auto on page load.
window.addEventListener("load", runAfterLoad);
