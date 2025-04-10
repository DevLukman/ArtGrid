/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard";

function ProductList({ artworks, gridList }) {
  return (
    <div
      className={`mt-[30px] grid w-full ${
        gridList ? "grid-cols-2" : "grid-cols-1"
      } gap-5 gap-y-8 ${gridList ? "md:grid-cols-4" : "md:grid-cols-2"}`}
    >
      {artworks.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
