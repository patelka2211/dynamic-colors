/**
 * Validates a HEX color value.
 * @param {string} color The color value to validate.
 * @returns {string | undefined} The validated color value if it is a valid HEX color, or otherwise `undefined`.
 */
export function validateHEX(color: string): string | undefined {
    if (/^#[0-9A-Fa-f]{6}$/i.test(color)) return color.toLowerCase();
    return;
}
