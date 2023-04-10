import React from "react";
import "./Pastay.css";

function Pastay() {
  return (
    <div>
      {/* <div className="pasta-all">
        <img className="img-heart" src="/image/heart.svg" alt="" />
        <div className="pasta-img">
          <img className="imgg" src="/image/pasta.svg" alt="" />
          <p>ماکارونی مانا </p>
          <p>بسته 500 گرمی</p>
        </div>
        <div className="plus-sign">
          +
        </div>
        <div className='add'>15700</div>
      </div> */}
      <div className="pasta-all">
        <img className="img-heart" src="/image/heart.svg" alt="" />
        <div className="pasta-img">
          <img className="imgg" src="/image/pasta.svg" alt="" />
          <p>ماکارونی مانا </p>
          <p>بسته 500 گرمی</p>
        </div>
        <div className="">
          <p>+</p>
          <p>15700</p>
        </div>
      </div>
    </div>
  );
}

export default Pastay;
