import React from 'react';
import ProductList from './ProductList';

const index = () => {

  return (
    <div className=" w-full">
      <div className="products box col-span-3"></div>
      <ProductList />
    </div>
  );
};

export default index;
