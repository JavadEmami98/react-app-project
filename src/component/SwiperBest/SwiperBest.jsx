// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import BestCoffee from "./BestCoffee";

export default function SwiperBestCoffee() {
  return (
    <>
      <Swiper
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><BestCoffee/></SwiperSlide>
        <SwiperSlide><BestCoffee/></SwiperSlide>
        <SwiperSlide><BestCoffee/></SwiperSlide>
        <SwiperSlide><BestCoffee/></SwiperSlide>
      </Swiper>
    </>
  );
}
