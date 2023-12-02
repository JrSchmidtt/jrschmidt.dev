import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  // debug css
  * {
    border: 1px dashed red;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
