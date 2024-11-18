/*
 * Mixins and values meant for control components:
 * Buttons, Chip, Dropdown, Select, FormInput, etc
 */

import { spacer4, spacer8, spacer12, spacer32, spacer48, spacer56 } from '@spotify-internal/encore-foundation';
export var controlSizes = ['sm', 'md', 'lg'];
export var controlMinBlockSize = {
  sm: spacer32,
  md: spacer48,
  lg: spacer56,
};
export var controlPaddingBlock = {
  sm: spacer4,
  md: spacer8,
  lg: spacer12,
};
export var controlIconSize = {
  sm: 16,
  md: 24,
  lg: 24,
};
