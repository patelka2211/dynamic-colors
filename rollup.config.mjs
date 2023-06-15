import dts from "rollup-plugin-dts";

const time = new Date(),
    banner = `/**
 * [**Dynamic Colors by KP**](https://www.npmjs.com/package/dynamic-colors/)
 *
 * Dynamic Colors is a JavaScript library that can dynamically generate color theme from a single HEX color and it provides a range of useful APIs for creating, managing, and manipulating color themes.
 * 
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dynamic-colors/blob/main/LICENSE MIT}
 *
 * @copyright Copyright © 2023-present, [Kartavya Patel](patelka2211@gmail.com). All rights reserved.
 *
 * Last updated at : ${time.toISOString()}
 */`;

export default [
    {
        input: "./lib/index.iife.js",
        output: {
            file: "./DynamicColors.js",
            format: "iife",
            name: "DynamicColors",
            banner: banner,
        },
    },
    {
        input: "./lib/index.js",
        output: {
            file: "index.js",
            format: "es",
        },
    },
    {
        input: "./src/index.ts",
        output: {
            file: "index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
