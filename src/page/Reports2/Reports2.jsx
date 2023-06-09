import { Box } from "@mui/material";
import React from "react";
import BasketMenu from "../../component/BasketMenu/BasketMenu";
import Hammenu from "../../component/HamMenu/Hammenu";
import Footer from "../../component/Footer/Footer";
import "./Reports2.css";

function Reports2() {
  return (
    <div className="for-all">
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
      </div>

      <div className="orange-boxrep">
        <div className="orange-boxr">
          <img src="" alt="" />
        </div>
        <div className="inside-boxrep">
          <p>ارزش کل دارایی ها</p>
          <p>95,812,808</p>
        </div>
      </div>

      <div className="p-box">
        <p>گزارشات</p>
      </div>

      <div className="blue-box">
        <img src="/image/circle.svg" alt="" />
        <div className="bbox">
          <p>گزارشات مالی</p>
          <p>برای ورود به این قسمت کلیک کنید</p>
        </div>
        <div className="red-felesh">
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <div className="middle-box">
        <img src="/image/circle.svg" alt="" />
        <div className="bbox">
          <p>گزارشات سبد خرید</p>
          <p>برای ورود به این قسمت کلیک کنید</p>
        </div>
        <div className="red-felesh">
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <div className="pink-box">
        <img src="/image/circle.svg" alt="" />
        <div className="bbox">
          <p>تیکت ها</p>
          <p>برای ورود به این قسمت کلیک کنید</p>
        </div>
        <div className="red-felesh">
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reports2;
