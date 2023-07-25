import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /* For Webkit based browsers (Chrome, Safari, etc.) */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #6e07f3;
  border-radius: 4px;
}

/* For Firefox */
::-moz-scrollbar {
  width: 8px;
}

::-moz-scrollbar-track {
  background-color: transparent;
}

::-moz-scrollbar-thumb {
  background-color: #6e07f3;
  border-radius: 4px;
}

/* For Internet Explorer and Edge */
::-ms-scrollbar {
  width: 8px;
}

::-ms-scrollbar-track {
  background-color: transparent;
}

::-ms-scrollbar-thumb {
  background-color: #6e07f3;
  border-radius: 4px;
}

`;

export default GlobalStyles;
