import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Land from './pages/Land';

const Navbar = ({ currentLang, setCurrentLang }) => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.classList.add('nav-visible');
    }
  }, []);

  const switchLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'mr' : 'en');
    setMenuOpen(false); // close menu when switching language
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map(({ path, en, mr }, idx) => (
            <li key={idx} onClick={() => setMenuOpen(false)}>
              <Link to={path} tabIndex={0}>
                {currentLang === 'en' ? en : mr}
              </Link>
            </li>
          ))}
          <li>
            <button
              id="langButton"
              onClick={switchLanguage}
              aria-label={currentLang === 'en' ? 'Switch to Marathi' : 'Switch to English'}
              type="button"
            >
              {currentLang === 'en' ? 'मराठी' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
