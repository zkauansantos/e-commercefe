import styled from 'styled-components';

export const ContainerInformations = styled.div`
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
`;
