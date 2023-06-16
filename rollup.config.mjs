import dts from "rollup-plugin-dts";

const currentDate = new Date(),
    options = { year: "numeric", month: "long", day: "numeric" },
    formattedDate = currentDate.toLocaleDateString("en-US", options),
    banner = `/**
 * [**Dynamic Colors*](https://www.npmjs.com/package/dynamic-colors/) from KPVERSE
 *
 * Copyright © 2023-present, [Kartavya Patel](patelka2211@gmail.com). All rights reserved.
 *
 * Licensed under the MIT license.
 *
 * Updated on ${formattedDate}.
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
