/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { FacebookLogo, InstagramLogo } from 'phosphor-react';

import Benefits from '@/components/Benefits';
import ProductWidget from '@/components/ProductWidget';
import CalcShipping from '@/components/CalcShipping';
import Highlights from '@/components/Highlights';
import DescriptionProduct from '@/components/DescriptionProduct';
import TenisCarouselGallery from '@/components/TenisCarouselGallery';

import {
  Container,
  ContainerDescriptionProduct,
  Content,
  ShareContainer,
  Wrapper,
} from '../../styles/pages/Product';

export default function Product() {
  function shareWithFriends(url: string) {
    window.open(url, '_blank', 'width=700,height=500');
  }

  return (
    <>
      <Head>
        <title>E-commerce | Produto </title>
      </Head>

      <Container as="main">
        <Content>
          <Benefits />

          <Wrapper>
            <TenisCarouselGallery />
            <ProductWidget />
          </Wrapper>

          <CalcShipping />
        </Content>
      </Container>

      <Highlights visibleMostPurchased={false} titleCarousel="Você também vai gostar" />

      <ContainerDescriptionProduct>
        <DescriptionProduct />

        <ShareContainer>
          <div>
            <strong>Compartilhe com seus amigos</strong>

            <div className="share">
              <button
                type="button"
                onClick={() => {
                  shareWithFriends('https://www.facebook.com/sharer.php?u=https://www.google.com.br');
                }}
              >
                <FacebookLogo size={48} />
              </button>

              <button
                type="button"
                onClick={() => {
                  shareWithFriends('https://www.instagram.com/?url=https://www.google.com.br');
                }}
              >
                <InstagramLogo size={48} />
              </button>
            </div>
          </div>
        </ShareContainer>
      </ContainerDescriptionProduct>
    </>
  );
}
