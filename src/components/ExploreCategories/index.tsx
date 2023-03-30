import { ArrowRight } from 'phosphor-react';
import {
  Category, CategoryGroupContainer, Container, Content,
} from './styles';

export default function ExploreCategories() {
  return (
    <Container>
      <Content>
        <div className="title"><h3>O que você está buscando ?</h3></div>

        <CategoryGroupContainer justify="space-around">
          <Category width="450px" bg="https://www.artwalk.com.br/arquivos/O_que_voc%C3%AA_esta_buscando_tenis.jpg">
            <div className="title-arrow">
              <b>Sneakers</b>
              <ArrowRight />
            </div>
          </Category>

          <Category width="350px" bg="https://www.artwalk.com.br/arquivos/O_que_voc%C3%AA_esta_buscando_roupa.jpg">
            <div className="title-arrow">
              <b>Roupas</b>
              <ArrowRight />
            </div>
          </Category>
        </CategoryGroupContainer>

        <CategoryGroupContainer justify="space-evenly">
          <Category width="290px" bg="https://www.artwalk.com.br/arquivos/O_que_voc%C3%AA_esta_buscando_acessorios.jpg">
            <div className="title-arrow">
              <b>Acessórios</b>
              <ArrowRight />
            </div>
          </Category>
          <Category width="450px" bg="https://www.artwalk.com.br/arquivos/O_que_voc%C3%AA_esta_buscando_outlet.jpg">
            <div className="title-arrow">
              <b>Outlet</b>
              <ArrowRight />
            </div>
          </Category>
        </CategoryGroupContainer>
      </Content>
    </Container>
  );
}
