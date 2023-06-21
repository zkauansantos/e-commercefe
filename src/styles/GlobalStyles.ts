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
    overflow-x: hidden;
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

  .flickity-page-dot.is-selected {
    background-color: transparent;
    opacity: 1;
    overflow: visible;
    position: relative;

    ::before {
      content: "";
      display: block;
      width: 0.5rem;
      height: 1.125rem;
      border: 2px solid #ff4f00;
      position: absolute;
      left: 7px;
      bottom: -5px;
      transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      border-radius: 5px;
    }
  }
`;
