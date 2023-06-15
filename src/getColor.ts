import materialDynamicColors from "./helper/mdc";
import { LightOrDark, theme2x } from "./OSTheme";

/**
 * Retrieves the theme CSS string for a given color.
 * @param {string} id The ID associated with the DynamicColorsTag.
 * @param {string} color The color value.
 * @returns {Object} An object containing the CSS string and theme value.
 */
export function getThemeCSSFromColor(
    id: string,
    color: string
): {
    css: string;
    theme2x: LightOrDark;
} {
    let themeObj = materialDynamicColors(color)[theme2x] as {
            [_: string]: string;
        },
        css = "*{";

    for (const colorName in themeObj)
        if (Object.prototype.hasOwnProperty.call(themeObj, colorName))
            css += `--${id}-${colorName}:${themeObj[colorName]};`;

    css += "}";

    return { css, theme2x };
}
