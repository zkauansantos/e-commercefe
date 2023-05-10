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

    .share {
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;

      button {
        background: transparent;
        border: none;

        svg {
          color: ${({ theme }) => theme.colors.blue['700']};

          &:hover {
            color: ${({ theme }) => theme.colors.blue['900']};
          }
        }
      }
    }
  }
`;
