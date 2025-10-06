import React, { useEffect, useState } from 'react'
import '../pages/Home.css'
import Typewriter from '../components/Textanim'
import Services from '../components/Services'
import { FaPlane,FaBus } from 'react-icons/fa'
import { MdOutlineEventNote, MdOutlineGroups2 } from "react-icons/md";
import Destinations from '../components/Destinations'
import About from './About'
import Events from './Events'
import { Link, useNavigate } from 'react-router-dom'
import PlanTripModal from '../components/PlanTripModal'
import Card from '../components/Card'


const Home = () => {

// usestate for the services component
  
  const [activeService, setActiveService] = useState(null);
  const [openPlan, setOpenPlan] = useState(false);
  const navigate = useNavigate();
  const [eventsPreview, setEventsPreview] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState('');
  const [planSubmitting, setPlanSubmitting] = useState(false);
  const [planStatus, setPlanStatus] = useState('');
  const [planForm, setPlanForm] = useState({
    date: '',
    preferredLocation: '',
    description: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoadingEvents(true);
      setEventsError('');
      try {

      //backend url to fetch data from render
        const res = await fetch('https://ekaibackend.onrender.com/api/events/public');
        let data;
        if (!res.ok) {
          const fallback = await fetch('https://ekaibackend.onrender.com/api/events');
          if (!fallback.ok) throw new Error('failed');
          data = await fallback.json();
        } else {
          data = await res.json();
        }
        if (!Array.isArray(data)) data = [];
        if (!cancelled) setEventsPreview(data.slice(0, 4));
      } catch (e) {
        if (!cancelled) setEventsError('Could not load events.');
      } finally {
        if (!cancelled) setLoadingEvents(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);
const toggleMoreInfo = (serviceName) => {
 
 setActiveService(prev => prev === serviceName ? null : serviceName);

  };
  return (
    <div>
      <div className='hero_section'>
        <div className="pic">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="hero" />
        </div>
        <div className="hero_overlay"></div>
        <div className="CTA">        
          <h2>Ekai Safaris</h2>
          <p>Our team is dedicated to creating unforgettable journeys across Kenya and beyond.</p>
          {/* <p><Typewriter words={['join us as we explore Kenya and have your best time', 'book with us for event planning', 'travel in style']} /></p> */}
          <div className="actions">
            <a href="#travel_destination" className="hero_cta">Explore Trips</a>
            <a href="#about_us" className="hero_cta">Learn More</a>
          </div>
        </div>
      </div>
<div className="hero-services">
   <Services
  icon={<FaBus />}
  name="Trips"
  onButtonClick={() => toggleMoreInfo("Trips")}
  button="Learn More"
   />
   {activeService === "Trips" && (
          <div className="more-info">
           
             <button className="close-btn" onClick={() => toggleMoreInfo("Trips")}>
        close
      </button>
       <h2>Trips</h2>
            <p>We plan and manage personalized trips on your behalf, handling every detail for a smooth and enjoyable journey.</p>
          </div>
        )}
  <Services
  icon={<FaPlane />}  
  name="Vacations"
  onButtonClick={() => toggleMoreInfo("Vacations")}
  button="Learn More"
   />
     {activeService === "Vacations" && (
          <div className="more-info">
             <button className="close-btn" onClick={() => toggleMoreInfo("Vacations")}>
        close
      </button>
            <h2>enjoy your dream vacation</h2>
            <p>Customized vacation planning for groups or individuals, ensuring stress-free travel and unforgettable experiences.</p>
          </div>
        )}

    <Services
  icon={<MdOutlineGroups2 />}
  name="Group Tours"
  button="Learn More"
  onButtonClick={() => toggleMoreInfo("Group Tours")}
   />
    {activeService === "Group Tours" && (
          <div className="more-info">
            
             <button className="close-btn" onClick={() => toggleMoreInfo("Group Tours")}>
        close
      </button>
      <h2>Group tours and road trips</h2>
            <p>Exciting group tours and road trips across Kenya, perfect for adventure, bonding, and unforgettable memories.</p>
          </div>
        )}

    <Services
  icon={<MdOutlineEventNote />}
  name="Events"
  button="Learn More"
  onButtonClick={() => toggleMoreInfo("Events")}
   />
    { activeService === "Events" && (
          <div className="more-info">
       <button className="close-btn"        
            onClick={() => toggleMoreInfo("Events")}
          >
            close
          </button>
            <h2>Events</h2>
            <p>We organize memorable events with seamless planning, tailored to your style and budget with site visits included.</p>
          </div>
        )}
</div>

<div className="filter-loc">
  <div className="side-pic">
<div className="filter-img">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
  </div>
  </div>
<div className="filter-form">
  <label>Date</label>
  <input
    type='date'
    value={planForm.date}
    onChange={(e) => setPlanForm({ ...planForm, date: e.target.value })}
  />
  <label>Preferred Location/Visit</label>
  <input
    type="text"
    placeholder='e.g. Maasai Mara, Diani, Amboseli'
    value={planForm.preferredLocation}
    onChange={(e) => setPlanForm({ ...planForm, preferredLocation: e.target.value })}
  />
  <label>Brief Description</label>
  <textarea
    rows="3"
    placeholder='Tell us about your trip preferences'
    value={planForm.description}
    onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })}
  />
  <label>Email</label>
  <input
    type="email"
    placeholder='you@example.com'
    value={planForm.email}
    onChange={(e) => setPlanForm({ ...planForm, email: e.target.value })}
  />
  <label>Phone</label>
  <input
    type="tel"
    placeholder='2547XXXXXXXX'
    value={planForm.phone}
    onChange={(e) => setPlanForm({ ...planForm, phone: e.target.value })}
  />
  <div className="preview-book">
   <button className="preview preview-btn" disabled={planSubmitting}>Preview Hotel</button>
   <button
     className="preview book-btn"
     disabled={planSubmitting}
     onClick={async () => {
       setPlanStatus('');
       if (!planForm.email || !planForm.phone || !planForm.date) {
         setPlanStatus('Please fill required fields: email, phone, date.');
         return;
       }
       try {
         setPlanSubmitting(true);
         const res = await fetch('https://ekaibackend.onrender.com/api/plan', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(planForm)
         });
         if (!res.ok) throw new Error('Failed to submit');
         setPlanStatus('Request sent successfully! We will contact you soon.');
         setPlanForm({ date: '', preferredLocation: '', description: '', email: '', phone: '' });
       } catch (e) {
         setPlanStatus('Failed to send request. Please try again.');
       } finally {
         setPlanSubmitting(false);
       }
     }}
   >Send Request</button>
  </div>
  {planStatus && <p style={{ margin: '8px 6px 0 6px', color: planStatus.startsWith('Failed') ? '#b00020' : '#256c3a' }}>{planStatus}</p>}
</div>
</div>

<div className="travel_destination" id="travel_destination">
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

{/* Call To Action Banner */}
<div className="cta_banner">
  <h2>Ready for Your Own Adventure?</h2>
  <p>
    Join hundreds of satisfied travelers who have experienced the magic of Africa with us.
  </p>
  <div className="cta_actions">
    <button className="btn btn-primary" onClick={() => setOpenPlan(true)}>Start Planning</button>
    <button className="btn btn-outline" onClick={() => navigate('/contact')}>Contact Us</button>
  </div>
</div>

{/* Events preview (first 4) with See More */}
<div className="home-events-preview">
  <h2>Upcoming Events</h2>
  {loadingEvents && <p>Loading events...</p>}
  {eventsError && <p>{eventsError}</p>}
  <div className="product">
    {eventsPreview.map((evt) => (
      <Card
        key={evt._id || `${evt.name}-${evt.imageUrl}`}
        img={evt.imageUrl}
        name={evt.name}
        price={evt.price}
        button="book event"
        reserve="reserve slot"
      />
    ))}
  </div>
  <div style={{ textAlign: 'center', marginTop: '16px' }}>
    <button className="btn btn-primary" onClick={() => navigate('/event')}>See more events</button>
  </div>
</div>
<About hideAboutUs={true} />
<PlanTripModal isOpen={openPlan} onClose={() => setOpenPlan(false)} />
  
    </div>
  )
}

export default Home

