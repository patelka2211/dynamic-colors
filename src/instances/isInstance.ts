import { DynamicColors } from "../dynamicColors/index";

/**
 * Determines whether the given object is an instance of `DynamicColors`.
 *
 * @param {unknown} object The object to check.
 * @returns {boolean} Returns `true` if the object is an instance of `DynamicColors`, otherwise `false`.
 */
export function isInstance(object: unknown): boolean {
    return object instanceof DynamicColors;
}
