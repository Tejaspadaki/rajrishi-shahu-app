import React from 'react';
import './AboutUs.css';

const content = {
  mr: {
    visionTitle: 'OUR VISION',
    visionText: `राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ...`,
    missionTitle: 'OUR MISSION',
    missionText: `राजर्षी शाहू शिक्षण संस्थेचे मिशन म्हणजे ...`
  },
  en: {
    visionTitle: 'OUR VISION',
    visionText: `Rajarshi Shahu Education Society, Inam Dhamani, Sangli aims to provide quality education to...`,
    missionTitle: 'OUR MISSION',
    missionText: `Our mission is to bring children from poor, rural and farmer suicide-affected families...`
  }
};

const AboutUs = ({ currentLang }) => {
  const { visionTitle, visionText, missionTitle, missionText } = content[currentLang];

  return (
    <div className="about-us-container">
      {/* Vision Section */}
      <section className="section">
        <img src="/images/6.png" alt="Vision Top" className="section-image top" />
        <h2 className="section-title">{visionTitle}</h2>
        <p className="section-text">{visionText}</p>
        <img src="/images/5.png" alt="Vision Bottom" className="section-image bottom" />
      </section>

      {/* Horizontal Rule between sections */}
      <hr className="section-separator" />

      {/* Mission Section */}
      <section className="section">
        <img src="/images/6.png" alt="Mission Top" className="section-image top" />
        <h2 className="section-title">{missionTitle}</h2>
        <p className="section-text">{missionText}</p>
        <img src="/images/5.png" alt="Mission Bottom" className="section-image bottom" />
      </section>
    </div>
  );
};

export default AboutUs;
