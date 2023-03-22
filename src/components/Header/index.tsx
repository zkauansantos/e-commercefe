import * as Popover from '@radix-ui/react-popover';

import { UserCircle } from 'phosphor-react';

import MenuList from '../MenuList';

import {
  Container,
  Content,
  MenuRoot,
  MenuViewPort,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Content>

        <h1>Logo</h1>

        <MenuRoot>
          <MenuList />

          <div className="view-position">
            <MenuViewPort />
          </div>
        </MenuRoot>

        <div style={{ display: 'flex', zIndex: '5', gap: 15 }}>
          <Popover.Root>
            <Popover.Trigger>
              <UserCircle size={30} />
            </Popover.Trigger>

            <Popover.Portal>

              <Popover.Content>
                <div>
                  Mundo
                </div>
              </Popover.Content>

            </Popover.Portal>
          </Popover.Root>
        </div>
      </Content>
    </Container>
  );
}
