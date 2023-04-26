import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4.6rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.light['300']};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding-left: 2.4rem;

    svg {
      color: ${({ theme }) => theme.colors.blue['700']};
      font-size: 2rem;
    }

    p {
      opacity: 0.9;
      font-size: 1.2rem;
      text-transform: uppercase;

      span {
        font-weight: bold;
      }
    }

    :first-child {
      border-left: none;
    }

    border-left: 3px solid ${({ theme }) => theme.colors.light['400']};
  }
`;
