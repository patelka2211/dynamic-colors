/**
 * Validates a HEX color value.
 * @param {string} color The color value to validate.
 * @returns {string | false} The validated color value if it is a valid HEX color, or `false` otherwise.
 */
export function validateHEXColor(color: string): string | false {
    if (/^#([0-9A-Fa-f]{3}){1,2}$/i.test(color)) return color.toLowerCase();
    return false;
}
