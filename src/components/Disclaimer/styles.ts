import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue['700']};
  padding: 1rem 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.light['200']};
  font-weight: 800;

  span {
    font-size: 1.6rem;
  }
`;
