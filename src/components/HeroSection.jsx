import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const HeroSection = ({ currentLang }) => {
  const [showText, setShowText] = useState(false);
  const imageRefs = useRef([]);
  const timeouts = useRef([]);

  useEffect(() => {
    const positions = ['top-left', 'bottom-left', 'top-right', 'bottom-right'];

    imageRefs.current.forEach((img, i) => {
      if (!img) return;

      const showTimeout = setTimeout(() => {
        img.classList.add('show');
        const moveTimeout = setTimeout(() => {
          img.classList.add('move');
          img.classList.add(positions[i]);
        }, 1000);
        timeouts.current.push(moveTimeout);
      }, i * 1000);
      timeouts.current.push(showTimeout);
    });

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, imageRefs.current.length * 1000);
    timeouts.current.push(textTimeout);

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const imageData = [
    {
      position: 'top-left',
      image: '/images/shahu-maharaj.png',
      alt: 'Rajrishi Shahu Maharaj',
      labelEn: 'Inspiration: Chhatrapati Rajarshi Shahu Maharaj',
      labelMr: 'प्रेरणास्थान: छत्रपती राजर्षी शाहू महाराज',
    },
    {
      position: 'bottom-left',
      image: '/images/3.png',
      alt: 'Vitthalrao Patil',
      labelEn: 'Shri. Vitthalrao Bhausahib Patil (Kakaji), President',
      labelMr: 'श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) अध्यक्ष',
    },
    {
      position: 'top-right',
      image: '/images/4.png',
      alt: 'Mallushree Patil Tribute 1',
      labelEn: 'Heartfelt Tribute to Late. Sou. Mallushree Vitthalrao Patil (Didi)',
      labelMr: 'भावपूर्ण श्रद्धांजली: सौ. मल्लूश्री विठ्ठलराव पाटील (दीदी)',
    },
    {
      position: 'bottom-right',
      image: '/images/bhaiyaa 1.png',
      alt: 'Mallushree Patil Tribute 2',
      labelEn: 'Heartfelt Tribute to Late. Sou. Mallushree Vitthalrao Patil (Didi)',
      labelMr: 'भावपूर्ण श्रद्धांजली: सौ. मल्लूश्री विठ्ठलराव पाटील (दीदी)',
    },
  ];

  return (
    <section className={`hero ${showText ? 'show-text' : ''}`}>
      {/* Corner Images */}
      {imageData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className={`corner-image ${item.position}`}
        >
          <img src={item.image} alt={item.alt} />
          <div className="label">
            {currentLang === 'en' ? item.labelEn : item.labelMr}
          </div>
        </div>
      ))}

      {/* Headings */}
      <div className="hero-headings">
        <h2>
          "{currentLang === 'en' ? 'yashavant ho, jayavant ho' : 'यशवंत हो, जयवंत हो'}"
        </h2>
        <h1>
          {currentLang === 'en'
            ? 'Rajarshi Shahu Shikshan Sanstha'
            : 'राजर्षी शाहू शिक्षण संस्था'}
        </h1>
        <h3>
          {currentLang === 'en'
            ? 'Inam Dhamani, Sangli'
            : 'इनाम धामणी, सांगली'}
        </h3>
      </div>

      {/* Info & Button */}
      <div className="hero-info">
        <p>
          {currentLang === 'en'
            ? 'Welcome to Rajarshi Shahu Shikshan Sanstha. Dedicated to quality education and social upliftment.'
            : 'राजर्षी शाहू शिक्षण संस्थेमध्ये आपले स्वागत आहे. गुणवत्ता आणि सामाजिक उन्नतीसाठी समर्पित.'}
        </p>
        <button className="explore">
          {currentLang === 'en' ? 'Explore Now' : 'आताच पहा'}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
