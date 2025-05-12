const ActiveTwo = (
  <svg
    role="presentation"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity="0.2"
      d="M12 20L12 4"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V5.99976C20 4.89519 19.1046 3.99976 18 3.99976Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
// import Uploader from "../../data/Uploader";
const ActiveFour = (
  <svg
    role="presentation"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 20L12 4"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V5.99976C20 4.89519 19.1046 3.99976 18 3.99976Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";
import Filter from "./Filter";
import ProductList from "./ProductList";
import { useArtworks } from "./useArtworks";
import Pagination from "../../ui/Pagination";
function Products() {
  const [gridList, setGridList] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const { artworks, isLoading, count } = useArtworks();
  useEffect(
    function () {
      if (openFilter) {
        document.body.classList.add("overflow-hidden");
      }

      return () => document.body.classList.remove("overflow-hidden");
    },
    [openFilter],
  );
  if (isLoading) return <Loading />;

  return (
    <>
      {/* <Uploader /> */}
      <section className="w-full pb-16">
        <div className="app-container w-full pt-[100px]">
          <div className="flex w-full items-center justify-end gap-4">
            <button
              className="rounded-md bg-[#fafafa] px-2 py-1"
              onClick={() => setGridList(!gridList)}
            >
              {gridList ? ActiveFour : ActiveTwo}
            </button>
            <button
              className="rounded-xl border border-[#000] px-2 py-2"
              onClick={() => setOpenFilter((c) => !c)}
            >
              FILTER
            </button>
          </div>
          <ProductList artworks={artworks} gridList={gridList} />
        </div>
        <Pagination count={count} />
      </section>
      <AnimatePresence>
        {openFilter && <Filter setOpenFilter={setOpenFilter} />}
      </AnimatePresence>
    </>
  );
}

export default Products;
