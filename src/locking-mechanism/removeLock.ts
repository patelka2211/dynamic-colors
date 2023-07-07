import { lockList } from "./index";
import { isLocked } from "./isLocked";

/**
 * Unlock DynamicColors instance.
 * @param DynamicColorsID
 */
export function removeLock(DynamicColorsID: string) {
    if (isLocked(DynamicColorsID))
        lockList.splice(lockList.indexOf(DynamicColorsID), 1);
}
