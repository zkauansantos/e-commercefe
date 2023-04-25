import styled from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as animations from '../../assets/styles/animations/menu';

export const MenuListStyled = styled(NavigationMenu.List)`
  display: flex;
  gap: 2.4rem;
  border-radius: 0.6rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.light['200']};

  button,p {
    all: unset;
  }
`;

export const MenuIndicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 1rem;
  top: 2.4rem;
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
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    border-top-left-radius: 0.2rem;
  }
`;
