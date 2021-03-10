import React from 'react';

const ProductListItem = ({ product }) => {
  
  const bgImage = {
    backgroundImage: `url(${product.photo})`,
  };

  return (
    <div className="item-wrap">
      <div className="w-96 h-96 flex relative group">
      <img src={bgImage} alt=""></img>

        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={bgImage}
        ></div>
        <div className="absolute inset-0 bg-cover bg-center z-0 h-84 group-hover:bg-black group-hover:opacity-50"></div>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-12 px-6 text-cornsilk font-semibold flex flex-col justify-center items-center">
          <div className="z-10 flex justify-center items-center text-center text-3xl">
            {product.name}
          </div>
          <div className="z-10 flex justify-center items-center">
            <img src={bgImage} alt=""></img>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
