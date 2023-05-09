import { ShoppingBagOpen, Truck } from 'phosphor-react';

import Sizes from './components/Sizes';

import { Container } from './styles';
import Informations from './components/Informations';

export default function ProductWidget() {
  return (
    <Container>
      <Informations />

      <div className="colors-product">
        <span>
          ESCOLHA A <strong>COR DESEJADA</strong>
        </span>

        <div className="p-view" />
      </div>

      <Sizes />

      <button type="button">
        <span>Comprar</span> <ShoppingBagOpen size={28} />
      </button>

      <div className="benefits">
        <div>
          <Truck size={28} />
          <strong>FRETE GRATÍS</strong>
        </div>
        <div>
          <ShoppingBagOpen size={28} />
          <span>
            COMPRA <strong>100% SEGURA</strong>
          </span>
        </div>
      </div>
    </Container>
  );
}
