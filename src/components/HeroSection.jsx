import React from 'react';
import './Homepage.css';

export default function HeroSection({ currentLang }) {
  const text = {
    en: {
      quote: '|| Be Successful, Be Victorious ||',
      title: (
        <>
          Rajarshi Shahu <br /> Shikshan Sanstha,
        </>
      ),
      subtitle: 'Inam Dhamani, Sangli',
      description: `Rajarshi Shahu Shikshan Sanstha, Inam Dhamani, Sangli was established in the inspiration of Chhatrapati Rajarshi Shahu Maharaj. The institution works towards providing quality education to rural students, farmers, workers, and economically backward students. Under the guidance of President Mr. Vitthalrao Bhausaheb Patil (Kakaji) and the leadership of Secretary Mr. Gaganraj Patil, the institution is progressing successfully.`,
      inspiration: 'Inspiration: Chhatrapati Rajarshi Shahu Maharaj',
      tribute: 'Heartfelt Tribute: Late. Smt. Malushi Vitthalrao Patil (Didi)',
      president: 'Mr. Vitthalrao Bhausaheb Patil (Kakaji)\nPresident',
      secretary: 'Mr. Gaganraj Vitthalrao Patil (Maddy)\nSecretary'
    },
    mr: {
      quote: '|| यशवंत हो, जयवंत हो ||',
      title: 'राजर्षी शाहू शिक्षण संस्था,',
      subtitle: 'इनाम धामणी, सांगली',
      description: `राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ही संस्था छत्रपती राजर्षी शाहू महाराज यांच्या प्रेरणेतून स्थापन करण्यात आली असून, ही संस्था ग्रामीण भागातील विद्यार्थी, शेतकरी, कामकऱ्यांचे आणि आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांसाठी गुणवत्तापूर्ण शिक्षण देण्याचे कार्य करीत आहे. संस्थेच्या माध्यमातून विविध शैक्षणिक क्षेत्रात उल्लेखनीय प्रगती करण्यात आली आहे. संस्थेचे अध्यक्ष मा. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) यांच्या मार्गदर्शनाखाली आणि सचिव श्री. गगनराज पाटील यांच्या नेतृत्वाखाली संस्था यशस्वी वाटचाल करीत आहे.`,
      inspiration: 'प्रेरणास्थान :\nछत्रपती राजर्षी शाहू महाराज',
      tribute: 'भावपूर्ण श्रद्धांजली\nवै. सौ. मालुषी विठ्ठलराव पाटील (दीदी)',
      president: 'श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी)\nअध्यक्ष',
      secretary: 'श्री. गगनराज विठ्ठलराव पाटील (मॅड्या)\nसचिव.'
    }
  };

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
      contactDetails: ['1234567890', '9876543210'],
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
      contactDetails: ['१२३४५६७८९०', '९८७६५४३२१०'],
      donateBtn: 'दान करा',
    }
  };

  const aadarshText = {
    en: {
      heading: 'Aadarsh Aai',
      description: `Lorem ipsum dolor sit amet consectetur. Aenean in aliquet pulvinar urna nisi.`,
    },
    mr: {
      heading: 'आदर्श आई',
      description: `लोरम इप्सम डोलर सिट अमेट कॉन्सेक्टेचर.`,
    }
  };

  const contentT = text[currentLang] || text.en;
  const contactT = contactText[currentLang] || contactText.en;
  const a = aadarshText[currentLang] || aadarshText.en;

  return (
    <>
      <section>
        <div className="homepage">
          <div className="top-section">
            <div className="profile-section">
              <div className="profile-block">
                <img src="/images/shahu-maharaj.png" alt={contentT.inspiration} />
                <div className="profile-caption">{contentT.inspiration}</div>
              </div>

              <div className="profile-block">
                <img src="/images/4.png" alt={contentT.tribute} />
                <div className="profile-caption">{contentT.tribute}</div>
              </div>
            </div>
            <div className="hero-quote">{contentT.quote}</div>
          </div>

          <div className="middle-section">
            <div className="content-left">
              <h1 className="hero-title">{contentT.title}</h1>
              <h2 className="hero-subtitle">{contentT.subtitle}</h2>
              <br />
              <br />
              <p className="hero-description">{contentT.description}</p>
            </div>

            <div className="profile-block-kakaji">
              <img src="/images/3.png" alt={contentT.president} />
              <div className="profile-caption">{contentT.president}</div>
            </div>

            <div className="profile-block-bhaiyaa">
              <img src="/images/bhaiyaa 1.png" alt={contentT.secretary} />
              <div className="profile-caption">{contentT.secretary}</div>
            </div>
          </div>
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
              : 'राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली या संस्थेचा दृष्टिकोन म्हणजे ग्रामीण, गरीब, दलित आणि आर्थिकदृष्ट्या दुर्बल वर्गातील विद्यार्थ्यांना आधुनिक, नैतिक व गुणवत्तापूर्ण शिक्षण देणे. संस्थेचे उद्दिष्ट म्हणजे शिक्षणाच्या माध्यमातून समाज परिवर्तन घडवणे आणि विद्यार्थ्यांना सशक्त, सुसंस्कृत आणि स्वावलंबी नागरिक म्हणून घडवणे. ग्रामीण शिक्षण, व्यसनमुक्त समाज, नैतिक मूल्यांचे शिक्षण आणि सर्वांगीण विकास ही या दृष्टिकोनाची मुख्य तत्त्वे आहेत. शिक्षण हा समाज उन्नतीचा एकमेव प्रभावी मार्ग आहे, ही संकल्पना बाळगून संस्था सतत गुणवत्तापूर्ण आणि विद्यार्थीकेंद्रित उपक्रम राबवत आहे..'}
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
              : 'राजर्षी शाहू शिक्षण संस्थेचे मिशन म्हणजे ग्रामीण भागातील गरजू, गरीब, आत्महत्याग्रस्त शेतकऱ्यांची मुले आणि आर्थिकदृष्ट्या अडचणीत असलेल्या मुलांना शिक्षणाच्या प्रवाहात आणून त्यांना स्वाभिमानी व स्वावलंबी बनवणे. संस्था तंत्रनिकेतन, औद्योगिक प्रशिक्षण, शारीरिक व्यायाम, नैतिकता आणि वारकरी संप्रदायाच्या शिक्षणाच्या माध्यमातून विद्यार्थ्यांना केवळ शिक्षणच नव्हे तर जीवनातील मूल्यांचे बाळकडू देते. विद्यार्थ्यांमध्ये व्यसनमुक्तीची प्रेरणा निर्माण करून त्यांना सकारात्मक विचारसरणी आणि समाज उपयोगी दृष्टिकोन देणे हे संस्थेचे ध्येय आहे. हे शिक्षण केवळ ज्ञान देणारे नसून व्यक्तिमत्व विकासावर आधारित आहे'}
          </p>
          <img
            src="/images/5.png"
            alt="Our Mission Bottom"
            className="section-image bottom"
          />
        </div>
      </section>

      <section className="aadarsh-container">
        <div className="aadarsh-content">
          <div className="left">
            <div className="image-placeholder"></div>
            <h2>{a.heading}</h2>
            <p>{a.description}</p>
          </div>
          <div className="right">
            <div className="vertical-line">
              <div className="horizontal-line top"></div>
              <div className="horizontal-line upper-middle"></div>
              <div className="horizontal-line lower-middle"></div>
              <div className="horizontal-line bottom"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-page">
          {/* Left Section */}
          <div className="contact-left">
            <h1>{contactT.contactUs}</h1>
            <p className="info-text">{contactT.infoText}</p>
            <form className="contact-form">
              <input type="text" placeholder={contactT.namePlaceholder} />
              <input type="email" placeholder={contactT.emailPlaceholder} />
              <input type="tel" placeholder={contactT.mobilePlaceholder} />
              <textarea placeholder={contactT.messagePlaceholder}></textarea>
              <button type="submit" className="submit-btn">{contactT.submitBtn}</button>
            </form>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <h2>{contactT.stayConnected}</h2>
            <div className="contact-details">
              {contactT.contactDetails.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
            <div className="map-box">{/* Insert map here if needed */}</div>
            <a href="/donate">
              <button className="donate-btn">{contactT.donateBtn}</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
