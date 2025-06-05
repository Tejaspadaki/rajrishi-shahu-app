import React from 'react';
import './Institutes.css';

const Institutes = ({ currentLang }) => {
  const text = {
    en: {
      title: 'Our Institutes',
      institutes: [
        { name: 'Freedom Fighter Bhausaheb Krishna Patil Secondary School, Inam Dhamani', img: '/images/institute1.jpg' },
        { name: 'Late Chandrai Bhausaheb Patil Secondary School, Vudi', img: '/image/Institutes/chandrabai.png' },
        { name: 'Paramhansa Yashwantbaba Maharaj Secondary School, Vamnoli', img: '/image/Institutes/yashwant.png' },
        { name: 'Sahakarmaharshi Vishnuanna Patil Secondary School, Sawli', img: '/image/Institutes/vishnuanna.png' },
        { name: 'Late Mohanrao Shinde Secondary School, Vijaynagar', img: '/image/Institutes/gajanan.png' },
        { name: 'Sambhaji Industrial Training Center, Inam Dhamani', img: '/images/institute6.jpg' },
        { name: 'Discipline Health Club, Vishrambag, Sangli', img: '/images/institute7.jpg' }
      ]
    },
    mr: {
      title: 'आपली संस्थाने',
      institutes: [
        { name: 'स्वातंत्र्य सेनानी कै. भाऊसाहेब कृष्णा पाटील माध्यमिक विद्यालय, इनाम धामणी', img: '/images/institute1.jpg' },
        { name: 'श्रीमती चंद्राई भाऊसो पाटील माध्यमिक विद्यालय, वुडी', img: '/image/Institutes/chandrabai.png' },
        { name: 'परमहंस यशवंतबाबा महाराज माध्यमिक विद्यालय, वामणोळी', img: '/image/Institutes/yashwant.png' },
        { name: 'सहकारमहर्षी कै. विष्णुआण्णा पाटील माध्यमिक विद्यालय, सावळी', img: '/image/Institutes/vishnuanna.png' },
        { name: 'स्व. मोहनराव शिंदे माध्यमिक विद्यालय, विजयनगर', img: '/image/Institutes/gajanan.png' },
        { name: 'संभाजी औद्योगिक प्रशिक्षण केंद्र, इनाम धामणी', img: '/images/institute6.jpg' },
        { name: 'डिजिटल लाईन हेल्थ क्लब, विश्रामबाग, सांगली', img: '/images/institute7.jpg' }
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

      {/* First Row: 4 Cards */}
      <div className="institute-row">
        {t.institutes.slice(0, 4).map((inst, index) => (
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

      {/* Second Row: 3 Cards */}
      <div className="institute-row">
        {t.institutes.slice(4, 7).map((inst, index) => (
          <div
            className="institute-card"
            key={index + 4}
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
