import React from "react";
import "../pages/About.css";
import ReviewCard from "../components/ReviewCard";
import namanga from "../Assets/namanga.png";
import Typewriter from "../components/Textanim";
// not the official item to be where placed
import Card from "../components/Card";

const About = () => {
  return (
    <div className="main_about">
      <div className="About_us">
        <div className="identity">
          <img src={namanga} alt="Ekai Safaris" />
          
            {/* image should cover this seze or 3/4 of this size */}
         
        </div>
        <div className="about">
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
        <h4>Testimonials</h4>
        <ReviewCard text="Nice experience" />
        <ReviewCard text="exciting experience" />
        <ReviewCard text="Nice experience" />
        <ReviewCard text="Nice experience" />
      </div>
      <div className="gallery">
<div className="child"> <h2>child 1</h2></div>
<div className="child"><h2>child 2</h2></div>
<div className="child"><h2>child 3</h2></div>
      </div>
    </div>
  );
}; 

export default About;
