import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

   const formref=useRef();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // Handle form submission logic here
  
    // Send email using EmailJS
    emailjs
      .sendForm('service_wod4oeh', 'template_p3mu80e', formref.current, {
        publicKey: 'Af8N8XDREcV0li_TR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/oderSuccess');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px", border: "2px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="mb-4 text-center">Booking</h2>
      <form  ref={formref} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input name="name" type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input  name="email" type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input  name="phone" type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input name="date" type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input name="time" type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
