import { osTheme } from "../theme/index";
import { hex2rgb } from "./hex2rgb";
import { fromHEX } from "./mdc";

/**
 * Retrieves the theme CSS string for a given color.
 * @param {string} id The ID associated with the DynamicColors.
 * @param {string} color The color value.
 * @returns {string} CSS string.
 */
export function getThemeCSS(id: string, color: string): string {
    let themeObj = fromHEX(color)[osTheme] as {
            [_: string]: string;
        },
        css = "*{";

    for (const colorName in themeObj)
        if (Object.prototype.hasOwnProperty.call(themeObj, colorName)) {
            css += `--${id}-${colorName}:${themeObj[colorName]};`;
            let rgb = hex2rgb(themeObj[colorName]);
            if (rgb !== undefined)
                css += `--${id}-${colorName}-rgb:${rgb.r},${rgb.g},${rgb.b};`;
        }
    css += "}";
    return css;
}
