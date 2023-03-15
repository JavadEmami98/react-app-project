import React from "react";
import "./InsideFT.css";
import Footer from "../Buy/Footer";

function InsideFT() {
  return (
    <div>
      <div className="img-mali">
        <div className="m1">
          <img src="/image/mali1.svg" alt="" />
        </div>
        <div className="m2">
          <p>برداشت ( کارمزد)</p>
          <p>پنجشنبه 28 اردیبهشت 1401 18:49</p>
        </div>
        <div className="m3">
          <p>50,000 تومان</p>
          <p>درحال پردازش</p>
        </div>
      </div>
      <div className="img-mali">
        <div className="m1">
          <img src="/image/mali1.svg" alt="" />
        </div>
        <div className="m2">
          <p>برداشت ها</p>
          <p>پنجشنبه 28 اردیبهشت 1401 18:49</p>
        </div>
        <div className="m4">
          <p>100,000 تومان</p>
          <p>انجام شده</p>
        </div>
      </div>
      <div className="img-mali">
        <div className="m1">
          <img src="/image/mali1.svg" alt="" />
        </div>
        <div className="m2">
          <p>برداشت</p>
          <p>پنجشنبه 28 اردیبهشت 1401 11:05</p>
        </div>
        <div className="m5">
          <p>100,000 تومان</p>
          <p>رد شده</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InsideFT;
