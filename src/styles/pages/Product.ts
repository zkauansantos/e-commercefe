import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  place-items: center;
  padding-top: 3.2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;

  .container-image {
    padding: 2.4rem 4.8rem 4.8rem 4.8rem;

    .img {
      width: 500px;
      height: 500px;
      background-color: #ccc;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerDescriptionProduct = styled.section`
  display: grid;
  place-items: center;
  padding: 2.4rem 0 6.4rem 0;
  background: ${({ theme }) => theme.colors.dark['600']};
`;

export const ContentDescription = styled.div`
  width: 100%;
  max-width: 124rem;

  button,
  fieldset,
  input {
    all: unset;
  }

  .TabsRoot {
    display: flex;
    flex-direction: column;
  }

  .TabsList {
    flex-shrink: 0;
    display: flex;
  }

  .TabsTrigger {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-style: italic;
    background: ${({ theme }) => theme.colors.dark['600']};
    color: ${({ theme }) => theme.colors.light['100']};
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .TabsTrigger[data-state='active'] {
    color: ${({ theme }) => theme.colors.blue['700']};
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue['700']};
  }

  .TabsContent {
    outline: none;
    background: ${({ theme }) => theme.colors.dark['600']};
    color: ${({ theme }) => theme.colors.light['100']};
    font-size: 1.6rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3.2rem;
    margin-left: 2rem;
    padding-bottom: 2rem;

    .description {
      font-size: 1.8rem;
      line-height: 2.4rem;
      max-width: 65%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.4rem;
      width: 100%;

      strong {
        font-size: 2rem;
        margin-bottom: 0.4rem;
      }

      p {
        margin-left: 0.4rem;
        font-weight: 300;
      }

      span {
        margin-left: 0.8rem;
      }

      textarea {
        outline: none;
        padding: 1rem;
        width: 65%;
        max-width: 65%;
        margin-left: 0.4rem;
        max-height: 70rem;
      }

      button {
        background: ${({ theme }) => theme.colors.blue['700']};
        padding: 1rem;
        border-radius: 0.4rem;
        margin-top: 1.6rem;
        margin-left: 0.4rem;
        cursor: pointer;
        transition: 0.5s ease;
        border: none;

        &:hover {
          background: ${({ theme }) => theme.colors.blue['900']};
        }
      }
    }
  }
`;

export const ShareContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6.4rem 0;
  background: ${({ theme }) => theme.colors.dark['800']};
  color: ${({ theme }) => theme.colors.light['100']};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 2.4rem;
      font-weight: 400;
      font-style: italic;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      svg {
        color: ${({ theme }) => theme.colors.blue['700']};

        &:hover {
          color: ${({ theme }) => theme.colors.blue['900']};
        }
      }

    }
  }
`;
