import { instances } from "./index";

/**
 * @returns {(string | undefined)[]} Array of id of DynamicColors instances.
 */
export function dcIDList(): (string | undefined)[] {
    return instances.map((instance) => {
        return instance.dcID;
    });
}
