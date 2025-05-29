import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import FoundingHistory from './components/FoundingHistory';
import './App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Institutes from './components/Institutes';

// Sample page components
const Home = ({ currentLang }) => <HeroSection currentLang={currentLang} />;

const About = ({ currentLang }) => (
  <div className="page">
    <AboutUs currentLang={currentLang} />
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

function App() {
  const [currentLang, setCurrentLang] = useState('mr');

  return (
    <div className="app-background">
      <Router>
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} />} />
          <Route path="/about" element={<FoundingHistory currentLang={currentLang} />} />
          <Route path="/institutions" element={<Institutes currentLang={currentLang} />} />
          <Route path="/news" element={<News currentLang={currentLang} />} />
          <Route path="/gallery" element={<Gallery currentLang={currentLang} />} />
          <Route path="/contact" element={<Contact currentLang={currentLang} />} />
          <Route path="/donate" element={<Donate currentLang={currentLang} />} />
        </Routes>
        <Footer currentLang={currentLang} />
      </Router>
    </div>
  );
}

export default App;
