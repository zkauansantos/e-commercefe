import Head from 'next/head';

import Highlights from '@/components/Highlights';
import Footer from '@/components/Footer';
import BrandsCarousel from './components/BrandsCarousel';
import Hero from './components/Hero';
import Banner from './components/Banner';
import ExploreCategories from './components/ExploreCategories';

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
