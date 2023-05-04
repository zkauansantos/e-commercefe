import * as Popover from '@radix-ui/react-popover';

import { UserCircle, ShoppingBagOpen } from 'phosphor-react';

import Link from 'next/link';
import {
  PopoverContent,
  UserBagContainer,
  UserLoginPopover,
  UserTrigger,
} from './styles';

export default function UserActions() {
  return (
    <UserBagContainer>
      <Popover.Root>
        <UserTrigger asChild>
          <button type="button">
            <UserCircle size={35} />
          </button>
        </UserTrigger>

        <Popover.Portal>
          <PopoverContent>
            <UserLoginPopover>
              <Link href="/singin/login">
                <button type="button"> Entrar</button>
              </Link>
              <Link href="/singin/register">
                <button type="button"> Cadastre-se</button>
              </Link>
            </UserLoginPopover>

            <Popover.Arrow className="arrow" />
          </PopoverContent>
        </Popover.Portal>
      </Popover.Root>

      <div className="bag">
        <ShoppingBagOpen size={35} />
        <span className="counter">10</span>
      </div>
    </UserBagContainer>
  );
}
