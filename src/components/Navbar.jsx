import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentLang, switchLanguage }) => {
  const links = [
    { path: '/', en: 'Home', mr: 'मुखपृष्ठ' },
    { path: '/about', en: 'About Us', mr: 'आमच्याबद्दल' },
    { path: '/institutions', en: 'Institutions', mr: 'संस्था' },
    { path: '/news', en: 'News & Events', mr: 'बातम्या आणि कार्यक्रम' },
    { path: '/gallery', en: 'Gallery', mr: 'गॅलरी' },
    { path: '/contact', en: 'Contact Us', mr: 'संपर्क करा' },
  ];

  return (
    <div className="bg-[#184056] w-full h-10">
      <nav className="flex justify-between items-center flex-wrap px-4 py-2 max-w-screen-xl mx-auto">
        <ul className="flex gap-8 flex-wrap pl-0 list-none">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className="text-[rgba(108,64,42,0.8)] font-medium hover:text-white transition-colors duration-200"
              >
                {currentLang === 'en' ? link.en : link.mr}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <button
            id="langButton"
            onClick={switchLanguage}
            className="flex items-center gap-2 px-3 py-1 border-2 border-[#502D18] rounded-md font-medium text-white hover:bg-[#502D18] transition-colors duration-200"
          >
            <img src="Translation.png" alt="icon" className="w-5 h-5" />
            {currentLang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
