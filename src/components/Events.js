import React from "react";
import { Route, Router, Link } from "react-router-dom";
import "./Events.css";
import Image from "../Assets/namanga.png";

const Events = () => {
  return (
    <div className="upcoming-events">
      <img src="" alt="" />
      <div className="event_description">
        <h2></h2>
        <p className="event_disc"></p>
        <p className="price"></p>
        <button className="btn">book slot</button>
      </div>
    </div>
  );
};

export default Events;
