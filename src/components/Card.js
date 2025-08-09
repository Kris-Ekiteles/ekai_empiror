import React from "react";
import Events from "./Events";
import namanga from "../Assets/namanga.png"

const card = () => {
  return (
    <div className="product">
      <Events 
      image={namanga}
      />
      <Events />
      <Events />
    </div>
  );
};

export default card;
