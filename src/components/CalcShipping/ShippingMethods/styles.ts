import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 1rem 0.4rem;

  div {
    display: flex;
    gap: 8px;
    justify-content: baseline;
    font-size: 1.4rem;
  }

  img {
    margin-bottom: 0.8rem;
  }
`;
