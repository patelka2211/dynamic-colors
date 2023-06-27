import { getThemeCSSFromColor } from "./getColor";
import { addInstance, dcIDList, instances, removeInstance } from "./instances";
import { addLock, isLocked, removeLock } from "./lockMechanism";
import { validateHEXColor } from "./validateHEX";

/**
 * @param name Name of the tag.
 * @returns {string} Formatted `tag id` from `Dynamic Colors Tag name`.
 */
function dcTagIDFormat(name: string): string {
    return `${name}-dc`;
}

/**
 * Represents a dynamic colors tag.
 */
export class DynamicColors {
    private id: string | undefined = undefined;
    private styleTag = document.createElement("style");

    /**
     * Creates an instance of DynamicColors.
     * @param {string} name The name of the dynamic colors tag.
     * @param {string} HEXColor The HEX color value.
     */
    constructor(name: string, HEXColor: string) {
        let id = dcTagIDFormat(name);

        if (document.getElementById(id) === null) {
            this.styleTag.setAttribute("id", id);
            document.head.appendChild(this.styleTag);
            this.id = id;
            this.setColor(HEXColor);
            addInstance(this);
        } else
            throw Error(
                `Unable to create another 'DynamicColors' instance with the name '${name}'.\n\nTo modify the color of the tag with the name '${name}', please use the 'setColor' method on the existing instance.`
            );
    }

    /**
     * Sets the color of the dynamic colors tag.
     * @param {string} HEXColor The HEX color value to set.
     * @throws {Error} If the provided HEXColor is not valid.
     */
    public setColor(HEXColor: string) {
        let color = validateHEXColor(HEXColor);

        if (color === false)
            throw Error(`"${HEXColor}" is not valid HEX color.`);

        if (this.id === undefined) return;

        const { css, theme2x } = getThemeCSSFromColor(this.id, color);
        this.styleTag.innerHTML = css;
        this.styleTag.setAttribute("dc-color", color);
        this.styleTag.setAttribute("dc-theme", theme2x);
    }

    /**
     * Gets the root color value of the dynamic colors.
     * @returns {string | null} The root color value of the dynamic colors tag.
     */
    public get dcColor(): string | null {
        return this.styleTag.getAttribute("dc-color");
    }

    /**
     * Gets the ID of the dynamic colors tag.
     * @returns {string | undefined} The ID of the dynamic colors tag.
     */
    public get dcID(): string | undefined {
        return this.id;
    }

    /**
     * After this method call, it will not be possible to remove or delete this particular instance of DynamicColors.
     *
     * - Call `allowRemove()` to re-enable removal of this instance.
     */
    public restrictRemove() {
        if (this.id !== undefined) addLock(this.id);
    }

    /**
     * After this method call, it will be possible to remove or delete this particular instance of DynamicColors.
     *
     * - Call `restrictRemove()` to enable removal of this instance again
     *
     * **NOTE** - DynamicColors instance are `always removable by default`.
     */
    public allowRemove() {
        if (this.id !== undefined) removeLock(this.id);
    }

    /**
     * Clears the dynamic colors tag.
     */
    public clear() {
        this.styleTag.innerHTML = "";
        this.styleTag.removeAttribute("dc-color");
        this.styleTag.removeAttribute("dc-theme");
    }
}

/**
 * Creates a new instance of DynamicColors.
 * @param {string} name The name of the dynamic colors tag.
 * @param {string} HEXColor The HEX color value.
 * @returns {DynamicColors} The newly created instance of DynamicColors.
 */
export function create(name: string, HEXColor: string): DynamicColors {
    return new DynamicColors(name, HEXColor);
}

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
        let dcID = dcTagIDFormat(dcTagInstanceOrName);

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

/**
 * Determines whether the given object is an instance of `DynamicColors`.
 *
 * @param {unknown} object The object to check.
 * @returns {boolean} Returns `true` if the object is an instance of `DynamicColors`, otherwise `false`.
 */
export function isInstance(object: unknown): boolean {
    return object instanceof DynamicColors;
}
