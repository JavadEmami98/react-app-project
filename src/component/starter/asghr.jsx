import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../component/button";

const Starter = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          objectFit: "cover",
          zIndex: 1,
        }}
        component="img"
        src="./image/shop.svg"
      />
      <Box
        sx={{
          zIndex: 10,
          background: "rgba(0,0,0,0.93)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src="./image/basket.svg" width={81.44} height={73.28} alt="" />
        <Box sx={{ fontSize: "48px", color: "#fff" }}>مسئول خرید</Box>
        <Box sx={{ fontSize: "21px", color: "#fff" }}>
          هر آنچه میخواهید خرید کنید
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "5px",
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
        <CustomButton></CustomButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          <Box sx={{ fontSize: "14px", color: "#fff" }}>
            حساب کاربری دارید ؟
          </Box>
          <Box sx={{ fontSize: "14px", color: "#FFBB00" }}> وارد شوید</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Starter;