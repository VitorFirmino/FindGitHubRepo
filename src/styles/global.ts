import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/githubbackgound.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgba(115, 3, 192, .4) url(${githubBackground}) no-repeat  90% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.1rem 1.5rem;
  }

  button {
    cursor: pointer;
  }

`;
