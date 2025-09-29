import React, { useState,useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setStatus('Sending...')
      // TODO: hook up backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

    const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/contact')
      .then(res => res.text()) // because your backend sends plain text
      .then(data => setMessage(data))
      .catch(err => console.error('Error fetching contact:', err));
  }, []);

  return (
    <section className="contact_section">
      <div className="contact_intro">
        <h1>Contact Us</h1>
        <p>Have a question or want to plan your next adventure? Send us a message.</p>
      </div>
      <form className="contact_form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Tell us about your trip..." rows={5} required />
        </div>
        <button className="contact_submit" type="submit">Send Message</button>
        {status && <p className="contact_status">{status}</p>}
      </form>
    </section>
  )
}

export default Contact


