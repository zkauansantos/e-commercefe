import Head from 'next/head';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ExploreCategories from '../components/ExploreCategories';
import Banner from '../components/Banner';
import BrandsCarousel from '../components/BrandsCarousel';

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
    </>
  );
}
