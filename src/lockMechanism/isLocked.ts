import { idToName } from "../helper/idToName";
import { lockList } from "./index";

/**
 * Check if DynamicColors instance is locked or not.
 * @param DynamicColorsID
 * @returns {boolean} `true` if instance is locked, otherwise `false`.
 */
export function isLocked(DynamicColorsID: string): boolean {
    let lock = lockList.includes(DynamicColorsID);
    if (lock)
        console.warn(
            `Warning: The 'DynamicColors instance' named '${idToName(
                DynamicColorsID
            )}' is protected and cannot be removed.`
        );
    return lock;
}
