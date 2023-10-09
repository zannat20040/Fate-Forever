import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css";
import '../../Custom css/style.css'
import { EffectCards } from "swiper/modules";

const Slider = () => {
  const images = [
    {
      img: "https://i.ibb.co/3r9ZvbQ/113210-themomentmonks-295557523-144652934646724-3571924500731059762-n.jpg",
    },
    
   
    {
      img: "https://i.ibb.co/ZT9PhBq/244042699-585003499588711-2975364875300523118-n-700x480.jpg",
    },
    {
      img: "https://i.ibb.co/frDfXC7/Destination-Wedding.jpg",
    },
    {
      img: "https://i.ibb.co/rtnPsdK/file-1631203102798-15-314215-163120310364457.jpg",
    },
    {
      img: "https://i.ibb.co/3fHYnQ7/Indian-Destination-Wedding-Jennifer-and-Neal-Moon-Palace-Cancun-27.jpg",
    },
    {
      img: "https://i.ibb.co/2spgJ6M/Kerala-dfdsdsf.jpg",
    },
    {
      img: "https://i.ibb.co/gMqv6tJ/mexico-wedding-packages.jpg",
    },
    {
      img: "https://i.ibb.co/Wx97MDT/RAH-5126-scaled.jpg",
    },
    {
      img: "https://i.ibb.co/318S1Gb/22774-casa-malca-fine-art-studio-3.jpg",
    },
    {
      img: "https://i.ibb.co/nnzNcyN/48493-pakistani-wedding-dresses-sabyasachi-lead.jpg",
    },
    {
      img: "https://i.ibb.co/hZbtsWh/103587-weddingnama3.jpg",
    },
  ];
  return (
    <>
      <Swiper data-aos='fade-down'
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image,index) => (
          <SwiperSlide key={index}>
            <img src={image.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
