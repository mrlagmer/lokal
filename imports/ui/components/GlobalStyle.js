import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SpaceGrotesk';
    src: url('/fonts/SpaceGrotesk-Regular.woff2')format('woff2'),
    url('/fonts/SpaceGrotesk-Regular.woff')format('woff');
  }

  @font-face {
    font-family: 'SpaceGrotesk';
    src: url('/fonts/SpaceGrotesk-Bold.woff2')format('woff2'),
    url('/fonts/SpaceGrotesk-Bold.woff')format('woff');
    font-weight: bold;
  }

  html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'SpaceGrotesk';
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
