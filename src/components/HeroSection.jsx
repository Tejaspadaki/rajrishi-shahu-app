import React from 'react';
import './Homepage.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function HeroSection({ currentLang, setCurrentLang }) {
  const heroText = {
    en: {
      quote: '|| Be Successful, Be Victorious ||',
      title: (
        <>
          Rajarshi Shahu <br /> Shikshan Sanstha,
        </>
      ),
      subtitle: 'Inam Dhamani, Sangli',
      description: `Rajarshi Shahu Shikshan Sanstha, Inam Dhamni, Sangli, inspired by Chhatrapati Rajarshi Shahu Maharaj, is dedicated to providing quality education to poor, Dalit, farmer, and economically weaker students in rural areas. The institution addresses the lack of high school facilities in remote regions, where the absence of education led to rising child labor and child marriage. To combat this, the Sanstha established schools in five villages along with a Polytechnic and an Industrial Training Institute (ITI). It also undertakes various social and educational initiatives such as de-addiction programs, moral education, gymnasiums, and student adoption schemes. The primary goal of the institution is to drive social transformation through education.`,
      inspiration: 'Inspiration: Chhatrapati Rajarshi Shahu Maharaj',
      tribute: 'Heartfelt Tribute: Late. Smt. Malushi Vitthalrao Patil (Didi)',
      president: 'Mr. Vitthalrao Bhausaheb Patil (Kakaji)\nPresident',
      secretary: 'Mr. Gaganraj Vitthalrao Patil (Maddy)\nSecretary',
    },
    mr: {
      quote: '|| यशवंत हो, जयवंत हो ||',
      title: 'राजर्षी शाहू शिक्षण संस्था,',
      subtitle: 'इनाम धामणी, सांगली',
      description: `राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ही संस्था छत्रपती राजर्षी शाहू महाराज यांच्या प्रेरणेतून स्थापन करण्यात आली असून, ही संस्था ग्रामीण भागातील गरीब, दलित, शेतकरी व आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांसाठी गुणवत्तापूर्ण शिक्षण उपलब्ध करून देण्यासाठी कार्यरत आहे. संस्था अशा भागात शिक्षण पोहोचवते जिथे हायस्कूलची सुविधा नव्हती आणि शिक्षणाविना मुलांमध्ये बालमजुरी व बालविवाह वाढत होते. याला आळा घालण्यासाठी संस्थेने पाच गावांमध्ये शाळा सुरू करून, तंत्रनिकेतन आणि औद्योगिक प्रशिक्षण संस्था स्थापन केली. याशिवाय संस्था व्यसनमुक्ती, नैतिक शिक्षण, व्यायामशाळा, आणि विद्यार्थीदत्तक योजना यासारख्या उपक्रमांद्वारे समाजाचे सामाजिक आणि शैक्षणिक उन्नतीचे कार्य करत आहे. शिक्षणाच्या माध्यमातून समाज परिवर्तन घडवणे हा संस्थेचा मुख्य उद्देश आहे`,
      inspiration: 'प्रेरणास्थान :\nछत्रपती राजर्षी शाहू महाराज',
      tribute: 'भावपूर्ण श्रद्धांजली\nवै. सौ. मालुषी विठ्ठलराव पाटील (दीदी)',
      president: 'श्री. विठ्ठलराव भाऊसाहेब पाटील (काकाजी)\nअध्यक्ष',
      secretary: 'श्री. गगनराज विठ्ठलराव पाटील (मॅड्या)\nसचिव.',
    },
  };

  const footerText = {
    en: {
      title: 'Rajarshi Shahu Shikshan Sanstha',
      location: 'Inam Dhamani, Sangli',
      follow: 'Follow us on:',
      links: {
        home: 'Home',
        about: 'About Us',
        institutions: 'Institutions',
        news: 'News & Events',
        gallery: 'Gallery',
        contact: 'Contact Us',
        donate: 'Donate',
        trust: 'Trust Info',
      },
    },
    mr: {
      title: 'राजर्षी शाहू शिक्षण संस्था',
      location: 'इनाम धामणी, सांगली',
      follow: 'आम्हाला फॉलो करा:',
      links: {
        home: 'मुख्यपृष्ठ',
        about: 'आमच्याबद्दल',
        institutions: 'संस्थाने',
        news: 'बातम्या आणि कार्यक्रम',
        gallery: 'गॅलरी',
        contact: 'संपर्क करा',
        donate: 'दान करा',
        trust: 'विश्वास',
      },
    },
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
    },
  };

  const content = {
    en: {
      title: "Adoption of\nChildrens",
      description: "Lorem ipsum dolor sit amet consectetur..."
    },
    mr: {
      title: "मुलांचे दत्तक घेणे",
      description: "लोरम इप्सम डोलर सिट अ‍ॅमेट कॉन्सेकटेटर..."
    }
  };

  const aadarshText = {
    en: {
      title: 'Aadarsh Aai',
      description: `Lorem ipsum dolor sit amet consectetur...`,
    },
    mr: {
      title: 'आदर्श आई',
      description: `लोरेम इप्सम डोलर सिट अमेट कॉन्सेक्टेचर...`,
    },
  };

  const contentT = heroText[currentLang] || heroText.en;
  const contactT = contactText[currentLang] || contactText.en;
  const a = aadarshText[currentLang] || aadarshText.en;
  const t = footerText[currentLang] || footerText.en;
  const adoptionContent = content[currentLang] || content.en;

  return (
    <><section>
      <div className="app-background-1">
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

        {/* OUR VISION / MISSION */}
        <section className="about-us-container">
          <div className="section">
            <img src="/images/6.png" alt="Our Vision Top" className="section-image top" />
            <h2 className="section-title">
              {currentLang === 'en' ? 'Our Vision' : 'आपली दृष्टीकोन'}
            </h2>
            <p className="section-text">
              {currentLang === 'en'
                ? "The vision of Rajarshi Shahu Shikshan Sanstha, Inam Dhamni, Sangli, is to provide modern, moral, and quality education to students from rural, poor, Dalit, and economically weaker sections of society. The institution aims to bring about social transformation through education and to nurture students into empowered, cultured, and self-reliant citizens. Its core principles include rural education, a de-addiction-driven society, moral value-based learning, and holistic development. Believing that education is the only effective path to social progress, the institution continuously implements quality and student-centric initiatives."
                : 'राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली या संस्थेचा दृष्टिकोन म्हणजे ग्रामीण, गरीब, दलित आणि आर्थिकदृष्ट्या दुर्बल वर्गातील विद्यार्थ्यांना आधुनिक, नैतिक व गुणवत्तापूर्ण शिक्षण देणे. संस्थेचे उद्दिष्ट म्हणजे शिक्षणाच्या माध्यमातून समाज परिवर्तन घडवणे आणि विद्यार्थ्यांना सशक्त, सुसंस्कृत आणि स्वावलंबी नागरिक म्हणून घडवणे. ग्रामीण शिक्षण, व्यसनमुक्त समाज, नैतिक मूल्यांचे शिक्षण आणि सर्वांगीण विकास ही या दृष्टिकोनाची मुख्य तत्त्वे आहेत. शिक्षण हा समाज उन्नतीचा एकमेव प्रभावी मार्ग आहे, ही संकल्पना बाळगून संस्था सतत गुणवत्तापूर्ण आणि विद्यार्थीकेंद्रित उपक्रम राबवत आहे.'}
            </p>
            <img src="/images/5.png" alt="Our Vision Bottom" className="section-image bottom" />
          </div>
          <hr className="section-separator" />

          <div className="section">
            <img src="/images/6.png" alt="Our Mission Top" className="section-image top" />
            <h2 className="section-title">
              {currentLang === 'en' ? 'Our Mission' : 'आपले ध्येय'}
            </h2>
            <p className="section-text">
              {currentLang === 'en'
                ? "The mission of Rajarshi Shahu Shikshan Sanstha is to bring underprivileged, poor, and economically distressed children—especially those from rural areas and families of farmers affected by suicide—into the mainstream of education, empowering them to become self-respecting and self-reliant individuals. Through technical education, industrial training, physical fitness, moral education, and teachings rooted in the Warkari tradition, the institution imparts not only academic knowledge but also core life values. Its goal is to inspire students towards a de-addiction mindset, fostering a positive outlook and a socially responsible perspective. This education focuses not just on academics but also on holistic personality development."
                : 'राजर्षी शाहू शिक्षण संस्थेचे मिशन म्हणजे ग्रामीण भागातील गरजू, गरीब, आत्महत्याग्रस्त शेतकऱ्यांची मुले आणि आर्थिकदृष्ट्या अडचणीत असलेल्या मुलांना शिक्षणाच्या प्रवाहात आणून त्यांना स्वाभिमानी व स्वावलंबी बनवणे. संस्था तंत्रनिकेतन, औद्योगिक प्रशिक्षण, शारीरिक व्यायाम, नैतिकता आणि वारकरी संप्रदायाच्या शिक्षणाच्या माध्यमातून विद्यार्थ्यांना केवळ शिक्षणच नव्हे तर जीवनातील मूल्यांचे बाळकडू देते. विद्यार्थ्यांमध्ये व्यसनमुक्तीची प्रेरणा निर्माण करून त्यांना सकारात्मक विचारसरणी आणि समाज उपयोगी दृष्टिकोन देणे हे संस्थेचे ध्येय आहे. हे शिक्षण केवळ ज्ञान देणारे नसून व्यक्तिमत्व विकासावर आधारित आहे'}
            </p>
            <img src="/images/5.png" alt="Our Mission Bottom" className="section-image bottom" />
          </div>
        </section>

        {/* AADARSH AAI */}
        <section className="aadarsh-container">
          <div className="aai-page">
            <h1 className="aai-title">{a.title}</h1>
            <div className="aai-cards">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aai-card"></div>
              ))}
            </div>
            <p className="aai-description">{a.description}</p>
          </div>
        </section>

        {/* ADOPTION SECTION (FIXED) */}
        <section className="adoption-section">
          <div className="adoption-container">
            <div className="adoption-image" />
            <div className="adoption-content">
              <h1 className="adoption-title">
                {adoptionContent.title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
              <p className="adoption-description">{adoptionContent.description}</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-page-1">
          <div className="contact-page">
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

            <div className="contact-right">
              <h2>{contactT.stayConnected}</h2>
              <div className="contact-details">
                {contactT.contactDetails.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
              <div className="map-box"></div>
              <a href="/donate">
                <button className="donate-btn">{contactT.donateBtn}</button>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className='footer-1'>
          <footer className="footer-2">
            <div className="footer-container">
              <div className="footer-1-left">
                <h1>{t.title}</h1>
                <p>{t.location}</p>
                <div className="social-1-icons">
                  <p>{t.follow}</p>
                  <div className="icon-1-group">
                    <div className="icon-1"><FaInstagram /></div>
                    <div className="icon-1"><FaFacebookF /></div>
                    <div className="icon-1"><FaLinkedinIn /></div>
                    <div className="icon-1"><FaXTwitter /></div>
                  </div>
                </div>
              </div>

              <div className="footer-1-right">
                <div>
                  <p>{t.links.home}</p>
                  <p>{t.links.about}</p>
                  <p>{t.links.institutions}</p>
                </div>
                <div>
                  <p>{t.links.news}</p>
                  <p>{t.links.gallery}</p>
                  <p>{t.links.contact}</p>
                </div>
                <div>
                  <p>{t.links.trust}</p>
                  <p>{t.links.donate}</p>
                </div>
              </div>
            </div>

            <div className="footer-1-bottom">
              {currentLang === 'mr'
                ? '© 2025 राजर्षी शाहू शिक्षण संस्था. सर्व हक्क राखीव.'
                : '© 2025 Rajarshi Shahu Shikshan Sanstha. All rights reserved.'}
            </div>
          </footer>
        </section>
      </div>
    </section></>
  );
}
