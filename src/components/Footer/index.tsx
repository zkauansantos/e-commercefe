import { FacebookLogo, InstagramLogo } from 'phosphor-react';
import { FooterContainer, Content } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <h1>LOGO\/\/</h1>

        <div className="container">
          <div className="flex">
            <div className="category">
              <strong>Tênis</strong>
              <ul>
                <li>NOVIDADES</li>
                <li>CALENDÁRIOS SNKRS</li>
                <li>BASQUETE</li>
                <li>CASUAL</li>
              </ul>
            </div>
            <div className="category">
              <strong>Coleções especiais</strong>
              <ul>
                <li> adidas Nite Jogger</li>
                <li> adidas NMD</li>
                <li> adidas Superstar</li>
                <li> Nike Air Force</li>
                <li> Nike Air Jordan</li>
                <li> Nike Air Max 90</li>
                <li> Nike Air Max 97</li>
                <li> Vans Authentic</li>
                <li> Vans Old School</li>
                <li> Vans Ultrarange</li>
                <li> Catálogo de Produtos</li>
              </ul>
            </div>
            <div className="category">
              <strong>Masculino</strong>
              <ul>
                <li>Novidades</li>
                <li>Sneakers</li>
                <li>Sneakers Nike</li>
                <li>Sneakers Adidas</li>
                <li>Sneakers Puma</li>
                <li>Roupas</li>
                <li>Acessórios</li>
                <li>Outlet</li>
              </ul>
            </div>
            <div className="category">
              <strong>Feminino</strong>
              <ul>
                <li>Novidades</li>
                <li>Sneakers</li>
                <li>Sneakers Nike</li>
                <li>Sneakers Adidas</li>
                <li>Sneakers Puma</li>
                <li>Roupas</li>
                <li>Acessórios</li>
                <li>Outlet</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="aside">
              <div className="category">
                <strong>Institucional</strong>
                <ul>
                  <li>Quem somos?</li>
                  <li>Trabalhe Conosco</li>
                  <li>Seja um franqueado</li>
                  <li>Nossas Lojas</li>
                  <li>Termos de uso</li>
                  <li>Política de privacidade</li>
                  <li>Regulamento CRM</li>
                  <li>Regulamento Cupom</li>
                </ul>
              </div>
              <div className="category">
                <strong>Ajuda</strong>
                <ul>
                  <li>Central de Relacionamento</li>
                  <li>Tipos de entrega</li>
                  <li>Solicite seus dados</li>
                  <li>Solicite sua troca/Devolução</li>
                </ul>
              </div>
            </div>

            <div className="social-links">
              <strong>Fique Ligado!</strong>

              <div>
                <InstagramLogo />
                <FacebookLogo />
              </div>
            </div>
          </aside>
        </div>
      </Content>
    </FooterContainer>
  );
}
