import Benefits from '../../components/Benefits';

import { Container, Content, Wrapper } from './styles';

import ProductWidget from '../../components/ProductWidget';
import CalcShipping from '../../components/CalcShipping';

export default function Product() {
  return (
    <Container as="main">
      <Content>
        <Benefits />

        <Wrapper>
          <div className="container-image">
            <div className="img" />
          </div>

          <ProductWidget />
        </Wrapper>

        <CalcShipping />
      </Content>
    </Container>
  );
}
