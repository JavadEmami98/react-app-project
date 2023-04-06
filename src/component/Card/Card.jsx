import React from "react";
import "./Card.css";

const Card = ({title, src, price }) => {
  return (
    <div>
      <div className="card-4">
        <img src={src} alt="" className="full"/>
        <h1>{title}</h1>
        <p>{price}  تومان</p>
      </div>
    </div>
  );
}

export default Card;
