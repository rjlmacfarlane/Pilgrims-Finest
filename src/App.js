import React from 'react';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App text-cornsilk bg-eerie-black bg-body w-full">
      <Navigation />
      <Body />
      <Products />
      <AboutUs />
      <div className="contact box"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
