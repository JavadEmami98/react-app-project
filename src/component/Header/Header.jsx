import React from 'react'
import { Box } from "@mui/system";
import './Header.css'
import Hammenu from '../HamMenu/Hammenu'
import BasketMenu from '../BasketMenu/BasketMenu'

function Header() {
  return (
    <div>
        <Box className="header">
        <Hammenu />
        <Box className="header-small">
          <Box sx={{ fontSize: "24px", color: "#101926" }}>مسئول خرید</Box>
          <Box sx={{ fontSize: "10px", color: "#101926" }}>
            هر آنچه میخواهید خرید کنید
          </Box>
        </Box>
        <BasketMenu />
      </Box>
    </div>
  )
}

export default Header