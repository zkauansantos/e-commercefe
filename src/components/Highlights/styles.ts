import styled from 'styled-components';
import Flickity from 'react-flickity-component';

export const Container = styled.section`
  padding: 6.4rem 0;
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
  `;

export const ContainerHighlights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4.8rem;

  h3 {
    width: 100%;
    padding-left: 2rem;
    font-size: 1.8rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.dark['500']};
    margin-bottom: 2.4rem;
  }
`;

export const Carousel = styled(Flickity)`
  width: 100%;
  padding: 0 4.8rem;

  .flickity-prev-next-button {
    width: 4rem;
    height: 4rem;
    border-radius: .5rem;
  }

  .flickity-button {
    color: ${({ theme }) => theme.colors.blue['700']};
  }
`;

export const Card = styled.div`
  margin: 0 3rem;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #ccc);
  border-radius: 4px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25%;

  div {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
      margin-bottom: 4rem;
      text-transform: uppercase;
      font-size: 1.6rem;
      opacity: 0.9;
    }

    span, strong {
      font-size: 1.6rem;
    }
  }

  a {
    width: 90%;
    margin-top: 2.4rem;
    display: grid;
    place-items: center;

    button {
      cursor: pointer;
      border-radius: 4px;
      width: 100%;
      text-transform: uppercase;
      padding: 0.8rem ;
      border: none;
      background: ${({ theme }) => theme.colors.dark['800']};
      color: ${({ theme }) => theme.colors.light['200']};

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 1140px) {
    width: 35%;
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerMostPurchased = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
    padding-left: 2rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.dark['500']};
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
  }
`;
