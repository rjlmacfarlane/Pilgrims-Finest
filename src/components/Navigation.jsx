import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'

const Navigation = () => {
  const bgUrl = 'https://raw.githubusercontent.com/rjlmacfarlane/Pilgrims-Finest/master/src/images/index.png'
  const bgStyle = {
    backgroundImage: 'url(' + bgUrl + ')'
  }
  const [scrollState, setScrollState] = useState("top")
  
  useEffect(() => {
    let listener = null
    listener = document.addEventListener("scroll", e => {
      const scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  const bgColor = scrollState === "amir" ? 'bg-blood-red bg-navbg' : ''

  return (
    <header className="fixed z-50 w-full">
        <nav className={`${bgColor} flex w-full justify-around items-center  font-medula text-5xl py-12`}>
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