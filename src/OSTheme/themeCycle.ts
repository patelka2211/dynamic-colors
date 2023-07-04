import { theme3x } from "./index";
import { setAutoTheme } from "./setAutoTheme";
import { setDarkTheme } from "./setDarkTheme";
import { setLightTheme } from "./setLightTheme";
import { Theme } from "./types";

/**
 * Cycles through available themes: auto -> light -> dark.
 * @returns {Theme} The updated theme after cycling.
 */
export function themeCycle(): Theme {
    if (theme3x === "auto") setLightTheme();
    else if (theme3x === "dark") setAutoTheme();
    else if (theme3x === "light") setDarkTheme();
    return theme3x;
}
