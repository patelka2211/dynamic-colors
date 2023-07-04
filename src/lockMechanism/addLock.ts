import { lockList } from "./index";
import { isLocked } from "./isLocked";

/**
 * Lock DynamicColors instance.
 * @param DynamicColorsID
 */
export function addLock(DynamicColorsID: string) {
    if (!isLocked(DynamicColorsID)) lockList.push(DynamicColorsID);
}
