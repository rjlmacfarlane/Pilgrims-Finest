import React from 'react';
import logo from '../images/logo.png'
const Navigation = () => {
  return (
    <header className="bg-navbg bg-blood-red">
      <nav className="flex w-full justify-around items-center text-white">
        <div>
          <img src={logo} alt="Pilgrim's Finest Logo"></img>
        </div>
        <div>
          Our Products
        </div>
        <div>
          About Us
        </div>
        <div>
          Contact Us
        </div>
      </nav>
    </header>
  );
};

export default Navigation;