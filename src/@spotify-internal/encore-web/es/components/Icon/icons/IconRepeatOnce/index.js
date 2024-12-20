/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */

import React from 'react';
import { findClosestGlyphAvailable, Icon } from '../../';
export function IconRepeatOnce(props) {
  var _props$autoMirror;
  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25z\'/><path d=\'M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M11.382 2.516c.306-.323.448-.7.448-.969h2V11h-2V5H10V3h.378c.341 0 .706-.17 1.004-.484zM1 7a5 5 0 0 1 5-5h1v2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1v2H6a5 5 0 0 1-5-5V7z\'/><path d=\'M18 4h-1V2h1a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-4.798l1.298 1.298a1 1 0 1 1-1.414 1.415L9.373 19l3.713-3.712a1 1 0 0 1 1.414 1.414L13.202 18H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z\'/>'
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
 * @deprecated The name Experimental__IconRepeatOnce is deprecated and will be archived soon. Use IconRepeatOnce instead.
 */
export function Experimental__IconRepeatOnce(props) {
  return /*#__PURE__*/ React.createElement(IconRepeatOnce, props);
}
