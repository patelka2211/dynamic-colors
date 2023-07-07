import { changeThemeInDOM } from "./changeThemeInDOM";

/**
 * Callback function for the OS theme changes listener.
 * @param {MediaQueryListEvent} event - The event object for the media query list change.
 * @returns {void}
 */
export function OSThemeChangesListener(event: MediaQueryListEvent): void {
    changeThemeInDOM(event.matches ? "dark" : "light");
}
