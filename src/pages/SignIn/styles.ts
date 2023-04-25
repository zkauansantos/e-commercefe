import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 119px);
  width: 100vw;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.light['300']};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerForm = styled.form`
  min-width: 45rem;
  min-height: 50rem;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  justify-content: center;

  h1 {
    align-self: self-start;
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
  }

  div {
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      border-radius: 4px;
      padding: 1rem 0.8rem;
      font-size: 1.6rem;
      font-weight: bold;
      border: 1px solid ${({ theme }) => theme.colors.light['400']};
      cursor: pointer;
      transition: 0.3s ease;

      :first-child {
        background-color: ${({ theme }) => theme.colors.blue['700']};
        color: ${({ theme }) => theme.colors.light['100']};
        border: 1px solid ${({ theme }) => theme.colors.light['100']};

        &:hover {
          background-color: ${({ theme }) => theme.colors.blue['700']};
        }

        &:active {
          opacity: 1;
          background-color: ${({ theme }) => theme.colors.light['100']};
          color: initial;
          border-color: ${({ theme }) => theme.colors.light['400']};
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.blue['700']};
        color: ${({ theme }) => theme.colors.light['200']};;
      }

      &:active {
        color: ${({ theme }) => theme.colors.light['200']};
        background-color: ${({ theme }) => theme.colors.blue['700']};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.light['400']};
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.light['100']};

        &:hover {
          background-color: ${({ theme }) => theme.colors.light['400']};
        }
      }
    }
  }

  p {
    margin-top: 1.6rem;
    font-size: 1.6rem;

    a {
      margin-left: 0.4rem;
      color: ${({ theme }) => theme.colors.blue['700']};

      :active {
        color: ${({ theme }) => theme.colors.dark['800']};
      }
    }
  }
`;

export const Field = styled.label<{ error: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    padding: 1rem;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    width: 100%;
    border-radius: 4px;
    outline: none;
    font-style: italic;
    border: ${({ error, theme }) => (
    error
      ? `1px solid ${theme.colors.red['500']}`
      : `1px solid ${theme.colors.light['400']}`
  )};
  }

  span {
    margin-top: 0.6rem;
    color: #F00A;
    font-size: 1.2rem;
    margin-left: 0.4rem;
  }
`;
