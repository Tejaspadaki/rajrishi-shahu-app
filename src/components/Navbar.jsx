import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Land from "./pages/Land";

const Navbar = ({ currentLang, setCurrentLang }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.classList.add('nav-visible');
    }
  }, []);

  const switchLanguage = () => {
    console.log('Language switched');
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
    <>
      <Land />
      <nav className="navbar" ref={navRef}>
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
            {currentLang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
