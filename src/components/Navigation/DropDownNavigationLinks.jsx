import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DropDownNavigationLinks = () => {
  return (
    <div className="relative group md:hidden flex flex-col ml-4">
    <button className="flex items-center w-full py-4 mt-4 text-2xl font-bold text-left text-white uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-6 md:ml-4 focus:outline-none font-montserrat">
    <FontAwesomeIcon className="text-white fa-2x" icon={faBars} /> 
    </button>
    <div className="z-10 hidden group-hover:flex justify-center ml-3">
      <div className="pb-4 bg-transparent text-white text-xl flex flex-col justify-center">
        <a className="nav-a" href="/">
          Home
        </a>

        <a className="nav-a" href="/contact">
          Services
        </a>

        <a className="nav-a" href="/about">
          About
        </a>

        <a className="nav-a" href="/contact">
          Contact Us
        </a>

        </div>
    </div>
  </div> 
  );
};

export default DropDownNavigationLinks;