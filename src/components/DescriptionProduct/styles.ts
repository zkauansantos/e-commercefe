import styled from 'styled-components';

export const Container = styled.div<{ error: boolean }>`
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

  .TabsTrigger[data-state="active"] {
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

      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;

        textarea {
          outline: none;
          padding: 1rem;
          width: 65%;
          max-width: 65%;
          margin-left: 0.4rem;
          max-height: 70rem;
          border: ${({ theme, error }) => (error ? `1px solid ${theme.colors.red['500']}` : 'none')}
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

          &:disabled {
            background: #ccc;
          }
        }
      }
    }

    .separator {
      width: 100%;
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.blue['700']};
    }
  }
`;
