import React from "react";
import "./About.css";
import ReviewCard from "./ReviewCard";
import namanga from "../Assets/namanga.png";
// not the official item to be where placed
import Card from "./Card";

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
        <h4>Join us As we expoler Kenya and have your best time</h4>
        {/* the below card are temporarily here and shall be replaced later for the images cuptured in the recent adventures */}
      </div>
      <div className="review">
        <h4>Testimonials</h4>
        <ReviewCard text="Nice experience" />
        <ReviewCard text="exciting experience" />
        <ReviewCard text="Nice experience" />
        <ReviewCard text="Nice experience" />
      </div>
    </div>
  );
};

export default About;
