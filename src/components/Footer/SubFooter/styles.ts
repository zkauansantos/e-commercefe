import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ccc9;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  padding: 0 2em;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-template-rows: repeat(2, auto);
  margin-top: 48px;

  .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      p {
        line-height: 20px;
        font-size: 12px;
        font-style: italic;

        :nth-child(1){
          font-weight: bold ;
        }

        :nth-child(3){
          max-width: 90%;
        }
      }
    }
  }

  .form-payment {
    strong {
      margin-left: 24px;
    }

    ul {
      list-style: none;
      margin-top: 24px;
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
    padding: 32px 0;

    p {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .vtex {
    padding: 32px 0;
    grid-column: 3;

    strong {
      text-transform: uppercase;
      margin-left: 24px;
      font-size: 12px;
    }
  }
`;
