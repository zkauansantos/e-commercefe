import {
  ArrowsLeftRight,
  MapPin,
  Percent,
  Truck,
} from 'phosphor-react';

import { flickityOptions } from '../../utils/flickityOptions';
import 'flickity/css/flickity.css';

import {
  Container,
  Content,
  View,
  Benefits,
  Carousel,
} from './styles';

export default function Hero() {
  return (
    <Container>
      <Content>
        <Carousel
          className="carousel"
          elementType="div"
          options={{ ...flickityOptions, cellAlign: 'center' }}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {Array.from({ length: 5 }).map(() => (
            <View key={Math.random()} />
          ))}
        </Carousel>

        <Benefits>
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
        </Benefits>
      </Content>
    </Container>
  );
}
