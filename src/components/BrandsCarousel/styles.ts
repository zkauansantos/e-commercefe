import styled from 'styled-components';

import Flickity from 'react-flickity-component';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: ${({ theme }) => theme.colors.bgLight};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 24px;
    font-style: italic;
    margin-bottom: 64px;
  }
`;

export const Carousel = styled(Flickity)`
  width: 100%;

  .flickity-page-dots {
    bottom: -45px;
  }

  .flickity-page-dots .dot {
    width: 10px;
    height: 10px;
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
      width: 8px;
      height: 18px;
      border: 2px solid ${({ theme }) => theme.colors.details};
      position: absolute;
      left: 7px;
      bottom: -5px;
      -webkit-transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      -ms-transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      transform: translate(calc(-50% - 2px), -2px) rotate(38deg);
      border-radius: 5px;
    }
  }

  .flickity-button {
    color: ${({ theme }) => theme.colors.details};
    width: 50px;
    height: 50px;
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
      width: 20px;
      height: 3px;
      top: 22px;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.details};
    }
  }

  .flickity-prev-next-button.previous {
    left: -80px;

    svg {
      margin-right: 8px;
    }

    ::before {
      left: 15px;
    }
  }

  .flickity-prev-next-button.next {
    right: -80px;

    svg {
      margin-left: 8px;
    }

    ::before {
      right: 15px;
    }
  }
`;

export const Brand = styled.div`
  width: 100px;
  height: 100px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.bgDark};
  border: 1px solid ${({ theme }) => theme.colors.bgLight};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;

  img {
    width: 100%;
    color: red;
  }
`;
