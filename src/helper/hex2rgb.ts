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

    let colorList: number[] = ["r", "g", "b"].map(function () {
        let _2xindex = arguments[1] * 2;
        return parseInt(hex.slice(_2xindex, _2xindex + 2), 16);
    });

    // Return the RGB values as an object
    return { r: colorList[0], g: colorList[1], b: colorList[2] };
}
