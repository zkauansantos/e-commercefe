import { flickityOptions } from '../../utils/flickityOptions';
import 'flickity/css/flickity.css';

import Benefits from '../Benefits';

import {
  Container,
  Content,
  View,
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

        <Benefits />
      </Content>
    </Container>
  );
}
