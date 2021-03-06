import React from 'react';
import useApplicationData from "../../hooks/useApplicationData";
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { state } = useApplicationData();
  const products = state.productData.products

  const renderedProducts = products ? products.map((product, key) => {
    return (
      <ProductListItem product={product} />
    )
  }) : ""
  
  return (
    <div className='grid grid-cols-3'>
      {renderedProducts}
    </div>
  );
};

export default ProductList;