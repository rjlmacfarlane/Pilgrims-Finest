import React from 'react';

const ProductListItem = ({product}) => {
  const bgImage = {
    backgroundImage: `url(${product.photo})`
  }
  return (
    <div className="flex justify-center prose">
      <div class="w-96 h-96 relative group">
        <div class="absolute inset-0 bg-cover bg-center z-0" style={bgImage}></div>
        <div class="absolute inset-0 bg-cover bg-center z-0 group-hover:bg-black group-hover:opacity-50"></div>
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-12 px-6 text-cornsilk font-semibold flex flex-col justify-center items-center">
          <div class="z-10 flex justify-center items-center text-center text-3xl">{product.name}</div>
          <div class="z-10 flex justify-center items-center">{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;