import React from "react";
import "./Card.css"

const Card = (props) => {
  return (
    <div className="upcoming-events">
      <img src={props.img} alt="" />
      <div className="event_description">
        <h3>{props.name}</h3>
        <p className="price">{props.price}</p>
        <div className="btn">
          <button>{props.button}</button>
          <button>{props.reserve}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
