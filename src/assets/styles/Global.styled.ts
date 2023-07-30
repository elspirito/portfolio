import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.dark.fontPrimary};
    font-size: 24px;
    background-color: ${theme.colors.dark.primaryBg};
    font-weight: 1000;
    
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.025em;
    line-height: 1.2;
  }

  section {
    padding: 120px 0;
  }

  p {
    color: ${theme.colors.dark.fontSecondary};
    line-height: 1.6;
    font-variation-settings: 'wght' 300;
  }

  a {
    color: ${theme.colors.dark.fontPrimary};
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    border-radius: 999px;
    padding: 0px 40px;
    min-height: 80px;
  }

  input, textarea {
    background-color: ${theme.colors.dark.primaryBg};
    border: unset;
    border-bottom: 1px solid #f00;
  }
`