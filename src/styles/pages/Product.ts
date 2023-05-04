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
  display: flex;
  justify-content: center;
  align-items: center;

  button,
  fieldset,
  input {
    all: unset;
  }

  .TabsRoot {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px var(--blackA4);
  }
  .TabsList {
    flex-shrink: 0;
    display: flex;
    border-bottom: 1px solid var(--mauve6);
  }
  .TabsTrigger {
    font-family: inherit;
    background-color: white;
    padding: 0 20px;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 1;
    color: var(--mauve11);
    user-select: none;
  }

  .TabsTrigger:focus {
    position: relative;
    box-shadow: 0 0 0 2px black;
  }

  .TabsContent {
    flex-grow: 1;
    padding: 20px;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
  }
  .TabsContent:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

export const ShareContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6.4rem 0;
  background: ${({ theme }) => theme.colors.dark['800']};
`;
