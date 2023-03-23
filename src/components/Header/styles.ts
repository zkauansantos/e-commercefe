import styled from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import * as animations from '../../assets/styles/animations/menu';

export const Container = styled.header`
  position: relative;
  background: ${({ theme }) => theme.colors.bgDark};
  height: 80px;
  display: grid;
  place-items: center;

  .view-position {
    position: absolute;
    display: flex;
    width: 100%;
    top: 50px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.bgSemiDark};
    perspective: 2000px;
  }
`;

export const MenuRoot = styled(NavigationMenu.Root)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
`;

export const MenuViewPort = styled(NavigationMenu.Viewport)`
  position: relative;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  min-height: 60vh;
  overflow: hidden;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${animations.scaleIn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${animations.scaleOut} 200ms ease;
  }

  @media only screen and (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;

  h1 {
    color: #fff;
  }
`;
