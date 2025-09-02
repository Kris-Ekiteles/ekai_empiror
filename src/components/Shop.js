import React from 'react'
import './Shop.css'

const Shop = (props) => {
  return (
    <div className='container'>
      <div className='items'>
        <img src={props.img} alt=''/>
        <h2>{props.name}</h2>
        <h5>{props.price}</h5>
        <button>{props.action}</button>
      </div>
    </div>
  )
}

export default Shop
