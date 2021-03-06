import React from 'react';

const ProductListItem = ({product}) => {

  return (
    <div className=" flex justify-center">

      <div className="my-1 px-1 w-3/4 lg:my-4 lg:px-4">
        <article className="overflow-hidden rounded-lg shadow hover:shadow-lg">

          <a href="/home">
            <img className=" h-auto w-full object-cover"  src={product.photo} alt={product.name}></img>
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
            {/* <Link to={`/product/${product.id}`} onClick={() => saveState(product)}> */}

              <p className="no-underline text-maximum-blue-green font-bold hover:opacity-70">
              {product.name}
              </p>
              {/* </Link> */}
            </h1>
          </header>

          <footer className="flex justify-between leading-5 p-2 md:p-4 h-40">
            <p className="">{product.description}</p>
          </footer>

        </article>
      </div>
    </div>
  );
};

export default ProductListItem;