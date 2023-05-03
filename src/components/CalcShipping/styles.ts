import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.6rem;
`;

export const ContainerForm = styled.div`
  padding: 0 4.6rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
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

export const Form = styled.form`
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.light['400']};
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

  .error {
    color: #f00a;
    font-size: 1.2rem;
  }
`;
