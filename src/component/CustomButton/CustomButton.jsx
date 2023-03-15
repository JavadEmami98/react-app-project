import { Box, Button } from '@mui/material'
import React from 'react'

function CustomButton() {
  return (
    <div>
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
              width: "323px",
              height: "51px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            تایید
          </Button>
          </Box>
    </div>
  )
}

export default CustomButton