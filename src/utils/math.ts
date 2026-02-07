// src/utils/math.ts

/**
 * Calculate the distance between two points (x1, y1) and (x2, y2).
 * @param x1 - x-coordinate of the first point
 * @param y1 - y-coordinate of the first point
 * @param x2 - x-coordinate of the second point
 * @param y2 - y-coordinate of the second point
 * @returns Distance between the two points
 */
function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Convert degrees to radians.
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees.
 * @param radians - Angle in radians
 * @returns Angle in degrees
 */
function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}

/**
 * Linearly interpolate between two values.
 * @param start - The start value
 * @param end - The end value
 * @param t - The interpolation factor (0 ≤ t ≤ 1)
 * @returns Interpolated value
 */
function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

// Exporting the functions to be used in other modules
export { calculateDistance, degreesToRadians, radiansToDegrees, lerp };