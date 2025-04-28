// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import SoundGear from './components/SoundGear';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css'; // Import styles

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const soundGearRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pass refs and scroll function to Navbar and sections
  const sections = {
    about: aboutRef,
    soundGear: soundGearRef,
    gallery: galleryRef,
    contact: contactRef,
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} sections={sections} />
      <main>
        <About ref={aboutRef} />
        <SoundGear ref={soundGearRef} />
        <Gallery ref={galleryRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}

export default App;