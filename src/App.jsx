import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs'; // ✅ Import the About Us component
import './App.css';

// Sample page components
const Home = ({ currentLang }) => <HeroSection currentLang={currentLang} />;

const About = ({ currentLang }) => (
  <div className="page">
    <AboutUs currentLang={currentLang} />
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
  const [currentLang, setCurrentLang] = useState('mr');

  return (
    <Router>
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <Routes>
        <Route path="/" element={<Home currentLang={currentLang} />} />
        <Route path="/about" element={<About currentLang={currentLang} />} /> {/* ✅ Pass currentLang */}
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
