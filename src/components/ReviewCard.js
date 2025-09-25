import React from 'react'
// shares css with about page
import "../pages/About.css";
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ rating = 5, text, name, location }) => {
  const stars = Array.from({ length: 5 });
  return (
    <div className='testimonial_card'>
      <div className='stars'>
        {stars.map((_, i) => (
          <FaStar key={i} className={i < rating ? 'star filled' : 'star'} />
        ))}
      </div>
      <p className='quote'>
        "{text}"
      </p>
      <div className='reviewer'>
        <div className='review_name'>{name}</div>
        <div className='review_location'>{location}</div>
      </div>
    </div>
  )
}

export default ReviewCard
