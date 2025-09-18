import React from 'react'
// shares css with about page
import "../pages/About.css";

const ReviewCard = (props) => {
  return (
    <div className='review_card'>
      <div className='review_message'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ReviewCard
