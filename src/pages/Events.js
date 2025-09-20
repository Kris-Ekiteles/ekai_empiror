import React from "react";
import "./Events.css";
import Image from "../Assets/namanga.png";
import Card from "../components/Card";
import suswa from "../Assets/suswa.jpg";
import njiine from "../Assets/njiine_kabia.jpg";

const Events = () => {
  return (
    <div className="product">
      <Card
        // img={suswa}
        name="suswa fun Drive"
        price="1700"
        button="book event"
        reserve="reserve slot"
      />
      <Card
        // img={njiine}
        name="Njiine Kabia Expedition"
        price="3000"
        button="book event"
        reserve="reserve slot"
      />
    </div>
  );
};

export default Events;
