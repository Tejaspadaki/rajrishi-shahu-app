import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoundingHistory from './components/FoundingHistory';
import Events from './components/Events';
import EventsGallery from './components/Gallery'
import DirectorBoard from './components/DirectorBoard';
import './App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Institutes from './components/Institutes';
import bgImage from '/images/background.png';

// Route components
const Home = ({ currentLang }) => <HeroSection currentLang={currentLang} />;
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

// Component to wrap routes and check for background/footer conditions
const AppContent = ({ currentLang, setCurrentLang }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const appBackgroundStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className={!isHome ? 'app-background' : ''} style={!isHome ? appBackgroundStyle : {}}>
      {/* ✅ Correctly pass setCurrentLang */}
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <Routes>
        <Route path="/" element={<Home currentLang={currentLang} />} />
        <Route path="/about" element={<FoundingHistory currentLang={currentLang} />} />
        <Route path="/institutions" element={<Institutes currentLang={currentLang} />} />
        <Route path="/news" element={<News currentLang={currentLang} />} />
        <Route path="/gallery" element={<Gallery currentLang={currentLang} />} />
        <Route path="/contact" element={<Contact currentLang={currentLang} />} />
        <Route path="/donate" element={<Donate currentLang={currentLang} />} />
        <Route path="/events" element={<Events currentLang={currentLang} />} />
        <Route path="/gallery/:categoryId" element={<EventsGallery currentLang={currentLang} />} />
        <Route path="/director-board" element={<DirectorBoard currentLang={currentLang} />} />
      </Routes>

      {!isHome && <Footer currentLang={currentLang} />}
    </div>
  );
};

function App() {
  const [currentLang, setCurrentLang] = useState('mr');

  return (
    <Router>
      <AppContent currentLang={currentLang} setCurrentLang={setCurrentLang} />
    </Router>
  );
}

export default App;
