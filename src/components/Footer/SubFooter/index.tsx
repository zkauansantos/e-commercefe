import Image from 'next/image';
import { Content, Container } from './styles';

export default function SubFooter() {
  return (
    <Container>
      <Content>
        <div className="description">
          <strong>Grupo OOOO</strong>

          <div>
            <p>
              ©? COPYRIGHT 2023 OOOO FRANQUIAS LTDA. TODOS OS DIREITOS
              RESERVADOS.
            </p>

            <p>
              As fotos aqui veiculadas, logotipo e marca são de propriedade da
              OOOO. É vetada a sua reprodução, total ou parcial, sem a expressa
              autorização.
            </p>

            <p>
              Preços e condições de pagamento exclusivos para compras realizadas
              através do site e suporte. Os estoques são limitados e os valores
              não se aplicam à nossa rede de lojas físicas podendo sofrer
              alterações sem aviso prévio. Em caso de divergência, o preço
              válido é o do carrinho.
            </p>
          </div>
        </div>

        <div className="payment-methods">
          <strong>Formas de pagamento</strong>

          <ul>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/visa.png?v=637366559847970000"
                alt=""
                width={67.42}
                height={20.52}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/hyper.png?v=637366559549400000"
                alt=""
                width={68}
                height={30}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/american-express.png?v=637366559150130000"
                alt=""
                width={68}
                height={68}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/elo.png?v=637366559432800000"
                alt=""
                width={52}
                height={52}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/logo-1.png?v=637366559558370000"
                alt=""
                width={50}
                height={36}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/pixLogoBack.png?v=637474399382630000"
                alt=""
                width={68}
                height={30}
              />
            </li>
          </ul>
        </div>

        <div className="payment-methods">
          <strong>Compra 100% segura</strong>

          <ul>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/shield-1.png?v=637366559764000000"
                alt=""
                width={68}
                height={70}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/shield-2.png?v=637366559765800000"
                alt=""
                width={68}
                height={62}
              />
            </li>
            <li>
              <Image
                src="https://www.artwalk.com.br/arquivos/shield-3.png?v=637366559767700000"
                alt=""
                width={69}
                height={69}
              />
            </li>
          </ul>
        </div>

        <p className="address">Brasília - DF, Loja Virtual</p>

        <strong className="vtex">Powered by: @zkauansantos</strong>
      </Content>
    </Container>
  );
}
