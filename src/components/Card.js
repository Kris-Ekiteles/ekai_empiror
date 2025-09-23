import React, { useState } from "react";
import "./Card.css"
import PayNow from "./PayNow";

const Card = (props) => {
  const [showPay, setShowPay] = useState(false);

  const openPay = () => setShowPay(true);
  const closePay = () => setShowPay(false);
  return (
    <div className="upcoming-events">
      <img src={props.img} alt="" />
      <div className="event_description">
        <h3>{props.name}</h3>
        <p className="price">{props.price}</p>
        <div className="btn">
          <button onClick={openPay}>{props.button}</button>
          <button onClick={openPay}>{props.reserve}</button>
        </div>
      </div>
      <PayNow isOpen={showPay} onClose={closePay} />
    </div>
  );
};

export default Card;
