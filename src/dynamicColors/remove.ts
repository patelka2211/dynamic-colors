import { nameToId } from "../helper/nameToId";
import { dcIDList } from "../instances/dcIDList";
import { instances } from "../instances/index";
import { removeInstance } from "../instances/removeInstance";
import { isLocked } from "../locking-mechanism/isLocked";
import { DynamicColors } from "./index";

/**
 * Removes a DynamicColors instance.
 * @param {DynamicColors | string} dcTagInstanceOrName The DynamicColors `instance` or `name` to remove.
 * @returns {Promise<boolean>} `true` if the instance is removed, otherwise `false`.
 */
export async function remove(
    dcTagInstanceOrName: DynamicColors | string
): Promise<boolean> {
    if (dcTagInstanceOrName instanceof DynamicColors)
        return removeInstance(dcTagInstanceOrName);
    else {
        let dcID = nameToId(dcTagInstanceOrName);

        if (isLocked(dcID)) return false;

        let idList = dcIDList();

        if (idList.includes(dcID)) {
            instances.splice(idList.indexOf(dcID), 1);
            document.getElementById(dcID)?.remove();
            return true;
        }
        return false;
    }
}
