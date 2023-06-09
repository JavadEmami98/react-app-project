import { Box } from "@mui/system";
import React from "react";
import RandomTab from "../../component/RandomTab/RandomTab";
import SwiperBestCoffee from "../../component/SwiperBest/SwiperBest";
import CustomTab from "../../component/Tab/Tab";
import BackgroundSwiper from "./BackgroundSwiper";
import Swiperyellow from "./Swiperyellow";
import Header from "../../component/Header/Header";
import "./Buy.css";

function Buy() {
  return (
    <div className="all">
      <Header />
      <Box className="under-header">
        <div className="right">
          <p>مهدی پوررستمی</p>
          <img src="/image/felesh.svg" alt="" />
        </div>
        <div className="left">
          <img src="/image/diamond.svg" alt="" />
          <p>234</p>
        </div>
      </Box>
      <div className="pic">
        <img src="/image/barande.svg" alt="" />
      </div>
      <div className="small-pics">
        <div className="pics-4">
          <img src="/image/nan.svg" alt="" />
          <p>نان و غلات</p>
        </div>
        <div className="pics-4">
          <img src="/image/supermarket.svg" alt="" />
          <p>سوپرمارکت</p>
        </div>
        <div className="pics-4">
          <img src="/image/cake.svg" alt="" />
          <p>کیک و دسر</p>
        </div>
        <div className="pics-4">
          <img src="/image/apple.svg" alt="" />
          <p>میوه وسبزیجات</p>
        </div>
      </div>
      <div className="best-products">
        <div className="b-products">محصولات برتر</div>
      </div>
      <CustomTab />
      <div className="yellow">
        <Swiperyellow />
      </div>
      <BackgroundSwiper />
      <div className="best-products">
        <div className="c-products">محصولات رندوم</div>
      </div>
      <RandomTab />
      <div className="best-products">
        <div className="d-products">فروشگاه های برتر</div>
      </div>
      <SwiperBestCoffee />
    </div>
  );
}

export default Buy;
