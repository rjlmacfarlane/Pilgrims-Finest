import React from 'react';

const Navigation = () => {
  
  return (
    <div className="hidden md:flex justify-around col-span-3">
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
