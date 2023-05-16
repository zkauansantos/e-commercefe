import { flickityOptions } from '../../utils/flickityOptions';

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
          options={{ ...flickityOptions, cellAlign: 'center', pageDots: true }}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {Array.from({ length: 3 }).map(() => (
            <View key={Math.random()} />
          ))}
        </Carousel>

        <Benefits />
      </Content>
    </Container>
  );
}
