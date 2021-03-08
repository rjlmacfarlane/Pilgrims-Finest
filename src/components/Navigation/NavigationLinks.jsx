import React from 'react';
import logo from '../../images/logo.png';

const Navigation = () => {

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div>
      <div className="p-3 flex justify-center">
        <button onClick={() => toTop()}>
          <img
            className="cursor-pointer "
            src={logo}
            alt="Pilgrim's Finest Logo"
          ></img>
        </button>
      </div>
      <div className="p-3 flex justify-center">
        <span className="hover:text-yellow-500 cursor-pointer">Our Products</span>
      </div>
      <div className="p-3 flex justify-center curs">
        <span className="hover:text-yellow-500 cursor-pointer">About Us</span>
      </div>
      <div className="p-3 flex justify-center curs">
        <span className="hover:text-yellow-500 cursor-pointer">Contact Us</span>
      </div>
    </div>
  );
};

export default Navigation;
