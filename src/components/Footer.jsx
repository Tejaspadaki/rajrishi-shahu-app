import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import './footer.css';

const Footer = ({ currentLang }) => {
  const text = {
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
        trust: 'Trust Board Of Directors',
        donate: 'Donate',
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
        trust: 'विश्वास बोर्ड ऑफ डायरेक्टर्स',
        donate: 'दान करा',
      },
    }
  };

  const t = text[currentLang] || text.en;

  return (
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
  );
};

export default Footer;
