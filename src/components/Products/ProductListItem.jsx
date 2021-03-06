import React from 'react';

const ProductListItem = ({product}) => {
  console.log("product in list item: ", product);
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow hover:shadow-lg">

        <a href="/home">
          <img className="block h-auto w-full max-h-44 object-cover"  src={product.image} alt="insert here text"></img>
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
  );
};

export default ProductListItem;