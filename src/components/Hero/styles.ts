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
  padding: 0px 0.5rem;
`;

export const Carousel = styled(Flickity)`
  height: 46rem;
  width: 90%;
  border-radius: 0px 0px 4px 4px;

  .flickity-page-dots {
    bottom: 0px;
  }

  .flickity-page-dots .dot {
    width: 1.2rem;
    height: 1.2rem;
    opacity: 1;
    background: transparent;
    border: 2px solid white;
  }

  .flickity-page-dots .dot.is-selected {
    background: white;
  }

  .flickity-button {
    background: none;
  }

  .flickity-prev-next-button {
    width: 5rem;
    height: 6rem;
    border-radius: 5px;
  }
  .flickity-button-icon {
    fill: ${({ theme }) => theme.colors.blue['700']};
  }
  .flickity-prev-next-button.previous {
    left: -4.5rem;
  }
  .flickity-prev-next-button.next {
    right: -4.5rem;
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

export const Benefits = styled.div`
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
