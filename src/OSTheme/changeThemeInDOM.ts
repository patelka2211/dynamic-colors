import { instances } from "../instances/index";
import { setTheme2x, theme2x } from "./index";
import { LightOrDark } from "./types";

/**
 * Changes the theme in the DOM.
 * @param {LightOrDark} theme - The theme to apply (light or dark).
 * @returns {void}
 */
export function changeThemeInDOM(theme: LightOrDark): void {
    if (theme2x === theme) return;

    setTheme2x(theme);

    instances.forEach((instance) => {
        let color = instance.dcColor;
        if (color !== null) instance.setColor(color);
    });
}
