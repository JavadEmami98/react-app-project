import { Box, Button } from "@mui/material";
import React from "react";
import "./Support.css";

function Support() {
  return (
    <div>
      <div className="support-all">
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
        <div className="support-header">
          <p> شکایات و نظرات</p><br />
          <p>( پشتیبانی )</p>
        </div>
        <form className="form">
            <label>موضوع</label>
            <input type="text" placeholder="عنوان محصول" />
            <label>متن </label>
            <input type="text" placeholder="متن شکایت خودرا بنویسید" />
        </form>
        <div className="under-form">
          <p>
            <img src="/image/sanjaq.svg" alt="" />
            پیوست فایل
          </p>
          <p>تعداد کاراکتر :300</p>
        </div>
      </div>
      <Box sx={{
            position: "fixed",
            bottom: "30px",
            right: 0,
            width: "100%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 2
          }}>
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
            ارسال
          </Button>
          </Box>
    </div>
  );
}

export default Support;
