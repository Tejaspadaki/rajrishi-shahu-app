import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css'; // Your global styles

// Sample page components
const Home = ({ currentLang }) => <HeroSection currentLang={currentLang} />;

const About = () => (
  <div className="page">
    <h1>About Page</h1>
  </div>
);

const Institutions = () => (
  <div className="page">
    <h1>Institutions</h1>
  </div>
);

const News = () => (
  <div className="page">
    <h1>News & Events</h1>
  </div>
);

const Gallery = () => (
  <div className="page">
    <h1>Gallery</h1>
  </div>
);

const Contact = () => (
  <div className="page">
    <h1>Contact</h1>
  </div>
);

function App() {
  // State for current language: 'en' or 'mr'
  const [currentLang, setCurrentLang] = useState('mr');

  // Handler to toggle language between English and Marathi
  const switchLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === 'en' ? 'mr' : 'en'));
  };

  return (
    <Router>
      {/* Navbar receives currentLang and language toggle function */}
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />


      {/* Define routes with currentLang passed where needed */}
      <Routes>
        <Route path="/" element={<Home currentLang={currentLang} />} />
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
