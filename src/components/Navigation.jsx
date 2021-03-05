import React from 'react';
import logo from '../images/logo.png'
const Navigation = () => {
  return (
    <header className="">
      <nav className="bg-navbg bg-blood-red flex w-full justify-around items-center  font-medula text-5xl py-12 fixed">
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