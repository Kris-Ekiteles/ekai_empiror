import React from 'react'
import '../pages/Home.css'
import Typewriter from '../components/Textanim'
import Services from '../components/Services'
import { FaPlane,FaBus } from 'react-icons/fa'
import { MdOutlineEventNote, MdOutlineGroups2 } from "react-icons/md";
import Destinations from '../components/Destinations'
import About from './About'
import Events from './Events'

const Home = () => {
  return (
    <div>
      <div className='hero_section'>
       <p><Typewriter words={['join us as we explore Kenya and have your best time', 'book with us for event planning', 'travel in style']} /></p>
      </div>
<div className="hero-services">
   <Services
  icon={<FaBus />}
  name="trips"
  button="Learn More"
   />
  <Services
  icon={<FaPlane />}
  name="Travel"
  button="Learn More"
   />
    <Services
  icon={<MdOutlineGroups2 />}
  name="Group Tours"
  button="Learn More"
   />

    <Services
  icon={<MdOutlineEventNote />}
  name="Events"
  button="Learn More"
   />
</div>

<div className="travel_destination">
  {/* <h2>Popular Destinations</h2> */}
  <Destinations
  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  name="Maasai Mara"
  description="Experience the breathtaking beauty of the Maasai Mara, where golden savannahs stretch as far as the eye can see, and witness the awe-inspiring Great Migration of wildebeest and zebras."
  price="$1500"
   />
    <Destinations
  image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  name="Diani Beach"
  description="Discover the pristine white sands and turquoise waters of Diani Beach, a tropical paradise on Kenya's coast, perfect for relaxation, water sports, and unforgettable sunsets." 
  price="$1200"
    />
      <Destinations
  image="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  name="Amboseli National Park"
  description="Experience the majestic beauty of Amboseli National Park, where you can witness large herds of elephants against the stunning backdrop of Mount Kilimanjaro, Africa's highest peak."
  price="$1300"
    />
      <Destinations
  image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  name="Lake Nakuru"
  description="Explore Lake Nakuru, a stunning soda lake renowned for its vibrant pink flamingos and diverse wildlife, including rhinos, lions, and giraffes, set against picturesque landscapes."
  price="$1100"
    />

</div>
<Events />
<About />
  
    </div>
  )
}

export default Home

