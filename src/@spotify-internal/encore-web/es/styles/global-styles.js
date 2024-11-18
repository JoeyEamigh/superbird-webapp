//
// Global styles: Optional styles to reset CSS for an application
// --------------------------------------------------------------

import { desktopBallad } from '@spotify-internal/encore-foundation';
import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle(
  [
    '*{box-sizing:border-box;}*::before,*::after{box-sizing:border-box;}body{margin:0;}body,input,textarea,button{font-family:var(--font-family,',
    '),Helvetica,Arial,sans-serif;}html,body{height:100%;}',
  ],
  desktopBallad.fontFamily,
);
