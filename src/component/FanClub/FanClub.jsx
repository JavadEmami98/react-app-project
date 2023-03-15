import { Box } from '@mui/system';
import React from 'react'
import Arrow from "../Arrow/arrow";
import './FanClub.css'
import FanTab from './FanTab';

function FanClub() {
  return (
    <div>
        <Arrow />
        <div className='gym-header'>
            <p>باشگاه مشتریان</p>
        </div>
        <Box className="under-header">
        <div className="right">
          <p>مهدی پوررستمی</p>
          <img src="/image/felesh.svg" alt="" />
        </div>
        <div className="left">
          <img src="/image/diamond.svg" alt="" />
          <p>234</p>
        </div>
      </Box>
      <div>
        <input
          className="input-search"
          type="text"
          placeholder="جست و جو برای سفارش مورد نظر"
        ></input>
        <img src="/image/search.svg" alt="" />
      </div>
      <FanTab />
    </div>
  )
}

export default FanClub