import React, { useEffect, useState } from 'react';
import NavigationLinks from './NavigationLinks';
import DropDownNavigationLinks from './DropDownNavigationLinks';
import NavigationLogo from './NavigationLogo';
import './Navigation'

const NavigationWithScrollHook = () => {
  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    let listener = null;
    listener = document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== 'amir') {
          setScrollState('amir');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  const bgColor = scrollState === 'amir' ? 'bg-blood-red bg-nav-bg' : '';

  return (
    
    <header className="fixed z-50 w-full">
      <nav
        className={`transition duration-500 ease-in-out ${bgColor} grid grid-cols-2`}
      >
      <div className="w-1/3"><NavigationLogo /></div>
      <div className="w-2/3 justify-around items-center font-medula text-3xl md:w-full lg:text-3xl py-1">
      <NavigationLinks />
      <DropDownNavigationLinks />
      </div>
    </nav>
    </header>
  );
};

export default NavigationWithScrollHook;