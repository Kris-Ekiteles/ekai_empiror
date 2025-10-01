import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const authHeader = useMemo(() => (
    token ? { headers: { Authorization: `Bearer ${token}` } } : { headers: {} }
  ), [token]);

  // About gallery (image + caption)
  const [aboutItems, setAboutItems] = useState([]);
  const [newAbout, setNewAbout] = useState({ imageUrl: '', caption: '' });

  // Events (image + name + price)
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ imageUrl: '', name: '', price: '', file: null });

  // Memories (single image list)
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState({ imageUrl: '' });

  // Destinations (image + name + description + price)
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({ imageUrl: '', name: '', description: '', price: '' });

  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if not authenticated
    if (!token) {
      navigate('/admin/login', { replace: true });
      return;
    }
    // Initial load for all resources
    refreshAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshAll = async () => {
    setError('');
    setLoading(true);
    const errors = [];
    const results = await Promise.allSettled([
      axios.get('/api/about', authHeader),
      axios.get('/api/events', authHeader),
      axios.get('/api/memories', authHeader),
      axios.get('/api/destinations', authHeader)
    ]);
    // About
    if (results[0].status === 'fulfilled') {
      setAboutItems(results[0].value.data || []);
    } else {
      const err = results[0].reason;
      errors.push(`about: ${err?.response?.status || ''} ${err?.response?.data?.message || err?.message || 'error'}`);
    }
    // Events
    if (results[1].status === 'fulfilled') {
      setEvents(results[1].value.data || []);
    } else {
      const err = results[1].reason;
      errors.push(`events: ${err?.response?.status || ''} ${err?.response?.data?.message || err?.message || 'error'}`);
    }
    // Memories
    if (results[2].status === 'fulfilled') {
      setMemories(results[2].value.data || []);
    } else {
      const err = results[2].reason;
      errors.push(`memories: ${err?.response?.status || ''} ${err?.response?.data?.message || err?.message || 'error'}`);
    }
    // Destinations
    if (results[3].status === 'fulfilled') {
      setDestinations(results[3].value.data || []);
    } else {
      const err = results[3].reason;
      errors.push(`destinations: ${err?.response?.status || ''} ${err?.response?.data?.message || err?.message || 'error'}`);
    }
    if (errors.length) setError(`Failed to load: ${errors.join(' | ')}`);
    setLoading(false);
  };

  // About CRUD
  const addAbout = async () => {
    if (!newAbout.imageUrl || !newAbout.caption) return;
    setLoading(true);
    try {
      await axios.post('/api/about', newAbout, authHeader);
      setNewAbout({ imageUrl: '', caption: '' });
      const res = await axios.get('/api/about', authHeader);
      setAboutItems(res.data || []);
    } catch (e) {
      setError('Failed to add about item');
    }
    setLoading(false);
  };

  const deleteAbout = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/about/${id}`, authHeader);
      setAboutItems((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      setError('Failed to delete about item');
    }
    setLoading(false);
  };

  const updateAbout = async (id, data) => {
    setLoading(true);
    try {
      await axios.put(`/api/about/${id}`, data, authHeader);
      const res = await axios.get('/api/about', authHeader);
      setAboutItems(res.data || []);
    } catch (e) {
      setError('Failed to update about item');
    }
    setLoading(false);
  };

  // Events CRUD
  const addEvent = async () => {
    if ((!newEvent.imageUrl && !newEvent.file) || !newEvent.name || !newEvent.price) return;
    setLoading(true);
    try {
      if (newEvent.file) {
        const formData = new FormData();
        formData.append('image', newEvent.file);
        formData.append('name', newEvent.name);
        formData.append('price', newEvent.price);
        await axios.post('/api/events', formData, { headers: { ...(authHeader.headers || {}), 'Content-Type': 'multipart/form-data' } });
      } else {
        await axios.post('/api/events', { imageUrl: newEvent.imageUrl, name: newEvent.name, price: newEvent.price }, authHeader);
      }
      setNewEvent({ imageUrl: '', name: '', price: '', file: null });
      const res = await axios.get('/api/events', authHeader);
      setEvents(res.data || []);
    } catch (e) {
      setError(`Failed to add event: ${e?.response?.status || ''} ${e?.response?.data?.message || e?.message || 'error'}`);
    }
    setLoading(false);
  };

  const deleteEvent = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/events/${id}`, authHeader);
      setEvents((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      setError('Failed to delete event');
    }
    setLoading(false);
  };

  const updateEvent = async (id, data) => {
    setLoading(true);
    try {
      await axios.put(`/api/events/${id}`, data, authHeader);
      const res = await axios.get('/api/events', authHeader);
      setEvents(res.data || []);
    } catch (e) {
      setError('Failed to update event');
    }
    setLoading(false);
  };

  // Memories CRUD
  const addMemory = async () => {
    if (!newMemory.imageUrl) return;
    setLoading(true);
    try {
      await axios.post('/api/memories', newMemory, authHeader);
      setNewMemory({ imageUrl: '' });
      const res = await axios.get('/api/memories', authHeader);
      setMemories(res.data || []);
    } catch (e) {
      setError('Failed to add memory');
    }
    setLoading(false);
  };

  const deleteMemory = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/memories/${id}`, authHeader);
      setMemories((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      setError('Failed to delete memory');
    }
    setLoading(false);
  };

  // Destinations CRUD
  const addDestination = async () => {
    if (!newDestination.imageUrl || !newDestination.name || !newDestination.description || !newDestination.price) return;
    setLoading(true);
    try {
      await axios.post('/api/destinations', newDestination, authHeader);
      setNewDestination({ imageUrl: '', name: '', description: '', price: '' });
      const res = await axios.get('/api/destinations', authHeader);
      setDestinations(res.data || []);
    } catch (e) {
      setError('Failed to add destination');
    }
    setLoading(false);
  };

  const deleteDestination = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/destinations/${id}`, authHeader);
      setDestinations((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      setError('Failed to delete destination');
    }
    setLoading(false);
  };

  const updateDestination = async (id, data) => {
    setLoading(true);
    try {
      await axios.put(`/api/destinations/${id}`, data, authHeader);
      const res = await axios.get('/api/destinations', authHeader);
      setDestinations(res.data || []);
    } catch (e) {
      setError('Failed to update destination');
    }
    setLoading(false);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <div>
          <button className="refresh-btn" onClick={refreshAll} disabled={loading}>Refresh</button>
        </div>
      </div>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-tabs">
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About Gallery</button>
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>Events</button>
        <button className={activeTab === 'memories' ? 'active' : ''} onClick={() => setActiveTab('memories')}>Memories</button>
        <button className={activeTab === 'destinations' ? 'active' : ''} onClick={() => setActiveTab('destinations')}>Destinations</button>
      </div>

      {activeTab === 'about' && (
        <section className="admin-section">
          <h3>About Gallery Items</h3>
          <div className="form-grid">
            <input placeholder="Image URL" value={newAbout.imageUrl} onChange={(e) => setNewAbout({ ...newAbout, imageUrl: e.target.value })} />
            <input placeholder="Caption" value={newAbout.caption} onChange={(e) => setNewAbout({ ...newAbout, caption: e.target.value })} />
            <button onClick={addAbout} disabled={loading}>Add</button>
          </div>
          <div className="cards-grid">
            {aboutItems.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.imageUrl} alt={item.caption} />
                <div className="card-body">
                  <input defaultValue={item.caption} onBlur={(e) => updateAbout(item._id, { caption: e.target.value })} />
                  <div className="card-actions">
                    <button className="danger" onClick={() => deleteAbout(item._id)} disabled={loading}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
{/* working on this at the moment */}
      {activeTab === 'events' && (
        <section className="admin-section">
          <h3>Events</h3>
          <div className="form-grid">
            <input placeholder="Image URL" value={newEvent.imageUrl} onChange={(e) => setNewEvent({ ...newEvent, imageUrl: e.target.value })} />
            <input type="file" accept="image/*" onChange={(e) => setNewEvent({ ...newEvent, file: e.target.files?.[0] || null })} />
            <input placeholder="Name" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
            <input placeholder="Price" value={newEvent.price} onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })} />
            <button onClick={addEvent} disabled={loading}>Add</button>
          </div>
          <div className="cards-grid">
            {events.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.imageUrl} alt={item.name} />
                <div className="card-body">
                  <input defaultValue={item.name} onBlur={(e) => updateEvent(item._id, { name: e.target.value })} />
                  <input defaultValue={item.price} onBlur={(e) => updateEvent(item._id, { price: e.target.value })} />
                  <div className="card-actions">
                    <button className="danger" onClick={() => deleteEvent(item._id)} disabled={loading}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
{/* event closses at this point */}


      {activeTab === 'memories' && (
        <section className="admin-section">
          <h3>Memories</h3>
          <div className="form-grid">
            <input placeholder="Image URL" value={newMemory.imageUrl} onChange={(e) => setNewMemory({ imageUrl: e.target.value })} />
            <button onClick={addMemory} disabled={loading}>Add</button>
          </div>
          <div className="cards-grid grid-small">
            {memories.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.imageUrl} alt="memory" />
                <div className="card-body">
                  <div className="card-actions">
                    <button className="danger" onClick={() => deleteMemory(item._id)} disabled={loading}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'destinations' && (
        <section className="admin-section">
          <h3>Destinations</h3>
          <div className="form-grid">
            <input placeholder="Image URL" value={newDestination.imageUrl} onChange={(e) => setNewDestination({ ...newDestination, imageUrl: e.target.value })} />
            <input placeholder="Name" value={newDestination.name} onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })} />
            <input placeholder="Description" value={newDestination.description} onChange={(e) => setNewDestination({ ...newDestination, description: e.target.value })} />
            <input placeholder="Price" value={newDestination.price} onChange={(e) => setNewDestination({ ...newDestination, price: e.target.value })} />
            <button onClick={addDestination} disabled={loading}>Add</button>
          </div>
          <div className="cards-grid">
            {destinations.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.imageUrl} alt={item.name} />
                <div className="card-body">
                  <input defaultValue={item.name} onBlur={(e) => updateDestination(item._id, { name: e.target.value })} />
                  <input defaultValue={item.description} onBlur={(e) => updateDestination(item._id, { description: e.target.value })} />
                  <input defaultValue={item.price} onBlur={(e) => updateDestination(item._id, { price: e.target.value })} />
                  <div className="card-actions">
                    <button className="danger" onClick={() => deleteDestination(item._id)} disabled={loading}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default AdminDashboard;
