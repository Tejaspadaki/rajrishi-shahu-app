import React, { useState } from 'react';
import './Donate.css';

function Donate({ currentLang }) {
  const text = {
    en: {
      heading: 'Donate Now',
      name: 'Your Name',
      email: 'Your E-Mail',
      phone: 'Your Mobile Number',
      donation: 'What you want to donate?',
      submit: 'Submit',
      quote: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin nisl ut faucibus tortor sapien adipiscing nulla. Nibh turpis id nibh faucibus. Amet orci vel risus mi cursus. Rhoncus aliquet sit vulputate lorem platea ornare blandit.',
      success: 'Thank you for your generous donation!',
      error: 'Something went wrong. Please try again.'
    },
    mr: {
      heading: 'आता दान करा',
      name: 'तुमचं नाव',
      email: 'तुमचा ई-मेल',
      phone: 'तुमचा मोबाइल क्रमांक',
      donation: 'तुम्ही काय दान करू इच्छिता?',
      submit: 'सबमिट',
      quote: 'कृपया समाजाच्या सेवेसाठी मदत करा. तुमचे योगदान आमच्यासाठी मौल्यवान आहे.',
      success: 'तुमच्या उदार दानाबद्दल धन्यवाद!',
      error: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.'
    },
  };

  const langText = text[currentLang] || text.en;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    donation: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('https://api-ffgj.onrender.com/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', donation: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="donate-container">
      <div className="donate-left">
        <h1>{langText.heading}</h1>
        <form className="donate-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={langText.name}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={langText.email}
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={langText.phone}
            required
          />
          <input
            type="text"
            name="donation"
            value={formData.donation}
            onChange={handleChange}
            placeholder={langText.donation}
            required
          />
          <button type="submit">{langText.submit}</button>
        </form>
        {status === 'success' && <p className="success">{langText.success}</p>}
        {status === 'error' && <p className="error">{langText.error}</p>}
      </div>

      <div className="donate-right">
        <div className="quote-icon">❝</div>
        <p>{langText.quote}</p>
        <div className="decorative-line">~ ❁ ~</div>
      </div>
    </div>
  );
}

export default Donate;
