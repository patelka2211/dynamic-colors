export function hex2rgb(hex: string) {
    // Remove the '#' symbol if present
    hex = hex.replace("#", "");

    // Ensure the remaining string has a valid length
    if (hex.length !== 3 && hex.length !== 6) {
        return;
    }

    // Expand shorthand if needed
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Return the RGB values as an object
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
    };
}
