import { osTheme } from "./index";
import { OSTheme } from "./types";

/**
 * Get current OS theme.
 * @returns {OSTheme} `"light"` or `"dark"`
 */
export function getCurrentOSTheme(): OSTheme {
    return osTheme;
}
