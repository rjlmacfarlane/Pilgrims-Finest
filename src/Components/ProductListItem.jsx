import React from 'react';

const ProductListItem = ({ product }) => {
  
  const bgImage = {
    backgroundImage: `url(${product.photo})`,
  };

  return (
    <div className="item-wrap">
      <div className="">
      <img src={bgImage} alt=""></img>

        <div
          className=""
          style={bgImage}
        ></div>
        <div className=""></div>
        <div className="">
          <div className="">
            {product.name}
          </div>
          <div className="">
            <img src={bgImage} alt=""></img>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
