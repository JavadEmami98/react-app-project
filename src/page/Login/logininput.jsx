import React from "react";
import { Box } from "@mui/system";
import "./login.css";

function Inputs() {
  return (
    <div>
      <Box sx={{position: "relative"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "15px",
            marginBlock: "5px",
            marginTop: "20px",
            color: "#7d7d7d",
          }}
        >
          <label htmlFor="name">نام کاربری یا آدرس ایمیل</label>
          <input className="login" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "15px",
            marginBlock: "5px",
            marginTop: "20px",
            color: "#7d7d7d",
          }}
        >
          <label htmlFor="name">رمز عبور</label>
          <input className="login" />
          <Box
            sx={{
              fontSize: "12px",
              color: "#0088FF",
              position: "absolute",
              top: "170px",
              right: "154px",
            }}
          >
            رمز عبورخود را فراموش کرده اید ؟
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Inputs;
