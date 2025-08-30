import React from "react";
import namanga from "../Assets/namanga.png"
import "./Card.css"

const Card = (props) => {
  return (
    <div className="upcoming-events">
      <img src={props.img} alt="" />
      <div className="event_description">
        <h2>{props.name}</h2>
        <p>{props.eventDescription}</p>
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
