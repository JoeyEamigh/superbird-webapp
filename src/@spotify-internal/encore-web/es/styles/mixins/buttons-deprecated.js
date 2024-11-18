import { spacer8, spacer16 } from '@spotify-internal/encore-foundation';
import { balladBold, finaleBold, violaBold } from '../';
export var buttonSizesWithDeprecationWarning = {
  /**
   * @deprecated
   * Use buttonSize="sm" instead.
   */
  sm: 'sm',
  /**
   * @deprecated
   * Use buttonSize="md" instead.
   */
  md: 'md',
  /**
   * @deprecated
   * Use buttonSize="lg" instead.
   */
  lg: 'lg',
};
export var deprecatedTypeVariants = {
  sm: 'finaleBold',
  md: 'violaBold',
  lg: 'balladBold',
};
export var getDeprecatedButtonFont = function getDeprecatedButtonFont(buttonSize) {
  switch (buttonSize) {
    case 'sm':
      return finaleBold();
    case 'md':
      return violaBold();
    case 'lg':
      return balladBold();
    default:
      return violaBold();
  }
};
export var deprecatedButtonPaddingTopBottom = {
  sm: spacer8,
  md: '14px',
  lg: spacer16,
};
