import "./App.css";
import React from "react";
import { Box } from "@mui/system";

function Code() {
  return (
    <div>
      <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: '15px',
        marginBlock: '5px',
        mt: "30px"
      }}>
      <label htmlFor="name">کد معرف*</label>
      <input className="myInput"/>
      </Box>
    </div>
  );
}

export default Code;
