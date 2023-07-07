import { commonForLightAndDark } from "./commonForLightAndDark";
import { uiTheme } from "./index";

/**
 * Sets the theme to dark.
 * @returns {'dark'} Returns "dark"
 */
export function setDarkTheme(): "dark" {
    if (uiTheme !== "dark") commonForLightAndDark("dark");
    return "dark";
}
