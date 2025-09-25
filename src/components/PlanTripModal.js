import React, { useState } from 'react'
import './PlanTripModal.css'

const PlanTripModal = ({ isOpen = false, onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    people: 1,
    destination: ''
  })
  const [status, setStatus] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setStatus('Submitting...')
      // TODO: POST to backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will reach out to plan your trip.')
      setForm({ firstName: '', lastName: '', email: '', phone: '', description: '', people: 1, destination: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="plan_overlay" onClick={onClose}>
      <div className="plan_modal" onClick={(e) => e.stopPropagation()}>
        <button className="plan_close" onClick={onClose} aria-label="Close">×</button>
        <h2>Start Planning Your Adventure</h2>
        <form className="plan_form" onSubmit={onSubmit}>
          <div className="grid">
            <div className="field">
              <label>First name</label>
              <input name="firstName" value={form.firstName} onChange={onChange} required />
            </div>
            <div className="field">
              <label>Last name</label>
              <input name="lastName" value={form.lastName} onChange={onChange} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required />
            </div>
            <div className="field">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} required />
            </div>
            <div className="field">
              <label>Destination</label>
              <input name="destination" value={form.destination} onChange={onChange} placeholder="e.g. Maasai Mara" />
            </div>
            <div className="field">
              <label>Number of people</label>
              <input type="number" min="1" name="people" value={form.people} onChange={onChange} />
            </div>
            <div className="field full">
              <label>Brief description</label>
              <textarea name="description" rows={4} value={form.description} onChange={onChange} placeholder="Your expectations..." />
            </div>
          </div>
          <button className="plan_submit" type="submit">Submit Request</button>
          {status && <p className="plan_status">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default PlanTripModal


