import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 4.8rem 4.8rem 4.8rem;
  max-width: 50rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.light['100']};

  .colors-product {
    margin-top: 2.4rem;

    span {
      font-size: 1.4rem;
    }

    .p-view {
      margin-top: 0.8rem;
      width: 50px;
      height: 50px;
      background: #ccc;
      border: 1px solid ${({ theme }) => theme.colors.blue['700']};
      border-radius: 4px;
      position: relative;

      ::after {
        content: "V";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        color: ${({ theme }) => theme.colors.light['100']};
        background: ${({ theme }) => theme.colors.blue['700']};
      }
    }
  }

  button {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    gap: 0.8rem;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.blue['700']};
    transition: 0.2s ease;
    span {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.light['100']};
    }

    svg {
      color: ${({ theme }) => theme.colors.light['100']};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.blue['900']};
    }

    &:active {
      color: ${({ theme }) => theme.colors.light['200']};
      background-color: ${({ theme }) => theme.colors.blue['700']};
    }
  }

  .benefits {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.colors.light['400']};
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    font-size: clamp(0.8rem, 1vw, 1rem);
    border-radius: 4px;
    padding: 0.4rem 0;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;
