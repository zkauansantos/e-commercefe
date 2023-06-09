import Link from 'next/link';
import Image from 'next/image';

import { ArrowRight } from 'phosphor-react';

import { Container, Content } from './styles';

export default function Banner() {
  return (
    <Container>
      <Content>
        <Image
          src="https://www.artwalk.com.br/arquivos/jordan.png?v=637366559551270000"
          alt="jordan"
          width={43}
          height={43}
        />

        <h3>Jordan Store</h3>

        <p>Fique por dentro dos lançamentos!</p>

        <Link href="/product" className="button">
          <span>Ver mais</span>
          <span className="arrow">
            <ArrowRight />
          </span>
        </Link>
      </Content>
    </Container>
  );
}
