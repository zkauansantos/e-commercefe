import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark['500']};
  min-height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-bottom: 1px solid rgba(0,0,0, 0.4);
  padding: 0 0.8rem;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.light['100']};
    margin-left: 1.2rem;
    font-weight: 900;
    font-style: italic;
    text-align: center;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-left: 0;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 425px) {
    p {
      margin-left: 0;
      font-size: 1rem;
    }
  }
`;
