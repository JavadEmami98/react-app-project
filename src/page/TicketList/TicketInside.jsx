import { Box, Button } from "@mui/material";
import React from "react";
import "./TicketInside.css";

function TicketInside() {
  return (
    <div>
      <div className="tick-box">
        <img src="/image/circleg.svg" alt="" />
        <div className="boxt-r">
          <p>آقای کاربر</p>
          <p>اخرین پاسخ فلان دیقه پیش توسط بینفر</p>
        </div>
        <div className="box-l">
          <p>9:41</p>
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <div className="tick-box">
        <img src="/image/circleb.svg" alt="" />
        <div className="boxt-r">
          <p>آقای کاربر</p>
          <p>اخرین پاسخ فلان دیقه پیش توسط بینفر</p>
        </div>
        <div className="box-l">
          <p>9:41</p>
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <div className="tick-box">
        <img src="/image/circler.svg" alt="" />
        <div className="boxt-r">
          <p>آقای کاربر</p>
          <p>اخرین پاسخ فلان دیقه پیش توسط بینفر</p>
        </div>
        <div className="box-l">
          <p>9:41</p>
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
      <div className="tick-box">
        <img src="/image/circleg.svg" alt="" />
        <div className="boxt-r">
          <p>آقای کاربر</p>
          <p>اخرین پاسخ فلان دیقه پیش توسط بینفر</p>
        </div>
        <div className="box-l">
          <p>9:41</p>
          <img src="/image/felesh2.svg" alt="" />
        </div>
      </div>
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
            fontSize: "17px",
            width: "100%",
            height: "51px",
            color: "white",
            backgroundColor: "#FFA722",
          }}
        >
          تیکت جدید
        </Button>
      </Box>
    </div>
  );
}

export default TicketInside;
