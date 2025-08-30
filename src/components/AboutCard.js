import React from 'react'

const AboutCard = () => {
  return (
    <div className="about_card">
      <img src={props.img} alt="" />
      <div className="event_description">
        <h2>{props.name}</h2>
        <p>{props.eventDescription}</p>
        <button className="btn">{props.button}</button>
      </div>
    </div>
  );
}

export default AboutCard
