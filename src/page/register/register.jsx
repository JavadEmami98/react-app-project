import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../component/CustomButton/CustomButton";
import Code from "../../component/Code/Code";
import Arrow from "../../component/Arrow/arrow";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Box>
        <Link to={"/register1"}>
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
          <Typography sx={{ fontSize: "33px" }}>ثبت نام</Typography>
          <Typography sx={{ fontSize: "15px", color: "#7d7d7d" }}>
            کد معرف خود را وارد کنید
          </Typography>
          <Code />
          <Link to={"/register2"}>
            <CustomButton />
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Register;
