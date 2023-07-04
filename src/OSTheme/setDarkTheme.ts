import { commonForLightAndDark } from "./commonForLightAndDark";
import { theme3x } from "./index";

/**
 * Sets the theme to dark.
 * @returns {'dark'} Returns "dark"
 */
export function setDarkTheme(): "dark" {
    if (theme3x !== "dark") commonForLightAndDark("dark");
    return "dark";
}
