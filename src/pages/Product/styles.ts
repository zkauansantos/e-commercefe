import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 3.2rem 0 6.4rem 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;

  .container-image {
    padding: 2.4rem 4.8rem 4.8rem 4.8rem;

    .img {
      width: 500px;
      height: 500px;
      background-color: #ccc;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
