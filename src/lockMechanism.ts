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
 * @returns {boolean} `true` if instance is locked, `false` otherwise.
 */
export function isLocked(DynamicColorsID: string): boolean {
    return lockList.includes(DynamicColorsID);
}
