import React from 'react'
import {useState} from 'react'

import "./Services.css"
const Services = ({icon,name,description,button,onButtonClick}) => {

 
  return (
    <div>
      <div className="services">
        <p>{icon}</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={onButtonClick}>{button}</button>
      </div>
    </div>
  )
}

export default Services

     