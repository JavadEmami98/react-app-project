import "./App.css";
import React from "react";
import { Box } from "@mui/system";

function Code() {
  return (
    <div>
      <Box 
      sx={{
        fontSize: '15px',
        marginBlock: '5px',
      }}>
      <label htmlFor="name">کد معرف*</label>
      <input className="myInput" />
      </Box>
    </div>
  );
}

export default Code;
