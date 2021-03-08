import React from 'react';
import logo from '../../images/logo.png';

const NavigationLogo = () => {

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="p-3 flex justify-center">
    <button onClick={() => toTop()}>
      <img
        className="cursor-pointer "
        src={logo}
        alt="Pilgrim's Finest Logo"
      ></img>
    </button>
  </div>
  );
};

export default NavigationLogo;