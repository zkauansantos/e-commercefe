import { Link } from 'react-router-dom';
import Disclaimer from '../Disclaimer';
import MenuList from '../MenuList';
import UserBag from '../UserActions';
import SubHeader from './SubHeader';

import {
  Container, Content, MenuRoot, MenuViewPort,
} from './styles';

export default function Header() {
  return (
    <>
      <Disclaimer />
      <Container>
        <Content>
          <Link to="/">
            <h1>Logo</h1>
          </Link>

          <MenuRoot>
            <MenuList />

            <div className="view-position">
              <MenuViewPort />
            </div>
          </MenuRoot>

          <UserBag />
        </Content>
      </Container>
      <SubHeader />
    </>
  );
}
