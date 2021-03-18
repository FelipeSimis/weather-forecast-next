import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  *, input, button {
    font-family: 'Nunito Sans', sans-serif;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  :root {
    --white: #fff;
    --gray: #8f8383;
  }
`;
