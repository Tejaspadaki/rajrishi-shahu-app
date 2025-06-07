import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Land from './pages/Land';
import { FaGlobe } from 'react-icons/fa';

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
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { path: '/', en: 'Home', mr: 'मुखपृष्ठ' },
    { path: '/about', en: 'About Us', mr: 'आमच्याबद्दल' },
    { path: '/institutions', en: 'Institutions', mr: 'संस्था' },
    { path: '/director-board', en: 'Director-Board', mr: 'संचालक मंडळ' },
    { path: '/events', en: 'Events', mr: 'संस्थेने राबवलेले उपक्रम' },
    { path: '/contact', en: 'Contact Us', mr: 'संपर्क करा' },
  ];

  return (
    <>
      <Land />
      <section>
        <div className="app-background">
          <nav className="navbar" ref={navRef}>
            <div className="nav-left">
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
                    <Link to={path}>
                      {currentLang === 'en' ? en : mr}
                    </Link>
                  </li>
                ))}

                {/* Mobile Lang Button */}
                <li className="lang-mobile-wrapper">
                  <button
                    className="lang-mobile"
                    onClick={switchLanguage}
                    type="button"
                    aria-label={currentLang === 'en' ? 'Switch to Marathi' : 'Switch to English'}
                  >
                    <img src="/images/Translation.png" alt="Translation" className="lang-img" />
                    <span>{currentLang === 'en' ? 'English' : 'मराठी'}</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Desktop Lang Button */}
            <div className="nav-right">
              <button
                id="langButton"
                onClick={switchLanguage}
                type="button"
                aria-label={currentLang === 'en' ? 'Switch to Marathi' : 'Switch to English'}
              >
                <img src="/images/Translation.png" alt="Translation" className="lang-img" />
                <span>{currentLang === 'en' ? 'English' : 'मराठी'}</span>
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
