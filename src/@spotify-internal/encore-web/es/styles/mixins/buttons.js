//
// Buttons
// --------------------------------------------------
import { spacer12, spacer16, spacer20, spacer24, spacer32, spacer48 } from '@spotify-internal/encore-foundation';
import { css } from 'styled-components';
import { encoreContextStatus } from '../../contexts/EncoreContext';
import { pxToInt } from '../../typeHelpers';
import {
  balladBold,
  browserFocusReset,
  cello,
  controlIconSize,
  controlMinBlockSize,
  controlPaddingBlock,
  cursorDisabled,
  deprecatedButtonPaddingTopBottom,
  getDeprecatedButtonFont,
  mestoBold,
  opacityActive,
  opacityDisabled,
  rootStyle,
} from '../';
export var buttonBorderRadius = '500px';
export var buttonTransitionFade = '33ms';
export var buttonTextTransform = 'none';
export var buttonHoverScale = '1.04';

/**
 * Left and right padding for buttons without icons.
 * For buttons with `iconLeading` or `iconTrailing`, see `getButtonWithIconLeftRightPadding()`.
 */
export var defaultButtonPaddingLeftRight = {
  sm: spacer16,
  md: spacer32,
  lg: spacer48,
};

/**
 * Observed left &/or right padding for buttons with `iconLeading` or `iconTrailing`.
 * Note: "Observed" because the true padding is calculated, see `getButtonWithIconLeftRightPadding()`.
 */
export var buttonWithIconSidePadding = {
  sm: spacer12,
  md: spacer20,
  lg: spacer24,
};

/** Observed margin between icons and text (absolute positioned, not real margin) */
export var buttonWithIconMargin = {
  sm: '5px',
  md: spacer12,
  lg: '10px',
};
export var defaultTypeVariants = {
  sm: 'mestoBold',
  md: 'balladBold',
  lg: 'cello',
};
export var getButtonFont = function getButtonFont(buttonSize, status) {
  if (status === encoreContextStatus.deprecated) {
    return getDeprecatedButtonFont(buttonSize);
  }
  switch (buttonSize) {
    case 'sm':
      return mestoBold();
    case 'md':
      return balladBold();
    case 'lg':
      return cello();
    default:
      return balladBold();
  }
};

/**
 * Calculates side padding for buttons with `iconLeading` &/or `iconTrailing`.
 * Accounts for the icon's size, padding on the button edge, and margin between icons and text.
 * Used in ButtonPrimary and ButtonSecondary.
 */
var getButtonWithIconLeftRightPadding = function getButtonWithIconLeftRightPadding(buttonSize) {
  var padding = buttonWithIconSidePadding[buttonSize];
  var margin = buttonWithIconMargin[buttonSize];
  var iconSize = controlIconSize[buttonSize];
  return pxToInt(padding) + iconSize + pxToInt(margin);
};
export var getButtonPaddingValues = function getButtonPaddingValues(buttonSize) {
  var borderWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var status = arguments.length > 2 ? arguments[2] : undefined;
  var paddingTopBottom;
  if (status === 'deprecated') {
    paddingTopBottom = ''.concat(pxToInt(deprecatedButtonPaddingTopBottom[buttonSize]) - borderWidth, 'px');
  } else {
    paddingTopBottom = ''.concat(pxToInt(controlPaddingBlock[buttonSize]) - borderWidth, 'px');
  }
  var paddingLeftRight = ''.concat(pxToInt(defaultButtonPaddingLeftRight[buttonSize]) - borderWidth, 'px');
  var withIconPaddingLeftRight = ''.concat(getButtonWithIconLeftRightPadding(buttonSize) - borderWidth, 'px');
  return {
    paddingTopBottom: paddingTopBottom,
    paddingLeftRight: paddingLeftRight,
    withIconPaddingLeftRight: withIconPaddingLeftRight,
  };
};
export var getButtonPadding = function getButtonPadding(
  buttonSize,
  iconLeading,
  iconTrailing,
  iconOnly,
  borderWidth,
  status,
) {
  var _getButtonPaddingValu = getButtonPaddingValues(buttonSize, borderWidth, status),
    paddingTopBottom = _getButtonPaddingValu.paddingTopBottom,
    paddingLeftRight = _getButtonPaddingValu.paddingLeftRight,
    withIconPaddingLeftRight = _getButtonPaddingValu.withIconPaddingLeftRight;

  /** iconOnly buttons used fixed width & height instead of padding */
  var iconOnlyDimensions = css(
    ['inline-size:', ';block-size:', ';'],
    controlMinBlockSize[buttonSize],
    controlMinBlockSize[buttonSize],
  );
  var noIconPadding = css(
    ['padding-block-start:', ';padding-block-end:', ';padding-inline-start:', ';padding-inline-end:', ';'],
    paddingTopBottom,
    paddingTopBottom,
    paddingLeftRight,
    paddingLeftRight,
  );
  var symmetricalIconPadding = css(
    ['padding-block-start:', ';padding-block-end:', ';padding-inline-start:', ';padding-inline-end:', ';'],
    paddingTopBottom,
    paddingTopBottom,
    withIconPaddingLeftRight,
    withIconPaddingLeftRight,
  );
  var asymmetricalIconPadding = css(
    ['padding-block-start:', ';padding-block-end:', ';padding-inline-start:', ';padding-inline-end:', ';'],
    paddingTopBottom,
    paddingTopBottom,
    iconLeading ? withIconPaddingLeftRight : paddingLeftRight,
    iconTrailing ? withIconPaddingLeftRight : paddingLeftRight,
  );
  if (iconOnly) {
    return iconOnlyDimensions;
  }
  if (!iconLeading && !iconTrailing) {
    return noIconPadding;
  }
  if (iconLeading && iconTrailing) {
    return symmetricalIconPadding;
  }
  return asymmetricalIconPadding;
};

/** Base styles shared by most buttons, including root style, focus reset and font sizes */
export var buttonStylesBase = function buttonStylesBase(buttonSize, useBrowserDefaultFocusStyle, status) {
  return css(
    [
      '',
      ';',
      ' ',
      ';background-color:transparent;border:0;border-radius:',
      ';cursor:pointer;display:inline-block;position:relative;text-align:center;text-decoration:none;text-transform:',
      ';touch-action:manipulation;transition-duration:',
      ';transition-property:background-color,border-color,color,box-shadow,filter,transform;user-select:none;vertical-align:middle;transform:translate3d(0,0,0);',
    ],
    rootStyle(),
    !useBrowserDefaultFocusStyle && browserFocusReset,
    getButtonFont(buttonSize, status),
    buttonBorderRadius,
    buttonTextTransform,
    buttonTransitionFade,
  );
};

/** Disabled styles shared by most buttons */
export var buttonStylesDisabled = css(
  ['cursor:', ';opacity:', ';transform:scale(1);'],
  cursorDisabled,
  opacityDisabled,
);

/** Active styles shares by most buttons */
export var buttonStylesActive = css(['opacity:', ';outline:none;transform:scale(1);'], opacityActive);

/** Hover styles shares by most buttons */
export var buttonStylesHover = css(['transform:scale(', ');'], buttonHoverScale);

// Reset a button to a link looking thing
export var buttonLinkReset = function buttonLinkReset() {
  var useBrowserDefaultFocusStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return css(
    [
      'background-color:transparent;border:0;color:inherit;cursor:pointer;line-height:1;letter-spacing:inherit;padding:0;',
      '',
    ],
    !useBrowserDefaultFocusStyle && browserFocusReset,
  );
};
