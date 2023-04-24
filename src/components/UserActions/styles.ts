import styled from 'styled-components';

import * as Popover from '@radix-ui/react-popover';

export const UserBagContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  .bag {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    * {
      z-index: 1;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.bgSemiLight};
    }

    .counter {
      display: grid;
      place-items: center;
      font-size: 1rem;
      height: 1.4rem;
      width: 1.4rem;
      position: absolute;
      background: ${({ theme }) => theme.colors.details};
      color: ${({ theme }) => theme.colors.bgSemiDark};
      border-radius: 50%;
      bottom: -0.3rem;
      z-index: 2;
      font-weight: bold;
      right: 0;
    }
  }
`;

export const UserTrigger = styled(Popover.Trigger)`
  z-index: 5;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: ${({ theme }) => theme.colors.bgLight};
  }
`;

export const UserLoginPopover = styled.div`
  position: absolute;
  top: 2.2rem;
  right: -9rem;
  background: ${({ theme }) => theme.colors.bgSemiDark};
  width: 18rem;
  height: 15rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  button {
    padding: 1rem 2rem;
    background: none;
    display: grid;
    place-items: center;
    min-width: 12rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.colors.separator};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.bgSemiLight};
      color: ${({ theme }) => theme.colors.bgSemiDark}
    }
  }
`;

export const PopoverContent = styled(Popover.Content)`
  position: relative;
  z-index: 1;

  .arrow {
    height: 0.8rem;
    width: 1.6rem;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
