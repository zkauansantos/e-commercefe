import { ContainerInformations } from './styles';

export default function Informations() {
  return (
    <ContainerInformations>
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
    </ContainerInformations>
  );
}
