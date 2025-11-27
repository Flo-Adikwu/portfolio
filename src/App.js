import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;