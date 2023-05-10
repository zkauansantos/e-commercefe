import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  margin-top: 2.4rem;

  .img {
    width: 100%;
    margin: 0 1.2rem;
    height: 500px;
    background-color: #ccc;
  }

  .gallery-b {
    margin-top: 2.4rem;
  }

  .imagenzinha.flickity-cell.is-selected.is-nav-selected{
    border-bottom: 3px solid red;
  }


  .imagenzinha {
    width: 50px;
    height: 50px;
    margin: 0 1.2rem;
    background-color: #ccc;
  }


`;
