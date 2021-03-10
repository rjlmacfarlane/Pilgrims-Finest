import React, { Component } from 'react';

class Products extends Component {
  render() {

    if(this.props.data){
      var products = this.props.data.products.map(function(products){
        var projectImage = 'images/products/'+products.photo;
        return <div key={products.name} className="columns portfolio-item product-item">
           <div className="item-wrap">
            <a href="/" title={products.name}>
              <img alt={products.name} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{products.name}</h5>
                    <p>{products.description}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="products">
        <div className="">
          <div className="ten columns collapsed">
            <h1>Products</h1>
              <div id="products-wrapper" className="">
                  {products}
              </div>
          </div>
       </div>
     </section>
    );
  }
}

export default Products;
