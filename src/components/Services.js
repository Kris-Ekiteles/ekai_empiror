import React from 'react'

import "./Services.css"
const Services = (props) => {
  return (
    <div>
      <div className="services">
        <p>{props.icon}</p>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default Services
