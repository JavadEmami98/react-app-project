import { Box, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../component/Arrow/arrow";
import CustomButton from "../../component/CustomButton/CustomButton";
import { Link } from "react-router-dom";

function Register2() {
  return (
    <div>
      <Box>
        <Link to={"/register"}>
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
          <Typography sx={{ fontSize: "15px" }}>
            شماره موبایل خودرا جهت بازیابی رمز عبور وارد کنید
          </Typography>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: "15px",
                marginBlock: "5px",
                mt: "30px",
              }}
            >
              <label htmlFor="name">شماره موبایل</label>
              <input className="myInput" />
            </Box>
          </div>
        </Box>
        <Link to={"/register3"}>
          <CustomButton />
        </Link>
      </Box>
    </div>
  );
}

export default Register2;
