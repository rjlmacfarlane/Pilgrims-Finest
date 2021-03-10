import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
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
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Products</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {renderedProducts}
            </div>
          </div>
      </div>
   </section>
    );
};

export default ProductList;
