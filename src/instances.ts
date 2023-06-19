import { DynamicColors } from "./dynamicColors";
import { isLocked } from "./lockMechanism";

/**
 * An array containing instances of DynamicColors.
 * @type {DynamicColors[]}
 */
export let instances: DynamicColors[] = [];

/**
 * Adds a DynamicColors instance to the instances array.
 * @param {DynamicColors} dynamicColors The DynamicColors instance to add.
 */
export function addInstance(dynamicColors: DynamicColors) {
    instances.push(dynamicColors);
}

/**
 * Removes a DynamicColors instance from the instances array and removes its associated HTML element.
 * @param {DynamicColors} dynamicColors The DynamicColors instance to remove.
 * @returns {boolean} `true` if the instance is removed, `false` otherwise.
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

/**
 * @returns {(string | undefined)[]} Array id of DynamicColors instances.
 */
export function dcIDList(): (string | undefined)[] {
    return instances.map((instance) => {
        return instance.dcID;
    });
}
