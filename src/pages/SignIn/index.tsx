import { Link } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';
import { Container, ContainerForm, Wrapper } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Wrapper>
        <ContainerForm>
          <h1>Entrar</h1>

          <input type="email" name="" id="i" placeholder="E-mail" />

          <input type="password" name="" id="i" placeholder="Senha" />

          <div>
            <button type="button">Login</button>
            <button type="button">
              <GoogleLogo size={22} />
              Entrar com Google
            </button>

            <button type="button">
              <FacebookLogo size={22} />
              Entrar com Facebook
            </button>
          </div>

          <span>
            Não tem login ? <Link to="/register">Cadastre-se</Link>
          </span>
        </ContainerForm>
      </Wrapper>
    </Container>
  );
}
