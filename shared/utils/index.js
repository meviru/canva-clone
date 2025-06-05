/**
 * Converts an RGBA color object to a hex string.
 *
 * @param {Object} color RGBA color object
 * @returns {String} Hex string representation of the color
 */
export const rgbaToHex = ({ r = 0, g = 0, b = 0, a = 1 } = {}) => {
    const toHex = (value) => Number(value).toString(16).padStart(2, "0");
    const alpha = Math.round(a * 255); // Convert 0–1 alpha to 0–255
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`.toUpperCase();
};


/**
 * Determines the contrast color (black or white) for a given RGBA color.
 * 
 * @param {Object} color RGBA color object
 * @returns {String} "#000" for black or "#fff" for white, based on the luminance of the blended color
 */

export const getContrastColor = ({ r = 0, g = 0, b = 0, a = 1 }) => {
    // Blend with white background based on alpha
    const blendedR = Math.round((1 - a) * 255 + a * r);
    const blendedG = Math.round((1 - a) * 255 + a * g);
    const blendedB = Math.round((1 - a) * 255 + a * b);

    const luminance =
        (0.299 * blendedR + 0.587 * blendedG + 0.114 * blendedB) / 255;

    return luminance > 0.6 ? "#000" : "#fff";
}
