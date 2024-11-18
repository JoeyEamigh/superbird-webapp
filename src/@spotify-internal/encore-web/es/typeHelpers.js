import { color as colorTokens } from '@spotify-internal/encore-foundation';

// Helper for any prop that behaves like `as` from styled-components (ie `component` in Button)

// eslint-disable-next-line
export function assertNever(_) {
  throw new Error('Unreachable value');
}

/**
 * Export Foundation tokens
 *
 * TODO: If Foundation merges this PR (https://ghe.spotify.net/encore/foundation/pull/239),
 * remove and re-export from Foundation.
 */

// Helper for validating whether a color string is a foundation token
export function isColorToken(color) {
  return color !== undefined && colorTokens.hasOwnProperty(color);
}

/**
 * Helper for converting a token (in string px format) to an integer.
 * @example
 * pxToInt(spacer16) // returns 16
 *  */
export var pxToInt = function pxToInt(px) {
  return parseInt(px, 10);
};

/**
 * Construct a type with the properties of T where T's optional properties (K)
 * are required in the new type.
 */
