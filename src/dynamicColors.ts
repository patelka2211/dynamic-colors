import { getThemeCSSFromColor } from "./getColor";
import { addInstance, removeInstance } from "./instances";
import { validateHEXColor } from "./validateHEX";

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
        let id = `${name}-dc`;

        if (document.getElementById(id) === null) {
            this.styleTag.setAttribute("id", id);
            document.head.appendChild(this.styleTag);
            this.id = id;
        } else
            throw Error(
                `This document already has style tag with id "${id}". Can't create new style tag with same id.`
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
export function DynamicColors(name: string, HEXColor: string) {
    return new DynamicColorsTag(name, HEXColor);
}

/**
 * Deletes a DynamicColorsTag instance.
 * @param {DynamicColorsTag} dynamicColorsTag The DynamicColorsTag instance to delete.
 * @param {Function} [afterDelete=() => {}] The callback function to execute after deleting the DynamicColorsTag.
 */
export async function deleteDynamicColors(
    dynamicColorsTag: DynamicColorsTag,
    afterDelete: Function = () => {}
) {
    if (dynamicColorsTag instanceof DynamicColorsTag)
        removeInstance(dynamicColorsTag);
    afterDelete();
}
