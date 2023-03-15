import React from "react";
import "./BasketMenu.css";

function BasketBar() {
  return (
    <div>
      <div className="title">
        <header>سبد خرید تاریخ فلان</header>
        <img src="/image/zarbdar.svg" alt="" />
      </div>
      <div className="product">
        <img src="/image/pasta.svg" alt="" />
        <div className="product-detail">
          <p>
            ماکارونی 500 گرمی مانا <br />
            مدل لوله ای دارای فیبر
          </p>
          <div className="toolbox">
            <button id="decrease">-</button>
            <span id="size">0</span>
            <button id="increase">+</button>
          </div>
        </div>
        <div>
          <p>#1234</p>
          <p>نام شرکت</p>
        </div>
      </div>
    </div>
  );
}

export default BasketBar;
