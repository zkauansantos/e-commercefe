import styled from 'styled-components';

import * as Carousel from 'swiper/react';

export const Container = styled.div`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.bgDark} 81%, transparent 0%);
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 0px 5px;
`;

export const Swiper = styled(Carousel.Swiper)`
  height: 460px;
  width: 90%;
  border-radius: 0px 0px 4px 4px;

  .swiper-button-prev{
    color: ${({ theme }) => theme.colors.details};
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.details};
  }
`;

export const View = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://artwalk.vteximg.com.br/arquivos/ids/363730/2656%20-%20AW%20%20BANNER%20-%20DESKTOP%201.png?v=638146633633000000') center center no-repeat;
  background-size: cover;

`;

export const Benefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.bgSemiLight};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding-left: 24px;

    p{
      opacity: 0.9;
      font-size: 12px;
      text-transform: uppercase;

      span {
        font-weight: bold;
      }
    }

    :first-child {
      border-left: none;
    }

    border-left: 3px solid ${({ theme }) => theme.colors.separator};
  }
`;
