import styled from 'styled-components';
import Flickity from 'react-flickity-component';

export const Container = styled.section`
  padding: 64px;
  display: grid;
  place-items: center;
  `;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  `;

export const ContainerHighlights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  h3 {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bgSemiDark};
    margin-bottom: 24px;
  }
`;

export const Carousel = styled(Flickity)`
  width: 100%;

  .flickity-prev-next-button {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .flickity-button {
    color: ${({ theme }) => theme.colors.details};

    ::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 4px;
      top: 18px;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.details};
    }
  }

  .flickity-prev-next-button.previous {
    left: -60px;

    ::before {
      left: 15px;
    }
  }

  .flickity-prev-next-button.next {
    right: -60px;

    ::before {
      right: 15px;
    }
  }
`;

export const Card = styled.div`
  height: 400px;
  width: 280px;
  margin: 0 30px;
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
      margin-bottom: 40px;
      text-transform: uppercase;
      font-size: 15px;
      opacity: 0.9;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    .button {
      width: 100%;
      margin-top: 24px;
      display: grid;
      place-items: center;

      button {
        cursor: pointer;
        border-radius: 4px;
        width: 75%;
        text-transform: uppercase;
        padding: 8px ;
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
    margin-bottom: 24px;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    div {
      margin: 0;
    }
  }
`;
