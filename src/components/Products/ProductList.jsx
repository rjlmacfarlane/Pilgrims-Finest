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
    <div className="grid grid-cols-3 gap-12">
      <div className="products box col-span-3"></div>
      {renderedProducts}
    </div>
  );
};

export default ProductList;
