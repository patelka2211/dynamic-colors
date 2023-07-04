import { commonForLightAndDark } from "./commonForLightAndDark";
import { theme3x } from "./index";

/**
 * Sets the theme to light.
 * @returns {'light'} Returns "light"
 */
export function setLightTheme(): "light" {
    if (theme3x !== "light") commonForLightAndDark("light");
    return "light";
}
