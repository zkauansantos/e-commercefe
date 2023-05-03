import {
  CoatHanger,
  Ruler,
  ShoppingBagOpen,
  Truck,
} from 'phosphor-react';
import { Container } from './styles';

export default function ProductWidget() {
  return (
    <Container>
      <div className="product-information">
        <strong>PUMA</strong>
        <span>TÊNIS PUMA MB.02 IRIDESCENT MASCULINO</span>

        <div className="avaliation">
          * * * * * (Avalie agora!)
        </div>
      </div>

      <div className="price">
        <span>R$ 1.099,99</span>

        <div>
          <span>EM ATÉ</span>
          <strong>10X <span>DE</span> R$ 109,99</strong>
        </div>
      </div>

      <div className="colors-product">
        <span>ESCOLHA A <strong>COR DESEJADA</strong></span>

        <div className="p-view" />
      </div>

      <div className="sizes">
        <span>ESCOLHA O <strong>TAMANHO</strong></span>

        <div className="wrapper">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={Math.random()} className="size">
              <span>{34 + i}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="find-you-size">
        <div><CoatHanger size={24} /><span>Descubra seu tamanho</span></div>
        <div><Ruler size={24} /><span>Tabela de medidas</span></div>
      </div>

      <button type="button">
        <span>Comprar</span> <ShoppingBagOpen size={28} />
      </button>

      <div className="benefits">
        <div><Truck size={28} /><strong>FRETE GRATÍS</strong></div>
        <div><ShoppingBagOpen size={28} />
          <span>COMPRA <strong>100% SEGURA</strong></span>
        </div>
      </div>
    </Container>
  );
}
