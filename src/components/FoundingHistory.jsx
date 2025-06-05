import React, { useState } from 'react';
import './FoundingHistory.css';

const FoundingHistory = ({ currentLang }) => {
  const [activeYear, setActiveYear] = useState('2020');

  const handleCardClick = (year) => {
    setActiveYear(year);
  };

  // Text content for both languages
  const text = {
    en: {
      title: 'Founding History',
      years: {
        '2019': 'Lorem ipsum dolor sit amet consectetur...',
        '2020': 'Lorem ipsum dolor sit amet consectetur...',
        '2021': 'Lorem ipsum dolor sit amet consectetur...',
      },
      infoBlocks: [
        { img: '/images/School Building.png', alt: 'Icon 1', text: 'Lorem ipsum dolor sit amet consectetur.' },
        { img: '/images/Student Male.png', alt: 'Icon 2', text: 'Lorem ipsum dolor sit amet consectetur.' },
        { img: '/images/Teacher.png', alt: 'Icon 3', text: 'Lorem ipsum dolor sit amet consectetur.' },
        { img: '/images/Trophy.png', alt: 'Icon 4', text: 'Lorem ipsum dolor sit amet consectetur.' },
      ],
    },
    mr: {
      title: 'स्थापनेचा इतिहास',
      years: {
        '2019': '२०१९ मध्ये आम्ही स्थापना केली...',
        '2020': '२०२० मध्ये महत्त्वाचे पाऊल टाकले...',
        '2021': '२०२१ मध्ये आमचा विस्तार झाला...',
      },
      infoBlocks: [
        { img: '/images/School Building.png', alt: 'आयकॉन १', text: '६ शैक्षणिक संस्था' },
        { img: '/images/Student Male.png', alt: 'आयकॉन २', text: '२००० विद्यार्थी' },
        { img: '/images/Teacher.png', alt: 'आयकॉन ३', text: '३५+ सुशिक्षित कर्मचारी' },
        { img: '/images/Trophy.png', alt: 'आयकॉन ४', text: 'वेगवेगळ्या पातळ्यांवर १० पुरस्कार' },
      ],
    },
  };

  const t = text[currentLang] || text.en; // fallback to English

  const renderCard = (year, text) => (
    <div
      className={`year-card ${activeYear === year ? 'active' : 'inactive'}`}
      onClick={() => handleCardClick(year)}
    >
      <h3>{year}</h3>
      <p>{text}</p>
    </div>
  );

  return (
    <div className="history-section">
      <h2 className="history-title">{t.title}</h2>
      <div className="history-decorator"><img src="/images/6.png" alt="decorator" /></div>

      <div className="timeline">
        {Object.entries(t.years).map(([year, text]) => renderCard(year, text))}
      </div>

      <hr className="history-separator" />

      <div className="bottom-info">
        {t.infoBlocks.map(({ img, alt, text }, index) => (
          <div className="info-block" key={index}>
            <img src={img} alt={alt} />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundingHistory;
