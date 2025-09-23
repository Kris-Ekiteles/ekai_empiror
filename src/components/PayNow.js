import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import "./PayNow.css"
import { FaTimes } from 'react-icons/fa'

const PayNow = ({ isOpen = false, onClose }) => {
const[phone, setPhone] = useState('');
const [Amount, setAmount] = useState('');
const [status, setStatus] = useState('');

const handlePayment = async () => {
    try {
        setStatus('Processing payment...');
        const res =await axios.post('http://localhost:5000/api/pay', {
            phone,
            Amount
        });
        setStatus('Payment successful!');
        console.log(res.data);
    }
    catch (error) {
        setStatus('Payment failed. Please try again.');
        console.error(error);
    }
};

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className="paynow_overlay" role="dialog" aria-modal="true" onClick={onClose} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="pay" onClick={(e) => e.stopPropagation()}>
        <button className="close_btn" onClick={onClose} aria-label="Close"><FaTimes /></button>
        <h2>Make a Payment</h2>
        <input type='number' placeholder='enter your phone (254...)' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type='number' placeholder='enter amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="pay_btn" onClick={handlePayment}>Pay Now</button>
        <p className="status_msg">{status}</p>
      </div>
    </div>
  )
}

export default PayNow
