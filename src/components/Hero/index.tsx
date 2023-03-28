import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import {
  MapPin,
  Truck,
  ArrowsLeftRight,
  Percent,
} from 'phosphor-react';

import {
  Container,
  Content,
  View,
  Swiper,
  Benefits,
} from './styles';

export default function Hero() {
  return (
    <Container>
      <Content>
        <Swiper
          mousewheel={{ releaseOnEdges: true }}
          freeMode
          navigation
          pagination={{ clickable: true }}
          grabCursor
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <View />
          </SwiperSlide>
          <SwiperSlide>
            <View />
          </SwiperSlide>
          <SwiperSlide>
            <View />
          </SwiperSlide>
        </Swiper>

        <Benefits>
          <div>
            <MapPin color="#00ACE6" size={20} />
            <p>Compre no site e <span>retire na loja</span></p>
          </div>
          <div>
            <Truck color="#00ACE6" size={20} />
            <p><span>Frete grátis</span> confira as regras</p>
          </div>
          <div>
            <ArrowsLeftRight color="#00ACE6" size={20} />
            <p><span>Até 30 dias</span> pra solicitar sua troca</p>
          </div>
          <div>
            <Percent color="#00ACE6" size={20} />
            <p><span>Ganhe 5% de desconto</span> no pix</p>
          </div>
        </Benefits>
      </Content>
    </Container>
  );
}
