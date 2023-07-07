import { instances } from "../instances/index";
import { setOSTheme, osTheme } from "./index";
import { OSTheme } from "./types";

/**
 * Changes the theme in the DOM.
 * @param {OSTheme} theme - The theme to apply (light or dark).
 * @returns {void}
 */
export function changeThemeInDOM(theme: OSTheme): void {
    if (osTheme === theme) return;

    setOSTheme(theme);

    instances.forEach((instance) => {
        let color = instance.dcColor;
        if (color !== null) instance.setColor(color);
    });
}
