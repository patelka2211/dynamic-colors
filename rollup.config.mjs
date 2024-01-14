import dts from "rollup-plugin-dts";

const currentDate = new Date(),
    options = { year: "numeric", month: "long", day: "numeric" },
    formattedDate = currentDate.toLocaleDateString("en-US", options),
    banner = `/**
 * Dynamic Colors from KPVERSE
 *
 * v1.1.5
 *
 * Updated on ${formattedDate}.
 *
 * Copyright © 2023-present, Kartavya Patel. All rights reserved.
 *
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dynamic-colors/blob/main/LICENSE MIT}
 */`;

export default [
    process.env.format === "esm" && {
        input: "./lib/index.js",
        output: {
            file: "index.js",
            format: "es",
            banner: `${banner}'use strict';`,
        },
    },
    process.env.format === "esm" && {
        input: "./src/index.ts",
        output: {
            file: "index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
    process.env.format === "iife" && {
        input: "./build.iife.js",
        output: {
            file: "./DynamicColors.js",
            format: "iife",
            banner: banner,
        },
    },
].filter(Boolean);
