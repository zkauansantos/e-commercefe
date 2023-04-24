import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.details};
  padding: 1rem 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;

  span {
    font-size: 1.6rem;
  }
`;
