import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `

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
    color: #fafafa;
    font-size: 24px;
    background-color: #212121;
  }
  
  p {
    color: #888;
  }
  
  a {
    color: #fafafa;
    text-decoration: none;
  }

  li {
   list-style: none;
  }
`