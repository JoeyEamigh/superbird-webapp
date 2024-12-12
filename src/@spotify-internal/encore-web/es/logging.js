var _process, _process$env, _process2, _process2$env;
// import { deprecatedOverlayDirections, mapPhysicalToLogicalDirections } from './styles/mixins/overlays-deprecated';

// For environment variables in webpack 5, see the "Runtime Errors" section of:
// https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice

var muteEncoreWarnings =
  (typeof MUTE_ENCORE_WARNINGS !== 'undefined' && MUTE_ENCORE_WARNINGS) ||
  (typeof process !== 'undefined' &&
    ((_process = process) == null
      ? void 0
      : (_process$env = _process.env) == null
        ? void 0
        : _process$env.MUTE_ENCORE_WARNINGS)) ||
  undefined;
var nodeEnv =
  (typeof NODE_ENV !== 'undefined' && NODE_ENV) ||
  (typeof process !== 'undefined' &&
    ((_process2 = process) == null
      ? void 0
      : (_process2$env = _process2.env) == null
        ? void 0
        : _process2$env.NODE_ENV)) ||
  undefined;
export function warn(message) {
  if (muteEncoreWarnings === 'true' || nodeEnv === 'production') {
    return;
  }

  // eslint-disable-next-line no-console
  console.warn(message);
}
export function deprecatedPropWarning(oldProp, component, message) {
  warn(
    'The '
      .concat(oldProp, ' prop in ')
      .concat(component, ' has been deprecated. ')
      .concat(message || ''),
  );
}
export function renamedPropWarning(oldProp, newProp, component, additionalInfo) {
  warn(
    'The '
      .concat(oldProp, ' prop in ')
      .concat(component, ' has been deprecated. Please use ')
      .concat(newProp, ' instead. ')
      .concat(additionalInfo || ''),
  );
}
export function newRequiredPropWarning(component, newProp, additionalInfo) {
  warn(
    'Using '
      .concat(component, ' without the ')
      .concat(newProp, ' prop is deprecated usage. ')
      .concat(additionalInfo || ''),
  );
}
export function componentDeprecationWarning(oldComponent, newComponent, version, additionalInfo) {
  warn(
    ''
      .concat(oldComponent, ' is deprecated and will be removed in ')
      .concat(version, '. Please use ')
      .concat(newComponent, ' instead. ')
      .concat(additionalInfo || ''),
  );
}
export function physicalDirectionWarning(direction, component) {
  // 'top' & 'bottom' have kept the same names
  var deprecatedDirections = Object.keys(deprecatedOverlayDirections).filter(function (dir) {
    return dir !== 'top' && dir !== 'bottom';
  });
  if (deprecatedDirections.includes(direction)) {
    return renamedPropWarning(
      direction,
      mapPhysicalToLogicalDirections(direction),
      component,
      'This allows us to support localization.',
    );
  }
  return null;
}
