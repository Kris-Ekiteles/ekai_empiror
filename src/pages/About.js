import React from "react";
import "../pages/About.css";
import ReviewCard from "../components/ReviewCard";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Typewriter from "../components/Textanim";
import Image1 from "../Assets/FB_IMG_1758223092542.jpg";
import Image2 from "../Assets/FB_IMG_1758223104890.jpg"; 
import Image3 from "../Assets/FB_IMG_1758223057365.jpg"; 
import Image4 from "../Assets/FB_IMG_1758223176045.jpg";
import Image5 from "../Assets/FB_IMG_1758223112678.jpg"; 
import Image6 from "../Assets/FB_IMG_1758223168632.jpg"; 
import Image7 from "../Assets/FB_IMG_1758223155027.jpg"; 
import Image8 from "../Assets/FB_IMG_1758223121424.jpg"; 
// import Image9 from "../Assets/FB_IMG_1758223080217.jpg";
// not the official item to be where placed
import Card from "../components/Card";
import Memories from "../components/Memories";
const About = ({ hideAboutUs = false }) => {
  return (
    <div className="main_about" id="about_us">
      {!hideAboutUs && (
      <div className="About_us">
        <div className="identity">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="about us" />
          
            {/* image should cover this seze or 3/4 of this size */}
         
        </div>
        <div className="about_more">
          <h2>About EkaiSafaris</h2>
          
          <p>
            Ekai Safaris is a premier safari and tour company dedicated to
            crafting unforgetable journeys into the hearts of kenya's most
            spectacular wilderness areas. We specialise in creating
            personalized, immersive experiences that connect travelers with the
            raw beuty of nature, from thrilling wildlife encounters in iconic
            national park to cultural interaction with local communities. with a
            deep commitment to substainable tourism, expert guides, and
            attention to detail, we transform adventurous dreams into enduring
            memories, offering more that just a trip but a profound exploration
            of the wild.
          </p>
        </div>
      </div>
      )}
      <div className="why_us">
        <h2> why us</h2>
        <div className="child safety">
      
          <h4>safety</h4>
          <p>
            Your security is our top priority. Our guides are trained in
            wilderness first aid and all our vehicles are equipped with safety
            equipment.
          </p>
        </div>
        <div className="child transparency">
          <h4>transparency</h4>
          <p>
            No hidden costs or surprises. We provide detailed breakdowns of all
            expenses so you know exactly what you're paying for.
          </p>
        </div>
        <div className="child afordable">
          <h4>afordable</h4>
          <p>
            Experience premium safari adventures without the premium price
            tag.We offer exceptional value for money
          </p>
        </div>
      </div>
      <div className="join_us">
         <p><Typewriter words={['join us as we explore Kenya and have your best time', 'book with us for event planning']} /></p>
       
      </div>
      <div className="review">
        <h1>what our clients say</h1>
        <p>Don't just take our word for it. Here's what our adventurers have to say about their unforgettable safari experiences.</p>
        <TestimonialsSlider
          items={[
            { rating: 5, text: "A perfectly organized safari that exceeded all expectations. The team's attention to detail and passion for conservation truly shows in everything they do.", name: "Maria Anita", location: "Nairobi, Kenya" },
            { rating: 5, text: "Incredible experience from start to finish. Professional guides and stunning locations.", name: "Ahmed Noor", location: "Mombasa, Kenya" },
            { rating: 5, text: "Truly unforgettable. The team went above and beyond to make our trip special.", name: "Liam Kinuthia", location: "Meru, Kenya" },
            { rating: 4, text: "Wonderful service and great attention to detail. Highly recommend!", name: "Zara Khan", location: "Nairobi, Kenya" }
          ]}
        />
      </div>
      <div className="gallery">
        <h2>Memories That Last A Lifetime</h2>
        <p>From breathtaking landscapes to unforgettable encounters, here are some favorite moments captured by our travelers.</p>
        {/* <h2>memories</h2> */}
        <Memories img={Image1} />
        <Memories img={Image2} />
        <Memories img={Image3} />
        <Memories img={Image4} />
        <Memories img={Image5} />
        <Memories img={Image6} />
        <Memories img={Image7} />
        <Memories img={Image8} />

      </div>
    </div>
  );
}; 

export default About;
