import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-initial: #40C8F4;
    --background-final: #2179B5;
    --label: #999999;
    --input-without-focus: #EFEEED;
    --input-on-focus: #555555;
    --input-border: #DBDBDB;
    --button-enabled-focus: #FFFFFF;
    --button-background: #40C8F4;
    --button-disabled: #DDDCDC;
    --button-disabled-background: #F6F6F6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = 16px
  body {
    /* background: linear-gradient(90deg, var(--background-initial), var(--background-final)); */
    -webkit-font-smoothing: antialiased;    
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

export const theme = {
  colors: {
    primary: "#999999",
  }
}