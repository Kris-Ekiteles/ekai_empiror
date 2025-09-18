import React from 'react'
import '../pages/Home.css'
import Typewriter from '../components/Textanim'
const Home = () => {
  return (
    <div>
      <div className='hero_section'>
 <h1>welcome to the home section</h1>
       <p><Typewriter words={['join us as we explore Kenya and have your best time', 'book with us for event planning', 'travel in style']} /></p>
      </div>

     
    </div>
  )
}

export default Home

