import React from "react";
import "./BasketMenu.css";
import { Box, Button } from "@mui/material";

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
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          right: 0,
          width: "100%",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: "17px",
            width: "240px",
            height: "47px",
            color: "white",
            backgroundColor: "var(--primary-color)",
            "&:hover": {
              background: "#d79d44",
            },
          }}
        >
          تایید
        </Button>
      </Box>
    </div>
  );
}

export default BasketBar;
