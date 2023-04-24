import { Storefront, ShoppingCart } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function SubHeader() {
  const { pathname } = useLocation();

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <Container>
      <Storefront color="#00ACE6" size={20} />
      <ShoppingCart color="#00ACE6" size={20} />
      <p>Aqui você encontra a maior variedade de roupas e tênis</p>
    </Container>
  );
}
