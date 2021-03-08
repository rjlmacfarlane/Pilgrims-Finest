import React from 'react';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App text-cornsilk bg-eerie-black bg-body">
      <Navigation />
      <Body />
      <Products />
      <AboutUs />
      <div className="contact box"></div>
      <Contact />
    </div>
  );
}

export default App;
