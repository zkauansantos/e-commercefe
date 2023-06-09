import styled from 'styled-components';

export const Ring = styled.div<{ size: string }>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin: 8px;
    border: 8px solid #ccc;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ccc transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
