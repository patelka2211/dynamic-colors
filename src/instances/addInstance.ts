import { DynamicColors } from "../dynamicColors/index";
import { instances } from "./index";

/**
 * Adds a DynamicColors instance to the instances array.
 * @param {DynamicColors} dynamicColors The DynamicColors instance to add.
 */
export function addInstance(dynamicColors: DynamicColors) {
    instances.push(dynamicColors);
}
