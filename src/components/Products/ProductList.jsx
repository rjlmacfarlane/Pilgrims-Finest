import React from 'react';
import useApplicationData from '../../hooks/useApplicationData';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { state } = useApplicationData();
  const products = state.productData.products;

  const renderedProducts = products
    ? products.map((product, key) => {
        return <ProductListItem product={product} key={key} />;
      })
    : '';

  return (
    <div className="md:grid grid-cols-3 gap-12 my-24 mx-auto">
      <h2 className="text-6xl col-span-3 flex justify-center">Our Products</h2>
      {renderedProducts}
    </div>
  );
};

export default ProductList;
