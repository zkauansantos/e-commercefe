import Link from 'next/link';

import Disclaimer from '../Disclaimer';
import UserActions from '../UserActions';
import SubHeader from './SubHeader';

import {
  Container, Content, MenuRoot, MenuViewPort,
} from './styles';
import MenuList from './MenuList';

export default function Header() {
  return (
    <>
      <Disclaimer />
      <Container>
        <Content>
          <Link href="/">
            <h1>Logo</h1>
          </Link>

          <MenuRoot>
            <MenuList />

            <div className="view-position">
              <MenuViewPort />
            </div>
          </MenuRoot>

          <UserActions />
        </Content>
      </Container>
      <SubHeader />
    </>
  );
}
