import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./GallerySlider.css";

const GallerySlider = ({ images = [], autoPlayMs = 3000 }) => {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    if (validImages.length === 0) return;
    const next = (i + validImages.length) % validImages.length;
    setIndex(next);
  }, [validImages.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((curr) => (curr + 1) % validImages.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [validImages.length, autoPlayMs]);

  if (validImages.length === 0) return null;

  return (
    <div className="slider_container">
      <div className="slider_track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {validImages.map((src, i) => (
          <div className={`slide ${i === index ? 'active' : ''}`} key={i}>
            <img src={src} alt={`memory-${i+1}`} />
          </div>
        ))}
      </div>
      {validImages.length > 1 && (
        <>
          <button className="nav_btn prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="nav_btn next" onClick={next} aria-label="Next">›</button>
          <div className="dots">
            {validImages.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySlider;


