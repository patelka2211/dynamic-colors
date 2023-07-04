import { DynamicColors } from "./index";

/**
 * Creates a new instance of DynamicColors.
 * @param {string} name The name of the dynamic colors tag.
 * @param {string} HEXColor The HEX color value.
 * @returns {DynamicColors} The newly created instance of DynamicColors.
 */
export function create(name: string, HEXColor: string): DynamicColors {
    return new DynamicColors(name, HEXColor);
}
