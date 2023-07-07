import { commonForLightAndDark } from "./commonForLightAndDark";
import { uiTheme } from "./index";

/**
 * Sets the theme to light.
 * @returns {'light'} Returns "light"
 */
export function setLightTheme(): "light" {
    if (uiTheme !== "light") commonForLightAndDark("light");
    return "light";
}
