import { Box } from "@mui/material";
import React from "react";
import "./TicketList.css";
import TicketTab from "./TicketTab";

function TicketList() {
  return (
    <div>
      <Box
        component="img"
        src="./image/arrow.svg"
        width={24}
        height={24}
        alt=""
        sx={{
          position: "absolute",
          top: "30px",
          right: "20px",
        }}
      />
      <div className="financial-header">
        <p> تیکت ها</p>
      </div>
      <TicketTab />
    </div>
  );
}

export default TicketList;
