import { DynamicColorsTag } from "./dynamicColors";

/**
 * An array containing instances of DynamicColorsTag.
 * @type {DynamicColorsTag[]}
 */
export let instances: DynamicColorsTag[] = [];

/**
 * Adds a DynamicColorsTag instance to the instances array.
 * @param {DynamicColorsTag} dynamicColorsTag The DynamicColorsTag instance to add.
 */
export function addInstance(dynamicColorsTag: DynamicColorsTag) {
    instances.push(dynamicColorsTag);
}

/**
 * Removes a DynamicColorsTag instance from the instances array and removes its associated HTML element.
 * @param {DynamicColorsTag} dynamicColorsTag The DynamicColorsTag instance to remove.
 * @returns {boolean} Returns `true` if the instance is removed, `false` otherwise.
 */
export function removeInstance(dynamicColorsTag: DynamicColorsTag): boolean {
    if (instances.includes(dynamicColorsTag)) {
        instances.splice(instances.indexOf(dynamicColorsTag), 1);

        if (dynamicColorsTag.dcID !== undefined)
            document.getElementById(dynamicColorsTag.dcID)?.remove();
        return true;
    }
    return false;
}