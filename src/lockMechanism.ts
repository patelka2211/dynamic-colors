let lockList: string[] = [];

/**
 * Lock DynamicColors instance.
 * @param DynamicColorsID
 */
export function addLock(DynamicColorsID: string) {
    if (!isLocked(DynamicColorsID)) lockList.push(DynamicColorsID);
}

/**
 * Unlock DynamicColors instance.
 * @param DynamicColorsID
 */
export function removeLock(DynamicColorsID: string) {
    if (isLocked(DynamicColorsID))
        lockList.splice(lockList.indexOf(DynamicColorsID), 1);
}

/**
 * Check if DynamicColors instance is locked or not.
 * @param DynamicColorsID
 * @returns {boolean} `true` if instance is locked, otherwise `false`.
 */
export function isLocked(DynamicColorsID: string): boolean {
    let lock = lockList.includes(DynamicColorsID);
    if (lock)
        console.warn(
            `Warning: The 'DynamicColors instance' named '${DynamicColorsID.replace(
                "-dc",
                ""
            )}' is protected and cannot be removed.`
        );
    return lock;
}
