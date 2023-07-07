import { DynamicColors } from "../dynamicColors/index";
import { isLocked } from "../locking-mechanism/isLocked";
import { instances } from "./index";

/**
 * Removes a DynamicColors instance from the instances array and removes its associated HTML element.
 * @param {DynamicColors} dynamicColors The DynamicColors instance to remove.
 * @returns {boolean} `true` if the instance is removed, otherwise `false`.
 */
export function removeInstance(dynamicColors: DynamicColors): boolean {
    if (dynamicColors.dcID !== undefined && isLocked(dynamicColors.dcID))
        return false;

    if (instances.includes(dynamicColors)) {
        instances.splice(instances.indexOf(dynamicColors), 1);

        if (dynamicColors.dcID !== undefined)
            document.getElementById(dynamicColors.dcID)?.remove();
        return true;
    }
    return false;
}
