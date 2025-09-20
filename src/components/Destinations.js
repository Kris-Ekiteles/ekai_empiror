import React from 'react'
import "./Destinations.css"


const Destinations = (props) => {
  return (
    <div>
      <div className="destinations">     
       
         <div className="image_container">
            <img src={props.image} alt={props.name} />
         </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>{props.price}</button>
    </div>
    </div>
  )
}

export default Destinations
