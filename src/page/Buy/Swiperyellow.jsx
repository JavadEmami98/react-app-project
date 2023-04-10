import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Pasta from "../../component/Pasta/Pasta";


export default function Swiperyellow() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Pasta/></SwiperSlide>
        <SwiperSlide><Pasta/></SwiperSlide>
        <SwiperSlide><Pasta/></SwiperSlide>
      </Swiper>
    </>
  );
}