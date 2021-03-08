import React from 'react';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Products from './components/Products';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App text-cornsilk bg-eerie-black bg-body">
      <Navigation />
      <Body />
      <Products />
      <AboutUs />
    </div>
  );
}

export default App;
