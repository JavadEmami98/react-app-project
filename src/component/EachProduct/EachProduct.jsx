import { Box } from "@mui/material";
import React from "react";
import BasketMenu from "../BasketMenu/BasketMenu";
import Arrow from "../Arrow/arrow";
import "./EachProduct.css";


function EachProduct() {
  return (
    <div>
      <div className="each-all">
        <Box className="each-header">
          <Arrow />
          <Box className="eachheader-small">
            <Box sx={{ fontSize: "24px", color: "#101926" }}>مسئول خرید</Box>
            <Box sx={{ fontSize: "10px", color: "#101926" }}>
              هر آنچه میخواهید خرید کنید
            </Box>
          </Box>
          <BasketMenu />
        </Box>
      </div>
    </div>
  );
}

export default EachProduct;
