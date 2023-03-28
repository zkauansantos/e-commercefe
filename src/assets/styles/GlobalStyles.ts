import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', 'Roboto', sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bgSemiDark};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.separator};
  }
`;
