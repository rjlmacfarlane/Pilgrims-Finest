import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import './Navigation.css'

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

  const bgColor = scrollState === "amir" ? 'bg-blood-red bg-nav-bg' : ''
  const toTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <header className="fixed z-50 w-full">
        <nav className={`transition duration-500 ease-in-out  ${bgColor} grid grid-cols-4 w-full justify-around items-center font-medula text-5xl py-5`}>
          <div className="p-3 flex justify-center">

            <button onClick={() => toTop()}>
              <img className="cursor-pointer " src={logo} alt="Pilgrim's Finest Logo"></img>
            </button  >
            {/* <img src={logo} alt="Pilgrim's Finest Logo"></img> */}
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
        </nav>
    </header>
  );
};

export default Navigation;