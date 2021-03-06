import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import ourProducts from '../images/ourproducts.png'
import contactus from '../images/contactus.png'
import aboutus from '../images/aboutus.png'

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

  const bgColor = scrollState === "amir" ? 'bg-blood-red bg-nav' : ''

  return (
    <header className="fixed z-50 w-full">
        <nav className={`transition duration-500 ease-in-out  ${bgColor} flex w-full justify-around items-center  font-medula text-5xl py-8`}>
          <div>
            <img src={logo} alt="Pilgrim's Finest Logo"></img>
          </div>
          <div>
            <img src={ourProducts} alt="Our Products"></img>
          </div>
          <div>
            <img src={aboutus} alt="About Us"></img>
          </div>
          <div>
            <img src={contactus} alt="Contact Us"></img>
          </div>
        </nav>
    </header>
  );
};

export default Navigation;