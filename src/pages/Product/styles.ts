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
  padding: 6.4rem 0;
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
  width: 300px;
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
.TabsTrigger:first-child {
  border-top-left-radius: 6px;
}
.TabsTrigger:last-child {
  border-top-right-radius: 6px;
}
.TabsTrigger:hover {
  color: var(--violet11);
}
.TabsTrigger[data-state='active'] {
  color: var(--violet11);
  box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
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

.Text {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--mauve11);
  font-size: 15px;
  line-height: 1.5;
}

.Fieldset {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.Label {
  font-size: 13px;
  line-height: 1;
  margin-bottom: 10px;
  color: var(--violet12);
  display: block;
}

.Input {
  flex: 1 0 auto;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet11);
  box-shadow: 0 0 0 1px var(--violet7);
  height: 35px;
}
.Input:focus {
  box-shadow: 0 0 0 2px var(--violet8);
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.green {
  background-color: var(--green4);
  color: var(--green11);
}
.Button.green:hover {
  background-color: var(--green5);
}
.Button.green:focus {
  box-shadow: 0 0 0 2px var(--green7);
}

`;

export const ShareContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6.4rem 0;
  background: ${({ theme }) => theme.colors.dark['800']};
`;
