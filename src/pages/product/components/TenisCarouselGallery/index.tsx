import { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';
import { flickityOptions } from '@/utils/flickityOptions';
import { Container } from './styles';

export default function TenisCarouselGallery() {
  const [flickityLoaded, setFlickityLoaded] = useState(false);

  useEffect(() => {
    import('flickity-as-nav-for/as-nav-for').then(() => {
      setFlickityLoaded(true);
    });
  }, []);

  if (!flickityLoaded) {
    return null;
  }
  return (
    <Container>
      <Flickity
        className="gallery gallery-a js-flickity"
        elementType="div"
        disableImagesLoaded={false}
        reloadOnUpdate
        options={{
          ...flickityOptions, pageDots: true, cellAlign: 'center', prevNextButtons: false,
        }}
        static
      >
        {Array.from({ length: 5 }).map(() => (
          <div className="img" key={Math.random()} />
        ))}
      </Flickity>

      <Flickity
        className="gallery gallery-b js-flickity"
        options={{
          cellAlign: 'center',
          prevNextButtons: false,
          asNavFor: '.gallery-a',
          contain: true,
          pageDots: false,
        }}
      >
        {Array.from({ length: 5 }).map(() => (
          <div className="imagenzinha" key={Math.random()} />
        ))}
      </Flickity>
    </Container>
  );
}
