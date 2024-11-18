/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */

import React from 'react';
import { findClosestGlyphAvailable, Icon } from '../../';
export function IconPodcasts(props) {
  var _props$autoMirror;
  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M3.404 3.404a6.5 6.5 0 0 1 9.192 9.192l1.06 1.06a8 8 0 1 0-11.313 0l1.06-1.06a6.5 6.5 0 0 1 0-9.192z\'/><path d=\'M11 9.25a3.001 3.001 0 0 1-2.25 2.905v1.474l1.773 1.488a.5.5 0 0 1-.321.883H5.799a.5.5 0 0 1-.322-.883l1.773-1.488v-1.474A3.001 3.001 0 0 1 5 9.25V7a3 3 0 0 1 6 0v2.25zM8 5.5A1.5 1.5 0 0 0 6.5 7v2.25a1.5 1.5 0 0 0 3 0V7A1.5 1.5 0 0 0 8 5.5z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M12 3a9 9 0 0 0-7.046 14.6L3.42 18.886A10.954 10.954 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.96 10.96 0 0 1-2.421 6.886L19.046 17.6A9 9 0 0 0 12 3z\'/><path d=\'M12 7a4 4 0 0 0-4 4v3a4.002 4.002 0 0 0 3 3.874v1.965l-2.715 2.278a.5.5 0 0 0 .322.883h6.786a.5.5 0 0 0 .322-.883L13 19.839v-1.965c1.725-.444 3-2.01 3-3.874v-3a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-4 0v-3a2 2 0 1 1 4 0v3z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);
  var titleTag = function titleTag(title, titleId) {
    return title ? '<title '.concat(titleId ? 'id="'.concat(titleId, '"') : '', '>').concat(title, '</title>') : '';
  };
  var descTag = function descTag(desc, descId) {
    return desc ? '<desc '.concat(descId ? 'id="'.concat(descId, '"') : '', '>').concat(desc, '</desc>') : '';
  };
  var autoMirror =
    (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/ React.createElement(
    Icon,
    Object.assign({}, props, {
      autoMirror: autoMirror,
      viewBox: '0 0 '.concat(closestSize.size, ' ').concat(closestSize.size),
      dangerouslySetInnerHTML: {
        __html: ''
          .concat(titleTag(props.title, props.titleId))
          .concat(descTag(props.desc, props.descId))
          .concat(closestSize.svgContent),
      },
    }),
  );
}

/**
 * @deprecated The name Experimental__IconPodcasts is deprecated and will be archived soon. Use IconPodcasts instead.
 */
export function Experimental__IconPodcasts(props) {
  return /*#__PURE__*/ React.createElement(IconPodcasts, props);
}
