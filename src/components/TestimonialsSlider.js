import React, { useEffect, useMemo, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./TestimonialsSlider.css";

const TestimonialsSlider = ({ items = [], intervalMs = 4000 }) => {
  const testimonials = useMemo(() => items.filter(Boolean), [items]);
  const [startIndex, setStartIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (testimonials.length <= 2) return;
    timerRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % testimonials.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials.length, intervalMs]);

  const next = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStartIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const first = testimonials[startIndex % testimonials.length];
  const second = testimonials[(startIndex + 1) % testimonials.length];

  return (
    <div className="testimonials_slider">
      <div className="t_track">
        {first && (
          <div className="t_slide" key={`t-${startIndex}`}>
            <ReviewCard
              rating={first.rating}
              text={first.text}
              name={first.name}
              location={first.location}
            />
          </div>
        )}
        {second && (
          <div className="t_slide" key={`t-${startIndex + 1}`}>
            <ReviewCard
              rating={second.rating}
              text={second.text}
              name={second.name}
              location={second.location}
            />
          </div>
        )}
      </div>
      {testimonials.length > 2 && (
        <div className="t_controls">
          <button className="t_btn prev" onClick={prev} aria-label="Previous testimonials">‹</button>
          <button className="t_btn next" onClick={next} aria-label="Next testimonials">›</button>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSlider;


