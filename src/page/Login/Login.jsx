import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../component/Arrow/arrow";
import Inputs from "./logininput";

function Login() {
  return (
    <div>
      <Box>
        <Arrow />{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            marginTop: "95px",
            padding: "33px",
          }}
        >
          <Typography sx={{ fontSize: "35px" }}>ورود</Typography>
          <Typography sx={{ fontSize: "15px" }}>
            نام کاربری و رمز عبور خودرا وارد نمایید
          </Typography>
          <Inputs />
        </Box>
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
              fontSize: "15px",
              width: "323px",
              height: "57px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              color: "white",
              backgroundColor: "black",
              px: 9,
            }}
          >
            ورود با اثر انگشت
            <img src="/image/fingerprint.svg" alt="" />
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
