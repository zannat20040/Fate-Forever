import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css';
import '../Custom css/style.css';
import { EffectCards } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://i.ibb.co/Y0qgMN5/white-bridal-wear.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/jGX08rg/15.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/0cgvDgq/e9cf8a7e1015662e1f9dd2474d39649d-medium.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/SNBYJXv/img51.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;