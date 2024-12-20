/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */

import React from 'react';
import { findClosestGlyphAvailable, Icon } from '../../';
export function IconPublic(props) {
  var _props$autoMirror;
  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M12.208 23H12C5.925 23 1 18.075 1 12S5.925 1 12 1a11.336 11.336 0 0 1 .383.007C18.28 1.208 22.999 6.053 22.999 12s-4.72 10.792-10.617 10.994a2.304 2.304 0 0 1-.174.006zm-.591-19.577c-.316.381-.644.993-.94 1.836-.513 1.466-.869 3.47-.95 5.741h4.963c-.081-2.27-.437-4.275-.95-5.74-.296-.844-.624-1.456-.94-1.837-.273-.33-.462-.405-.553-.42l-.066-.001c-.086.01-.28.077-.564.421zM7.725 11c.083-2.454.466-4.69 1.065-6.401.146-.418.308-.814.488-1.18A9.009 9.009 0 0 0 3.054 11h4.671zm-4.671 2a9.009 9.009 0 0 0 6.224 7.581c-.18-.366-.342-.762-.488-1.18-.6-1.711-.982-3.947-1.065-6.401H3.054zm6.672 0c.082 2.27.438 4.275.951 5.74.296.844.624 1.456.94 1.837.284.343.478.41.564.421l.066-.001c.09-.015.28-.09.553-.42.316-.381.644-.993.94-1.836.513-1.466.869-3.47.95-5.741H9.726zm6.966 0c-.083 2.454-.466 4.69-1.065 6.401-.123.352-.257.688-.404 1.004A9.009 9.009 0 0 0 20.944 13h-4.252zm4.252-2a9.009 9.009 0 0 0-5.72-7.405c.146.316.28.652.403 1.004.6 1.711.982 3.947 1.065 6.401h4.252z\'/>'
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
 * @deprecated The name Experimental__IconPublic is deprecated and will be archived soon. Use IconPublic instead.
 */
export function Experimental__IconPublic(props) {
  return /*#__PURE__*/ React.createElement(IconPublic, props);
}
