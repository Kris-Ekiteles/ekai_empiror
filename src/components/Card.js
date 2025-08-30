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
        <button className="btn">{props.button}</button>
      </div>
    </div>
  );
};

export default Card;
