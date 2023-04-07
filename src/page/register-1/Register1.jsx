import React from "react";
import "./Register.css";
import Arrow from "../../component/Arrow/arrow";
import { Box, Typography, Button } from "@mui/material";

function Register1() {
  return (
    <div>
      <Arrow />
      <Box
        sx={{
          mt: "70px",
          mr: "25px",
        }}
      >
        <Typography sx={{ fontSize: "33px" }}>ثبت نام</Typography>
        <Typography sx={{ fontSize: "15px" }}>
          اطلاعات خودرا جهت ثبت نام وارد نمایید
        </Typography>
      </Box>
      <Box>
        <form className="input-list">
          <label>شماره موبایل</label>
          <input type="text" />
          <label>رمز عبور </label>
          <input type="text" />
          <label>تکرار رمز عبور</label>
          <input type="text" />
          <label>استان </label>
          <input type="text" />
          <label>شهر </label>
          <input type="text" />
        </form>
      </Box>
      <div className="map">
        <img src="/image/map.svg" alt="" />
      </div>
      <Box
        sx={{
          position: "fixed",
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
            width: "323px",
            height: "51px",
            color: "white",
            backgroundColor: "black", 
            "&:hover": {
              background: "#8a7777",
            },
          }}
        >
          ثبت نام
        </Button>
      </Box>
    </div>
  );
}

export default Register1;
