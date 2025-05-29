import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h1>राजर्षी शाहू शिक्षण संस्था,</h1>
          <p>इनाम धामणी, सांगली</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <p>Follow us on:</p>
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
            <p>Home</p>
            <p>About Us</p>
            <p>Institutions</p>
          </div>
          <div>
            <p>News & Events</p>
            <p>Gallery</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Trust Board Of Directors</p>
            <p>Donate</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        @ 2025 Rajarshi Shahu Shikshan Sanstha. All rights reserved.
      </div>
    </footer>
  );
}
