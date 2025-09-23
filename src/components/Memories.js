import React from 'react'
import "../components/Memories.css";

const Memories = (props) => {
  return (
    <div>
      <div className="memories">
        <img src={props.img} alt="memories" />
      </div>
    </div>
  )
}

export default Memories
