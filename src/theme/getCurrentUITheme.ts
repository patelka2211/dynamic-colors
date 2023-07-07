import { uiTheme } from "./index";
import { UITheme } from "./types";

/**
 * Returns current UI theme.
 * @returns {UITheme} `"auto"` or `"light"` or `"dark"`
 */
export function getCurrentUITheme(): UITheme {
    return uiTheme;
}
