import { Box, Typography } from "@mui/material";
import React from "react";
import Arrow from "../Arrow/arrow";
import Code from "../Code/Code";
import CustomButton from "../CustomButton/CustomButton";

function Register() {
  return (
    <div>
      <Box>
        <Arrow></Arrow>
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
          <Typography sx={{ fontSize: "33px" }}>ثبت نام</Typography>
          <Typography sx={{ fontSize: "15px" }}>
            کد معرف خودرا وارد کنید
          </Typography>
          <Code />
          <CustomButton />
        </Box>
      </Box>
    </div>
  );
}

export default Register;
