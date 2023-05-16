import Flickity from 'react-flickity-component';
import styled from 'styled-components';

export const Container = styled.main`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.dark['600']} 81%,
    transparent 0%
  );
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  padding: 0 0.6rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Carousel = styled(Flickity)`
  height: 46rem;
  width: 90%;
  border-radius: 0px 0px 4px 4px;

  .flickity-page-dots {
    bottom: 1.2rem;
  }

  .flickity-prev-next-button {
    border-radius: 5px;
    background: none;
  }

  .flickity-button-icon {
    fill: ${({ theme }) => theme.colors.blue['700']};
  }

  .flickity-prev-next-button.previous {
    left: -4rem;
  }

  .flickity-prev-next-button.next {
    right: -4rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .flickity-prev-next-button {
      display: none;
    }
  }
`;

export const View = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 4px 4px;
  background: url("https://artwalk.vteximg.com.br/arquivos/ids/363730/2656%20-%20AW%20%20BANNER%20-%20DESKTOP%201.png?v=638146633633000000")
    center center no-repeat;
  background-size: cover;
`;
