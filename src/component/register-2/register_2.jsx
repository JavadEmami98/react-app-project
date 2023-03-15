import { Box, Typography } from "@mui/material";
import React from "react";
import Arrow from "../Arrow/arrow";
import Code from "../Code/Code";
import CustomButton from "../CustomButton/CustomButton";

function Register2() {
  return (
    <div>
      <Box>
        <CustomButton />
        <Arrow />
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
          <Typography sx={{ fontSize: "15px" }}>شماره موبایل خودرا جهت بازیابی رمز عبور وارد کنید</Typography>
          <Code />
        </Box>
      </Box>
    </div>
  );
}

export default Register2;