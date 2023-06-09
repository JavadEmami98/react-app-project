import { Box, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../component/Arrow/arrow";
import CustomButton from "../../component/CustomButton/CustomButton";
import InputNum from "../../component/Input/Input";
import { Link } from "react-router-dom";

function Register3() {
  return (
    <div>
      <Box>
        <Link to={"/register2"}>
          <Arrow />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            marginTop: "55px",
            padding: "33px",
          }}
        >
          <Typography sx={{ fontSize: "33px" }}>بازیابی رمز عبور</Typography>
          <Typography sx={{ fontSize: "15px", color: "#7d7d7d" }}>
            شماره موبایل خودرا جهت بازیابی رمز عبور وارد کنید
          </Typography>
          <InputNum />
        </Box>
        <Link to={"/login"}>
          <CustomButton />
        </Link>
      </Box>
    </div>
  );
}

export default Register3;
