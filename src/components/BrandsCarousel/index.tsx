import Image from 'next/image';
import { flickityOptions } from '../../utils/flickityOptions';
import {
  Brand, Carousel, Container, Content,
} from './styles';

export default function BrandsCarousel() {
  return (
    <Container>
      <Content>
        <h3>Escolha sua marca</h3>

        <Carousel
          elementType="div"
          options={{ ...flickityOptions, pageDots: true, groupCells: 4 }}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {Array.from({ length: 10 }).map(() => (
            <Brand key={Math.random()}>
              <Image
                src="https://www.artwalk.com.br/arquivos/logo-marcas-carrossel-adidas.png?v=637466770171800000"
                alt="adidas"
                width={56}
                height={58}
              />
            </Brand>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}
