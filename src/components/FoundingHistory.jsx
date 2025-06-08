import React, { useState } from 'react';
import CountUp from 'react-countup';
import './FoundingHistory.css';

// Helper to convert English digits to Marathi digits
const toMarathiDigits = (num) => {
  const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num.toString().split('').map(d => (/\d/.test(d) ? marathiDigits[d] : d)).join('');
};

const FoundingHistory = ({ currentLang }) => {
  const [activeYear, setActiveYear] = useState('2020');

  const handleCardClick = (year) => {
    setActiveYear(year);
  };

  const text = {
    en: {
      title: 'Founding History',
      years: {
        '2019': 'In 2019, we laid the foundation...',
        '2020': 'In 2020, we took a significant step forward...',
        '2021': 'In 2021, we expanded our presence...',
      },
      infoBlocks: [
        { img: '/images/School Building.png', alt: 'Icon 1', number: 6, suffix: '', label: 'Educational Institutions' },
        { img: '/images/Student Male.png', alt: 'Icon 2', number: 2000, suffix: '', label: 'Students' },
        { img: '/images/Teacher.png', alt: 'Icon 3', number: 35, suffix: '+', label: 'Qualified Staff Members' },
        { img: '/images/Trophy.png', alt: 'Icon 4', number: 10, suffix: '', label: 'Awards at Various Levels' },
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
        { img: '/images/School Building.png', alt: 'आयकॉन १', number: 6, suffix: '', label: 'शैक्षणिक संस्था' },
        { img: '/images/Student Male.png', alt: 'आयकॉन २', number: 2000, suffix: '', label: 'विद्यार्थी' },
        { img: '/images/Teacher.png', alt: 'आयकॉन ३', number: 35, suffix: '+', label: 'सुशिक्षित कर्मचारी' },
        { img: '/images/Trophy.png', alt: 'आयकॉन ४', number: 10, suffix: '', label: 'पुरस्कार (पातळ्यांवर)' },
      ],
    },
  };

  const t = text[currentLang] || text.en;

  return (
    <div className="history-section">
      <h2 className="history-title">{t.title}</h2>

      <div className="history-decorator">
        <img src="/images/6.png" alt="decorator" />
      </div>

      <div className="timeline">
        {Object.entries(t.years).map(([year, desc]) => (
          <div
            key={year}
            className={`year-card ${activeYear === year ? 'active' : 'inactive'}`}
            onClick={() => handleCardClick(year)}
          >
            <h3>{year}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <hr className="history-separator" />

      <div className="bottom-info">
        {t.infoBlocks.map(({ img, alt, number, suffix, label }, index) => (
          <div className="info-block" key={index}>
            <img src={img} alt={alt} />
            <div className="info-number">
              <CountUp
                end={number}
                duration={2}
                suffix={suffix}
                formattingFn={(val) =>
                  currentLang === 'mr' ? toMarathiDigits(Math.floor(val)) + suffix : val + suffix
                }
              />
            </div>
            <p className="info-label">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundingHistory;
