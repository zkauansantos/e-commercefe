import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ccc9;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  padding: 3em 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);

  .description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.8rem;
    padding-left: 1.6rem;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6rem;

      p {
        line-height: 2rem;
        font-size: 1.2rem;
        font-style: italic;

        :nth-child(1) {
          font-weight: bold;
        }
      }
    }
  }

  .payment-methods {
    strong {
      font-size: 1.4rem;
      margin-left: 2.4rem;
    }

    ul {
      list-style: none;
      margin-top: 2.4rem;
      display: grid;
      grid-template-columns: repeat(3, auto);

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          -webkit-filter: grayscale(1);
          filter: grayscale(1);
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
          width: 50%;
        }
      }
    }
  }

  .address {
    padding: 3.2rem 0 0 1.6rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .vtex {
    padding: 3.2rem 0 0 0;
    grid-column: 3;
    text-transform: uppercase;
    margin-left: 2.4rem;
    font-size: 1.2rem;
  }
`;
