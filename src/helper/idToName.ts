/**
 * @param id Id of the tag.
 * @returns {string} `Name` of `Dynamic Colors Tag`.
 */
export function idToName(id: string): string {
    return id.replace("-dc", "");
}
