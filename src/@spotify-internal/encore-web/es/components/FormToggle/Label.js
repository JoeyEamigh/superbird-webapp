import { spacer12, spacer24 } from '@spotify-internal/encore-foundation';
import styled from 'styled-components';
import {
  cssColorValue,
  cssSpacerValue,
  cursorDisabled,
  finale,
  opacityDisabled,
  semanticColors,
  viola,
} from '../../styles';
export var Label = styled.span.withConfig({
  displayName: 'Label',
  componentId: 'sc-1sbwovc-0',
})(
  [
    'color:',
    ';',
    ';padding-inline-start:',
    ';padding-inline-end:',
    ';min-inline-size:0;overflow-wrap:break-word;input:disabled ~ &&{cursor:',
    ';opacity:',
    ';}',
  ],
  cssColorValue(semanticColors.textBase),
  function (props) {
    return props.small ? finale() : viola();
  },
  cssSpacerValue(-1, spacer12),
  cssSpacerValue(1, spacer24),
  cursorDisabled,
  opacityDisabled,
);
