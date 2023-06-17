import { getThemeCSSFromColor } from "./getColor";
import { addInstance, instances, removeInstance } from "./instances";
import { validateHEXColor } from "./validateHEX";

/**
 * Returns formatted `tag id` from `Dynamic Colors Tag name`.
 * @param name Name of the tag.
 * @returns {string} `Dynamic Colors Tag` id.
 */
function dcTagIDFormat(name: string): string {
    return `${name}-dc`;
}

/**
 * Represents a dynamic colors tag.
 */
export class DynamicColorsTag {
    private id: string | undefined = undefined;
    private styleTag = document.createElement("style");

    /**
     * Creates an instance of DynamicColorsTag.
     * @param {string} name The name of the dynamic colors tag.
     * @param {string} HEXColor The HEX color value.
     */
    constructor(name: string, HEXColor: string) {
        let id = dcTagIDFormat(name);

        if (document.getElementById(id) === null) {
            this.styleTag.setAttribute("id", id);
            document.head.appendChild(this.styleTag);
            this.id = id;
        } else
            throw Error(
                `Unable to create another 'DynamicColorsTag' instance with the name '${name}'. To modify the color of the tag with the name '${name}', please use the 'setColor' method on the existing instance.`
            );

        this.setColor(HEXColor);
        addInstance(this);
    }

    /**
     * Sets the color of the dynamic colors tag.
     * @param {string} HEXColor The HEX color value to set.
     * @throws {Error} If the provided HEXColor is not valid.
     */
    public setColor(HEXColor: string) {
        let color = validateHEXColor(HEXColor);

        if (!(typeof color === "boolean" && !color) && this.id !== undefined) {
            this.styleTag.setAttribute("dc-color", color);

            const { css, theme2x } = getThemeCSSFromColor(this.id, color);

            this.styleTag.innerHTML = css;
            this.styleTag.setAttribute("dc-theme", theme2x);
        } else throw Error(`"${HEXColor}" is not valid HEX color.`);
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
     * Clears the dynamic colors tag.
     */
    public clear() {
        this.styleTag.innerHTML = "";
        this.styleTag.removeAttribute("dc-color");
        this.styleTag.removeAttribute("dc-theme");
    }
}

/**
 * Creates a new instance of DynamicColorsTag.
 * @param {string} name The name of the dynamic colors tag.
 * @param {string} HEXColor The HEX color value.
 * @returns {DynamicColorsTag} The newly created instance of DynamicColorsTag.
 */
export function DynamicColors(
    name: string,
    HEXColor: string
): DynamicColorsTag {
    return new DynamicColorsTag(name, HEXColor);
}

/**
 * Deletes a DynamicColorsTag instance.
 * @param {DynamicColorsTag | string} dcTagInstanceOrName The DynamicColorsTag instance to delete.
 * @returns {Promise<boolean>} Returns `true` if the instance is deleted, `false` otherwise.
 */
export async function deleteDynamicColors(
    dcTagInstanceOrName: DynamicColorsTag | string
): Promise<boolean> {
    if (dcTagInstanceOrName instanceof DynamicColorsTag)
        return removeInstance(dcTagInstanceOrName);
    else {
        let dcID = dcTagIDFormat(dcTagInstanceOrName),
            dcIDList = instances.map((instance) => {
                return instance.dcID;
            });

        if (dcIDList.includes(dcID)) {
            instances.splice(dcIDList.indexOf(dcID), 1);
            document.getElementById(dcID)?.remove();
            return true;
        }
        return false;
    }
}
