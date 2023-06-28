export function hex2rgb(hex: string) {
    // Remove the '#' symbol if present
    hex = hex.replace("#", "");

    // Ensure the remaining string has a valid length
    if (hex.length !== 3 && hex.length !== 6) return;

    // Expand shorthand if needed
    if (hex.length === 3)
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");

    let colorList: number[] = ["r", "g", "b"].map((value, index) =>
        parseInt(hex.slice(index * 2, index * 2 + 2), 16)
    );

    // Return the RGB values as an object
    return { r: colorList[0], g: colorList[1], b: colorList[2] };
}
