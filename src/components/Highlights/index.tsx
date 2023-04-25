/* eslint-disable react/no-array-index-key */
import { flickityOptions } from '../../utils/flickityOptions';

import {
  Container,
  Content,
  ContainerHighlights,
  Carousel,
  Card,
  ContainerMostPurchased,
} from './styles';

export default function Highlights() {
  return (
    <Container>
      <Content>
        <ContainerHighlights>
          <h3>Destaques da semana</h3>

          <Carousel
            elementType="div"
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {Array.from({ length: 15 }).map((q, i) => (
              <Card key={i}>
                <div className="card">
                  <div>
                    <img
                      src="https://artwalk.vteximg.com.br/arquivos/ids/367084-218-218/L0019-6-721-1.jpg?v=638152755550570000"
                      alt=""
                    />
                  </div>

                  <p>Tênis fila x bolovo 88</p>

                  <div>
                    <span>R$ 599,99</span>
                    <strong>10 x R$ 59,99</strong>
                  </div>

                  <div className="button">
                    <button type="button">Quero!</button>
                  </div>
                </div>
              </Card>
            ))}
          </Carousel>
        </ContainerHighlights>

        <ContainerMostPurchased>
          <h3>Mais comprados</h3>

          <div className="list">
            {Array.from({ length: 4 }).map((q, i) => (
              <Card key={i}>
                <div className="card">
                  <div>
                    <img
                      src="https://artwalk.vteximg.com.br/arquivos/ids/367084-218-218/L0019-6-721-1.jpg?v=638152755550570000"
                      alt=""
                    />
                  </div>

                  <p>Tênis fila x bolovo 88</p>

                  <div>
                    <span>R$ 599,99</span>
                    <strong>10 x R$ 59,99</strong>
                  </div>

                  <div className="button">
                    <button type="button">Quero!</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ContainerMostPurchased>
      </Content>
    </Container>
  );
}
