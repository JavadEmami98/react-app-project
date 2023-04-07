import { Box } from "@mui/material";
import React from "react";
import BasketMenu from "../../component/BasketMenu/BasketMenu";
import Hammenu from "../../component/HamMenu/Hammenu";
import "./Shops.css";

function Shops() {
  return (
    <div className="all">
      <Box className="header">
        <Hammenu />
        <Box className="header-small">
          <Box sx={{ fontSize: "24px", color: "#101926" }}>مسئول خرید</Box>
          <Box sx={{ fontSize: "10px", color: "#101926" }}>
            هر آنچه میخواهید خرید کنید
          </Box>
        </Box>
        <BasketMenu />
      </Box>

      <div className="header-1">
        <div className="small-header1">
          <img src="/image/filter.svg" alt="" />
          <p>مشاهده فیلتر ها</p>
        </div>
        <div className="small-header1">
          <img src="/image/zarebin.svg" alt="" />
          <p>فروشگاه</p>
        </div>
      </div>
      <div className="two-pics">
        <img src="/image/coffee.svg" alt="" />
        <div className="inside-coffee">
          <p>فروشگاه قهوه ایکس</p>
          <p>قهوه ایکس ، نسکافه ایکس ، مواد ایکس</p>
        </div>
        <div className="small-coffee">
          <img src="/image/coffee2.svg" alt="" />
        </div>
        <div className="btn">
          <button type="submit">ثبت سفارش</button>
        </div>
        <div className="text-left">
          <p>فروشگاه دارای جشنواره فعال</p>
        </div>
      </div>
      <div className="two-pics">
        <img src="/image/coffee.svg" alt="" />
        <div className="inside-coffee">
          <p>فروشگاه قهوه ایکس</p>
          <p>قهوه ایکس ، نسکافه ایکس ، مواد ایکس</p>
        </div>
        <div className="small-coffee">
          <img src="/image/coffee2.svg" alt="" />
        </div>
        <div className="btn">
          <button type="submit">ثبت سفارش</button>
        </div>
        <div className="text-left">
          <p>فروشگاه دارای جشنواره فعال</p>
        </div>
      </div>
      <div className="two-pics">
        <img src="/image/coffee.svg" alt="" />
        <div className="inside-coffee">
          <p>فروشگاه قهوه ایکس</p>
          <p>قهوه ایکس ، نسکافه ایکس ، مواد ایکس</p>
        </div>
        <div className="small-coffee">
          <img src="/image/coffee2.svg" alt="" />
        </div>
        <div className="btn">
          <button type="submit">ثبت سفارش</button>
        </div>
        <div className="text-left">
          <p>فروشگاه دارای جشنواره فعال</p>
        </div>
      </div>
    </div>
  );
}

export default Shops;
