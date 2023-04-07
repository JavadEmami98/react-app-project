import React from "react";
import Footer from "../Buy/Footer";
import "./Categories.css";
import BasketMenu from "../../component/BasketMenu/BasketMenu";
import Hammenu from "../../component/HamMenu/Hammenu";
import { Box } from "@mui/material";

function Categories() {
  return (
    <div>
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
      <div>
        <input
          className="input-search"
          type="text"
          placeholder="جست و جو برای دسته بندی"
        ></input>
        <img src="/image/search.svg" alt="" />
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
