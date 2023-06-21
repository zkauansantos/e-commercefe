import Head from 'next/head';

import Banner from '@/components/Banner';
import ExploreCategories from '@/components/ExploreCategories';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
      </Head>
      <Hero />
      <Highlights visibleMostPurchased titleCarousel="Destaques da Semana" />
      <ExploreCategories />
      <Banner />
      <BrandsCarousel />
      <Footer />
    </>
  );
}
