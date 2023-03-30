import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import ExploreCategories from '../../components/ExploreCategories';
import Banner from '../../components/Banner';
import BrandsCarousel from '../../components/BrandsCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <ExploreCategories />
      <Banner />
      <BrandsCarousel />
    </>
  );
}
