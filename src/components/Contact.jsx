import React, { useState } from 'react';
import './contact.css';

export default function Contact({ currentLang }) {
  const text = {
    en: {
      contactUs: 'CONTACT US',
      infoText: 'For more information,',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your E-Mail',
      mobilePlaceholder: 'Your Mobile Number',
      messagePlaceholder: 'Your Message',
      submitBtn: 'Submit',
      stayConnected: 'Stay Connected: Get in Touch with Us',
      contactDetails: ['**********', '**********'],
      donateBtn: 'DONATE',
      successMsg: 'Message sent successfully!',
      errorMsg: 'Something went wrong. Please try again.',
    },
    mr: {
      contactUs: 'आमच्याशी संपर्क साधा',
      infoText: 'अधिक माहितीसाठी,',
      namePlaceholder: 'तुमचे नाव',
      emailPlaceholder: 'तुमचा ई-मेल',
      mobilePlaceholder: 'तुमचा मोबाइल नंबर',
      messagePlaceholder: 'तुमचा संदेश',
      submitBtn: 'सबमिट करा',
      stayConnected: 'संपर्कात रहा: आमच्याशी संपर्क करा',
      contactDetails: ['**********', '**********'],
      donateBtn: 'दान करा',
      successMsg: 'संदेश यशस्वीरित्या पाठविला गेला!',
      errorMsg: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
    }
  };

  const t = text[currentLang] || text.en;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('https://api-ffgj.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>{t.contactUs}</h1>
        <p className="info-text">{t.infoText}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.namePlaceholder} required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.emailPlaceholder} required />
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder={t.mobilePlaceholder} required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} required />
          <button type="submit" className="submit-btn">{t.submitBtn}</button>
        </form>

        {status === 'success' && <p className="success">{t.successMsg}</p>}
        {status === 'error' && <p className="error">{t.errorMsg}</p>}
      </div>

      <div className="contact-right">
        <h2>{t.stayConnected}</h2>
        <div className="contact-details">
          {t.contactDetails.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
        </div>
        <div className="map-box">{/* Optional map */}</div>
        <a href="/donate"><button className="donate-btn">{t.donateBtn}</button></a>
      </div>
    </div>
  );
}
