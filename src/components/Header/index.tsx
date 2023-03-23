import MenuList from '../MenuList';
import UserBag from '../UserBag';

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

        <UserBag />
      </Content>
    </Container>
  );
}
