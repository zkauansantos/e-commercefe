import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 119px);
  width: 100vw;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgSemiLight};
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
    margin-bottom: 2.4rem;
  }

  input {
    padding: 1rem;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ccc;
    font-style: italic;
  }

  div {
    margin-top: 1.6rem;

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
      border: 1px solid #ccc;
      cursor: pointer;
      transition: 0.2s ease;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        color: white;
      }

      &:hover {
        background-color: #ccc;
      }

      &:active {
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.details};
      }
    }
  }

  span {
    margin-top: 1.6rem;
    font-size: 1.6rem;

    a {
      color: ${({ theme }) => theme.colors.details};
    }
  }

`;
