import React from 'react'
import './Pastay.css'

function Pastay() {
  return (
    <div>
        <div className="pasta-all">
        <img className="img-heart" src="/image/heart.svg" alt="" />
        <div className="pasta-img">
          <img className="imgg" src="/image/pasta.svg" alt="" />
          <p>ماکارونی مانا </p>
          <p>بسته 500 گرمی</p>
        </div>
        <div className="plus-sign">
          +
        </div>
        <div className='add'>15,700</div>
      </div>
    </div>
  )
}

export default Pastay