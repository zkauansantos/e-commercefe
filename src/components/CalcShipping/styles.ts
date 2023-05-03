import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.6rem;

  .centralizer {
    padding-right: 4.6rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 43rem;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 4.6rem;
  align-items: center;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    gap: 0.8rem;
  }
`;

export const Form = styled.form<{ isError: boolean }>`
  position: relative;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ isError, theme }) => (!isError ? theme.colors.light['400'] : theme.colors.red['500'])};
    border-radius: 4px;
    overflow: hidden;

    input {
      outline: none;
      padding: 0.8rem;
      border: none;
    }

    button {
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: ${({ theme }) => theme.colors.blue['700']};
      transition: 0.2s ease;

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
  }

  span {
    position: absolute;
    bottom: -2rem;
  }
`;
