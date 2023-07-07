import { uiTheme } from "./index";
import { setAutoTheme } from "./setAutoTheme";
import { setDarkTheme } from "./setDarkTheme";
import { setLightTheme } from "./setLightTheme";
import { UITheme } from "./types";

/**
 * Cycles through available themes: auto -> light -> dark.
 * @returns {UITheme} The updated theme after cycling.
 */
export function themeCycle(): UITheme {
    if (uiTheme === "auto") setLightTheme();
    else if (uiTheme === "dark") setAutoTheme();
    else if (uiTheme === "light") setDarkTheme();
    return uiTheme;
}
