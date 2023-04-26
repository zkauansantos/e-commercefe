import {
  ArrowsLeftRight,
  MapPin,
  Percent,
  Truck,
} from 'phosphor-react';
import { Container } from './styles';

export default function Benefits() {
  return (
    <Container>
      <div>
        <MapPin />
        <p>
          Compre no site e <span>retire na loja</span>
        </p>
      </div>
      <div>
        <Truck />
        <p>
          <span>Frete grátis</span> confira as regras
        </p>
      </div>
      <div>
        <ArrowsLeftRight />
        <p>
          <span>Até 30 dias</span> pra solicitar sua troca
        </p>
      </div>
      <div>
        <Percent />
        <p>
          <span>Ganhe 5% de desconto</span> no pix
        </p>
      </div>
    </Container>
  );
}
