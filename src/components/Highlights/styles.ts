import styled from 'styled-components';
import Flickity from 'react-flickity-component';

export const Container = styled.section`
  padding: 6.4rem;
  display: grid;
  place-items: center;
  `;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  `;

export const ContainerHighlights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;

  h3 {
    font-size: 1.8rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.bgSemiDark};
    margin-bottom: 2.4rem;
  }
`;

export const Carousel = styled(Flickity)`
  width: 100%;

  .flickity-prev-next-button {
    width: 4rem;
    height: 4rem;
    border-radius: .5rem;
  }

  .flickity-button {
    color: ${({ theme }) => theme.colors.details};

    ::before {
      content: '';
      position: absolute;
      width: 3rem;
      height: 0.4rem;
      top: 1.8rem;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.details};
    }
  }

  .flickity-prev-next-button.previous {
    left: -6rem;

    ::before {
      left: 1.4rem;
    }
  }

  .flickity-prev-next-button.next {
    right: -6rem;

    ::before {
      right: 1.4rem;
    }
  }
`;

export const Card = styled.div`
  height: 40rem;
  width: 28rem;
  margin: 0 3rem;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #ccc);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    p {
      margin-bottom: 4rem;
      text-transform: uppercase;
      font-size: 1.6rem;
      opacity: 0.9;
    }

    div {
      display: flex;
      flex-direction: column;

      span, strong {
        font-size: 1.6rem;
      }
    }

    .button {
      width: 100%;
      margin-top: 2.4rem;
      display: grid;
      place-items: center;

      button {
        cursor: pointer;
        border-radius: 4px;
        width: 75%;
        text-transform: uppercase;
        padding: 0.8rem ;
        border: none;
        background: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.text};

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const ContainerMostPurchased = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bgSemiDark};
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    div {
      margin: 0;
    }
  }
`;
