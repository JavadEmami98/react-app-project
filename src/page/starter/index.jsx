import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Starter() {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          objectFit: "cover",
          zIndex: 1,
        }}
        component="img"
        src="./image/starter.svg"
      ></Box>
      <Box
        sx={{
          background: "rgba(0,0,0,0.9)",
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <Box
          component="img"
          src="./image/basket.svg"
          width={81.44}
          height={73.28}
          alt=""
        />
        <Box sx={{ fontSize: "48px", color: "#fff" }}>مسئول خرید</Box>
        <Box sx={{ fontSize: "21px", color: "#fff" }}>
          هر آنچه میخواهید خرید کنید
        </Box>

        <Box
          sx={{
            display: "flex",
            bottom: "5px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "center",
            zIndex: 10,
            position: "fixed",
            px: 2,
          }}
        ></Box>
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
          <Link to={"/register1"}>
            <Button
              variant="contained"
              sx={{
                fontSize: "17px",
                width: "323px",
                height: "51px",
                color: "var(--secondary-color)",
                backgroundColor: "white",
                "&:hover": {
                  background: "white",
                },
              }}
            >
              شروع کنید
            </Button>
          </Link>
          <Link to={"/login"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
              }}
            >
              <Box sx={{ fontSize: "14px", color: "#fff" }}>
                حساب کاربری دارید ؟
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#FFBB00",
                  marginInline: "10px",
                }}
              >
                وارد شوید
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Starter;
