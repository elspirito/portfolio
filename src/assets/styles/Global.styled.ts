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
    color: ${theme.dark.colors.fontPrimary};
    font-size: 24px;
    line-height: 1.6;
    background-color: ${theme.dark.colors.primaryBg};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.025em;
  }

  section {
    padding: 100px 0;
  }

  p {
    color: ${theme.dark.colors.fontSecondary};
  }

  a {
    color: ${theme.dark.colors.fontPrimary};
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
    background-color: ${theme.dark.colors.primaryBg};
    border: unset;
    border-bottom: 1px solid #f00;
  }
`