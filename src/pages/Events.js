import React from "react";
import { Route, Router, Link } from "react-router-dom";
import "./Events.css";
import Image from "../Assets/namanga.png";
import Card from "../components/Card";

const Events = () => {
  return (
    <div className="product">
      <Card
        img={"namanga"}
        name="Namanga Drive"
        eventDescription="Namanga"
        price="3500"
        button="book event"
        reserve="reserve slot"
      />
      <Card
        img={"namanga"}
        name="Namanga Drive"
        eventDescription="Namanga"
        price="2500"
        button="book event"
        reserve="reserve slot"
      />
    </div>
  );
};

export default Events;
