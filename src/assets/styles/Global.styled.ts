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

  *:focus {
    outline: 0;
  }

  *:focus-visible {
    outline: 2px solid ${theme.colors.dark.accent.hover};
    border-radius: 999px;
  }

  body {
    margin: 0;
    font-family: 'Roboto Flex', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.dark.fontPrimary};
    font-size: 24px;
    background-color: ${theme.colors.dark.primaryBg};
    font-weight: 1000;
    font-variation-settings:  "wdth" 151;
    min-width: 360px;
    line-height: 1.2;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.025em;
  }

  section {
    padding: 200px 0;
    
    @media ${theme.media.small} {
    padding: 100px 0;
  }
  }

  p {
    color: ${theme.colors.dark.fontSecondary};
    line-height: 1.6;
    font-weight: 300;
  }

  a {
    color: ${theme.colors.dark.fontPrimary};
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input, textarea {
    font-family: 'Roboto Flex', sans-serif;
    background-color: ${theme.colors.dark.primaryBg};
    border: unset;
    border-bottom: 1px solid ${theme.colors.dark.fontSecondary};
    color: #fff;
    font-size: 24px;
    opacity: 1;

    &:focus-visible {
      border-radius: 0;
      outline: 0;
      border-bottom: 2px solid ${theme.colors.dark.accent.base};
    }
    
    &::placeholder {
      color: #333;
    }
    
  }
`