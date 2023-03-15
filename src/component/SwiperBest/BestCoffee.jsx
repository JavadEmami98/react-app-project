import React from "react";
import "./BestCoffee.css";

function BestCoffee() {
  return (
    <div>
      <div className="two-pics">
        <img src="/image/coffee.svg" alt="" />
        <div className="inside-coffee">
          <p>فروشگاه قهوه ایکس</p>
          <p>قهوه ایکس ، نسکافه ایکس ، مواد ایکس</p>
        </div>
        <div className="small-coffee">
          <img src="/image/coffee2.svg" alt="" />
        </div>
        <div className="text-left">
          <p>فروشگاه دارای جشنواره فعال</p>
        </div>
      </div>
    </div>
  );
}

export default BestCoffee;
