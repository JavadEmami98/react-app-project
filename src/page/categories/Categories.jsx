import React from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./Categories.css";

function Categories() {
  return (
    <div>
      <Header />
      <div className="search-c">
        <img src="/image/search.svg" alt="" />
        <input
          className="input-search"
          type="text"
          placeholder="جست و جو برای دسته بندی"
        ></input>
      </div>
      <div className="list-item">
        <div className="item">
          میوه و تره بار
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          پروتئین
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          لبنیات
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          ادویجات
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          بار سرد
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          بار گرم
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          سوپر مارکتی
          <img src="/image/felesh2.svg" alt="" />
        </div>
        <div className="item">
          غیر خوراکی
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Categories;
