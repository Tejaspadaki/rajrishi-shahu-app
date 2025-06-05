import React, { useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import heroText from './data/heroText';
import footerText from './data/footerText';
import contactText from './data/contactText';
import content from './data/content';
import aadarshText from './data/aadarshText';

export default function HeroSection({ currentLang, setCurrentLang }) {
  const contentT = heroText[currentLang] || heroText.en;
  const contactT = contactText[currentLang] || contactText.en;
  const a = aadarshText[currentLang] || aadarshText.en;
  const t = footerText[currentLang] || footerText.en;
  const adoptionContent = content[currentLang] || content.en;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-ffgj.onrender.com/api/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      console.error(err);
    }
  };
    return (
    <>
      <section>
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

                {/* Render quote with HTML tags */}
                <div
                  className="hero-quote"
                  dangerouslySetInnerHTML={{ __html: contentT.quote }}
                />
              </div>

              <div className="middle-section">
                <div className="content-left">
                  {/* Render title with HTML tags */}
                  <h1
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: contentT.title }}
                  />
                  <h2 className="hero-subtitle">{contentT.subtitle}</h2>
                  <br />
                  <br />
                  <p className="hero-description">{contentT.description}</p>
                </div>

                <div className="profile-block-kakaji">
                  <img src="/images/3.png" alt={contentT.president.split('\n')[0]} />
                  <div className="profile-caption">
                    {contentT.president.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="profile-block-bhaiyaa">
                  <img src="/images/bhaiyaa 1.png" alt={contentT.secretary.split('\n')[0]} />
                  <div className="profile-caption">
                    {contentT.secretary.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR VISION / MISSION */}
          <section className="about-us-container">
            <div className="section">
              <img src="/images/6.png" alt="Our Vision Top" className="section-image top" />
              <h2 className="section-title">
                {currentLang === 'en' ? 'Our Vision' : 'आमचा दृष्टिकोन'}
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
                {currentLang === 'en' ? 'Our Mission' : 'आमचे ध्येय'}
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

          {/* ADOPTION SECTION */}
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={contactT.namePlaceholder}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={contactT.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={contactT.mobilePlaceholder}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder={contactT.messagePlaceholder}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                {contactT.submitBtn}
              </button>
              {status.message && (
                <p className={status.type === 'success' ? 'success-msg' : 'error-msg'}>
                  {status.message}
                </p>
              )}
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
      </section>
    </>
  );
}
