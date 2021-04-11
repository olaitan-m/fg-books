import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html { font-size: 62.5%; } 
  body { font-size: 1.8rem; }
  h1 { font-size: 2.6rem; }

  html, body {
    height: 100%;
    font-family: 'Hind', sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;

    a {
        text-decoration: none;
    }
}`;
