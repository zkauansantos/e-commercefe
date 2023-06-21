import styled from 'styled-components';

export const ContainerSizes = styled.div`
  .sizes {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2.4rem;

    span {
      font-size: 1.4rem;
    }

    .wrapper {
      margin-top: 1.6rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      .size {
        width: 3rem;
        height: 3rem;
        border: 2px solid ${({ theme }) => theme.colors.light['400']};
        padding: 1rem;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: italic;
        color: ${({ theme }) => theme.colors.light['500']};
        font-size: 1.2rem;

        &:hover {
          border-color: ${({ theme }) => theme.colors.blue['700']};
          color: ${({ theme }) => theme.colors.blue['700']};
        }
      }

      .checked {
        background: ${({ theme }) => theme.colors.blue['700']};
        color: ${({ theme }) => theme.colors.light['100']};
        border: none;
      }
    }
  }

  .find-you-size {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      padding: 0 1.6rem;
      cursor: not-allowed;
      border: 1px solid ${({ theme }) => theme.colors.light['400']};
      font-size: 1.2rem;

      &:hover {
        transform: scale(1.05);
      }
      svg {
        color: ${({ theme }) => theme.colors.blue['700']};
      }
    }
  }
`;
