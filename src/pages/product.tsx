/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';

import * as Tabs from '@radix-ui/react-tabs';

import { FacebookLogo, InstagramLogo } from 'phosphor-react';

import Benefits from '@/components/Benefits';
import ProductWidget from '@/components/ProductWidget';
import CalcShipping from '@/components/CalcShipping';
import Highlights from '@/components/Highlights';

import {
  Container,
  ContainerDescriptionProduct,
  Content,
  ContentDescription,
  ShareContainer,
  Wrapper,
} from '../styles/pages/Product';

export default function Product() {
  return (
    <>
      <Head>
        <title>E-commerce | Produto </title>
      </Head>

      <Container as="main">
        <Content>
          <Benefits />

          <Wrapper>
            <div className="container-image">
              <div className="img" />
            </div>

            <ProductWidget />
          </Wrapper>

          <CalcShipping />
        </Content>
      </Container>
      <Highlights visibleMostPurchased={false} titleCarousel="Você também vai gostar" />
      <ContainerDescriptionProduct>

        <ContentDescription>
          <Tabs.Root className="TabsRoot" defaultValue="tab1">

            <Tabs.List className="TabsList">
              <Tabs.Trigger className="TabsTrigger" value="tab1">
                Descrição
              </Tabs.Trigger>

              <Tabs.Trigger className="TabsTrigger" value="tab2">
                Avaliações
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent" value="tab1">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere, eveniet necessitatibus odit, sapiente maiores,
                voluptatem deleniti asperiores nesciunt mollitia blanditiis
                modi aspernatur adipisci cum illum corporis earum. Neque, voluptas expedita.
              </p>
            </Tabs.Content>

            <Tabs.Content className="TabsContent" value="tab2">
              <div>
                <strong>Opniões dos consumidores</strong>
                <p>Tem esse produto? Seja o primeiro a avaliá-lo</p>
                <span> * * * * * ( Avalie )</span>
              </div>

              <div>
                <strong>Duvida dos consumidores</strong>
                <p>
                  Tem alguma duvida sobre esse produto? Pergunte ao lojista e a outros compradores!
                </p>
                <textarea name="" id="" cols={30} rows={10} />
                <button type="button">Enviar pergunta</button>
              </div>

            </Tabs.Content>
          </Tabs.Root>
        </ContentDescription>

        <ShareContainer>
          <div>
            <strong>Compartilhe com seus amigos</strong>

            <span>
              <FacebookLogo size={48} />
              <InstagramLogo size={48} />
            </span>
          </div>
        </ShareContainer>
      </ContainerDescriptionProduct>
    </>
  );
}
