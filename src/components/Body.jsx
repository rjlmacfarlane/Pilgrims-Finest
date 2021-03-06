import React from 'react';
import header from '../images/home-header.png'

const Body = () => {
  return (
    <main className="bg-black">
      <div className="bg-fixed bg-contain bg-no-repeat h-half-screen bg-hero-image relative"></div>
      <div className="bg-black prose max-w-none text-cornsilk text-center my-8 mx-24">
        <div className="flex justify-center">
          <img src={header} alt="Born in Newfoundland, Raised in Nova Scotia"></img>
        </div>
        <p className="text-2xl">Since crafting our first handmade artisan bread in 2019, we've been dedicated to the principle of local businesses serving local communities. As a staple of every day life, we believe no compromises can be made in producing the highest quality breads. You'll see it in our handcrafted specialty and dessert breads, and you'll taste the attention we put to each and every loaf.</p>
      </div>
    </main>
  );
};

export default Body;