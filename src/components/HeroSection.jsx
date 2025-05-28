import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const HeroSection = ({ currentLang }) => {
  const [showText, setShowText] = useState(false);
  const imageRefs = useRef([]);

  useEffect(() => {
    const positions = ['top-left', 'bottom-left', 'top-right', 'bottom-right'];

    imageRefs.current.forEach((img, i) => {
      if (!img) return;

      setTimeout(() => {
        img.classList.add('opacity-100');         setTimeout(() => {
          img.classList.add('move');
          img.classList.add(positions[i]);
        }, 1000);
      }, i * 1000);
    });

    setTimeout(() => {
      setShowText(true);
    }, imageRefs.current.length * 1000);
  }, []);

  return (
    <section
      className={`relative h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden ${
        showText ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 ease-in`}
    >
      {[ 
        {
          position: 'top-left',
          image: 'images/shahu-maharaj.png',
          alt: 'Rajrishi Shahu Maharaj',
          labelEn: 'Inspiration: Chhatrapati Rajarshi Shahu Maharaj',
          labelMr: 'प्रेरणास्थान: छत्रपती राजर्षी शाहू महाराज',
        },
        {
          position: 'bottom-left',
          image: 'images/3.png',
          alt: 'images/Vitthalrao Patil',
          labelEn: 'Shri. Vitthalrao Bhausahib Patil (Kakaji), President',
          labelMr: 'श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) अध्यक्ष',
        },
        {
          position: 'top-right',
          image: 'images/4.png',
          alt: 'Mallu V Patil',
          labelEn: 'Heartfelt Tribute to Late. Sou. Mallushree Vitthalrao Patil (Didi)',
          labelMr: 'भावपूर्ण श्रद्धांजली: सौ. मल्लूश्री विठ्ठलराव पाटील (दीदी)',
        },
        {
          position: 'top-right',
          image: 'images/bhaiyaa 1.png',
          alt: 'Mallu V Patil',
          labelEn: 'Heartfelt Tribute to Late. Sou. Mallushree Vitthalrao Patil (Didi)',
          labelMr: 'भावपूर्ण श्रद्धांजली: सौ. मल्लूश्री विठ्ठलराव पाटील (दीदी)',
        },
      ].map((item, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className={`
            absolute w-[263px] h-[258px] left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2
            opacity-0 transition-all duration-1000 ease-in
            z-0
            ${item.position}
          `}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#103f49] text-white py-1 px-3 text-sm rounded w-[263px] text-center">
            {currentLang === 'en' ? item.labelEn : item.labelMr}
          </div>
        </div>
      ))}

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center text-[#3b2f2f] z-10">
        <h2 className="text-2xl font-serif mb-1">
          "{currentLang === 'en' ? 'yashavant ho, jayavant ho' : 'यशवंत हो, जयवंत हो'}"
        </h2>
        <h1 className="text-4xl font-serif mb-1">
          {currentLang === 'en'
            ? 'Rajarshi Shahu Shikshan Sanstha'
            : 'राजर्षी शाहू शिक्षण संस्था'}
        </h1>
        <h3 className="text-xl text-[#6c402a]/80 mt-1">
          {currentLang === 'en' ? 'Inam Dhamani, Sangli' : 'इनाम धामणी, सांगली'}
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
