import React from "react";
import "./Pasta.css";

function Pasta() {
  return (
    <div>
      <div className="pasta-all">
        <div className="pasta-header"> 
          {/* <p>-10.5%</p> */}
          <img className="img-heart" src="/image/heart.svg" alt="" />
        </div>
        {/* <div className="offer">-10.5%</div>
        <img className="img-heart" src="/image/heart.svg" alt="" /> */}
        <div className="pasta-img">
          <img className="imgg" src="/image/pasta.svg" alt="" />
          <p>ماکارونی مانا </p>
          <p>بسته 500 گرمی</p>
        </div>
        {/* <div className="plus-sign">
          +
        </div> */}
        <div className="plus-price">
          <p>+</p>
          <p>15700</p>
        </div>
      </div>
    </div>
  );
}

export default Pasta;
