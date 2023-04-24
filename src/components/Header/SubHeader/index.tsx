import { Storefront, ShoppingCart } from 'phosphor-react';
import { Container } from './styles';

export default function SubHeader() {
  return (
    <Container>
      <Storefront color="#00ACE6" size={20} />
      <ShoppingCart color="#00ACE6" size={20} />
      <p>Aqui você encontra a maior variedade de roupas e tênis</p>
    </Container>
  );
}
