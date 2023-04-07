import React from "react";
import { Box } from "@mui/system";
import './login.css';

function Inputs() {
  return (
    <div>
      <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: '15px',
        marginBlock: '5px',
        marginTop: '20px',
      }}>
      <label htmlFor="name">نام کاربری یا آدرس ایمیل*</label>
      <input className="login" />
      </Box>
      <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: '15px',
        marginBlock: '5px',
        marginTop: '20px'
      }}>
      <label htmlFor="name">رمز عبور*</label>
      <input className="login" />
      <Box sx={{ fontSize: "12px", color: "#0088FF",}}>رمز عبورخود را فراموش کرده اید ؟</Box>
      </Box>
    </div>
  );
}

export default Inputs;
