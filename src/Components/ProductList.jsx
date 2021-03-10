import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { state } = useApplicationData();
  const products = state.productData.products;
  console.log(state);
  const renderedProducts = products
    ? products.map((product, key) => {
        return <ProductListItem product={product} key={key} />;
      })
    : '';

    return (
      <section id="products">

        <div className="">

          <div className="">

              <h1>Products</h1>

              <div id="product-wrapper" className="">
                  {renderedProducts}
              </div>
            </div>
        </div>
      </section>
    );
};

export default ProductList;
