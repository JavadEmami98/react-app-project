import { Box } from '@mui/material'
import React from 'react'

function Arrow() {
  return (
    <div>
        <Box
          component="img"
          src="./image/arrow.svg"
          width={24}
          height={24}
          alt=""
          sx={{
            position: 'absolute',
            top: '30px',
            right: '20px'
          }}
        />
    </div>
  )
}

export default Arrow;