import styled from 'styled-components';

export const Container = styled.section`
  padding: 6.4rem;
  display: grid;
  place-items: center;
  `;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  `;

export const ContainerHighlights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;

  h3 {
    font-size: 1.8rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.dark['500']};
    margin-bottom: 2.4rem;
  }
`;
