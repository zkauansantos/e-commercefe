import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';

import { Container, Content } from './styles';

export default function Banner() {
  return (
    <Container>
      <Content>
        <img
          src="https://www.artwalk.com.br/arquivos/jordan.png?v=637366559551270000"
          alt="jordan"
        />

        <h3>Jordan Store</h3>

        <p>Fique por dentro dos lançamentos!</p>

        <Link href="/" className="button">
          <span>Ver mais</span>
          <span className="arrow">
            <ArrowRight />
          </span>
        </Link>
      </Content>
    </Container>
  );
}
