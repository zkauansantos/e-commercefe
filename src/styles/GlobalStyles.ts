import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', 'Roboto', sans-serif;
  }

  body, html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.dark['500']};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.light['400']};
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
