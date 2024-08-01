import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #f4f4f4;
    --text-one: #505050;
    --text-two: #ababab;
    --placeholder: #ABABAB;
    --text-button: #FFFFFF;
    --border-and-btn-bg: #E85B81;
    --disabled-input: rgb(232 91 129 / 0.5);
  }

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;
    /* border: 1px solid red; */
  }

  body {
    background-color: var(--background-color);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
