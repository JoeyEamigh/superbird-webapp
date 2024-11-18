/**
 * Get a CSS value that can be used when authoring CSS spacer rules
 * @param spacerStep- a spacer step number value (eg -5, 0, 6)
 * @param [fallbackSpacer] - a valid CSS <spacer> token as fallback
 * @returns a string in the form of `var(--spacer-variable, <fallback>)`
 */
export function cssSpacerValue(spacerStep, fallbackSpacer) {
  return 'var(--spacer-'.concat(spacerStep, ', ').concat(fallbackSpacer, ')');
}

/**
 * Get a CSS value that can be used when authoring CSS border radius rules
 * @param size - a border radius size string(sm, md, lg, xl, xxl)
 * @param [fallback] - a valid CSS pixel value as fallback
 * @returns a string in the form of `var(--border-radius-variable, <fallback>)`
 */
export function cssBorderRadius(size, fallback) {
  return 'var(--border-radius-'.concat(size, ', ').concat(fallback, ')');
}

/**
 * Get a CSS value that can be used when authoring CSS control size rules
 * @param size - a border radius size string(sm, md, lg)
 * @param [fallback] - a valid CSS pixel value as fallback
 * @returns a string in the form of `var(--control-size-variable, <fallback>)`
 */
export function cssControlSize(size, fallback) {
  return 'var(--control-size-'.concat(size, ', ').concat(fallback, ')');
}

/**
 * Get a CSS value that can be used when authoring CSS layout margins
 * @param size - a layout margin size string(compact, regular, generous)
 * @param [fallback] - a valid CSS pixel value as fallback
 * @param [isNegative] - a boolean for if this is a negative margin
 * @returns a string in the form of `var(--layout-margin-variable, <fallback>)`
 */
export function cssLayoutMargin(size, fallback, isNegative) {
  if (isNegative) {
    return 'calc(-1 * var(--layout-margin-'.concat(size, ', ').concat(fallback, '))');
  }
  return 'var(--layout-margin-'.concat(size, ', ').concat(fallback, ')');
}
