import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../rajrishi-shahu-app/src/components/Navbar';
import HeroSection from '../../rajrishi-shahu-app/src/components/HeroSection';
import './index.css';

// Sample pages
const Home = ({ currentLang }) => <HeroSection currentLang={currentLang} />;
const About = () => <h1>About Page</h1>;
const Institutions = () => <h1>Institutions</h1>;
const News = () => <h1>News & Events</h1>;
const Gallery = () => <h1>Gallery</h1>;
const Contact = () => <h1>Contact</h1>;

function App() {
  const [lang, setLang] = useState('mr');
  const switchLanguage = () => setLang(lang === 'en' ? 'mr' : 'en');

  return (
    <Router>
      <Navbar currentLang={lang} switchLanguage={switchLanguage} />
      <Routes>
        <Route path="/" element={<Home currentLang={lang} />} />
        <Route path="/about" element={<About />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
