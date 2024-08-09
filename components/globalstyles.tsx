import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  html,
  // debug css
  /* * {
    border: 1px dashed red;
  } */
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
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

  .roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}
`;

export default GlobalStyle;
