import React, { useEffect, useState } from "react";
import "./Events.css";
import Card from "../components/Card";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchEvents = async () => {
      setLoading(true);
      setError("");
      try {
        // Try production backend endpoints
        const res = await fetch("https://ekaibackend.onrender.com/api/events/public");
        if (!res.ok) {
          const fallback = await fetch("https://ekaibackend.onrender.com/api/events");
          if (!fallback.ok) throw new Error("Failed to load events");
          const data = await fallback.json();
          if (!cancelled) setEvents(Array.isArray(data) ? data : []);
        } else {
          const data = await res.json();
          if (!cancelled) setEvents(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        if (!cancelled) setError("Could not load events. Please try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchEvents();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="product"><p>Loading events...</p></div>;
  if (error) return <div className="product"><p>{error}</p></div>;

  return (
    <div className="product">
      {events.length === 0 && <p>No events available.</p>}
      {events.map((evt) => (
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
  );
};

export default Events;