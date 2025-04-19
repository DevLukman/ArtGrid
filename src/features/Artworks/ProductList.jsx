/* eslint-disable react/prop-types */

// import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductList({ artworks, gridList }) {
  // const [searchParams] = useSearchParams();
  // const filterValue = searchParams.get("category") || "art";
  // let filterartWork;
  // if (filterValue === "art") filterartWork = artworks;
  // if (filterValue === "abstract")
  //   filterartWork = artworks.filter((art) => art.category === "abstract");
  // if (filterValue === "digitalart")
  //   filterartWork = artworks.filter((art) => art.category === "digitalart");
  // if (filterValue === "drawing")
  //   filterartWork = artworks.filter((art) => art.category === "drawing");
  // if (filterValue === "illustration")
  //   filterartWork = artworks.filter((art) => art.category === "illustration");
  // if (filterValue === "photography")
  //   filterartWork = artworks.filter((art) => art.category === "photography");
  // if (filterValue === "painting")
  //   filterartWork = artworks.filter((art) => art.category === "painting");
  // if (filterValue === "scultpure")
  //   filterartWork = artworks.filter((art) => art.category === "scultpure");
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
