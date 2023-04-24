import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bgSemiDark};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 1.2rem;
    font-weight: 900;
    font-style: italic;
    font-size: 1.4rem;
  }
`;
