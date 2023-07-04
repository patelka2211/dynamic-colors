import { DynamicColors } from "../dynamicColors/index";
import { idToName } from "../helper/idToName";
import { instances } from "./index";

/**
 * @returns {DynamicColors | undefined} Instance of DynamicColors from it's name.
 */
export function getInstanceByName(name: string): DynamicColors | undefined {
    return instances.filter((instance) => {
        let id = instance.dcID;
        if (id === undefined) return false;
        return idToName(id) === name;
    })[0];
}
