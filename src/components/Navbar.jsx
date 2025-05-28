import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ currentLang, setCurrentLang }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.classList.add('nav-visible');
    }
  }, []);

  const switchLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'mr' : 'en');
  };

  const links = [
    { path: '/', en: 'Home', mr: 'मुखपृष्ठ' },
    { path: '/about', en: 'About Us', mr: 'आमच्याबद्दल' },
    { path: '/institutions', en: 'Institutions', mr: 'संस्था' },
    { path: '/news', en: 'News & Events', mr: 'बातम्या आणि कार्यक्रम' },
    { path: '/gallery', en: 'Gallery', mr: 'गॅलरी' },
    { path: '/contact', en: 'Contact Us', mr: 'संपर्क करा' },
  ];

  return (
    <div className="navbar-container" ref={navRef} role="navigation" aria-label="Primary"> <br />
      <nav className="navbar">
        <ul className="nav-links">
          {links.map(({ path, en, mr }, idx) => (
            <li key={idx}>
              <Link to={path} tabIndex={0}>
                {currentLang === 'en' ? en : mr}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <button
            id="langButton"
            onClick={switchLanguage}
            aria-label={currentLang === 'en' ? 'Switch to Marathi' : 'Switch to English'}
            type="button"
          >
            <FaGlobe style={{ marginRight: '8px' }} size={20} />
            {currentLang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
