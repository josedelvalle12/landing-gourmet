import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Menu />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default App;
