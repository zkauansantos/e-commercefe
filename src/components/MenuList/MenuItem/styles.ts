import styled from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import * as animations from '../../../assets/styles/animations/menu';

export const MenuTrigger = styled(NavigationMenu.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  padding: 0.8rem 1.2rem;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.light['200']};

  span {
    font-size: 1.6rem;
  }
`;

export const MenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${animations.enterFromLeft};
  }

  &[data-motion='from-end'] {
    animation-name: ${animations.enterFromRight};
  }

  &[data-motion='to-start'] {
    animation-name: ${animations.exitToLeft};
  }

  &[data-motion='to-end'] {
   animation-name: ${animations.exitToRight};
  }

  @media only screen and (min-width: 60rem) {
    width: auto;
  }
`;
