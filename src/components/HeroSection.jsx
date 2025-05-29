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
      alt: 'Gaganraj Patil',
      labelEn: 'Shri. Gaganraj Vitthalrao Patil (Bhaiyya), Secretary',
      labelMr: 'श्री. गगनराज विठ्ठलराव पाटील (भैय्या) सचिव',
    },
  ];

  // Contact section text for EN and MR
  const contactText = {
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
      contactDetails: ['**********', '**********'], // Add Marathi contact details if needed
      donateBtn: 'दान करा',
    },
  };

  const t = contactText[currentLang] || contactText.en;

  return (
    <>
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
            {currentLang === 'en' ? 'Inam Dhamani, Sangli' : 'इनाम धामणी, सांगली'}
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

      <section className="about-us-container">
        {/* OUR VISION */}
        <div className="section">
          <img
            src="/images/6.png"
            alt="Our Vision Top"
            className="section-image top"
          />
          <h2 className="section-title">
            {currentLang === 'en' ? 'Our Vision' : 'आपली दृष्टीकोन'}
          </h2>
          <p className="section-text">
            {currentLang === 'en'
              ? "The vision of Rajarshi Shahu Shikshan Sanstha, Inam Dhamani, Sangli is to provide modern, ethical, and quality education to students from rural, poor, underprivileged, and economically weaker sections of society. The institution's objective is to bring about social transformation through education and to nurture students into empowered, cultured, and self-reliant citizens. The core principles of this vision include rural education, a drug-free society, value-based education, and holistic development. Believing that education is the only effective path to social progress, the institution continuously implements quality-driven and student-centric initiatives."
              : 'राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली या संस्थेचा दृष्टिकोन म्हणजे ग्रामीण, गरीब, दलित आणि आर्थिकदृष्ट्या दुर्बल वर्गातील विद्यार्थ्यांना आधुनिक, नैतिक व गुणवत्तापूर्ण शिक्षण देणे. संस्थेचे उद्दिष्ट म्हणजे शिक्षणाच्या माध्यमातून समाज परिवर्तन घडवणे आणि विद्यार्थ्यांना सशक्त, सुसंस्कृत आणि स्वावलंबी नागरिक म्हणून घडवणे. ग्रामीण शिक्षण, व्यसनमुक्त समाज, नैतिक मूल्यांचे शिक्षण आणि सर्वांगीण विकास ही या दृष्टिकोनाची मुख्य तत्त्वे आहेत. शिक्षण हा समाज उन्नतीचा एकमेव प्रभावी मार्ग आहे, ही संकल्पना बाळगून संस्था सतत गुणवत्तापूर्ण आणि विद्यार्थीकेंद्रित उपक्रम राबवत आहे..'}
          </p>
          <img
            src="/images/5.png"
            alt="Our Vision Bottom"
            className="section-image bottom"
          />
        </div>

        <hr className="section-separator" />

        {/* OUR MISSION */}
        <div className="section">
          <img
            src="/images/6.png"
            alt="Our Mission Top"
            className="section-image top"
          />
          <h2 className="section-title">
            {currentLang === 'en' ? 'Our Mission' : 'आपले ध्येय'}
          </h2>
          <p className="section-text">
            {currentLang === 'en'
              ? "The mission of Rajarshi Shahu Shikshan Sanstha is to bring underprivileged, poor, children of farmers affected by suicides, and economically distressed students from rural areas into the mainstream of education, and to help them become self-respecting and self-reliant individuals. Through polytechnic education, industrial training, physical education, ethics, and the teachings of the Warkari tradition, the institution imparts not only academic knowledge but also instills core life values. The goal of the institution is to inspire students towards a drug-free life, fostering positive thinking and a socially beneficial outlook. This education is not merely about gaining knowledge, but is focused on holistic personality development."
              : 'राजर्षी शाहू शिक्षण संस्थेचे मिशन म्हणजे ग्रामीण भागातील गरजू, गरीब, आत्महत्याग्रस्त शेतकऱ्यांची मुले आणि आर्थिकदृष्ट्या अडचणीत असलेल्या मुलांना शिक्षणाच्या प्रवाहात आणून त्यांना स्वाभिमानी व स्वावलंबी बनवणे. संस्था तंत्रनिकेतन, औद्योगिक प्रशिक्षण, शारीरिक व्यायाम, नैतिकता आणि वारकरी संप्रदायाच्या शिक्षणाच्या माध्यमातून विद्यार्थ्यांना केवळ शिक्षणच नव्हे तर जीवनातील मूल्यांचे बाळकडू देते. विद्यार्थ्यांमध्ये व्यसनमुक्तीची प्रेरणा निर्माण करून त्यांना सकारात्मक विचारसरणी आणि समाज उपयोगी दृष्टिकोन देणे हे संस्थेचे ध्येय आहे. हे शिक्षण केवळ ज्ञान देणारे नसून व्यक्तिमत्व विकासावर आधारित आहे'}
          </p>
          <img
            src="/images/5.png"
            alt="Our Mission Bottom"
            className="section-image bottom"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section>
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
              <button type="submit" className="submit-btn">
                {t.submitBtn}
              </button>
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
            <div className="map-box">{/* Insert map iframe or image here if needed */}</div>
            <a href="/donate">
              <button className="donate-btn">{t.donateBtn}</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
