import styled from 'styled-components';

import * as Popover from '@radix-ui/react-popover';

export const UserBagContainer = styled.div`
  display: flex;
  gap: 24px;
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
      font-size: 10px;
      height: 15px;
      width: 15px;
      position: absolute;
      background: ${({ theme }) => theme.colors.details};
      color: ${({ theme }) => theme.colors.bgSemiDark};
      border-radius: 50%;
      bottom: -3px;
      z-index: 2;
      font-weight: bold;
      right: 0px;
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
  top: 23px;
  right: -90px;
  background: ${({ theme }) => theme.colors.bgSemiDark};
  width: 180px;
  height: 150px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  button {
    padding: 10px 20px;
    background: none;
    display: grid;
    place-items: center;
    min-width: 120px;
    border-radius: 4px;
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

  .arrow {
    height: 8px;
    width: 16px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
