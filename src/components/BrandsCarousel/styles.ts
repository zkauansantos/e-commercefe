import styled from 'styled-components';

import Flickity from 'react-flickity-component';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  background: ${({ theme }) => theme.colors.bgLight};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 124rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 2.4rem;
    font-style: italic;
    margin-bottom: 6.4rem;
  }
`;

export const Carousel = styled(Flickity)`
  width: 100%;

  .flickity-page-dots {
    bottom: -4.5rem;
  }

  .flickity-page-dots .dot {
    width: 1rem;
    height: 1rem;
    opacity: 1;
    background: ${({ theme }) => theme.colors.bgSemiLight};
    border: 2px solid ${({ theme }) => theme.colors.dark};
  }

  .flickity-page-dots .dot.is-selected {
    background: white;
    position: relative;
    border: none;

    :before {
      content: '';
      width: 0.8rem;
      height: 1.8rem;
      border: 2px solid ${({ theme }) => theme.colors.details};
      position: absolute;
      left: 0.7rem;
      bottom: -0.5rem;
      -webkit-transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      -ms-transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      border-radius: 5px;
    }
  }

  .flickity-button {
    color: ${({ theme }) => theme.colors.details};
    width: 5rem;
    height: 5rem;
    border: 1px solid ${({ theme }) => theme.colors.separator};
    border-radius: 50%;

    svg {
      width: 40%;
    }

    :hover{
      border-color: ${({ theme }) => theme.colors.details};
    }

    ::before {
      content: '';
      position: absolute;
      width: 2rem;
      height: 0.3rem;
      top: 2.2rem;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.details};
    }
  }

  .flickity-prev-next-button.previous {
    left: -8rem;

    svg {
      margin-right: 0.8rem;
    }

    ::before {
      left: 1.5rem;
    }
  }

  .flickity-prev-next-button.next {
    right: -8rem;

    svg {
      margin-left: 0.8rem;
    }

    ::before {
      right: 1.5rem;
    }
  }
`;

export const Brand = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgDark};
  border: 1px solid ${({ theme }) => theme.colors.bgLight};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;

  img {
    width: 100%;
    color: red;
  }
`;
