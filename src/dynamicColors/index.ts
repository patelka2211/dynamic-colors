import { osTheme } from "../theme/index";
import { getThemeCSS } from "../helper/getThemeCSS";
import { addInstance } from "../instances/addInstance";
import { validateHEX } from "../helper/validateHEX";
import { addLock } from "../locking-mechanism/addLock";
import { removeLock } from "../locking-mechanism/removeLock";
import { nameToId } from "../helper/nameToId";

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
        let id = nameToId(name);

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
        let color = validateHEX(HEXColor);

        if (!color)
            throw Error(
                `"${HEXColor}" is not valid HEX color. Only 7 length HEX color is accepted. For example: "#2596D1" or "#ffffff".`
            );

        if (this.id === undefined) return;

        this.styleTag.innerHTML = getThemeCSS(this.id, color);
        this.styleTag.setAttribute("dc-color", color);
        this.styleTag.setAttribute("dc-theme", osTheme);
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
