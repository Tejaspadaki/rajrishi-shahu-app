import React from 'react';
import './contact.css';

export default function Contact({ currentLang }) {
  // Text content for both languages
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
      contactDetails: ['**********', '**********'], // Replace with Marathi details if needed
      donateBtn: 'दान करा',
    }
  };

  const t = text[currentLang] || text.en; // fallback to English if currentLang is invalid

  return (
    <div className="contact-page">
      {/* Left Section */}
      <div className="contact-left">
        <h1>{t.contactUs}</h1>
        <p className="info-text">{t.infoText}</p>

        <form className="contact-form">
          <input type="text" placeholder={t.namePlaceholder} />
          <input type="email" placeholder={t.emailPlaceholder} />
          <input type="tel" placeholder={t.mobilePlaceholder} />
          <textarea placeholder={t.messagePlaceholder}></textarea>
          <button type="submit" className="submit-btn">{t.submitBtn}</button>
        </form>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <h2>{t.stayConnected}</h2>
        <div className="contact-details">
          {t.contactDetails.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
        </div>
        <div className="map-box">{/* Insert map here if needed */}</div>
        <a href="/donate"><button className="donate-btn">{t.donateBtn}</button></a>
      </div>
    </div>
  );
}
