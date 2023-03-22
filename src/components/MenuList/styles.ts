import styled from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import * as animations from '../../assets/styles/animations/menu';

export const MenuListStyled = styled(NavigationMenu.List)`
  display: flex;
  gap: 24px;
  border-radius: 6px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};

  button,p {
    all: unset;
  }
`;

export const MenuIndicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 25px;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;

  &[data-state='visible'] {
    animation: ${animations.fadeIn} 200ms ease;
  }

  &[data-state='hidden'] {
    animation: ${animations.fadeOut} 200ms ease;
  }

  .arrow {
    position: relative;
    top: 70%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  }
`;
