import React from 'react';
import './Institutes.css';

const Institutes = ({ currentLang }) => {
  const text = {
    en: {
      title: 'Our Institutes',
      institutes: [
        { name: 'Freedom Fighter Bhausaheb Krishna Patil Secondary School, Inam Dhamani', img: '/images/institute1.jpg' },
        { name: 'Late Chandrai Bhausaheb Patil Secondary School, Vudi', img: '/images/institute2.jpg' },
        { name: 'Paramhansa Yashwantbaba Maharaj Secondary School, Vamnoli', img: '/images/institute3.jpg' },
        { name: 'Sahakarmaharshi Vishnuanna Patil Secondary School, Sawli', img: '/images/institute4.jpg' },
        { name: 'Late Mohanrao Shinde Secondary School, Vijaynagar', img: '/images/institute5.jpg' },
        { name: 'Sambhaji Industrial Training Center, Inam Dhamani', img: '/images/institute6.jpg' },
        { name: 'Discipline Health Club, Vishrambag, Sangli', img: '/images/institute7.jpg' },
        { name: 'Freedom Fighter Bhausaheb Krishna Patil Secondary School, Inam Dhamani', img: '/images/institute8.jpg' },
      ]
    },
    mr: {
      title: 'आपली संस्थाने',
      institutes: [
        { name: 'स्वातंत्र्य सेनानी कै. भाऊसाहेब कृष्णा पाटील माध्यमिक विद्यालय, इनाम धामणी', img: '/images/institute1.jpg' },
        { name: 'कै. चंद्राई भाऊसाहेब पाटील माध्यमिक विद्यालय, वुडी', img: '/images/institute2.jpg' },
        { name: 'परमहंस यशवंतबाबा महाराज माध्यमिक विद्यालय, वामणोळी', img: '/images/institute3.jpg' },
        { name: 'सहकारमहर्षी कै. विष्णुआण्णा पाटील माध्यमिक विद्यालय, सावळी', img: '/images/institute4.jpg' },
        { name: 'स्व. मोहनराव शिंदे माध्यमिक विद्यालय, विजयनगर', img: '/images/institute5.jpg' },
        { name: 'संभाजी औद्योगिक प्रशिक्षण केंद्र, इनाम धामणी', img: '/images/institute6.jpg' },
        { name: 'डिजिटल लाईन हेल्थ क्लब, विश्रामबाग, सांगली', img: '/images/institute7.jpg' },
        { name: 'स्वातंत्र्य सेनानी कै. भाऊसाहेब कृष्णा पाटील माध्यमिक विद्यालय, इनाम धामणी', img: '/images/institute8.jpg' },
      ]
    }
  };

  const t = text[currentLang] || text.en;

  const handleClick = (name) => {
    alert(`You clicked on: ${name}`);
  };

  return (
    <div className="institutes-container">
      <h1 className="title">{t.title}</h1>
      <div className="institutes-grid">
        {t.institutes.map((inst, index) => (
          <div
            className="institute-card"
            key={index}
            onClick={() => handleClick(inst.name)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${inst.img})` }}
            />
            <div className="card-text">{inst.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutes;
