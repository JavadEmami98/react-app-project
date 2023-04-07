import React from "react";
import "./Shops.css";
import Header from "../../component/Header/Header";

function Shops() {
  return (
    <div className="all">
      <Header />
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
