/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */

import React from 'react';
import { findClosestGlyphAvailable, Icon } from '../../';
export function IconPlaybackSpeed2x(props) {
  var _props$autoMirror;
  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M2.197 5.931c0-1.08.918-2.028 2.218-2.028 1.346 0 2.15 1.097 2.064 2.112-.061.723-.435 1.24-1.022 1.565l-.718.391c-.37.201-.75.408-.886.486l-.013.006-.038.02-.026.014-.098.05c-.1.052-.23.121-.376.208a6.35 6.35 0 0 0-1.021.74c-.724.652-1.467 1.673-1.467 3.117v.75H8v-1.5H2.43c.164-.51.487-.92.854-1.25.444-.4.885-.629 1.153-.768.064-.033.118-.06.16-.085.13-.074.469-.258.817-.447.288-.156.582-.316.77-.42.99-.549 1.683-1.492 1.79-2.75.156-1.844-1.288-3.739-3.56-3.739C2.37 2.403.698 3.942.698 5.931v.527h1.5v-.527zm13.112 2.482-1.97 1.97 1.97 1.97-1.061 1.06-1.97-1.97-1.97 1.97-1.06-1.06 1.97-1.97-1.97-1.97 1.06-1.06 1.97 1.969 1.97-1.97 1.06 1.061z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M4 8.248C4 6.508 5.477 5 7.538 5c2.15 0 3.441 1.755 3.303 3.39-.098 1.157-.701 1.989-1.638 2.507-.245.136-.67.367-1.102.601-.564.307-1.141.62-1.35.739l-.005.003-.017.01a8.812 8.812 0 0 1-.06.03l-.041.022-.149.076c-.151.08-.346.184-.568.314-.44.26-.994.627-1.538 1.116-1.088.978-2.194 2.502-2.194 4.656v1H13.02v-2H4.307c.239-.903.785-1.612 1.404-2.17.694-.624 1.39-.984 1.8-1.196.093-.049.172-.09.233-.124.2-.115.722-.398 1.256-.688.44-.238.888-.482 1.172-.64 1.476-.816 2.503-2.217 2.662-4.088C13.066 5.819 10.92 3 7.538 3 4.484 3 2 5.295 2 8.248v.806h2v-.806zm19.062 4.709L20.52 15.5l2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.414L17.69 15.5l-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414z\'/>'
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
 * @deprecated The name Experimental__IconPlaybackSpeed2x is deprecated and will be archived soon. Use IconPlaybackSpeed2x instead.
 */
export function Experimental__IconPlaybackSpeed2x(props) {
  return /*#__PURE__*/ React.createElement(IconPlaybackSpeed2x, props);
}
