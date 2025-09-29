import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [content, setContent] = useState([]);
  const [newItem, setNewItem] = useState({ imageUrl: '', caption: '' });

  const token = localStorage.getItem('token');
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const res = await axios.get('/api/about', authHeader);
    setContent(res.data);
  };

  const addContent = async () => {
    await axios.post('/api/about', newItem, authHeader);
    setNewItem({ imageUrl: '', caption: '' });
    fetchContent();
  };

  const deleteContent = async (id) => {
    await axios.delete(`/api/about/${id}`, authHeader);
    fetchContent();
  };

  const updateContent = async (id, updatedData) => {
    await axios.put(`/api/about/${id}`, updatedData, authHeader);
    fetchContent();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <input
        placeholder="Image URL"
        value={newItem.imageUrl}
        onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
      />
      <input
        placeholder="Caption"
        value={newItem.caption}
        onChange={(e) => setNewItem({ ...newItem, caption: e.target.value })}
      />
      <button onClick={addContent}>Add Content</button>

      <hr />

      {content.map((item) => (
        <div key={item._id}>
          <img src={item.imageUrl} alt="Admin content" style={{ width: '100px' }} />
          <p>{item.caption}</p>
          <button onClick={() => deleteContent(item._id)}>Delete</button>
          {/* Add update UI here */}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
