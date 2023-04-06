import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import InBack from "./InBack";


export default function BackgroundSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><InBack/></SwiperSlide>
        <SwiperSlide><InBack/></SwiperSlide>
        <SwiperSlide><InBack/></SwiperSlide>
        <SwiperSlide><InBack/></SwiperSlide>
      </Swiper>
    </>
  );
}