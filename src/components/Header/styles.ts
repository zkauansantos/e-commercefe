import styled from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import * as animations from '../../styles/animations/menu';

export const Container = styled.header`
  position: relative;
  background: ${({ theme }) => theme.colors.dark['600']};
  height: 8rem;
  display: grid;
  place-items: center;
  border-bottom: 1px solid rgba(0,0,0,.3);

  a {
    z-index: 5;
    font-size: clamp(1.4rem, 1.8vw, 2rem);
    font-weight: bold;
  }

  .view-position {
    position: absolute;
    display: flex;
    width: 100%;
    top: 5rem;
    left: 0;
    background-color: ${({ theme }) => theme.colors.dark['500']};
    perspective: 2000px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 124rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  h1 {
    color: #fff;
  }
`;

export const MenuRoot = styled(NavigationMenu.Root)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 99vw;
  z-index: 2;
`;

export const MenuViewPort = styled(NavigationMenu.Viewport)`
  position: relative;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  min-height: 550px;
  overflow: hidden;
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
