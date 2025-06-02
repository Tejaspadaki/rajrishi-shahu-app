import React from 'react';
import './Homepage.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


export default function HeroSection({ currentLang }) {
  const heroText = {
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
      secretary: 'Mr. Gaganraj Vitthalrao Patil (Maddy)\nSecretary',
    },
    mr: {
      quote: '|| यशवंत हो, जयवंत हो ||',
      title: 'राजर्षी शाहू शिक्षण संस्था,',
      subtitle: 'इनाम धामणी, सांगली',
      description: `राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली ही संस्था छत्रपती राजर्षी शाहू महाराज यांच्या प्रेरणेतून स्थापन करण्यात आली असून, ही संस्था ग्रामीण भागातील विद्यार्थी, शेतकरी, कामकऱ्यांचे आणि आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांसाठी गुणवत्तापूर्ण शिक्षण देण्याचे कार्य करीत आहे. संस्थेच्या माध्यमातून विविध शैक्षणिक क्षेत्रात उल्लेखनीय प्रगती करण्यात आली आहे. संस्थेचे अध्यक्ष मा. विठ्ठलराव भाऊसाहेब पाटील (काकाजी) यांच्या मार्गदर्शनाखाली आणि सचिव श्री. गगनराज पाटील यांच्या नेतृत्वाखाली संस्था यशस्वी वाटचाल करीत आहे.`,
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

  const aadarshText = {
    en: {
      title: 'Aadarsh Aai',
      description: `Lorem ipsum dolor sit amet consectetur. Risus ut scelerisque est imperdiet ornare sed quam vel. Sit viverra id at ornare vel fermentum donec. Mattis tellus nec pulvinar dictumst semper nunc mattis. Nibh rhoncus tincidunt duis tincidunt ultrices.`,
    },
    mr: {
      title: 'आदर्श आई',
      description: `लोरेम इप्सम डोलर सिट अमेट कॉन्सेक्टेचर. risus ut scelerisque est imperdiet ornare sed quam vel. ornare vel fermentum donec. mattis tellus nec pulvinar dictumst semper nunc mattis. nibh rhoncus tincidunt duis tincidunt ultrices.`,
    },
  };

  const contentT = heroText[currentLang] || heroText.en;
  const contactT = contactText[currentLang] || contactText.en;
  const a = aadarshText[currentLang] || aadarshText.en;
  const t = footerText[currentLang] || footerText.en;

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
          <img src="/images/6.png" alt="Our Vision Top" className="section-image top" />
          <h2 className="section-title">
            {currentLang === 'en' ? 'Our Vision' : 'आपली दृष्टीकोन'}
          </h2>
          <p className="section-text">
            {currentLang === 'en'
              ? "The vision of Rajarshi Shahu Shikshan Sanstha, Inam Dhamani, Sangli is to provide modern, ethical, and quality education to students from rural, poor, underprivileged, and economically weaker sections of society. The institution's objective is to bring about social transformation through education and to nurture students into empowered, cultured, and self-reliant citizens. The core principles of this vision include rural education, a drug-free society, value-based education, and holistic development. Believing that education is the only effective path to social progress, the institution continuously implements quality-driven and student-centric initiatives."
              : 'राजर्षी शाहू शिक्षण संस्था, इनाम धामणी, सांगली या संस्थेचा दृष्टिकोन म्हणजे ग्रामीण, गरीब, दलित आणि आर्थिकदृष्ट्या दुर्बल वर्गातील विद्यार्थ्यांना आधुनिक, नैतिक व गुणवत्तापूर्ण शिक्षण देणे...'}
          </p>
          <img src="/images/5.png" alt="Our Vision Bottom" className="section-image bottom" />
        </div>
        <hr className="section-separator" />

        {/* OUR MISSION */}
        <div className="section">
          <img src="/images/6.png" alt="Our Mission Top" className="section-image top" />
          <h2 className="section-title">
            {currentLang === 'en' ? 'Our Mission' : 'आपले ध्येय'}
          </h2>
          <p className="section-text">
            {currentLang === 'en'
              ? "The mission of Rajarshi Shahu Shikshan Sanstha is to bring underprivileged, poor, children of farmers affected by suicides, and economically distressed students from rural areas into the mainstream of education..."
              : 'राजर्षी शाहू शिक्षण संस्थेचे मिशन म्हणजे ग्रामीण भागातील गरजू, गरीब, आत्महत्याग्रस्त शेतकऱ्यांची मुले...'}
          </p>
          <img src="/images/5.png" alt="Our Mission Bottom" className="section-image bottom" />
        </div>
      </section>

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


      <section className="adoption-section">
      <div className="adoption-container">
        <div className="adoption-image" />
        <div className="adoption-content">
          <h1 className="adoption-title">Adoption of<br />Childrens</h1>
          <p className="adoption-description">
            Lorem ipsum dolor sit amet consectetur. Risus ut scelerisque est imperdiet ornare sed quam vel.
            Sit viverra id at ornare vel fermentum donec. Mattis tellus nec pulvinar dictumst semper nunc mattis.
            Nibh rhoncus tincidunt duis tincidunt ultrices.
          </p>
        </div>
      </div>
    </section>

      <section className="contact-page-1">
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

      <section className='footer-1'>
      <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h1>{t.title}</h1>
          <p>{t.location}</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <p>{t.follow}</p>
            <div className="icon-group">
              <div className="icon"><FaInstagram /></div>
              <div className="icon"><FaFacebookF /></div>
              <div className="icon"><FaLinkedinIn /></div>
              <div className="icon"><FaXTwitter /></div>
            </div>
          </div>
        </div>

        {/* Right Sections */}
        <div className="footer-right">
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

      {/* Bottom */}
      <div className="footer-bottom">
  {currentLang === 'mr'
    ? '© 2025 राजर्षी शाहू शिक्षण संस्था. सर्व हक्क राखीव.'
    : '© 2025 Rajarshi Shahu Shikshan Sanstha. All rights reserved.'}
</div>

    </footer>
      </section>
    </>
  );
}
