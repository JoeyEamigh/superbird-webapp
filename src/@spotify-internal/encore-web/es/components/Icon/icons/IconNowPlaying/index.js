/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */

import React from 'react';
import { findClosestGlyphAvailable, Icon } from '../../';
export function IconNowPlaying(props) {
  var _props$autoMirror;
  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M.999 15h2V5h-2v10zm4 0h2V1h-2v14zM9 15h2v-4H9v4zm4-7v7h2V8h-2z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M8 4v18h2V4H8zM2 22V9h2v13H2zm18-11v11h2V11h-2zm-6 4v7h2v-7h-2z\'/>'
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
 * @deprecated The name Experimental__IconNowPlaying is deprecated and will be archived soon. Use IconNowPlaying instead.
 */
export function Experimental__IconNowPlaying(props) {
  return /*#__PURE__*/ React.createElement(IconNowPlaying, props);
}
