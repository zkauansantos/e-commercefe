import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.4rem 4.8rem 4.8rem 4.8rem;
  max-width: 50rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.light['100']};

  .product-information {
    width: 100%;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.6rem;
    }

    .avaliation {
      margin-top: 0.8rem;
      width: 100%;
      text-align: end;
    }
  }

  .price {
    margin-top: 2.4rem;
    width: 100%;
    justify-content: space-between;
    display: flex;
    font-style: italic;

    span {
      font-size: 2.2rem;
      opacity: 0.5;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: ${({ theme }) => theme.colors.blue['700']};

      span {
        font-size: 1.2rem;
      }

      strong {
        font-size: 1.6rem;

        span {
          font-size: 1.6rem;
          font-weight: 300;
        }
      }
    }
  }

  .colors-product {
    margin-top: 2.4rem;

    span {
      font-size: 1.4rem;
    }

    .p-view {
      margin-top: 0.8rem;
      width: 50px;
      height: 50px;
      background: #ccc;
      border: 1px solid ${({ theme }) => theme.colors.blue['700']};
      border-radius: 4px;
      position: relative;

      ::after {
        content: "V";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        color: ${({ theme }) => theme.colors.light['100']};
        background: ${({ theme }) => theme.colors.blue['700']};
      }
    }
  }

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

        span {
          font-style: italic;
          color: ${({ theme }) => theme.colors.light['500']};
          font-size: 1.2rem;
        }
      }
    }
  }

  .find-you-size {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      padding: 0 2rem;
      border: 1px solid ${({ theme }) => theme.colors.light['400']};

      span {
        font-size: 1.2rem;
      }

      svg {
        color: ${({ theme }) => theme.colors.blue['700']};
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  button {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    gap: 0.8rem;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.blue['700']};
    transition: 0.2s ease;
    span {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.light['100']};
    }

    svg {
      color: ${({ theme }) => theme.colors.light['100']};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.blue['900']};
    }

    &:active {
      color: ${({ theme }) => theme.colors.light['200']};
      background-color: ${({ theme }) => theme.colors.blue['700']};
    }
  }

  .benefits {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.colors.light['400']};
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    border-radius: 4px;
    padding: 0.4rem 0;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;